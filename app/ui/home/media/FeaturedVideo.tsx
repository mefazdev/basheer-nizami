// components/media/FeaturedVideo.tsx
"use client";

import { motion } from "framer-motion";
import { Play, Eye, Clock } from "lucide-react";

interface VideoItem {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  category: string;
  date: string;
  venue?: string;
  duration: string;
  views?: number;
  tags: string[];
}

interface FeaturedVideoProps {
  video: VideoItem;
  onPlay: () => void;
}

export const FeaturedVideo: React.FC<FeaturedVideoProps> = ({
  video,
  onPlay,
}) => {
  //   const thumbnailUrl = `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mb-20"
    >
      <div className="bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Video Thumbnail */}
          <div className="relative group cursor-pointer" onClick={onPlay}>
            <div className="relative aspect-video bg-gray-800 overflow-hidden">
              <img
                src={"/images/6.jpeg"}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-16 bg-red-600 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl"
                >
                  <Play className="w-8 h-8  text-white   ml-1" />
                </motion.div>
              </div>

              {/* Featured Badge */}
              <div className="absolute top-6 left-6">
                <span className="bg-gradient-to-r from-red-600 to-black text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  Featured
                </span>
              </div>

              {/* Duration Badge */}
              <div className="absolute bottom-6 right-6 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm font-medium flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {video.duration}
              </div>
            </div>
          </div>

          {/* Video Details */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-semibold border border-blue-500/30">
                {video.category.replace("-", " ").toUpperCase()}
              </span>
              <time className="text-gray-400 text-sm">
                {new Date(video.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              {video.title}
            </h3>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              {video.description}
            </p>

            {video.venue && (
              <p className="text-blue-400 font-semibold mb-6">
                📍 {video.venue}
              </p>
            )}

            {/* Video Stats */}
            <div className="flex items-center gap-6 mb-8">
              {video.views && (
                <div className="flex items-center text-gray-400">
                  <Eye className="w-4 h-4 mr-2" />
                  <span className="text-sm">
                    {video.views.toLocaleString()} views
                  </span>
                </div>
              )}
              <div className="flex items-center text-gray-400">
                <Clock className="w-4 h-4 mr-2" />
                <span className="text-sm">{video.duration}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {video.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/10 text-gray-300 text-xs font-medium rounded-full border border-white/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onPlay}
              className="self-start px-8 py-3 bg-gradient-to-r from-red-600 to-black text-white font-bold rounded-xl hover:from-red-700 hover:to-gray-600 transition-all duration-300 shadow-xl flex items-center"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Now
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
