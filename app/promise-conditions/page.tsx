"use client";

export default function PromiseConditionsPage() {
  const conditions = [
    "Always be respectful to each other ❤️",
    "No bad words or insults 😇",
    "Discuss problems calmly and find solutions together 🤝",
    "Never break a promise you make 💌",
    "Always communicate honestly and have fun together 🗣️",
    "Support each other through hard times 💪",
    "Share happiness and celebrate moments together 🎉",
    "Avoid anything that could hurt each other emotionally 💔",
    "Communicate openly and lovingly every day 🗣️💖",
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white font-julius p-4 sm:p-6">
      <div className="border-4 border-zinc-700 rounded-2xl shadow-2xl p-6 sm:p-10 w-full max-w-md bg-zinc-900">

        {/* Top instructions */}
        <div className="mb-6 text-center">
          <div className="text-5xl mb-4">💖</div>
          <p className="text-sm sm:text-lg mb-2">
            Read carefully 😔
          </p>
          <p className="text-sm sm:text-lg font-semibold text-red-400">
            This shows your intelligence and willingness to be with Rasel!
          </p>
        </div>

        {/* Conditions Box */}
        <div className="border-2 border-green-500 rounded-lg p-4 mb-6 bg-zinc-800">
          <h2 className="text-lg sm:text-xl font-bold mb-4 text-green-400 text-center">
            📜 Promises
          </h2>
          <ul className="text-sm sm:text-base list-disc list-inside space-y-2">
            {conditions.map((cond, idx) => (
              <li key={idx}>{cond}</li>
            ))}
          </ul>
        </div>

        {/* Bottom instructions */}
        <div className="text-center">
          <p className="text-sm sm:text-lg mb-2">
            When you truly believe in love and respect in your heart, please make a **screenshot of the promise box** from top to bottom. 📸
          </p>
          <p className="text-sm sm:text-lg font-semibold text-yellow-400">
            Send it to Rasel's email. Only then will he **open his heart for the last time**, never to close again. ❤️
          </p>
        </div>
      </div>
    </div>
  );
}