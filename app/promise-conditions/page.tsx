"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";

export default function PromiseConditionsPage() {
  const SECRET_CODE = "N14IR1"; // the secret code

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

  const emojis = ["💖", "✨", "🌟", "💌", "🎉", "💚", "😇", "🗣️"];

  const [inputCode, setInputCode] = useState("");
  const [showPage, setShowPage] = useState(false);
  const [showEmailPopup, setShowEmailPopup] = useState(false);

  const handleCheckCode = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    // Trim spaces and ignore case
    if (inputCode.trim().toUpperCase() === SECRET_CODE) {
      setShowPage(true);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-black text-white font-julius p-4 sm:p-6 overflow-hidden">
      {!showPage && (<>
        <div className="absolute inset-20 pointer-events-none">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl sm:text-4xl font-bold text-yellow-400 select-none"
              initial={{
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
              }}
              animate={{
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
              }}
              transition={{
                duration: 8 + Math.random() * 6,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            >
              Be patient my Love
            </motion.div>
          ))}
        </div>
        <form
          onSubmit={handleCheckCode}
          className="relative z-10 border-4 border-zinc-700 opacity-50 rounded-2xl shadow-2xl p-6 sm:p-10 w-full max-w-md bg-zinc-900 text-center"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-pink-500">
            🔒 Enter Secret Code
          </h2>
          <input
            type="text"
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
            placeholder="Enter secret code"
            className="w-full p-3 mb-4 rounded-lg text-gray-100 text-lg font-semibold"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-green-500 hover:bg-green-600 text-white font-bold shadow-lg"
          >
            Submit
          </button>
         <p className="text-xs text-zinc-300 mt-2">
  Note: Did you miss the code somewhere along the journey?
</p>
        </form></>
      )}

      {showPage && (
        <>
          {/* Floating background emojis */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-5xl select-none"
                initial={{ x: "-20vw", y: `${Math.random() * 100}vh` }}
                animate={{ x: "120vw", y: "-20vh" }}
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

            <span className="text-pink-500 text-xs py-1 bg-gray-800 px-8 rounded-2xl">
              Secret Quote: " The saddest thing about love is that it cannot only die, but that
              sometimes it fades away. "
            </span>

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

              <p className="text-sm sm:text-lg font-semibold text-yellow-400 bg-black/40 p-3 rounded-lg shadow-inner">
                📧 Send it to Rasel's email. Only then will he{" "}
                <span className="text-pink-400 font-bold">
                  open his heart for the last time
                </span>
                , never to close it again. ❤️
              </p>

              <p className="text-sm sm:text-lg font-semibold text-red-500 bg-black/30 p-2 rounded-md shadow-inner">
                ⚠️ Zero tolerance for disrespect.
              </p>

              <p
                className="bg-gray-600 rounded-full cursor-pointer inline-block px-4 py-2"
                onClick={() => setShowEmailPopup(true)}
              >
                Read Email Instruction
              </p>

              <Link
                href="/n14ir1secret"
                className="inline-block mt-4 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-pink-500 hover:bg-pink-600 rounded-full shadow-md transition-colors duration-300"
              >
                🎁 Find the Surprise
              </Link>
            </div>
          </div>

           {showEmailPopup && (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
              <div className="bg-white text-black w-11/12 max-w-md p-6 rounded-2xl shadow-2xl relative">
                <h2 className="text-lg font-bold mb-4">📧 Email Instruction</h2>
                <p className="font-semibold mb-2">
                  Subject: <span className="text-pink-500">The Secret Quote</span>
                </p>
                <p className="mb-4">
  Main Content: Please take a screenshot of all the promises 📸
</p>
                <p className="mb-4">
                  Send to: <span className="text-green-500">rasel6041@gmail.com</span>
                </p>
                <button
                  onClick={() => setShowEmailPopup(false)}
                  className="absolute top-2 right-2 text-white bg-red-500 px-3 py-1 rounded-full hover:bg-red-600"
                >
                  x
                </button>
              </div>
            </div>
          )}

        
        </>
      )}
    </div>
  );
}
