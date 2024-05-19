"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";

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

const navigationItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Solution",
    subsections: [
      { label: "IT Solutions", href: "/solution/it" },
      { label: "Event Planning", href: "/solution/event" },
      { label: "Consulting Services", href: "/solution/consulting" },
      { label: "Logistics", href: "/solution/logistics" },
    ],
  },
  {
    label: "Company",
    subsections: [
      { label: "About Us", href: "/company/about" },
      { label: "Our Team", href: "/company/team" },
      { label: "Careers", href: "/company/careers" },
    ],
  },
  {
    label: "Achievements",
    href: "/achievements",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

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
    <div className="z-50 m-4 flex h-12 w-12 flex-col items-center justify-center overflow-auto p-4">
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
          style={{ originY: "100%" }} // Anchor rotation to the bottom of the span
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed left-0 top-0 z-40 flex h-screen w-screen flex-col items-center justify-start bg-black/50 p-8 backdrop-blur-lg"
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ originX: 1, originY: 0 }}
          >
            <motion.img
              src="/logo_footer.svg"
              alt="Logo"
              className="mb-4 mt-8 h-[80px] w-[150px] lg:w-[200px]"
              variants={itemVariants}
            />

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
            <motion.div variants={itemVariants}>
              <h1 className="-ml-16 text-lg underline">Solution</h1>
              <motion.div variants={itemVariants} className="text-xl sm:mb-2">
                <Link href="/solution/it">IT</Link>
              </motion.div>
              <motion.div variants={itemVariants} className="text-xl sm:mb-2">
                <Link href="/solution/event">Event</Link>
              </motion.div>
              <motion.div variants={itemVariants} className="text-xl sm:mb-2">
                <Link href="/solution/consulting">Consulting</Link>
              </motion.div>
              <motion.div variants={itemVariants} className="text-xl sm:mb-2">
                <Link href="/solution/logistics">Logistics</Link>
              </motion.div>
            </motion.div>
            <motion.div
              className="my-2 text-xl sm:my-4"
              variants={itemVariants}
            >
              <Link href="/achievements">Achievements</Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h1 className="-ml-16 text-lg underline">Company</h1>
              <motion.div variants={itemVariants} className="text-xl sm:mb-2">
                <Link href="/company/team">Team</Link>
              </motion.div>
              <motion.div variants={itemVariants} className="text-xl sm:mb-2">
                <Link href="/company/vmv">VMV</Link>
              </motion.div>
              <motion.div variants={itemVariants} className="text-xl sm:mb-2">
                <Link href="/company">Company</Link>
              </motion.div>
            </motion.div>
            <motion.div
              className="my-2 text-xl sm:my-4"
              variants={itemVariants}
            >
              <Link href="/contact">Contact</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;
