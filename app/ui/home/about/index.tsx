"use client";

import { motion } from "framer-motion";
// import { Biography } from './about/Biography';

import { Biography } from "./Biography";
import { Portrait } from "./Portrait";
 

interface AboutSectionProps {
  biography?: {
    title: string;
    content: string[];
  };
  portrait?: {
    image: string;
    alt: string;
  };
  milestones?: {
    year: string;
    title: string;
    description: string;
    category: "education" | "leadership" | "award" | "achievement";
  }[];
  values?: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  biography = {
    title: "A Visionary Leader in Education",
    content: [
      "With over two decades of dedicated service in the field of education, our leader has transformed countless lives through innovative teaching methodologies and progressive leadership approaches.",
      "Their journey began as a passionate educator, gradually evolving into a recognized authority on educational reform and institutional development. Through unwavering commitment to excellence, they have established new benchmarks in educational leadership.",
      "Today, they continue to inspire educators worldwide, fostering environments where both students and teachers can thrive and reach their full potential.",
    ],
  },
  portrait = {
    image: "/images/leader-portrait.jpg",
    alt: "Educational Leader Portrait",
  },
  // milestones = [
  //   {
  //     year: "2003",
  //     title: "Started Teaching Career",
  //     description:
  //       "Began as a mathematics teacher at Lincoln High School, introducing innovative problem-solving techniques.",
  //     category: "education",
  //   },
  //   {
  //     year: "2008",
  //     title: "Curriculum Development Leadership",
  //     description:
  //       "Led the development of integrated STEM curriculum adopted by 15+ schools in the district.",
  //     category: "leadership",
  //   },
  //   {
  //     year: "2012",
  //     title: "Principal Appointment",
  //     description:
  //       "Appointed as Principal of Metropolitan Academy, turning around a struggling institution.",
  //     category: "leadership",
  //   },
  //   {
  //     year: "2016",
  //     title: "Education Excellence Award",
  //     description:
  //       "Received the National Education Excellence Award for outstanding contributions to student achievement.",
  //     category: "award",
  //   },
  //   {
  //     year: "2019",
  //     title: "District Superintendent",
  //     description:
  //       "Promoted to District Superintendent, overseeing 50+ schools and 25,000+ students.",
  //     category: "leadership",
  //   },
  //   {
  //     year: "2022",
  //     title: "International Recognition",
  //     description:
  //       "Featured as one of the 'Top 100 Global Education Leaders' by Education World Magazine.",
  //     category: "achievement",
  //   },
  // ],
  // values = [
  //   {
  //     title: "Excellence in Education",
  //     description:
  //       "Commitment to providing the highest quality education that prepares students for future success.",
  //     icon: "🎓",
  //   },
  //   {
  //     title: "Inclusive Leadership",
  //     description:
  //       "Creating environments where every voice is heard and every individual can contribute meaningfully.",
  //     icon: "🤝",
  //   },
  //   {
  //     title: "Innovation & Growth",
  //     description:
  //       "Embracing new technologies and methodologies to continuously improve educational outcomes.",
  //     icon: "🚀",
  //   },
  //   {
  //     title: "Community Impact",
  //     description:
  //       "Building strong partnerships with families and communities to support holistic student development.",
  //     icon: "🏘️",
  //   },
  // ],
}) => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-black mx-auto rounded-full" />
        </motion.div>

        {/* Biography and Portrait */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <Biography {...biography} />
          <Portrait {...portrait} />
        </div>

        {/* Timeline */}
        {/* <Timeline milestones={milestones} /> */}

        {/* Core Values */}
        {/* <CoreValues values={values} /> */}
      </div>
    </section>
  );
};

// import React, { useState } from 'react'
// import Link from "next/link";

// import { motion } from "framer-motion";
// import ReactPlayer from "react-player";
// import { Book, Play } from "lucide-react";
// export default function About() {
//       const [isPlaying, setIsPlaying] = useState(false);
//   return (
//     <section className="py-24 px-4 md:px-8 bg-white">
//         <div className="container mx-auto">
//           {/* <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               About
//             </h2>
//             <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
//           </div> */}

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//             <div className="relative aspect-video   rounded-xl overflow-hidden shadow-2xl">

//               <div className="w-full max- mx-auto px-">
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.8 }}
//                   className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
//                   whileHover={{ scale: 1.02 }}
//                 >
//                   <ReactPlayer
//                     src={"/videos/nizami.mp4"}
//                     width="100%"
//                     height="100%"
//                     light={"/images/3.jpeg"}
//                     // playing={isPlaying}
//                     autoPlay
//                     // loop
//                     controls
//                     onPlay={() => setIsPlaying(true)}
//                     onPause={() => setIsPlaying(false)}
//                     playIcon={
//                       <motion.div
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.95 }}
//                         className="  bg-white bg-opacity-90 rounded-full flex items-center justify-center cursor-pointer shadow-lg"
//                       >
//                         {/* <Play className="w-8 h-8 md:w-10 md:h-10 text-gray-800 ml-1" /> */}
//                         <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-10 w-10 text-white ml-1"
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                           >
//                             <path
//                               fillRule="evenodd"
//                               d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
//                               clipRule="evenodd"
//                             />
//                           </svg>
//                         </div>
//                       </motion.div>
//                     }
//                   />
//                 </motion.div>
//               </div>
//             </div>

//             <div>
//               <h3 className="text-2xl font-bold mb-4">
//                 Basheer Ahmed Nizami: Shaping the community through education
//               </h3>
//               <p className="text-gray-600 mb-6">
//                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//               </p>
//               <div className="flex flex-wrap gap-4">
//                 <Link
//                   href="/videos"
//                   className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg inline-flex items-center"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 mr-2"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
//                   </svg>
//                   Watch Luctures
//                 </Link>
//                 <Link
//                   href="/youtube"
//                   className="px-6 py-2 gap-1 border border-gray-300 hover:bg-gray-100 font-medium rounded-lg inline-flex items-center"
//                 >
//                    <Book className='text-red-600'/>
//                 Publications
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//   )
// }
