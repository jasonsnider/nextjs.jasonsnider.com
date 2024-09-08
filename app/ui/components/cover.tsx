"use client";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import ScrollToAbout from "./scroll-to-about";

export default function Cover() {
  return (
    <>
      <h1 className="font-thin md:text-[8rem] sm:text-[4rem] text-center text-white absolute w-[100%] top-[calc(50vh-8rem)] tracking-[0.6rem] [text-shadow:2px_4px_3px_rgba(0,0,0,0.3)] pl-6">
        Jason Snider
        <div className="md:text-[3rem] sm:text-[1.9rem] text-center text-white tracking-[0.2rem] mt-14 pr-6">
          Builder of Things, Doer of Stuff
        </div>
      </h1>
      <ScrollToAbout
        href="#About"
        link={<ChevronDownIcon className="h-24 w-24" />}
        classDef="w-24 h-24 left-1/2 absolute right-[calc(50vw-24)] top-[calc(80vh-8rem)] transform -translate-x-1/2 text-white"
      />
    </>
  );
}
