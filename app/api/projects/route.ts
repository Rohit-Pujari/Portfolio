import { NextResponse } from "next/server";
import { getGitHubProjects } from "@/lib/github";

export const revalidate = 3600;

export async function GET() {
  try {
    const projects = await getGitHubProjects("Rohit-Pujari");
    return NextResponse.json({ projects });
  } catch {
    return NextResponse.json(
      { projects: [], error: "Unable to load GitHub projects right now." },
      { status: 500 }
    );
  }
}
