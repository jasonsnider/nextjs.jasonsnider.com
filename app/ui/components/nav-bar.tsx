"use client";
import { useState } from "react";
import { Bars3Icon, CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import clsx from "clsx";
import ScrollToAbout from "./scroll-to-about";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    {
      id: 1,
      link: "about me",
      href: "/#About",
      handler: "handleScrollAndUpdateHash",
    },
    {
      id: 2,
      link: "blog",
      href: "#",
    },
    {
      id: 3,
      link: "games",
      href: "#",
    },
    {
      id: 4,
      link: "tools",
      href: "#",
    },
    {
      id: 5,
      link: "contact",
      href: "#",
    },
  ];

  return (
    <nav
      id="MainNav"
      className="fixed top-0 right-0 left-0 z-[10000] text-white bg-[rgba(30,30,30,0.5)] pl-2 pt-3 pr-2 pb-3 md:flex md:justify-between md:items-center"
    >
      <a className="text-xl" href="/">
        <div className="text-xl inline">
          <CodeBracketIcon className="w-8 h-8 inline" /> Jason Snider
        </div>
      </a>
      <button onClick={toggleMenu} className="text-white float-right md:hidden">
        <Bars3Icon className="w-8 h-8 inline" />
        <span className="sr-only">Menu</span>
      </button>
      <ul
        className={clsx(
          "float-none m-0",
          "md:flex md:justify-end md:space-x-4",
          !isMenuOpen && "hidden sm:block",
          "sm:hidden md:flex lg:flex",
        )}
      >
        {links.map(({ id, link, href, handler }) => (
          <li key={id} className="inline">
            {handler === "handleScrollAndUpdateHash" ? (
              <ScrollToAbout
                link={link}
                href={href}
                classDef="block leading-[54px] text-white no-underline px-4 text-[1.4rem] hover:bg-[rgba(60,60,60,0.5)] active:bg-white active:text-gray-900"
              />
            ) : (
              <Link
                href={href}
                className="block leading-[54px] text-white no-underline px-4 text-[1.4rem] hover:bg-[rgba(60,60,60,0.5)] active:bg-white active:text-gray-900"
              >
                {link}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
