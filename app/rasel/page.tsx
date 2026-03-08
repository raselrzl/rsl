"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";

export default function RaselPage() {
  const router = useRouter();

  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const noRef = useRef<HTMLButtonElement>(null);

  const moveNo = () => {
    if (!noRef.current) return;

    const btnRect = noRef.current.getBoundingClientRect();
    const maxX = window.innerWidth - btnRect.width;
    const maxY = window.innerHeight - btnRect.height;

    setNoPos({
      x: Math.random() * maxX - maxX / 2,
      y: Math.random() * maxY - maxY / 2,
    });
  };

  const handleYes = () => {
    router.push("/loveforever");
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-black text-white font-julius">

      {/* Background */}
      <Image
        src="/fireworks1.gif"
        alt="Background"
        fill
        className="object-cover opacity-70"
      />

      {/* Card */}
      <div className="relative z-10 bg-zinc-900 border border-zinc-700 rounded-2xl p-8 sm:p-12 text-center shadow-2xl w-80 sm:w-105">

        <div className="text-6xl mb-4">😤</div>

        <h1 className="text-xl sm:text-3xl font-bold text-pink-400 mb-6">
          Stop Right There!
        </h1>

        <p className="text-sm sm:text-xl mb-4">
          You can't punch Rasel 😤
        </p>

        <p className="text-sm sm:text-lg text-zinc-300 mb-8">
          You are not allowed to disrespect him. <br />
          You are only allowed to <span className="text-pink-400">love him</span> ❤️
        </p>

        <p className="text-sm sm:text-lg mb-6">
          Do you love Rasel? 😏
        </p>

        <div className="flex justify-center gap-4 relative">

          {/* YES */}
          <button
            onClick={handleYes}
            className="px-6 py-2 rounded-full bg-green-500 hover:bg-green-600 transition shadow-lg"
          >
            Yes ❤️
          </button>

          {/* NO (runs away) */}
          <motion.button
            ref={noRef}
            animate={{ x: noPos.x, y: noPos.y }}
            transition={{ type: "spring", stiffness: 500, damping: 25 }}
            onMouseEnter={moveNo}
            onClick={moveNo}
            className="px-6 py-2 rounded-full bg-red-500 hover:bg-red-600 shadow-lg"
          >
            No 😡
          </motion.button>

        </div>
      </div>
    </div>
  );
}