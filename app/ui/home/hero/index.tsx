
// components/HeroCarousel.tsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation,  } from 'swiper/modules';
 

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { QuoteSlide } from './slides/QuoteSlide';
import { NewsSlide } from './slides/NewsSlider';
// import { QuoteSlide } from './slides/QuoteSlide';
// import { NewsSlide } from './slides/NewsSlider';
 
 
 

interface HeroCarouselProps {
  quote?: {
    text: string;
    author: string;
    image: string;
  };
  video?: {
    url: string;
    thumbnail: string;
    title: string;
  };
  news?: {
    title: string;
    summary: string;
    image: string;
    date: string;
  };
   news2?: {
    title: string;
    summary: string;
    image: string;
    date: string;
  };
  newsTickerItems?: string[];
}

export const Hero : React.FC<HeroCarouselProps> = ({
  quote = {
    text: "Where curiosity meets guidance, education becomes transformation.",
    author: "Basheer Ahmed Nizami",
    image: "/images/7.jpeg"
  },
  // video = {
  //   url: "/videos/1.mp4",
  //   thumbnail: "/1.jpg",
  //   title: "Inspiring Leadership Speech"
  // },

  news = {
    title: "Groundbreaking Educational Initiative Launched",
    summary: "A new program aimed at transforming educational outcomes has been successfully implemented across multiple institutions.",
    image: "/images/9.jpeg",
    date: "2024-12-15"
  },
  news2 = {
    title: "Global Education Alliance",
    summary: "A new program aimed at transforming educational outcomes has been successfully implemented across multiple institutions.",
    image: "/images/8.jpeg",
    date: "2024-12-15"
  },
  newsTickerItems = [
    "Breaking: New educational funding approved for 2024",
    "Research shows 40% improvement in student outcomes",
    "International conference on education leadership announced",
    "Innovation in digital learning platforms continues to grow"
  ]
}) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={2000}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        // navigation
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        loop
        className="h-full w-full"
      >
        <SwiperSlide>
          <QuoteSlide 
            quote={quote.text}
            author={quote.author}
            backgroundImage={quote.image}
             tickerItems={newsTickerItems}
          />
        </SwiperSlide>
        
        {/* <SwiperSlide>
          <VideoSlide 
            videoUrl={video.url}
            thumbnail={video.thumbnail}
            title={video.title}
          />
        </SwiperSlide> */}
        
        <SwiperSlide>
          <NewsSlide 
            title={news.title}
            summary={news.summary}
            image={news.image}
            date={news.date}
            tickerItems={newsTickerItems}
          />
        </SwiperSlide>
         <SwiperSlide>
          <NewsSlide 
            title={news2.title}
            summary={news2.summary}
            image={news2.image}
            date={news2.date}
            tickerItems={newsTickerItems}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};







// 'use client';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import ReactPlayer from 'react-player';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// const updates = [
//   { title: 'Awarded Padma Bhushan', date: '2024-01-15' },
//   { title: 'Keynote at Global Education Summit', date: '2025-06-01' },
//   { title: 'Launched Rural Education Fund', date: '2025-04-10' },
//   { title: 'Opened 100th Learning Centre', date: '2025-07-20' },
// ];

// export default function HeroCarousel() {
//   return (
//     <section className="w-full h-[90vh] relative overflow-hidden">
//       <Swiper
//         modules={[Autoplay, Pagination, Navigation]}
//         autoplay={{ delay: 5000 }}
//         pagination={{ clickable: true }}
//         // navigation
    
//         loop
//         className="w-full h-full"
//       >
//         {/* Slide 1 - Portrait with Quote */}
//         <SwiperSlide>
//           <div className="relative w-full h-full">
//             <Image
//               src="/1.jpg"
//               alt="Leader"
//               fill
//               className="object-cover"
//               priority={true}
//             />
//             <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-center px-4">
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1 }}
//               >
//                 <h1 className="text-4xl md:text-6xl font-bold mb-4">
//                   "Education is the light of the future"
//                 </h1>
//                 <p className="text-lg md:text-2xl">— Dr. XYZ, Visionary Leader</p>
//               </motion.div>
//             </div>
//           </div>
//         </SwiperSlide>

//         {/* Slide 2 - Video */}
//         <SwiperSlide>
//           <div className="w-full h-full flex items-center justify-center bg-black">
//             <div className="w-full  aspect-video">
//               <ReactPlayer
//                 src="/videos/1.mp4"
//                 controls
//                 width="100%"
//                 height="100%"
                
//                 light="/1.jpg"
//                 autoPlay
//                 loop
//               />
//             </div>
//           </div>
//         </SwiperSlide>

//         {/* Slide 3 - Timeline Updates */}
//         <SwiperSlide>
//           <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-800 text-white px-4 overflow-y-auto">
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={{
//                 visible: { transition: { staggerChildren: 0.3 } },
//               }}
//               className="max-w-xl w-full"
//             >
//               <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
//                 Milestones & Updates
//               </h2>
//               <div className="relative border-l-4 border-white pl-6 space-y-6">
//                 {updates.map((update, i) => (
//                   <motion.div
//                     key={i}
//                     variants={{
//                       hidden: { opacity: 0, x: -50 },
//                       visible: { opacity: 1, x: 0 },
//                     }}
//                     transition={{ duration: 0.5, ease: 'easeOut' }}
//                     className="relative"
//                   >
//                     <div className="absolute left-[-10px] top-1 w-4 h-4 bg-white rounded-full" />
//                     <p className="text-sm text-gray-200">{update.date}</p>
//                     <p className="text-lg font-medium">{update.title}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </section>
//   );
// }
