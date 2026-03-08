"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

export default function NadiraPage() {
  const router = useRouter();

  const handlePunch = () => {
    router.push("/stepthree");
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-black text-white font-julius">

      {/* Background */}
      <Image
        src="/fireworks1.gif"
        alt="Fireworks"
        fill
        className="object-cover opacity-70"
      />

      {/* Card */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 bg-zinc-900 border border-zinc-700 rounded-2xl p-8 sm:p-12 text-center shadow-2xl w-80 sm:w-105"
      >

        <div className="text-6xl mb-4">🤨</div>

        <h1 className="text-xl sm:text-3xl font-bold text-pink-400 mb-6">
          Wait a minute!
        </h1>

        <p className="text-sm sm:text-xl mb-6">
          You can't punch yourself 😤  
First hold your ears and do utha-bosha. 😑
        😏
        </p>

        {/* Punch Button */}
        <button
          onClick={handlePunch}
          className="px-8 py-3 rounded-full bg-red-500 hover:bg-red-600 transition shadow-lg"
        >
         Then Punch Someone else 👊
        </button>

      </motion.div>
    </div>
  );
}