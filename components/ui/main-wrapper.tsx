"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function MainWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <main
      style={{ overflowY: pathname === "/"? "auto" : "hidden" }}
      className="h-full w-full"
    >
      {children}
    </main>
  );
}
