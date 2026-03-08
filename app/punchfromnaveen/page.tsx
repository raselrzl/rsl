"use client";

export default function PunchFromNaveenPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white font-julius p-4 sm:p-6">
      <div className="border-4 border-zinc-700 rounded-2xl shadow-2xl p-6 sm:p-10 w-full max-w-md bg-zinc-900 text-center">

        {/* Top emoji */}
        <div className="text-6xl mb-4">😎✋</div>

        {/* Main heading */}
        <h1 className="text-xl sm:text-3xl font-bold mb-6 text-green-400">
          Chill! I won’t punch back 😏
        </h1>

        {/* Fun message */}
        <p className="text-sm sm:text-lg mb-4">
          You punched me, but I’m a good boy and I won’t punch you back. No worries! 🙌
        </p>

        <p className="text-sm sm:text-lg mb-4">
          But… after your marriage, if you don’t marry Rasel 💖, I will return your punch. It’s a **due**! 😆
        </p>

        <p className="text-sm sm:text-lg mb-6">
          So play fair, respect Rasel, and everything will be cool! 😎
        </p>

        {/* Fun button to acknowledge */}
        <button
          onClick={() => alert("😂 You acknowledged Naveen's fun warning!")}
          className="px-6 sm:px-10 py-3 sm:py-4 rounded-full bg-yellow-500 hover:bg-yellow-600 text-sm sm:text-lg font-semibold shadow-lg"
        >
          Got it! 👍
        </button>

        <p className="mt-6 text-sm sm:text-base text-blue-400">
          Remember this😅
        </p>
      </div>
    </div>
  );
}