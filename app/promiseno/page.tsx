"use client";

import { motion } from "framer-motion";

export default function PromiseNoPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-black text-white font-julius p-4 sm:p-6 overflow-hidden">

      {/* Moving GOOD LUCK background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-7xl font-bold text-green-500/20 select-none"
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
            GOOD LUCK
          </motion.div>
        ))}
      </div>

      {/* Card */}
      <div className="relative z-10 border-4 border-zinc-700 rounded-2xl shadow-2xl p-6 sm:p-10 w-full max-w-md bg-zinc-900 text-center">
        <div className="text-6xl mb-4">💔</div>

        <h1 className="text-xl sm:text-3xl font-bold mb-6 text-red-400">
          Good Luck on Your Future
        </h1>

        <p className="text-sm sm:text-lg mb-4">
          I know I am not perfect or enough for you. You deserve someone perfect, and I sincerely wish you the very best.
        </p>

        <p className="text-sm sm:text-lg mb-4">
          I hold no hate and no lingering love. I respect your choices and your opinion. 🙏
        </p>

        <p className="text-sm sm:text-lg font-semibold text-yellow-400">
          Good luck, truly. May happiness and love always find you! 🌟
        </p>
      </div>
    </div>
  );
}