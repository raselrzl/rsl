"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
// @ts-ignore
import Cookies from "js-cookie";

export default function Home() {
  const DEFAULT_PIN = "123456"; // default PIN
  const router = useRouter();

  // PIN state
  const [pin, setPin] = useState("");
  const [hasAccess, setHasAccess] = useState(false);
  const [error, setError] = useState("");

  // No button state
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const noBtnRef = useRef<HTMLButtonElement>(null);

  // Check cookie on load
  useEffect(() => {
    const savedPin = Cookies.get("rasel_pin");
    if (savedPin === DEFAULT_PIN) {
      setHasAccess(true);
    }
  }, []);

  // Move "No" button randomly
  const moveNo = () => {
    if (!cardRef.current || !noBtnRef.current) return;

    const cardRect = cardRef.current.getBoundingClientRect();
    const btnRect = noBtnRef.current.getBoundingClientRect();

    const maxX = cardRect.width - btnRect.width;
    const maxY = cardRect.height - btnRect.height;

    const x = Math.random() * maxX - maxX / 2;
    const y = Math.random() * maxY - maxY / 2;

    setNoPos({ x, y });
  };

  // Handle PIN submit
  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === DEFAULT_PIN) {
      Cookies.set("rasel_pin", pin, { expires: 7 }); // save for 7 days
      setHasAccess(true);
      setError("");
    } else {
      setError("❌ Incorrect PIN. Please try again!");
    }
  };

  // If access granted, show main content
  if (hasAccess) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white font-julius p-4 sm:p-6">
        <motion.div
          ref={cardRef}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="border border-zinc-700 rounded-2xl shadow-2xl p-6 sm:p-10 text-center relative overflow-hidden min-w-[300px] max-w-3xl"
        >
          <h1 className="text-xl sm:text-4xl font-bold leading-snug sm:leading-tight mb-8">
            Hi Nadira ❤️ <br /> I sent you a small gift—can you pick it up?
          </h1>

          <div className="relative h-24 flex items-center justify-center gap-6">
            <button
              onClick={() => router.push("/stepone")}
              className="px-6 sm:px-10 py-3 sm:py-4 rounded-full bg-green-500 hover:bg-green-600 text-sm sm:text-lg font-semibold shadow-lg"
            >
              Yes
            </button>

            <motion.button
              ref={noBtnRef}
              animate={{ x: noPos.x, y: noPos.y }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 25,
                duration: 0.3,
              }}
              onMouseEnter={moveNo}
              onClick={moveNo}
              className="px-6 sm:px-10 py-3 sm:py-4 rounded-full bg-red-500 text-sm sm:text-lg font-semibold shadow-lg"
            >
              No
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  // PIN input page
  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white font-julius p-4 sm:p-6">
      <div className="border border-zinc-700 rounded-2xl shadow-2xl p-6 sm:p-10 w-full max-w-md bg-zinc-900 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">Enter PIN 🔒</h1>

        <form onSubmit={handlePinSubmit} className="flex flex-col gap-4">
          <input
            type="password"
            maxLength={6}
            value={pin}
            onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))}
            placeholder="Enter PIN"
            className="text-center text-xl sm:text-2xl p-3 rounded-lg bg-zinc-800 border border-zinc-600 focus:outline-none"
          />

          {/* Only show error below input */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-green-500 hover:bg-green-600 text-lg font-semibold shadow-lg"
          >
            Unlock
          </button>
        </form>
      </div>
    </div>
  );
}