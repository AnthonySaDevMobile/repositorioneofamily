"use client"
import React, { useState } from "react";
import Link from "next/link";
import Logo from '../../../public/logoHeader.png'
import Image from "next/image";
import { motion } from 'framer-motion'

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.2 }}
      className="md:w-10/12 md:top-10 top-5 rounded-[8rem] text-white text-xs border-2 border-white tracking-widest items-center flex px-8 md:px-0 justify-between headerClass fixed left-0 right-0 mx-auto z-50 py-2"
    >

      <div className="flex items-center gap-8 w-full md:px-5 justify-between">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.6 }}
        >
          <Link href="/">
            <Image
              priority="true"
              src={Logo}
              widht={100}
              height={100}
              alt="logo"
              className="w-1/2 object-cover bg-center brightness-200"
            />
          </Link>
        </motion.div>
        <nav className=" hidden w-full md:flex items-center justify-end gap-10 text-base">
          <Link className="link" href="/" >
            <p className="hover:text-[#897876] cursor-pointer transition ease-in delay-75 ">
              Sobre
            </p>
          </Link>
          <Link className="link" href="/blog">
            <p className="hover:text-[#897876] cursor-pointer transition ease-in delay-75 ">
              Blog
            </p>
          </Link>

        </nav>
      </div>

      <section className="flex text-right md:hidden transition-all delay-100">
        <div
          className="space-y-2 "
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          {!isNavOpen ?
            <>
              <p className="block h-0.5 w-8 animate-pulse bg-white"></p>
              <p className="block h-0.5 w-8 animate-pulse bg-white"></p>
              <p className="block h-0.5 w-8 animate-pulse bg-white"></p>
            </>
            :
            <div
              onClick={() => setIsNavOpen((prev) => prev)}
              className="flex items-center justify-center"
            >
              <svg
                className="h-8 w-10  text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="10" x2="10" y2="22" />
                <line x1="10" y1="10" x2="22" y2="22" />
              </svg>
            </div>
          }
        </div>

        {isNavOpen && (
          <div className="showMenuNav">
            <div className="MENU-LINK-MOBILE-OPEN flex flex-col font-extrabold items-center justify-around min-h-[100px]">
              <Link href="/">
                Sobre
              </Link>
              <Link href="/blog">
                Blog
              </Link>
            </div>
          </div>
        )}
      </section>

      <style jsx>{`
.hideMenuNav {
  display: none;
}

.showMenuNav {
  display: flex;
  align-items: center;
  position: absolute;
  top: 3.2rem;
  right: 0.3rem;
  color: white;
  background: #d6b19f;
  z-index: 99;
  padding: 1.5rem;
  border-bottom-left-radius: 4rem;
  border-bottom-right-radius: 4rem;
  animation: fadeInDown 0.5s ease-in-out;
  transform-style: preserve-3d;
  backface-visibility: hidden;
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-50px) rotateX(-90deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotateX(0);
  }
}

      `}</style>

    </motion.header>
  );
}
