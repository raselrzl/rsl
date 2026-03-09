"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function EndFriends() {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);

  const handleApology = () => {
    setShowPopup(true);

    // Hide popup after 1.5 seconds then redirect
    setTimeout(() => {
      setShowPopup(false);
      router.push("/");
    }, 2000);
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-black text-white font-julius">
      {/* Background */}
      <Image
        src="/fireworks.gif"
        alt="Fireworks"
        fill
        className="object-cover opacity-70"
      />

      {/* End Card */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 bg-zinc-900 border border-zinc-700 rounded-2xl p-8 sm:p-12 text-center shadow-2xl w-80 sm:w-105"
      >
        {/* Laughing emoji */}
        <div className="text-6xl mb-4">😂</div>

        {/* Title with inline image */}
        <h1 className="text-2xl sm:text-4xl font-bold text-pink-400 mb-6 flex items-center justify-center gap-2">
          👀 Oho........ you're on 
          <Image
            src="/6.png"
            alt="Anisa"
            width={50}
            height={50}
            className="rounded-full object-cover border-2 border-red-500"
          />{" "}
          's list!
        </h1>

        {/* Punch info with inline image */}
        <p className="text-sm sm:text-xl mb-6 flex flex-col items-center gap-2">
          You punched 😭
          <Image
            src="/6.png"
            alt="Anisa"
            width={60}
            height={60}
            className="rounded-full object-cover border-2 border-red-500"
          />
          will remember this.
        </p>

        {/* Friendship level */}
        <p className="text-zinc-400 text-sm mb-8">
          Friendship level: <span className="text-red-400">-100</span>
        </p>

        {/* Apology button */}
        <button
          onClick={handleApology}
          className="px-8 py-3 rounded-full bg-green-500 hover:bg-green-600 transition shadow-lg flex items-center justify-center gap-2"
        >
          🙏 Apology
        </button>

        {/* Popup "Not Accepted" */}
        <AnimatePresence>
          {showPopup && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg font-bold"
            >
              ❌ Apology Not Accepted!
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}