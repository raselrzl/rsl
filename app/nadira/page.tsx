"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function NadiraPage() {
  const router = useRouter();

  const handlePunch = () => {
    router.push("/stepthree");
  };

  // Floating Nadira images positions
  const [floatingPositions, setFloatingPositions] = useState<
    { x: number; y: number; size: number; duration: number }[]
  >([]);

  // Generate positions only on the client
  useEffect(() => {
    const positions = Array.from({ length: 10 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 60 + Math.random() * 40,
      duration: 10 + Math.random() * 10,
    }));
    setFloatingPositions(positions);
  }, []);

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-black text-white font-julius overflow-hidden">
      {/* Floating Nadira pictures in the background */}
      {floatingPositions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute select-none rounded-full border-2 border-red-500"
          style={{
            width: pos.size,
            height: pos.size,
            left: pos.x,
            top: pos.y,
          }}
          animate={{
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
          }}
          transition={{
            duration: pos.duration,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "linear",
          }}
        >
          <Image
            src="/7.png"
            alt="Nadira"
            width={pos.size}
            height={pos.size}
            className="rounded-full object-cover"
          />
        </motion.div>
      ))}

      {/* Card */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 bg-zinc-900 border opacity-50 border-zinc-700 rounded-2xl p-8 sm:p-12 text-center shadow-2xl w-80 sm:w-105"
      >
        <div className="text-6xl mb-4">🤨</div>

        <h1 className="text-xl sm:text-3xl font-bold text-pink-400 mb-6">
          Wait a minute!
        </h1>

        <p className="text-sm sm:text-xl mb-6">
          You can't punch yourself 😤 First hold your ears and do utha-bosha. 😑 😏
        </p>

        {/* Punch Button */}
        <button
          onClick={handlePunch}
          className="px-8 py-3 rounded-full bg-red-500 hover:bg-red-600 transition shadow-lg"
        >
          Then Punch Someone else 👊
        </button>
      </motion.div>
    </div>
  );
}