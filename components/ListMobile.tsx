import * as React from "react";
import Link from "next/link";

import { motion } from "framer-motion";

export const ListMobile: React.FC = () => {
  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="md:hidden fixed pt-24 z-10 w-screen h-screen"
        style={{ backgroundColor: "#f8edeb" }}
      >
        <ul className="grid grid-rows-4 gap-6 justify-center">
          <li className="py-1 px-2 text-lg text-center font-extralight text-gray-700 hover:text-gray-900">
            <Link href="/">
              <span className="cursor-pointer">Home</span>
            </Link>
          </li>
          <li className="py-1 px-2 text-lg text-center font-extralight text-gray-700 hover:text-gray-900">
            <Link href="/portfolio">
              <span className="cursor-pointer">Portfolio</span>
            </Link>
          </li>
          <li className="py-1 px-2 text-lg text-center font-extralight text-gray-700 hover:text-gray-900">
            <Link href="/bio">
              <span className="cursor-pointer">Bio</span>
            </Link>
          </li>
          <li className="py-1 px-2 text-lg text-center font-extralight text-gray-700 hover:text-gray-900">
            <Link href="/contact">
              <span className="cursor-pointer">Contact</span>
            </Link>
          </li>
        </ul>
      </motion.nav>
    </>
  );
};