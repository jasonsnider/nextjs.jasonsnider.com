"use client";
import NavBar from "./nav-bar";
import { usePathname } from "next/navigation";
import Cover from "./cover";

export default function Header() {
  const pathname = usePathname();
  return pathname === "/" ? (
    <header className="h-screen m-0 bg-[#333] animate-coverFade">
      <NavBar />
      <Cover />
    </header>
  ) : (
    <header className="h-20 m-0 bg-[#333]">
      <NavBar />
    </header>
  );
}
