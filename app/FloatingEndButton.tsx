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
      className="fixed z-50 bottom-8 right-8 px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-bold shadow-lg"
      onClick={handleClick}
    >
      🏁 End
    </button>
  );
}