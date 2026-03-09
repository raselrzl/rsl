"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function FriendsPage() {
  const router = useRouter(); // ✅ add router

  const [showPopup, setShowPopup] = useState(false);
  const [oopsPos, setOopsPos] = useState({ x: 0, y: 0 });

  const popupRef = useRef<HTMLDivElement>(null);
  const oopsRef = useRef<HTMLButtonElement>(null);

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
    router.push("/endfiends"); // ✅ redirect to home
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-black text-white font-julius">
      {/* Background */}
      <Image
        src="/img1.jpg"
        alt="Fireworks"
        fill
        className="object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-black/60 z-0"></div>
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
          className="rounded-full shadow-lg hover:scale-110 transition"
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

      {showPopup && (
        <>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black z-10 flex items-center justify-center">
            {/* Popup card (same size as main card) */}
            <div
              ref={popupRef}
              className="relative z-20 bg-zinc-900 border border-zinc-700 rounded-2xl p-8 sm:p-12 text-center shadow-2xl w-80 sm:w-105"
            >
              {/* Big sad emoji */}
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
                {/* YES button */}
                <button
                  onClick={handleYes}
                  className="px-6 py-2 rounded-full bg-green-500 hover:bg-green-600 transition shadow-lg"
                >
                  OK 😞
                </button>

                {/* Moving Ooops button */}
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
