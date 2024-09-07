"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface NavBarProps {
  link: string | ReactNode;
  href: string;
  classDef: string;
}

export default function ScrollToAbout({ link, href, classDef }: NavBarProps) {
  const handleScrollAndUpdateHash = (
    e: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    e.preventDefault();

    const element = document.getElementById("About");
    if (element) {
      const rect = element.getBoundingClientRect();
      window.scrollTo({
        top: rect.top + window.pageYOffset - 60,
        behavior: "smooth",
      });
    }
    window.history.pushState(null, "#About", "#About");
  };

  return (
    <Link href={href} className={classDef} onClick={handleScrollAndUpdateHash}>
      {link}
    </Link>
  );
}
