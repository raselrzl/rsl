"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import FloatingEndButton from "../FloatingEndButton";

export default function SecretLovePage() {
  const SECRET_TEXT = "RESPECT";
  const [inputText, setInputText] = useState("");
  const [showContent, setShowContent] = useState(false);
  const [error, setError] = useState(false); // Track wrong input

  // Sentences and emojis for the secret background
  const secretBackgroundItems = [
    "I LOVE YOU 💖",
    "I'M HAPPY YOU REACHED HERE 😇",
    "ONLY INTELLIGENT CAN REACH HERE 🤓",
    "YOU MADE IT! 🎉",
    "I LOVE YOU TOO 😘",
    "SO PROUD ❤️",
    "💌",
  ];
  const secretEmojis = ["💖", "💌", "💋", "✨", "🌟", "🎉", "😇", "🥰"];

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (inputText.trim().toUpperCase() === SECRET_TEXT) {
      setShowContent(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-black text-white font-julius overflow-hidden p-4 sm:p-6">
      
      {/* Lock page background */}
      {!showContent && (
        <div className="absolute inset-0 flex flex-wrap items-center justify-center pointer-events-none">
          {Array.from({ length: 200 }).map((_, i) => (
            <span
              key={i}
              className="text-2xl sm:text-4xl text-pink-500 opacity-20 m-1 select-none"
            >
              SHOW RESPECT
            </span>
          ))}
        </div>
      )}

      {!showContent && (
        <form
          onSubmit={handleSubmit}
          className="relative z-10 flex flex-col items-center gap-4 border-4 border-zinc-700 rounded-2xl p-6 sm:p-10 w-full max-w-md bg-zinc-900 shadow-2xl text-center"
        >
          <h2 className="text-2xl sm:text-3xl text-pink-400 font-bold mb-4">
            💌 Write what is in your heart
          </h2>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="type here, if you really feel!"
            className="w-full p-3 rounded-lg text-center text-lg sm:text-xl font-semibold bg-black border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-green-500 hover:bg-green-600 text-white font-bold shadow-lg"
          >
            Reveal
          </button>

          {/* Hints */}
          <p className="text-xs text-zinc-300 mt-2">
            Type the correct secret message to see the surprise 💖
          </p>
          <p className="text-xs text-zinc-400 mt-1 italic">
            Hint: It's something you feel for Rasel ❤️
          </p>

          {/* Error message */}
          {error && (
            <p className="text-xs text-red-500 mt-1">
              ❌ Wrong, maybe something else.
            </p>
          )}
        </form>
      )}

      {/* Secret page content */}
      {showContent && (
        <>
          {/* Secret moving background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 50 }).map((_, i) => {
              const text = secretBackgroundItems[Math.floor(Math.random() * secretBackgroundItems.length)];
              const emoji = secretEmojis[Math.floor(Math.random() * secretEmojis.length)];
              return (
                <motion.div
                  key={i}
                  initial={{
                    x: Math.random() * 100 + "%",
                    y: "-10%",
                    rotate: Math.random() * 360,
                  }}
                  animate={{
                    x: Math.random() * 100 + "%",
                    y: "110%",
                    rotate: Math.random() * 360 + 360,
                  }}
                  transition={{
                    duration: 8 + Math.random() * 6,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute text-xl sm:text-2xl font-bold select-none opacity-70"
                  style={{ color: `hsl(${Math.random() * 360}, 70%, 70%)` }}
                >
                  {text} {emoji}
                </motion.div>
              );
            })}
          </div>

          <div className="relative z-10 flex flex-col items-center gap-6">
            <div className="relative flex flex-col sm:flex-row items-center justify-center gap-6">
              {/* Image with dark overlay */}
              <div className="relative w-[320px] h-80">
                <Image
                  src="/nadira.png"
                  alt="Nadira"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover border-4 border-pink-500 shadow-lg rounded-lg"
                />
                <div className="absolute inset-0 bg-black/50 rounded-lg pointer-events-none"></div>

                <Image
                  src="/4.png"
                  alt="Rasel"
                  width={320}
                  height={320}
                  className="absolute top-0 left-0 w-full h-full object-cover border-4 border-green-500 shadow-lg rounded-lg"
                />

                {/* Optional single kiss emoji on image */}
                <motion.div
                  initial={{ top: "30%", left: "30%", opacity: 0.8 }}
                  animate={{ top: "90%", left: "100%" }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 5,
                    ease: "linear",
                  }}
                  className="absolute text-3xl select-none"
                >
                  💋
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mt-6 text-xl sm:text-3xl text-pink-400 font-bold"
            >
              ❤️ I Really LOVE YOU NADIRA ❤️
            </motion.div>
          </div>
        </>
      )}

      <FloatingEndButton />
    </div>
  );
}