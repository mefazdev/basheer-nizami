"use client";

import Head from "next/head";
import { Hero } from "./ui/home/hero";
import { AboutSection } from "./ui/home/about";
import { VisionMissionSection } from "./ui/home/vission";
import { ProjectsInitiativesSection } from "./ui/home/projects";
import { NewsHighlightsSection } from "./ui/home/news-higlight";
import { MediaSpeechesSection } from "./ui/home/media";
import { PublicationsSection } from "./ui/home/publications";
import { GallerySection } from "./ui/home/gallery";
import { Footer } from "./ui/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Basheer Ahmed Nizami | Educator, Researcher, and Thought Leader
        </title>
        <meta
          name="description"
          content="Official website of Dr. John Doe featuring publications, speeches, articles, and educational resources"
        />
      </Head>

      {/* Hero Section */}
      <Hero />

      {/* About */}
      <AboutSection />

      <VisionMissionSection />
      <ProjectsInitiativesSection />

      <MediaSpeechesSection />
      <NewsHighlightsSection />
      <PublicationsSection />
      <GallerySection />

      <Footer />
      {/* Call to Action Section */}
    </>
  );
}
