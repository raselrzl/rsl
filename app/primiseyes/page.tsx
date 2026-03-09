"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function PromiseYesPage() {
  const router = useRouter();
  const [showMessage, setShowMessage] = useState(false);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const noBtnRef = useRef<HTMLButtonElement>(null);

  // Move "No" button randomly
  const moveNo = () => {
    if (!noBtnRef.current) return;

    const x = Math.random() * 120 - 60;
    const y = Math.random() * 40 - 20;

    setNoPos({ x, y });
  };

  const handleYes = () => {
    setShowMessage(true);
  };

  const handleConditions = () => {
    router.push("/promise-conditions");
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-black text-white font-julius p-4 sm:p-6 overflow-hidden">

      {/* Floating ❤️ background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-6xl select-none"
            initial={{
              x: "-20vw",
              y: `${Math.random() * 100}vh`,
            }}
            animate={{
              x: "120vw",
              y: "-20vh",
            }}
            transition={{
              duration: 12 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      {/* Card */}
      <div className="relative z-10 border border-zinc-700 rounded-2xl shadow-2xl p-6 sm:p-10 text-center overflow-hidden min-w-75 max-w-3xl">
        <div className="text-6xl mb-4">💖</div>

        {!showMessage ? (
          <>
            <h1 className="text-xl sm:text-3xl font-bold mb-6">
              Are you going to love{" "}
              <Image
                src="/3.png"
                alt="Nadira"
                width={80}
                height={80}
                className="rounded-full object-cover border-2 border-red-500"
              />{" "}
              forever? 😏
            </h1>

            <div className="relative h-24 flex items-center justify-center gap-6">
              {/* YES → show message */}
              <button
                onClick={handleYes}
                className="px-6 sm:px-10 py-3 sm:py-4 rounded-full bg-green-500 hover:bg-green-600 text-sm sm:text-lg font-semibold shadow-lg"
              >
                Yes ❤️
              </button>

              {/* NO → move button */}
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
                onClick={moveNo}
                className="px-6 sm:px-10 py-3 sm:py-4 rounded-full bg-red-500 text-sm sm:text-lg font-semibold shadow-lg"
              >
                No 😡
              </motion.button>
            </div>
          </>
        ) : (
          <div>
            <h1 className="text-xl sm:text-3xl font-bold mb-6 text-green-400">
              🎉 Welcome! You are always{" "}
              <Image
                src="/4.png"
                alt="Nadira"
                width={80}
                height={80}
                className="rounded-full object-cover border-2 border-red-500"
              />{" "}
              ❤️
            </h1>
            <p className="text-sm sm:text-lg mb-6">
              ❤️ was blocked because of disrespect.💌
            </p>

            <button
              onClick={handleConditions}
              className="px-6 sm:px-10 py-3 sm:py-4 rounded-full bg-pink-500 hover:bg-pink-600 text-sm sm:text-lg font-semibold shadow-lg"
            >
              Promise? 📜
            </button>
          </div>
        )}
      </div>
    </div>
  );
}