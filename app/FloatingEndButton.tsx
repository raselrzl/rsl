"use client";

import { useRouter } from "next/navigation";
// @ts-ignore
import Cookies from "js-cookie";

export default function FloatingEndButton() {
  const router = useRouter();

  const handleClick = () => {
    // Clear the PIN cookie
    Cookies.remove("rasel_pin");
    // Reload the page to go back to PIN screen
    window.location.reload();
  };

  return (
    <button
      className="fixed z-50 bottom-8 right-8 px-3 py-1 rounded-full bg-red-500 hover:bg-red-600 text-white font-bold shadow-lg"
      onClick={handleClick}
    >
      🏁The End
    </button>
  );
}