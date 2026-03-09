"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function FriendsPage() {
  const router = useRouter(); 
  const [showPopup, setShowPopup] = useState(false);
  const [oopsPos, setOopsPos] = useState({ x: 0, y: 0 });

  const popupRef = useRef<HTMLDivElement>(null);
  const oopsRef = useRef<HTMLButtonElement>(null);

  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // Get window size on client
  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const moveOopsBtn = () => {
    if (!popupRef.current || !oopsRef.current) return;

    const popupRect = popupRef.current.getBoundingClientRect();
    const btnRect = oopsRef.current.getBoundingClientRect();

    const maxX = popupRect.width - btnRect.width;
    const maxY = popupRect.height - btnRect.height;

    const x = Math.random() * maxX - maxX / 2;
    const y = Math.random() * maxY - maxY / 2;

    setOopsPos({ x, y });
  };

  const handleYes = () => {
    router.push("/endfiends"); 
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-black text-white font-julius overflow-hidden">
      {/* Background: moving Anisa images */}
      <div className="absolute inset-0 pointer-events-none">
        {windowSize.width > 0 &&
          Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                x: Math.random() * windowSize.width,
                y: Math.random() * windowSize.height,
              }}
              animate={{
                x: [
                  Math.random() * windowSize.width,
                  Math.random() * windowSize.width,
                ],
                y: [
                  Math.random() * windowSize.height,
                  Math.random() * windowSize.height,
                ],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "linear",
              }}
            >
              <Image
                src="/6.png"
                alt="Anisa"
                width={80}
                height={80}
                className="rounded-full border-2 border-red-500"
              />
            </motion.div>
          ))}
      </div>

      {/* Main Card */}
      <div className="relative z-10 bg-zinc-900 border border-zinc-700 rounded-2xl p-8 sm:p-12 text-center shadow-2xl w-80 sm:w-105">
        <h2 className="text-xl sm:text-4xl font-bold text-pink-400 mb-6">
          <Image
            src="/rasel.png"
            alt="Rasel"
            width={80}
            height={80}
            className="rounded-full object-cover border-2 border-red-500"
          />{" "}
          Since{" "}
          <Image
            src="/1.png"
            alt="Nadira"
            width={80}
            height={80}
            className="rounded-full object-cover border-2 border-red-500"
          />{" "}
          came here so far, must punch on her face😏
        </h2>

        <p className="text-sm sm:text-xl mb-6">
          This is the only friend I know.
        </p>

        <button
          onClick={() => setShowPopup(true)}
          className="rounded-full shadow-lg hover:scale-110 transition relative z-10"
        >
          <Image
            src="/6.png"
            alt="Anisa"
            width={80}
            height={80}
            className="rounded-full object-cover border-2 border-red-500"
          />
        </button>
      </div>

      {/* Popup */}
      {showPopup && (
        <>
          <div className="absolute inset-0 bg-black z-10 flex items-center justify-center">
              {/* Background: moving Anisa images */}
      <div className="absolute inset-0 pointer-events-none">
        {windowSize.width > 0 &&
          Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                x: Math.random() * windowSize.width,
                y: Math.random() * windowSize.height,
              }}
              animate={{
                x: [
                  Math.random() * windowSize.width,
                  Math.random() * windowSize.width,
                ],
                y: [
                  Math.random() * windowSize.height,
                  Math.random() * windowSize.height,
                ],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "linear",
              }}
            >
              <Image
                src="/6.png"
                alt="Anisa"
                width={80}
                height={80}
                className="rounded-full border-2 border-red-500"
              />
            </motion.div>
          ))}
      </div>
            <div
              ref={popupRef}
              className="relative z-20 bg-zinc-900 border border-zinc-700 rounded-2xl p-8 sm:p-12 text-center shadow-2xl w-80 sm:w-105"
            >
              <div className="text-5xl mb-4">😞</div>

              <p className="text-pink-400 text-sm sm:text-xl mb-6">
                <Image
                  src="/6.png"
                  alt="Anisa"
                  width={80}
                  height={80}
                  className="rounded-full object-cover border-2 border-red-500"
                />
                I will return this punch! 😡
              </p>

              <div className="flex justify-center gap-4 relative">
                <button
                  onClick={handleYes}
                  className="px-6 py-2 rounded-full bg-green-500 hover:bg-green-600 transition shadow-lg"
                >
                  OK 😞
                </button>

                <motion.button
                  ref={oopsRef}
                  animate={{ x: oopsPos.x, y: oopsPos.y }}
                  transition={{ type: "spring", stiffness: 500, damping: 25 }}
                  onMouseEnter={moveOopsBtn}
                  onClick={moveOopsBtn}
                  className="px-6 py-2 rounded-full bg-yellow-500 hover:bg-yellow-600 shadow-lg"
                >
                  🙏 Oops, sorry!
                </motion.button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}