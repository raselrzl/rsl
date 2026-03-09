"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function PromisePage() {
  const router = useRouter();
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [noClicks, setNoClicks] = useState(0);
  const noBtnRef = useRef<HTMLButtonElement>(null);

  // Move "No" button randomly
  const moveNo = () => {
    if (!noBtnRef.current) return;

    const x = Math.random() * 120 - 60;
    const y = Math.random() * 40 - 20;

    setNoPos({ x, y });
  };

  // Handle clicking "No"
  const handleNoClick = () => {
    moveNo();

    const newCount = noClicks + 1;
    setNoClicks(newCount);

    if (newCount >= 3) {
      setTimeout(() => {
        router.push("/promiseno");
      }, 50);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-black text-white font-julius p-4 sm:p-6 overflow-hidden">

      {/* Moving FAKE background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-7xl font-bold text-red-500/20 select-none"
            initial={{
              x: "-20vw",
              y: `${Math.random() * 100}vh`,
            }}
            animate={{
              x: "120vw",
              y: "-20vh",
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            YOU ARE LYING
          </motion.div>
        ))}
      </div>

      {/* Card */}
      <div className="relative z-10 border border-zinc-700 rounded-2xl shadow-2xl p-6 sm:p-10 text-center overflow-hidden min-w-[300px] max-w-3xl">
        <div className="text-6xl mb-4">😡</div>

        <h1 className="text-xl sm:text-3xl font-bold mb-6">
          Are you sure? Breaking a promise is not forgivable!
        </h1>

        <p className="text-sm sm:text-lg mb-8">
          Please confirm{" "}
          <Image
            src="/7.png"
            alt="Nadira"
            width={80}
            height={80}
            className="rounded-full object-cover border-2 border-red-500"
          />{" "}
          choice 😏
        </p>

        {/* Buttons container */}
        <div className="relative h-24 flex items-center justify-center gap-6">
          {/* YES */}
          <button
            onClick={() => router.push("/primiseyes")}
            className="px-6 sm:px-10 py-3 sm:py-4 rounded-full bg-green-500 hover:bg-green-600 text-sm sm:text-lg font-semibold shadow-lg"
          >
            Aggree ❤️
          </button>

          {/* NO */}
          <motion.button
            ref={noBtnRef}
            animate={{ x: noPos.x, y: noPos.y }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 25,
              duration: 0.3,
            }}
            onMouseEnter={moveNo}
            onClick={handleNoClick}
            className="px-6 sm:px-10 py-3 sm:py-4 rounded-full bg-red-500 text-sm sm:text-lg font-semibold shadow-lg"
          >
            Reject 😡
          </motion.button>
        </div>
      </div>
    </div>
  );
}