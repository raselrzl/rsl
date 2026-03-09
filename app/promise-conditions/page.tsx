"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PromiseConditionsPage() {
  const conditions = [
    "Always be respectful to each other ❤️",
    "No bad words or insults 😇",
    "Discuss problems calmly and find solutions together 🤝",
    "Never break a promise you make 💌",
    "Always communicate honestly and have fun together 🗣️",
    "Support each other through hard times 💪",
    "Share happiness and celebrate moments together 🎉",
    "Avoid anything that could hurt each other emotionally 💔",
    "Communicate openly and lovingly every day 🗣️💖",
  ];

  const emojis = ["💖", "✨", "🌟", "💌", "🎉", "💚", "😇", "🗣️"]; // background emojis

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-black text-white font-julius p-4 sm:p-6 overflow-hidden">

      {/* Floating background emojis */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-5xl select-none"
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
            {emojis[Math.floor(Math.random() * emojis.length)]}
          </motion.div>
        ))}
      </div>

      {/* Card content */}
      <div className="relative z-10 border-4 border-zinc-700 opacity-50 rounded-2xl shadow-2xl p-6 sm:p-10 w-full max-w-md bg-zinc-900">
        {/* Top instructions */}
        <div className="mb-6 text-center">
          <div className="text-5xl mb-4">💖</div>
          <p className="text-sm sm:text-lg mb-2">
            <Image
              src="/7.png"
              alt="Nadira"
              width={80}
              height={80}
              className="rounded-full object-cover border-2 border-red-500"
            />{" "}
            Read carefully 😔
          </p>
          <p className="text-sm sm:text-lg font-semibold text-red-400">
            This shows your intelligence and willingness to be with{" "}
            <Image
              src="/3.png"
              alt="Rasel"
              width={80}
              height={80}
              className="rounded-full object-cover border-2 border-red-500"
            />
            !
          </p>
        </div>

        {/* Conditions Box */}
        <div className="border-2 border-green-500 rounded-lg p-4 mb-6 bg-zinc-800">
          <h2 className="text-lg sm:text-xl font-bold mb-4 text-green-400 text-center">
            📜 Promises
          </h2>
          <ul className="text-sm sm:text-base list-disc list-inside space-y-2">
            {conditions.map((cond, idx) => (
              <li key={idx}>{cond}</li>
            ))}
          </ul>
        </div>

        {/* Bottom instructions */}
        <div className="max-w-xl mx-auto p-6 sm:p-10 bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl text-center font-julius space-y-4">
          {/* Top note */}
          <p className="text-sm sm:text-lg mb-2 text-zinc-300">
            💌 When you truly believe in{" "}
            <span className="text-pink-400 font-semibold">love</span> and{" "}
            <span className="text-green-400 font-semibold">respect</span> in
            your heart, please take a{" "}
            <span className="underline text-yellow-400 font-bold">
              screenshot of the promise box
            </span>{" "}
            from top to bottom. 📸
          </p>

          {/* Important instruction */}
          <p className="text-sm sm:text-lg font-semibold text-yellow-400 bg-black/40 p-3 rounded-lg shadow-inner">
            📧 Send it to Rasel's email. Only then will he{" "}
            <span className="text-pink-400 font-bold">
              open his heart for the last time
            </span>
            , never to close it again. ❤️
          </p>

          {/* Warning */}
          <p className="text-sm sm:text-lg font-semibold text-red-500 bg-black/30 p-2 rounded-md shadow-inner">
            ⚠️ Zero tolerance for disrespect.
          </p>
        </div>
      </div>
    </div>
  );
}