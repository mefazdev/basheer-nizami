'use client';
import { Twitter, Facebook, Linkedin, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { NewsTicker } from '../NewsTicker';
// import { NewsTicker } from '../NewsTicker';
 
interface QuoteSlideProps {
  quote: string;
  author: string;
  backgroundImage: string;
    tickerItems: string[];
}

export const QuoteSlide: React.FC<QuoteSlideProps> = ({
  quote,
  author,
  backgroundImage
  ,tickerItems
}) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 ">

        <Image
          src={backgroundImage}
          alt="Leader portrait"
          fill
          className="object-cover"
          priority
        />
        
        <div className="absolute inset-0 bg-black/60 bg-opacity-70  " />
       </div>
      
      {/* Quote Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <motion.blockquote
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-4xl lg:text-5xl font-semibold italic leading-relaxed mb-8"
        >
         &quot;{quote}&quot;
                  
        </motion.blockquote>
        
        <motion.cite
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl font-medium not-italic opacity-90"
        >
          — {author}
        </motion.cite>
         <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 1 }}
    className="flex justify-center gap-6 mt-6"
  >
    <a href="https://twitter.com/leader" target="_blank" rel="noopener noreferrer">
      <Twitter className="w-6 h-6 hover:text-blue-400 transition-colors duration-300" />
    </a>
    <a href="https://facebook.com/leader" target="_blank" rel="noopener noreferrer">
      <Facebook className="w-6 h-6 hover:text-blue-500 transition-colors duration-300" />
    </a>
    <a href="https://linkedin.com/in/leader" target="_blank" rel="noopener noreferrer">
      <Linkedin className="w-6 h-6 hover:text-blue-300 transition-colors duration-300" />
    </a>
    <a href="https://youtube.com/@leader" target="_blank" rel="noopener noreferrer">
      <Youtube className="w-6 h-6 hover:text-red-500 transition-colors duration-300" />
    </a>
  </motion.div>
  
      </div>
<div className='absolute bottom-0 w-full '>
        <NewsTicker items={tickerItems} />

</div>
    </div>
  );
};
