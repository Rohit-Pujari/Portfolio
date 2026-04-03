import Hero from "@/components/Hero";
import Tools from "@/components/Tools";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import { getGitHubProjects, type Project } from "@/lib/github";

export default async function Home() {
  let projects: Project[] = [];

  try {
    projects = await getGitHubProjects("Rohit-Pujari");
  } catch {
    projects = [];
  }

  return (
    <main className="relative z-10 flex min-h-screen flex-col items-center gap-5 px-4 pb-10 pt-2 sm:gap-6 sm:px-6 sm:pb-14">
      <Hero />
      <Tools />
      <Work projects={projects} />
      <Contact />
    </main>
  );
}
