"use client";

import { cn } from "@/lib/utils";
import { Koulen } from "next/font/google";

const koulen = Koulen({ subsets: ["latin"], weight: ["400"] });

import { motion } from "framer-motion";
import { SVGImages } from "@/components/SVGImages";
import { useTheme } from "next-themes";

import Services from "@/components/landing/old/Services";
import ServicesInterlude from "@/components/landing/old/ServicesInterlude";
import Company from "@/components/landing/old/Company";
import AchievementsInterlude from "@/components/landing/old/AchievementsInterlude";
import Achievements from "@/components/landing/old/Achievements";
import CompanyInterlude from "@/components/landing/old/CompanyInterlude";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import News from "@/components/landing/News";
import BrandSupport from "@/components/landing/BrandSupport";
import Service from "@/components/landing/Service";
import Contact from "@/components/landing/Contact";

export default function Page() {
  const { setTheme, theme } = useTheme();

  return (
    <>
      <div className="relative h-screen w-full">
        <div className="hero_clippath relative z-10 h-[90vh] w-full">
          <div className="md:pt-30 container pt-28 lg:pt-40">
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
            <img src="/landing/hero_img_1.jpg" alt="" />
          </div>
          <div className="hero_clippath-picture-bottom  absolute right-0 top-0 hidden h-full w-1/2 bg-white md:block">
            <img src="/landing/hero_img_2.jpg" alt="" />
          </div>
          <div className="hero_clippath-picture-bottom-left bg-fill absolute bottom-0 left-0  h-full w-1/2 bg-white">
            <img src="/landing/hero_img_3.jpg" alt="" />
          </div>
        </div>
        <motion.div
          animate={{ rotate: [0, 180, 360] }}
          transition={{ duration: 200, ease: "linear", repeat: Infinity }}
          className="absolute bottom-20 right-0 h-[200px] w-[200px] md:bottom-32 md:right-20 md:h-[300px] md:w-[300px]"
        >
          <SVGImages.polygon color="dark" />
        </motion.div>
      </div>
      <BrandSupport />
      <Service />
      <News />
      <Contact />
    </>
  );
}
