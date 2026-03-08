"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Home() {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const noBtnRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  // Move "No" button safely inside card
  const moveNo = () => {
    if (!cardRef.current || !noBtnRef.current) return;

    const cardRect = cardRef.current.getBoundingClientRect();
    const btnRect = noBtnRef.current.getBoundingClientRect();

    const maxX = cardRect.width - btnRect.width;
    const maxY = cardRect.height - btnRect.height;

    // Random position inside card
    const x = Math.random() * maxX - maxX / 2;
    const y = Math.random() * maxY - maxY / 2;

    setNoPos({ x, y });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white font-julius p-4 sm:p-6">
      {/* CARD */}
      <motion.div
        ref={cardRef}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="border border-zinc-700 rounded-2xl shadow-2xl p-6 sm:p-10 text-center relative overflow-hidden min-w-[300px] max-w-3xl"
      >
        <h1 className="text-xl sm:text-4xl font-bold leading-snug sm:leading-tight mb-8">
          Hi Nadira ❤️ <br /> I sent you a small gift—can you pick it up?
        </h1>

        {/* Buttons */}
        <div className="relative h-24 flex items-center justify-center gap-6">
          {/* YES */}
          <button
            onClick={() => router.push("/stepone")}
            className="px-6 sm:px-10 py-3 sm:py-4 rounded-full bg-green-500 hover:bg-green-600 text-sm sm:text-lg font-semibold shadow-lg"
          >
            Yes
          </button>

          {/* NO button */}
          <motion.button
            ref={noBtnRef}
            animate={{ x: noPos.x, y: noPos.y }}
            transition={{ type: "spring", stiffness: 500, damping: 25, duration: 0.3 }}
            onMouseEnter={moveNo}   // Desktop hover
            onClick={moveNo}         // Mobile tap/click
            className="px-6 sm:px-10 py-3 sm:py-4 rounded-full bg-red-500 text-sm sm:text-lg font-semibold shadow-lg"
          >
            No
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}