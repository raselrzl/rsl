"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Step1() {
  const router = useRouter();
  const [yesPos, setYesPos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const yesBtnRef = useRef<HTMLButtonElement>(null);

  // Move Yes button safely inside card
  const moveYes = () => {
    if (!cardRef.current || !yesBtnRef.current) return;

    const cardRect = cardRef.current.getBoundingClientRect();
    const btnRect = yesBtnRef.current.getBoundingClientRect();

    const maxX = cardRect.width - btnRect.width;
    const maxY = cardRect.height - btnRect.height;

    // Random position inside card
    const x = Math.random() * maxX - maxX / 2;
    const y = Math.random() * maxY - maxY / 2;

    setYesPos({ x, y });
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black text-white font-julius">
      {/* Background */}
      <Image src="/fireworks1.gif" alt="Fireworks" fill className="object-cover opacity-70" />

      <motion.div
        ref={cardRef}
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 bg-zinc-900 border border-zinc-700 rounded-2xl p-6 sm:p-12 text-center shadow-2xl w-80 sm:w-105"
      >
        <h2 className="text-xl sm:text-4xl font-bold text-pink-400 mb-4 sm:mb-6">
          ❤️ Wow! I'm so happy you said YES! ❤️
        </h2>
        <p className="text-sm sm:text-xl mb-4 sm:mb-8">Thank you 🎆</p>
        <h3 className="text-base sm:text-2xl font-semibold mb-4 sm:mb-8">Are you satisfied?</h3>

        <div className="relative h-16 sm:h-20 flex justify-center gap-4 items-center">
          {/* NO button (redirects to step2) */}
          <button
            onClick={() => router.push("/steptwo")}
            className="px-6 py-2 rounded-full bg-green-500 hover:bg-green-600 text-sm sm:text-base"
          >
            No
          </button>

          {/* YES button (moves on hover / click) */}
          <motion.button
            ref={yesBtnRef}
            animate={{ x: yesPos.x, y: yesPos.y }}
            transition={{ type: "spring", stiffness: 500, damping: 25, duration: 0.3 }}
            onMouseEnter={moveYes}   // Desktop hover
            onClick={moveYes}         // Mobile tap
            className="px-6 py-2 rounded-full bg-red-500 text-sm sm:text-base"
          >
            Yes
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}