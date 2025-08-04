// components/VisionMissionSection.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { VisionStatement } from "./VisionStatement";
import { MissionGoals } from "./MissionGoals";

interface VisionMissionSectionProps {
  vision?: {
    title: string;
    statement: string;
    subtitle?: string;
  };
  mission?: {
    title: string;
    subtitle: string;
    goals: {
      icon: string;
      title: string;
      description: string;
      metric?: string;
    }[];
  };
}

export const VisionMissionSection: React.FC<VisionMissionSectionProps> = ({
  vision = {
    title: "The Vision",
    subtitle: "Transforming Education Through Visionary Leadership",
    statement:
      "I envision an educational ecosystem where every learner discovers their unique potential through personalized, innovative, and transformative experiences. My commitment is to bridge the gap between traditional pedagogy and future-ready learning, creating environments where curiosity thrives, critical thinking flourishes, and every individual becomes an agent of positive change in our interconnected world.",
  },
  mission = {
    title: "The Mission",
    subtitle:
      "Driving Educational Excellence Through Strategic Leadership & Innovation",
    goals: [
      {
        icon: "🎯",
        title: "Strategic Educational Leadership",
        description:
          "Spearheading transformational change in educational institutions through data-driven decision making and innovative policy development.",
        metric: "50+ Institutions Transformed",
      },
      {
        icon: "🌟",
        title: "Excellence in Pedagogy",
        description:
          "Advancing cutting-edge teaching methodologies that integrate technology, personalized learning, and holistic student development.",
        metric: "40% Improvement in Outcomes",
      },
      {
        icon: "🤝",
        title: "Collaborative Innovation",
        description:
          "Building strategic partnerships with educators, researchers, and technology leaders to pioneer the future of education.",
        metric: "25+ Strategic Partnerships",
      },
      {
        icon: "📈",
        title: "Sustainable Impact",
        description:
          "Creating lasting educational reforms that ensure long-term positive outcomes for students, educators, and communities.",
        metric: "25,000+ Lives Impacted",
      },
      {
        icon: "🔬",
        title: "Research & Development",
        description:
          "Conducting groundbreaking research in educational psychology, learning analytics, and institutional effectiveness.",
        metric: "15+ Published Studies",
      },
      {
        icon: "🌍",
        title: "Global Educational Advocacy",
        description:
          "Championing educational equity and access on international platforms, influencing policy at the highest levels.",
        metric: "Global Recognition",
      },
    ],
  },
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
    >
      {/* Advanced Background Elements */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000" />
      </motion.div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6"
      >
        {/* Premium Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block p-4 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 mb-8"
          >
            <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Vision & Mission
            </h2>
          </motion.div>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-6"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Driving transformational change in education through strategic
            leadership, innovation, and unwavering commitment to excellence
          </motion.p>
        </motion.div>

        {/* Vision Statement */}
        <VisionStatement {...vision} />

        {/* Mission Goals */}
        <MissionGoals {...mission} />
      </motion.div>
    </section>
  );
};
