"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function StepTwo() {
  const router = useRouter();
  const [noPos2, setNoPos2] = useState({ x: 0, y: 0 });
  const btnRef2 = useRef<HTMLButtonElement>(null);

  const moveNo = () => {
    if (!btnRef2.current) return;

    const btnRect = btnRef2.current.getBoundingClientRect();
    const maxX = window.innerWidth - btnRect.width;
    const maxY = window.innerHeight - btnRect.height;

    setNoPos2({
      x: Math.random() * maxX,
      y: Math.random() * maxY,
    });
  };

  useEffect(() => {
    setNoPos2({ x: 0, y: 0 });
  }, []);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-black text-white font-julius p-2 sm:p-6">

    {/* PAGE BACKGROUND GIF */}
    <Image
      src="/bye.gif"
      alt="Background"
      fill
      priority
      className="object-cover opacity-80"
    />

    {/* CARD */}
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative z-10 border border-zinc-700 bg-black/20 backdrop-blur-sm rounded-2xl shadow-2xl p-4 sm:p-8 text-center space-y-6 sm:space-y-10 min-w-80 max-w-3xl"
    >
        <h2 className="text-xl sm:text-4xl font-bold text-green-400 mb-4">🎆 OOOOOPS 🎆</h2>
        <p className="text-base sm:text-2xl mb-4">
          You can have this for now; next time, the gift will be even better! ❤️🔥
        </p>

        <div className="relative h-16 sm:h-20 flex items-center justify-center gap-4">
          <button
            onClick={() => router.push("/stepthree")} // Next Question
            className="px-6 py-2 rounded-full bg-pink-500 hover:bg-pink-600 text-white text-sm sm:text-base"
          >
            click to Revenge?
          </button>
        </div>

        {/* Background */}
        <Image src="/bye.gif" alt="Background" fill className="object-cover opacity-80 -z-10" />
      </motion.div>
    </div>
  );
}