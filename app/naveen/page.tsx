"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NaveenPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white font-julius p-4 sm:p-6">
      <div className="border-4 border-zinc-700 rounded-2xl shadow-2xl p-6 sm:p-10 w-full max-w-md bg-zinc-900 text-center">
        <div className="text-6xl mb-4">🥊</div>

        <h1 className="text-xl sm:text-3xl font-bold mb-6 text-red-400">
          Hey Nadira! I’m your brother Naveen 😡
        </h1>

        <p className="text-sm sm:text-lg mb-4">
          You punched{" "}
          <Image
            src="/5.png"
            alt="Naven"
            width={80}
            height={80}
            className="rounded-full object-cover border-2 border-red-500"
          />{" "}
          and broke my nose! 😤
        </p>

        <p className="text-sm sm:text-lg mb-6">
          I’m on my way home… be ready or else I’ll break yours! 😏
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6">
          {/* Only this one works */}
          <button
            onClick={() => router.push("/punchfromnaveen")}
            className="px-6 sm:px-10 py-3 sm:py-4 rounded-full bg-green-500 hover:bg-green-600 text-sm sm:text-lg font-semibold shadow-lg"
          >
            Be Ready 🥊
          </button>

          {/* Not ready disabled */}
          <button
            disabled
            className="px-6 sm:px-10 py-3 sm:py-4 rounded-full bg-gray-600 text-sm sm:text-lg font-semibold shadow-lg cursor-not-allowed opacity-50"
          >
            Not Ready 😬
          </button>
        </div>

        <p className="mt-6 text-sm sm:text-base text-yellow-400">
          Only the brave click "Be Ready"! 😏
        </p>
      </div>
    </div>
  );
}
