"use client";

import { cn } from "@/lib/utils";
import { Koulen } from "next/font/google";

const koulen = Koulen({ subsets: ["latin"], weight: ["400"] });

import { motion } from "framer-motion";
import { SVGImages } from "@/components/SVGImages";
import { useTheme } from "next-themes";

import Services from "@/components/landing/Services";
import Company from "@/components/landing/Company";

export default function Page() {
  const { setTheme, theme } = useTheme();

  return (
    <>
      <div className="height-for-vertical relative h-[70vh] w-full md:h-[60vh] lg:h-[80vh] xl:h-[90vh]">
        <div className="hero_clippath-md lg:hero_clippath height-for-vertical relative z-10 h-[70vh] w-full md:h-[60vh] lg:h-[80vh] xl:h-[90vh]">
          <div className="md:pt-30 container pt-14 sm:pt-20 lg:pt-40">
            <h1
              className={cn(
                "text-4xl font-bold text-white md:text-6xl lg:text-8xl",
              )}
            >
              HiveMinds
            </h1>
            <motion.div>
              <motion.p
                animate={{
                  opacity: 1,
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeOut",
                  duration: 2,
                }}
                initial={{
                  opacity: 0.5,
                }}
                className="mt-2 text-xl font-semibold text-white lg:text-3xl"
              >
                Your Expectations, Your Reality
              </motion.p>
            </motion.div>
          </div>
          <div className="hero_clippath-picture-top  absolute right-0 top-0 hidden h-full w-1/2 bg-white md:block">
            <img src="achievements/hero_img_1.jpg" alt="" />
          </div>
          <div className="hero_clippath-picture-bottom  absolute right-0 top-0 hidden h-full w-1/2 bg-white md:block">
            <img src="achievements/hero_img_2.jpg" alt="" />
          </div>
          <div className="hero_clippath-picture-bottom-left bg-fill absolute bottom-0 left-0  h-full w-1/2 bg-white">
            <img src="achievements/hero_img_3.jpg" alt="" />
          </div>
        </div>
        <motion.div
          animate={{ rotate: [0, 180, 360] }}
          transition={{ duration: 200, ease: "linear", repeat: Infinity }}
          className="absolute bottom-0 right-0 h-[100px] w-[100px] md:h-[500px] md:w-[500px]"
        >
          <SVGImages.polygon color={theme} />
        </motion.div>
      </div>
      <Services />
      <Company />
    </>
  );
}
