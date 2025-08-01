"use client";
 
import Head from "next/head";
import { Hero } from "./ui/home/hero";
import { AboutSection } from "./ui/home/about";
import { VisionMissionSection } from "./ui/home/vission";
import { ProjectsInitiativesSection } from "./ui/home/projects";
 
 

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
  
  <VisionMissionSection/>
<ProjectsInitiativesSection/>
      {/* Call to Action Section */}
    </>
  );
}
