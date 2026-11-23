import { NextResponse } from "next/server";
import { siteConfig } from "@/data/siteConfig";

export async function GET() {
  return NextResponse.json({
    name: siteConfig.name,
    preferredName: siteConfig.preferredName,
    handle: siteConfig.handle,
    title: siteConfig.title,
    location: siteConfig.location,
    languages: siteConfig.languages,
    about: siteConfig.about,
    fiverrSkills: siteConfig.fiverrSkills,
    experience: siteConfig.experience,
    projects: siteConfig.projects,
    education: siteConfig.education,
    certifications: siteConfig.certifications,
    services: siteConfig.services,
    contact: siteConfig.contact,
  });
}
