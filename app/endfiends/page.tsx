"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

export default function EndFriends() {
  const router = useRouter();

  const handleRestart = () => {
    router.push("/"); // redirect to home
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

      {/* End Card */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 bg-zinc-900 border border-zinc-700 rounded-2xl p-8 sm:p-12 text-center shadow-2xl w-80 sm:w-105"
      >

        <div className="text-6xl mb-4">😂</div>

        <h1 className="text-2xl sm:text-4xl font-bold text-pink-400 mb-6">
          Congratulations!
        </h1>

        <p className="text-sm sm:text-xl mb-6">
          You successfully punched Anisa 😭  
          <br />
          She will remember this forever.
        </p>

        <p className="text-zinc-400 text-sm mb-8">
          Friendship level: <span className="text-red-400">-100</span>
        </p>

        {/* Restart Button */}
        <button
          onClick={handleRestart}
          className="px-8 py-3 rounded-full bg-green-500 hover:bg-green-600 transition shadow-lg"
        >
          🔁 Start Again
        </button>

      </motion.div>
    </div>
  );
}