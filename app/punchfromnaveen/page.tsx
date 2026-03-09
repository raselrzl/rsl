"use client";

import Image from "next/image";
import { useState } from "react";

export default function PunchFromNaveenPage() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-black font-julius p-4 sm:p-6">
      {/* Dark overlay behind card */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 to-black/90"></div>

      <div className="relative z-10 border-4 border-zinc-700 rounded-2xl shadow-2xl p-6 sm:p-10 w-full max-w-md bg-zinc-900 text-center space-y-6">
        {/* Top emoji */}
        <div className="text-6xl mb-4 animate-bounce">😎✋</div>

        {/* Main heading */}
        <h1 className="text-xl sm:text-3xl font-bold mb-2 text-green-400">
          Chill!{" "}
          <Image
            src="/7.png"
            alt="Nadira"
            width={80}
            height={80}
            className="rounded-full object-cover border-2 border-red-500 inline-block align-middle"
          />{" "}
          I won’t punch back 😏
        </h1>

        {/* Paragraphs */}
        <p className="text-sm sm:text-lg mb-2">
          You punched me, but{" "}
          <Image
            src="/5.png"
            alt="Naven"
            width={60}
            height={60}
            className="rounded-full object-cover border-2 border-red-500 inline-block align-middle"
          />{" "}
          a good boy and I won’t punch you back. No worries! 🙌
        </p>

        <p className="text-sm sm:text-lg mb-2">
          But… after your marriage, if you don’t marry Rasel 💖, I will return
          your punch. It’s a{" "}
          <span className="font-bold text-pink-400">due</span>! 😆
        </p>

        <p className="text-sm sm:text-lg mb-2">
          So play fair, respect{" "}
          <Image
            src="/rasel.png"
            alt="Rasel"
            width={60}
            height={60}
            className="rounded-full object-cover border-2 border-red-500 inline-block align-middle"
          />{" "}
          and everything will be cool! 😎
        </p>

        {/* Fun button */}
        <button
          onClick={() => setShowPopup(true)}
          className="px-6 sm:px-10 py-3 sm:py-4 rounded-full bg-yellow-500 hover:bg-yellow-600 text-sm sm:text-lg font-semibold shadow-lg transition-transform transform hover:scale-105"
        >
          Got it! 👍
        </button>

        {showPopup && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-red-600 border-2 border-red-400 text-white px-6 py-3 rounded-xl shadow-xl animate-bounce">
            😂 Don't Forget! I will remember this punch!
          </div>
        )}

        <p className="mt-4 text-sm sm:text-base text-blue-400 animate-pulse">
          Remember this 😅
        </p>
      </div>
    </div>
  );
}
