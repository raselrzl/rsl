"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function StepPunch() {
  const router = useRouter();
  const cardRef = useRef<HTMLDivElement>(null);

  // State for moving buttons
  const [faizaPos, setFaizaPos] = useState({ x: 0, y: 0 });
  const [mayubPos, setMayubPos] = useState({ x: 0, y: 0 });

  // State for clickable buttons position & click count
  const [nadiraPos, setNadiraPos] = useState({ x: 0, y: 0 });
  const [raselPos, setRaselPos] = useState({ x: 0, y: 0 });
  const [naveenPos, setNaveenPos] = useState({ x: 0, y: 0 });

  const [nadiraClicks, setNadiraClicks] = useState(0);
  const [raselClicks, setRaselClicks] = useState(0);
  const [naveenClicks, setNaveenClicks] = useState(0);

  const moveBtn = (setPos: Function, btnRef: any) => {
    if (!cardRef.current || !btnRef.current) return;
    const cardRect = cardRef.current.getBoundingClientRect();
    const btnRect = btnRef.current.getBoundingClientRect();

    const maxX = cardRect.width - btnRect.width;
    const maxY = cardRect.height - btnRect.height;

    const x = Math.random() * maxX - maxX / 2;
    const y = Math.random() * maxY - maxY / 2;

    setPos({ x, y });
  };

  const faizaRef = useRef<HTMLButtonElement>(null);
  const mayubRef = useRef<HTMLButtonElement>(null);
  const nadiraRef = useRef<HTMLButtonElement>(null);
  const raselRef = useRef<HTMLButtonElement>(null);
  const naveenRef = useRef<HTMLButtonElement>(null);

  const handleClickMoveThenNavigate = (
    clicks: number,
    setClicks: Function,
    setPos: Function,
    btnRef: any,
    link: string
  ) => {
    if (clicks < 2) {
      moveBtn(setPos, btnRef);
      setClicks(clicks + 1);
    } else {
      router.push(link);
    }
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black text-white font-julius">
      <Image src="/fireworks1.gif" alt="Fireworks" fill className="object-cover opacity-70" />

      <motion.div
        ref={cardRef}
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 bg-zinc-900 border border-zinc-700 rounded-2xl p-6 sm:p-12 text-center shadow-2xl w-80 sm:w-105 flex flex-col items-center"
      >
        <h2 className="text-xl sm:text-4xl font-bold text-pink-400 mb-4 sm:mb-6">
          😢 Since you are not satisfied, whom do you want to punch? 😢
        </h2>

        <div className="relative h-32 sm:h-36 flex flex-wrap justify-center gap-4 items-center mb-6">
          {/* Nadira */}
          <motion.button
            ref={nadiraRef}
            animate={{ x: nadiraPos.x, y: nadiraPos.y }}
            transition={{ type: "spring", stiffness: 500, damping: 25 }}
            onClick={() =>
              handleClickMoveThenNavigate(nadiraClicks, setNadiraClicks, setNadiraPos, nadiraRef, "/nadira")
            }
            className="px-6 py-2 rounded-full bg-red-500 text-sm sm:text-base shadow-lg hover:bg-red-600 transition"
          >
            Nadira
          </motion.button>

          {/* Rasel */}
          <motion.button
            ref={raselRef}
            animate={{ x: raselPos.x, y: raselPos.y }}
            transition={{ type: "spring", stiffness: 500, damping: 25 }}
            onClick={() =>
              handleClickMoveThenNavigate(raselClicks, setRaselClicks, setRaselPos, raselRef, "/rasel")
            }
            className="px-6 py-2 rounded-full bg-blue-500 text-sm sm:text-base shadow-lg hover:bg-blue-600 transition"
          >
            Rasel
          </motion.button>

          {/* Faiza */}
          <motion.button
            ref={faizaRef}
            animate={{ x: faizaPos.x, y: faizaPos.y }}
            transition={{ type: "spring", stiffness: 500, damping: 25 }}
            onMouseEnter={() => moveBtn(setFaizaPos, faizaRef)}
            onClick={() => moveBtn(setFaizaPos, faizaRef)}
            className="px-6 py-2 rounded-full bg-green-500 text-sm sm:text-base shadow-lg hover:bg-green-600 transition"
          >
            Faiza
          </motion.button>

          {/* Mayub */}
          <motion.button
            ref={mayubRef}
            animate={{ x: mayubPos.x, y: mayubPos.y }}
            transition={{ type: "spring", stiffness: 500, damping: 25 }}
            onMouseEnter={() => moveBtn(setMayubPos, mayubRef)}
            onClick={() => moveBtn(setMayubPos, mayubRef)}
            className="px-6 py-2 rounded-full bg-purple-500 text-sm sm:text-base shadow-lg hover:bg-purple-600 transition"
          >
            Mayub
          </motion.button>

          {/* Naveen */}
          <motion.button
            ref={naveenRef}
            animate={{ x: naveenPos.x, y: naveenPos.y }}
            transition={{ type: "spring", stiffness: 500, damping: 25 }}
            onClick={() =>
              handleClickMoveThenNavigate(naveenClicks, setNaveenClicks, setNaveenPos, naveenRef, "/naveen")
            }
            className="px-6 py-2 rounded-full bg-yellow-500 text-sm sm:text-base shadow-lg hover:bg-yellow-600 transition"
          >
            Naveen
          </motion.button>
        </div>

        <button
          onClick={() => router.push("/friends")}
          className="mt-2 px-6 py-2 rounded-full bg-green-500 text-sm sm:text-base shadow-lg hover:bg-green-600 transition"
        >
          Do you want to punch your friend? Just click!
        </button>
      </motion.div>
    </div>
  );
}