"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function LoveForeverPage() {
  const router = useRouter();
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const noBtnRef = useRef<HTMLButtonElement>(null);

  // Move "No" button randomly
  const moveNo = () => {
    if (!noBtnRef.current) return;

    // Random offsets inside a reasonable range
    const x = Math.random() * 120 - 60; // ±60px
    const y = Math.random() * 40 - 20;  // ±20px

    setNoPos({ x, y });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white font-julius p-4 sm:p-6">
      {/* Card */}
      <div className="border border-zinc-700 rounded-2xl shadow-2xl p-6 sm:p-10 text-center relative overflow-hidden min-w-[300px] max-w-3xl">
        <div className="text-6xl mb-4">😡</div>

        <h1 className="text-xl sm:text-3xl font-bold mb-6">
          You are so disrespectful toward Rasel!
        </h1>

        <p className="text-sm sm:text-lg mb-6">
          If you want to love him, you must <span className="text-green-400">never disrespect</span> him ❤️
        </p>

        <p className="text-sm sm:text-lg mb-8">
          Will you be respectfull forever? 😏
        </p>

        {/* Buttons container */}
        <div className="relative h-24 flex items-center justify-center gap-6">
          {/* YES */}
          <button
            onClick={() => router.push("/promise")}
            className="px-6 sm:px-10 py-3 sm:py-4 rounded-full bg-green-500 hover:bg-green-600 text-sm sm:text-lg font-semibold shadow-lg"
          >
            Yes ❤️
          </button>

          {/* NO */}
          <motion.button
            ref={noBtnRef}
            animate={{ x: noPos.x, y: noPos.y }}
            transition={{ type: "spring", stiffness: 500, damping: 25, duration: 0.3 }}
            onMouseEnter={moveNo}  // hover desktop
            onClick={moveNo}        // click/tap mobile
            className="px-6 sm:px-10 py-3 sm:py-4 rounded-full bg-red-500 text-sm sm:text-lg font-semibold shadow-lg"
          >
            No 😡
          </motion.button>
        </div>
      </div>
    </div>
  );
}