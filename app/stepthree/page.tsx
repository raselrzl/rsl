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
    link: string,
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
      {/* Moving punch emojis background */}
      <motion.div
        className="absolute text-6xl opacity-20"
        animate={{ x: [0, 200, -200, 0], y: [0, -150, 150, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        👊
      </motion.div>

      <motion.div
        className="absolute text-7xl opacity-20"
        animate={{ x: [0, -250, 250, 0], y: [0, 200, -200, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        👊
      </motion.div>

      <motion.div
        className="absolute text-5xl opacity-20"
        animate={{ x: [0, 300, -300, 0], y: [0, -200, 200, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        👊
      </motion.div>

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
              handleClickMoveThenNavigate(
                nadiraClicks,
                setNadiraClicks,
                setNadiraPos,
                nadiraRef,
                "/nadira",
              )
            }
            className="p-1 rounded-full shadow-lg hover:scale-110 transition"
          >
            <Image
              src="/1.png"
              alt="Nadira"
              width={60}
              height={60}
              className="rounded-full object-cover border-2 border-red-900"
            />
          </motion.button>

          {/* Rasel */}
          <motion.button
            ref={raselRef}
            animate={{ x: raselPos.x, y: raselPos.y }}
            transition={{ type: "spring", stiffness: 500, damping: 25 }}
            onClick={() =>
              handleClickMoveThenNavigate(
                raselClicks,
                setRaselClicks,
                setRaselPos,
                raselRef,
                "/rasel",
              )
            }
             className="p-1 rounded-full shadow-lg hover:scale-110 transition"
          >
            <Image
              src="/3.png"
              alt="Rasel"
              width={60}
              height={60}
              className="rounded-full object-cover border-2 border-blue-900"
            />
          </motion.button>

          {/* Faiza */}
          <motion.button
            ref={faizaRef}
            animate={{ x: faizaPos.x, y: faizaPos.y }}
            transition={{ type: "spring", stiffness: 500, damping: 25 }}
            onMouseEnter={() => moveBtn(setFaizaPos, faizaRef)}
            onClick={() => moveBtn(setFaizaPos, faizaRef)}
           className="p-1 rounded-full shadow-lg hover:scale-110 transition"
          >
            <Image
              src="/8.png"
              alt="Faiza"
              width={60}
              height={60}
              className="rounded-full object-cover border-2 border-green-900"
            />
          </motion.button>

          {/* Mayub */}
          <motion.button
            ref={mayubRef}
            animate={{ x: mayubPos.x, y: mayubPos.y }}
            transition={{ type: "spring", stiffness: 500, damping: 25 }}
            onMouseEnter={() => moveBtn(setMayubPos, mayubRef)}
            onClick={() => moveBtn(setMayubPos, mayubRef)}
             className="p-1 rounded-full shadow-lg hover:scale-110 transition"
          >
            <Image
              src="/2.png"
              alt="Mayub"
              width={60}
              height={60}
              className="rounded-full object-cover border-2 border-purple-900"
            />
          </motion.button>

          {/* Naveen */}
          <motion.button
            ref={naveenRef}
            animate={{ x: naveenPos.x, y: naveenPos.y }}
            transition={{ type: "spring", stiffness: 500, damping: 25 }}
            onClick={() =>
              handleClickMoveThenNavigate(
                naveenClicks,
                setNaveenClicks,
                setNaveenPos,
                naveenRef,
                "/naveen",
              )
            }
           className="p-1 rounded-full shadow-lg hover:scale-110 transition"
          >
            <Image
              src="/5.png"
              alt="Naveen"
              width={60}
              height={60}
              className="rounded-full object-cover border-2 border-yellow-900"
            />
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
