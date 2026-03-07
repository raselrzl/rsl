"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [noPos1, setNoPos1] = useState({ x: 0, y: 0 });
  const [noPos2, setNoPos2] = useState({ x: 0, y: 0 });
  const [showPopup, setShowPopup] = useState(false);
  const [step, setStep] = useState(1);

  const cardRef = useRef<HTMLDivElement>(null);
  const btnRef1 = useRef<HTMLButtonElement>(null);
  const btnRef2 = useRef<HTMLButtonElement>(null);

  // Function to safely move No button inside card
  const moveNo = (setPos: Function, btnRef: any) => {
    if (!cardRef.current || !btnRef.current) return;

    const cardRect = cardRef.current.getBoundingClientRect();
    const btnRect = btnRef.current.getBoundingClientRect();

    const maxX = cardRect.width - btnRect.width;
    const maxY = cardRect.height - btnRect.height;

    // Random position inside card, centered
    const x = Math.random() * maxX - maxX / 2;
    const y = Math.random() * maxY - maxY / 2;

    setPos({ x, y });
  };

  // Ensure initial positions are 0,0 (centered) after first render
  useEffect(() => {
    setNoPos1({ x: 0, y: 0 });
    setNoPos2({ x: 0, y: 0 });
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white font-julius p-2 sm:p-6">

      {/* CARD */}
      <motion.div
        ref={cardRef}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="border border-zinc-700 rounded-2xl shadow-2xl p-4 sm:p-8 text-center space-y-6 sm:space-y-10 relative overflow-hidden min-w-80 max-w-3xl"
      >
        <h1 className="text-xl sm:text-4xl font-bold leading-snug sm:leading-tight">
          Hi Na ❤️ <br /> Do you love me?
        </h1>

        {/* Initial Yes / No buttons centered flex row */}
        <div className="relative h-20 flex items-center justify-center gap-4">

          {/* YES */}
          <button
            onClick={() => {
              setShowPopup(true);
              setStep(1);
            }}
            className="px-4 sm:px-8 py-2 sm:py-3 rounded-full bg-green-500 hover:bg-green-600 text-sm sm:text-lg font-semibold"
          >
            Yes
          </button>

          {/* NO (always inside card) */}
          <motion.button
            ref={btnRef1}
            animate={{ x: noPos1.x, y: noPos1.y }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            onMouseEnter={() => moveNo(setNoPos1, btnRef1)}
            onMouseMove={() => moveNo(setNoPos1, btnRef1)}
            className="px-4 sm:px-8 py-2 sm:py-3 rounded-full bg-red-500 text-sm sm:text-lg font-semibold"
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
            {/* Fireworks */}
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
              className="relative z-10 bg-zinc-900 border border-zinc-700 rounded-2xl p-4 sm:p-12 text-center shadow-2xl w-80 sm:w-105"
            >
              {/* STEP 1 */}
              {step === 1 && (
                <>
                  <h2 className="text-xl sm:text-4xl font-bold text-pink-400 mb-4 sm:mb-6">
                    ❤️ She Said YES ❤️
                  </h2>
                  <p className="text-sm sm:text-xl mb-4 sm:mb-8">
                    Na loves you 🎆
                  </p>
                  <h3 className="text-base sm:text-2xl font-semibold mb-4 sm:mb-8">
                    Will you love me forever?
                  </h3>
                  <div className="relative h-16 sm:h-20 flex items-center justify-center gap-4">

                    {/* YES */}
                    <button
                      onClick={() => setStep(2)}
                      className="px-3 sm:px-6 py-1 sm:py-2 rounded-full bg-green-500 hover:bg-green-600 text-sm sm:text-base"
                    >
                      Yes
                    </button>

                    {/* NO */}
                    <motion.button
                      ref={btnRef2}
                      animate={{ x: noPos2.x, y: noPos2.y }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      onMouseEnter={() => moveNo(setNoPos2, btnRef2)}
                      onMouseMove={() => moveNo(setNoPos2, btnRef2)}
                      className="px-3 sm:px-6 py-1 sm:py-2 rounded-full bg-red-500 text-sm sm:text-base"
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
                  <h2 className="text-xl sm:text-4xl font-bold text-green-400 mb-4">
                    🎆 Yaaaa! 🎆
                  </h2>
                  <p className="text-base sm:text-2xl">
                    She loves me forever ❤️🔥
                  </p>
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="text-4xl sm:text-6xl mt-4 sm:mt-6"
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