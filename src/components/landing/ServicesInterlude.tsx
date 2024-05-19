"use client";

import { motion } from "framer-motion";
import { SVGImages } from "../SVGImages";
import { buttonVariants } from "../ui/button";
import { ArrowBigRight } from "lucide-react";
import Link from "next/link";

import { useState } from "react";
import { cn } from "@/lib/utils";

export default function ServicesInterlude() {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div className="md:px[6rem] container mt-24 flex items-center justify-center px-[2rem] sm:px-[4rem] lg:mt-32 lg:px-[8rem]">
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        style={{ transformOrigin: "top" }}
        transition={{ duration: 0.5 }}
        className="mr-6"
      >
        <SVGImages.lineLeftGreen
          height="h-36 md:h-72 lg:h-96"
          color="#0ACF83"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: "-100px" }}
        whileInView={{ opacity: 1, x: 0 }}
        style={{ transformOrigin: "left" }}
        transition={{ duration: 0.5 }}
        className="z-10"
      >
        <h1 className="text-3xl font-semibold tracking-wider text-glowgreen lg:text-4xl">
          Your Project, Our Passion.
        </h1>
        <div className="mt-6">
          <hr
            style={{
              border: "0",
              height: "1px",
              backgroundColor: "#0ACF83",
              width: "100px",
              marginBottom: "0.5rem",
            }}
          />
          <h4 className="text-lg font-semibold sm:text-xl md:text-2xl lg:text-3xl">
            Webサイトから業務支援コンサルティングまで、私たちHiveMindsはお客様の課題解決につながるソリューションを提供しながら、ブランドサポートや業務効率化など幅広く支援しています。
          </h4>
          <hr
            style={{
              border: "0",
              height: "1px",
              backgroundColor: "#0ACF83",
              width: "100px",
              marginTop: "0.5rem",
            }}
          />
        </div>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="mt-14 text-center"
        >
          <Link
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-none bg-foreground px-6 py-4 text-xl text-secondary hover:bg-glowgreen lg:px-8 lg:py-6 lg:text-2xl",
            )}
            href="/company"
          >
            {
              <div className="flex items-center">
                About Us
                <motion.div
                  animate={{ x: isHovered ? 10 : 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="ml-4"
                >
                  <ArrowBigRight />
                </motion.div>
              </div>
            }
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
