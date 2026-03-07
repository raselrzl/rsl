"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [noPos1, setNoPos1] = useState({ x: 120, y: 0 });
  const [noPos2, setNoPos2] = useState({ x: 120, y: 0 });

  const [showPopup, setShowPopup] = useState(false);
  const [step, setStep] = useState(1);

  // Card dimensions (approx) to keep No button inside
  const cardWidth = 420;
  const cardHeight = 80;

  const buttonWidth = 100; // approximate button width
  const buttonHeight = 40; // approximate button height

  const randomInsideCard = () => ({
    x: Math.random() * (cardWidth - buttonWidth) - (cardWidth / 2 - buttonWidth / 2),
    y: Math.random() * (cardHeight - buttonHeight) - (cardHeight / 2 - buttonHeight / 2),
  });

  const moveNo1 = () => setNoPos1(randomInsideCard());
  const moveNo2 = () => setNoPos2(randomInsideCard());

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white font-julius p-6">

      {/* CARD */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="border border-zinc-700 rounded-3xl shadow-2xl p-12 text-center space-y-10 relative overflow-hidden max-w-3xl"
      >
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          Hi Na ❤️ <br /> Do you love me?
        </h1>

        <div className="relative h-24 flex items-center justify-center">

          {/* YES */}
          <button
            onClick={() => {
              setShowPopup(true);
              setStep(1);
            }}
            className="absolute left-10 px-8 py-3 rounded-full bg-green-500 hover:bg-green-600 text-white text-lg font-semibold"
          >
            Yes
          </button>

          {/* NO (always inside the card) */}
          <motion.button
            animate={{ x: noPos1.x, y: noPos1.y }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            onMouseEnter={moveNo1}
            onMouseMove={moveNo1}
            className="absolute px-8 py-3 rounded-full bg-red-500 text-white text-lg font-semibold"
          >
            No
          </motion.button>

        </div>
      </motion.div>

      {/* POPUP */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/90 z-50"
          >

            {/* FIREWORKS BACKGROUND */}
            {step === 1 && (
              <Image
                src="/fireworks1.gif"
                alt="Fireworks"
                fill
                className="object-cover opacity-70"
              />
            )}

            {step === 2 && (
              <Image
                src="/fireworks.gif"
                alt="Fireworks"
                fill
                className="object-cover opacity-80"
              />
            )}

            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 bg-zinc-900 border border-zinc-700 rounded-3xl p-12 text-center shadow-2xl w-105"
            >

              {/* STEP 1 */}
              {step === 1 && (
                <>
                  <h2 className="text-4xl font-bold text-pink-400 mb-6">
                    ❤️ She Said YES ❤️
                  </h2>

                  <p className="text-xl mb-8">
                    Na loves you 🎆
                  </p>

                  <h3 className="text-2xl font-semibold mb-8">
                    Will you love me forever?
                  </h3>

                  <div className="relative h-20 flex items-center justify-center">

                    {/* YES */}
                    <button
                      onClick={() => setStep(2)}
                      className="absolute left-10 px-6 py-2 rounded-full bg-green-500 hover:bg-green-600"
                    >
                      Yes
                    </button>

                    {/* NO */}
                    <motion.button
                      animate={{ x: noPos2.x, y: noPos2.y }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      onMouseEnter={moveNo2}
                      onMouseMove={moveNo2}
                      className="absolute px-6 py-2 rounded-full bg-red-500"
                    >
                      No
                    </motion.button>

                  </div>
                </>
              )}

              {/* FINAL */}
              {step === 2 && (
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1.1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-4xl font-bold text-green-400 mb-4">
                    🎆 Yaaaa! 🎆
                  </h2>

                  <p className="text-2xl">
                    She loves me forever ❤️🔥
                  </p>

                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="text-6xl mt-6"
                  >
                    ❤️‍🔥❤️‍🔥❤️‍🔥
                  </motion.div>
                </motion.div>
              )}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}