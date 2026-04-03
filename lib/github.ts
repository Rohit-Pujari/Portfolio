const GITHUB_API_BASE = "https://api.github.com";
const README_MAX_LENGTH = 220;

export interface Project {
  id: number;
  name: string;
  title: string;
  url: string;
  homepage: string | null;
  description: string;
  updatedAt: string;
  language: string | null;
  stars: number;
  tags: string[];
}

interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  homepage: string | null;
  description: string | null;
  updated_at: string;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  archived: boolean;
  topics?: string[];
  owner: {
    login: string;
  };
}

interface GitHubReadme {
  content?: string;
  encoding?: string;
}

function toTitleCase(value: string) {
  return value
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (match) => match.toUpperCase());
}

function stripMarkdown(markdown: string) {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^>\s?/gm, "")
    .replace(/^\s*[-*+]\s+/gm, "")
    .replace(/^\s*\d+\.\s+/gm, "")
    .replace(/\|/g, " ")
    .replace(/[*_~]/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\r/g, "")
    .replace(/\n{2,}/g, "\n\n")
    .replace(/[ \t]+/g, " ")
    .trim();
}

function summarizeReadme(markdown: string) {
  const plainText = stripMarkdown(markdown);
  const paragraphs = plainText
    .split("\n\n")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
  const summary = paragraphs.find((paragraph) => paragraph.length > 40) ?? plainText;

  if (!summary) {
    return null;
  }

  return summary.length > README_MAX_LENGTH
    ? `${summary.slice(0, README_MAX_LENGTH).trimEnd()}...`
    : summary;
}

async function githubFetch<T>(path: string) {
  const response = await fetch(`${GITHUB_API_BASE}${path}`, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "rohit-portfolio",
    },
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`GitHub request failed for ${path}: ${response.status}`);
  }

  return (await response.json()) as T;
}

async function getReadmeDescription(owner: string, repo: string) {
  try {
    const readme = await githubFetch<GitHubReadme>(`/repos/${owner}/${repo}/readme`);
    if (readme.encoding !== "base64" || !readme.content) {
      return null;
    }

    const markdown = Buffer.from(readme.content, "base64").toString("utf8");
    return summarizeReadme(markdown);
  } catch {
    return null;
  }
}

export async function getGitHubProjects(username: string): Promise<Project[]> {
  const repos = await githubFetch<GitHubRepo[]>(
    `/users/${username}/repos?sort=updated&direction=desc&per_page=100`
  );

  const filteredRepos = repos
    .filter(
      (repo) =>
        repo.owner.login.toLowerCase() === username.toLowerCase() &&
        !repo.fork &&
        !repo.archived
    )
    .sort(
      (a, b) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    )
    .slice(0, 8);

  const descriptions = await Promise.all(
    filteredRepos.map((repo) => getReadmeDescription(username, repo.name))
  );

  return filteredRepos.map((repo, index) => ({
    id: repo.id,
    name: repo.name,
    title: toTitleCase(repo.name),
    url: repo.html_url,
    homepage: repo.homepage,
    description:
      descriptions[index] ??
      repo.description ??
      "Project details are available in the repository.",
    updatedAt: repo.updated_at,
    language: repo.language,
    stars: repo.stargazers_count,
    tags: [repo.language, ...(repo.topics ?? [])].filter(Boolean).slice(0, 4) as string[],
  }));
}
