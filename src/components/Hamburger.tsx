"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Koulen } from "next/font/google";

const koulen = Koulen({ subsets: ["latin"], weight: ["400"] });

const menuVariants = {
  initial: {
    x: +1000,
    y: -1000,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: {
    x: +1000,
    y: -1000,
    opacity: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const lineVariants = {
  closed: {
    rotate: 0,
    translateY: 0,
  },
  open: {
    rotate: 45,
    translateY: 10,
  },
  openMiddle: {
    opacity: 0,
  },
  openBottom: {
    rotate: -45,
    translateY: -10,
  },
};

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    const body = document.body;

    if (isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }

    return () => {
      body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="z-50 m-4 flex h-12 w-12 flex-col items-center justify-center overflow-visible p-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="z-50 flex flex-col space-y-2"
      >
        <motion.span
          className="block h-0.5 w-8 rounded-xl bg-foreground"
          variants={lineVariants}
          animate={isOpen ? "open" : "closed"}
        />
        <motion.span
          className="block h-0.5 w-8 rounded-xl bg-foreground"
          variants={lineVariants}
          animate={isOpen ? "openMiddle" : "closed"}
        />
        <motion.span
          className="block h-0.5 w-8 rounded-xl bg-foreground"
          variants={lineVariants}
          animate={isOpen ? "openBottom" : "closed"}
          style={{ originY: "100%" }}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed left-0 top-0 z-40 flex h-screen w-screen flex-col items-center justify-start overflow-auto bg-black/50 p-8 backdrop-blur-lg"
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ originX: 1, originY: 0 }}
          >
            <motion.div
              variants={itemVariants}
              className="mb-4 mt-8 flex items-center"
            >
              <motion.img
                src={
                  theme === "light" ? "/logo_only.svg" : "/logo_only_dark.svg"
                }
                alt="Logo"
                className="h-[50px] w-[50px]"
              />
              <Link
                href="/"
                className={cn("text-xl font-bold uppercase", koulen.className)}
              >
                <span className="text-primary">hive</span>minds
              </Link>
            </motion.div>

            <motion.hr
              className="w-full border-t border-gray-600"
              variants={itemVariants}
            />

            <motion.div
              className="my-2 text-xl sm:my-4"
              variants={itemVariants}
            >
              <Link href="/">Home</Link>
            </motion.div>

            <motion.div
              className="my-2 text-xl sm:my-4"
              variants={itemVariants}
            >
              <Link href="/rpo">Saiyou Support</Link>
            </motion.div>

            <motion.div
              className="my-2 text-xl sm:my-4"
              variants={itemVariants}
            >
              <Link href="/website">Recruitment Website</Link>
            </motion.div>

            <motion.div
              className="my-2 text-xl sm:my-4"
              variants={itemVariants}
            >
              <a
                href="https://hiveminds.co.jp/contact"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
            </motion.div>

            <motion.div
              className="my-2 text-xl sm:my-4"
              variants={itemVariants}
            >
              <Link href="/about-us">About Us</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;
