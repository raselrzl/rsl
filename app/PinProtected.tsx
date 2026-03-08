"use client";

import { useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";
// @ts-ignore
import Cookies from "js-cookie";

type Props = {
  children: ReactNode;
  pin?: string; // default pin can be overridden
};

export default function PinProtected({ children, pin = "123456" }: Props) {
  const router = useRouter();

  useEffect(() => {
    const savedPin = Cookies.get("rasel_pin");
    if (savedPin !== pin) {
      // If PIN not available or incorrect, redirect to homepage
      router.push("/");
    }
  }, [pin, router]);

  return <>{children}</>;
}