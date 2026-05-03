import * as React from "react";
import { useState } from "react";

import Link from "next/link";
import { ListMobile } from "./ListMobile";

import { AnimatePresence } from "framer-motion";
import { data } from "../mock/mock";

export const Navbar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <nav className="py-8 col-span-10 col-start-2 col-end-12 flex flex-row justify-between items-center">
        <Link href="/">
          <span className="font-extralight text-2xl cursor-pointer">
            {data.name}
          </span>
        </Link>

        <ul className="hidden md:flex flex-row items-center gap-2">
          <li className="py-1 px-2 text-sm font-light text-gray-600 hover:text-gray-900">
            <Link href="/">
              <span className="cursor-pointer">Home</span>
            </Link>
          </li>
          <li className="py-1 px-2 text-sm font-light text-gray-600 hover:text-gray-900">
            <Link href="/portfolio">
              <span className="cursor-pointer">Portfolio</span>
            </Link>
          </li>
          <li className="py-1 px-2 text-sm font-light text-gray-600 hover:text-gray-900">
            <Link href="/bio">
              <span className="cursor-pointer">Bio</span>
            </Link>
          </li>
          <li className="py-1 px-2 text-sm font-light text-gray-600 hover:text-gray-900">
            <Link href="/contact">
              <span className="cursor-pointer">Contact</span>
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setIsMobile(!isMobile)}
          className={`${
            isMobile ? "fixed" : "block"
          } right-6 sm:right-8 md:hidden z-20 h-8 w-8 focus:outline-none`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current text-gray-600 hover:text-gray-900 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {isMobile && <ListMobile />}
      </AnimatePresence>
    </>
  );
};
