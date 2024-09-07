import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./ui/components/nav-bar";
import { sofiaSansCondensed } from "./ui/fonts";
import { HeartIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import ScrollToAbout from "./ui/components/scroll-to-about";

export const metadata: Metadata = {
  title: "Jason Snider",
  description: "Jason Snider",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sofiaSansCondensed.className} text-3xl font-light block animate-fadeIn`}
      >
        <header className="cover h-screen m-0 bg-[#333] relative animate-coverFade">
          <NavBar />

          <h1
            className={`${sofiaSansCondensed.className} font-thin md:text-[8rem] sm:text-[4rem] text-center absolute w-[100%] top-[calc(50vh-8rem)] tracking-[0.6rem] [text-shadow:2px_4px_3px_rgba(0,0,0,0.3)] pl-6`}
          >
            Jason Snider
            <div className="md:text-[3rem] sm:text-[2rem] text-center text-white tracking-[0.2rem] mt-14 pr-6">
              Builder of Things, Doer of Stuff
            </div>
          </h1>
          <ScrollToAbout
            href="#About"
            link={<ChevronDownIcon className="h-24 w-24" />}
            classDef="w-24 h-24 left-1/2 absolute right-[calc(50vw-24)] top-[calc(80vh-8rem)]  transform -translate-x-1/2"
          />
          {/* <a
            href="#About"
            className="w-24 h-24 left-1/2 absolute right-[calc(50vw-24)] top-[calc(80vh-8rem)]  transform -translate-x-1/2"
          >
            <ChevronDownIcon className="h-24 w-24" />
          </a> */}
        </header>
        {children}
        <footer className="w-[960px] max-w-[90%] mt-[60px] mx-auto">
          <div className="float-left">
            Built with&nbsp;
            <HeartIcon className="w-8 h-8 inline" />
            &nbsp;<span className="sr-only">love</span>
            by Jason in Chicago
          </div>
          <div className="float-right">
            <a href="terms" className="pr-8">
              Terms
            </a>
            <a href="privacy">Privacy</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
