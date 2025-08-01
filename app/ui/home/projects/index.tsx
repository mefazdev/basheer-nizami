// components/ProjectsInitiativesSection.tsx
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
// import { ImpactMetrics } from './ImpactMetrics';
import { ProjectCard } from './ProjectCard';
 

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  year: string;
  status: 'completed' | 'ongoing' | 'upcoming';
  impact: {
    metric: string;
    value: string;
  }[];
  technologies?: string[];
  outcomes: string[];
}

interface ProjectsInitiativesSectionProps {
  projects?: Project[];
  impactMetrics?: {
    label: string;
    value: string;
    icon: string;
  }[];
}

export const ProjectsInitiativesSection: React.FC<ProjectsInitiativesSectionProps> = ({
  projects = [
    {
      id: 'stem-academy',
      title: 'STEM Excellence Academy',
      category: 'Educational Program',
      description: 'Pioneered a comprehensive STEM education program that integrates cutting-edge technology with hands-on learning experiences, preparing students for 21st-century careers.',
      image: '/images/edu.jpg',
      year: '2019',
      status: 'ongoing',
      impact: [
        { metric: 'Students Enrolled', value: '2,500+' },
        { metric: 'Success Rate', value: '94%' },
        { metric: 'University Placements', value: '98%' }
      ],
      technologies: ['AI Integration', 'Virtual Labs', 'Collaborative Platforms'],
      outcomes: [
        'Increased STEM enrollment by 300%',
        'Partnered with 15+ tech companies',
        'National recognition for innovation',
        'Featured in Education Week'
      ]
    },
    {
      id: 'digital-equity',
      title: 'Digital Equity Initiative',
      category: 'Community Impact',
      description: 'Launched a district-wide initiative to bridge the digital divide, providing technology access and digital literacy training to underserved communities.',
      image: '/images/edu.jpg',
      year: '2020',
      status: 'completed',
      impact: [
        { metric: 'Devices Distributed', value: '5,000+' },
        { metric: 'Families Served', value: '12,000+' },
        { metric: 'Training Hours', value: '25,000+' }
      ],
      technologies: ['Device Management', 'Remote Learning', 'Family Engagement'],
      outcomes: [
        'Eliminated homework gap for 95% of students',
        'Improved parent engagement by 250%',
        'Secured $2.3M in funding',
        'Model adopted by 20+ districts'
      ]
    },
    {
      id: 'teacher-innovation',
      title: 'Educator Innovation Lab',
      category: 'Professional Development',
      description: 'Established a cutting-edge professional development center where educators collaborate, experiment with new pedagogies, and develop innovative teaching solutions.',
      image: '/images/edu.jpg',
      year: '2021',
      status: 'ongoing',
      impact: [
        { metric: 'Teachers Trained', value: '800+' },
        { metric: 'Innovation Projects', value: '150+' },
        { metric: 'Student Impact', value: '15,000+' }
      ],
      technologies: ['VR/AR Learning', 'Data Analytics', 'Collaborative Tools'],
      outcomes: [
        'Teacher retention increased by 35%',
        'Student engagement up 60%',
        'Published 25+ research papers',
        'International speaking engagements'
      ]
    },
    {
      id: 'global-partnerships',
      title: 'Global Education Alliance',
      category: 'International Initiative',
      description: 'Forged strategic partnerships with educational institutions worldwide to facilitate student exchanges, collaborative research, and global perspective integration.',
      image: '/images/edu.jpg',
      year: '2022',
      status: 'ongoing',
      impact: [
        { metric: 'Partner Schools', value: '45+' },
        { metric: 'Countries', value: '12' },
        { metric: 'Exchange Students', value: '500+' }
      ],
      technologies: ['Virtual Exchange', 'Translation Tools', 'Cultural Platforms'],
      outcomes: [
        'Increased global competency scores by 80%',
        'Established sister school relationships',
        'UNESCO partnership recognition',
        'Student leadership opportunities'
      ]
    },
    {
      id: 'sustainability-program',
      title: 'Green Schools Initiative',
      category: 'Environmental Innovation',
      description: 'Developed a comprehensive sustainability program that transforms schools into environmental learning laboratories while reducing carbon footprint.',
         image: '/images/edu.jpg',
      year: '2023',
      status: 'ongoing',
      impact: [
        { metric: 'Schools Certified', value: '25+' },
        { metric: 'CO2 Reduction', value: '40%' },
        { metric: 'Cost Savings', value: '$500K+' }
      ],
      technologies: ['Solar Integration', 'Smart Monitoring', 'Waste Analytics'],
      outcomes: [
        'Achieved carbon neutrality in 10 schools',
        'Student-led environmental projects',
        'EPA recognition award',
        'Community partnership expansion'
      ]
    },
    {
      id: 'ai-learning',
      title: 'AI-Powered Learning Platform',
      category: 'Technology Innovation',
      description: 'Pioneered the development of an AI-driven personalized learning platform that adapts to individual student needs and optimizes learning outcomes.',
      image: '/images/edu.jpg',
      year: '2024',
      status: 'upcoming',
      impact: [
        { metric: 'Beta Users', value: '1,000+' },
        { metric: 'Learning Efficiency', value: '+65%' },
        { metric: 'Investment Secured', value: '$1.2M' }
      ],
      technologies: ['Machine Learning', 'Natural Language Processing', 'Adaptive Assessment'],
      outcomes: [
        'Personalized learning paths for every student',
        'Real-time progress monitoring',
        'Patent applications filed',
        'Tech industry partnerships'
      ]
    }
  ],
  impactMetrics = [
    { label: 'Students Impacted', value: '50,000+', icon: '🎓' },
    { label: 'Programs Launched', value: '15+', icon: '🚀' },
    { label: 'Funding Secured', value: '$8.5M', icon: '💰' },
    { label: 'Awards Received', value: '25+', icon: '🏆' },
    { label: 'Research Publications', value: '40+', icon: '📚' },
    { label: 'Global Partnerships', value: '60+', icon: '🌍' }
  ]
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section 
      ref={containerRef}
      className="relative py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-30"
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <span className="bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent text-lg font-semibold tracking-wider uppercase">
              Portfolio of Impact
            </span>
          </motion.div>
          
          <h2 className="text-5xl  font-bold text-gray-900 mb-6">
            Key Projects & 
            <span className="block bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent">
              Initiatives
            </span>
          </h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "8rem" }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"
          />
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Transforming education through innovative programs, strategic initiatives, and impactful solutions that create lasting change in communities worldwide
          </p>
        </motion.div>

        {/* Impact Metrics */}
        {/* <ImpactMetrics metrics={impactMetrics} /> */}

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
 
      </div>
    </section>
  );
};
