import type { Metadata } from "next";
import "./globals.css";
import { sofiaSansCondensed } from "./ui/fonts";
import { HeartIcon } from "@heroicons/react/24/solid";
import Header from "./ui/components/header";

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
        className={`${sofiaSansCondensed.className} antialiased text-3xl font-light block flex flex-col min-h-screen`}
      >
        <Header />
        <main className="w-[960px] max-w-[90%] mt-[80px] mx-auto flex-grow">
          {children}
        </main>
        <footer className="w-[960px] max-w-[90%] mt-[60px] pb-4 mx-auto">
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
