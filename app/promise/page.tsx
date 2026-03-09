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

    const x = Math.random() * 120 - 60; // ±60px
    const y = Math.random() * 40 - 20; // ±20px

    setNoPos({ x, y });
  };

  // Handle clicking "No"
  const handleNoClick = () => {
    moveNo(); // move the button

    const newCount = noClicks + 1;
    setNoClicks(newCount);

    if (newCount >= 3) {
      // Navigate safely outside state update
      setTimeout(() => {
        router.push("/promiseno");
      }, 50); // small delay ensures it's outside render
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white font-julius p-4 sm:p-6">
      {/* Card */}
      <div className="border border-zinc-700 rounded-2xl shadow-2xl p-6 sm:p-10 text-center relative overflow-hidden min-w-[300px] max-w-3xl">
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
          {/* YES → /primiseyes */}
          <button
            onClick={() => router.push("/primiseyes")}
            className="px-6 sm:px-10 py-3 sm:py-4 rounded-full bg-green-500 hover:bg-green-600 text-sm sm:text-lg font-semibold shadow-lg"
          >
            Aggree ❤️
          </button>

          {/* NO → moves and counts clicks */}
          <motion.button
            ref={noBtnRef}
            animate={{ x: noPos.x, y: noPos.y }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 25,
              duration: 0.3,
            }}
            onMouseEnter={moveNo} // hover desktop
            onClick={handleNoClick} // click/tap mobile
            className="px-6 sm:px-10 py-3 sm:py-4 rounded-full bg-red-500 text-sm sm:text-lg font-semibold shadow-lg"
          >
            Reject 😡
          </motion.button>
        </div>
      </div>
    </div>
  );
}
