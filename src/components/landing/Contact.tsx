"use client";

import { motion } from "framer-motion";

import { Separator } from "@/components/ui/separator";
import { SVGImages } from "../SVGImages";
import ContactForm from "../ContactForm";

export default function News() {
  return (
    <div className="relative flex h-screen w-full snap-end px-2 pt-20 sm:container sm:px-0 sm:pt-32">
      <div className="flex w-full flex-col">
        <div className="mx-auto w-1/3">
          <Separator className="mb-2 h-[3px] w-1/4 bg-primary" />
          <motion.h1
            initial={{ opacity: 0, x: "-100px" }}
            whileInView={{ opacity: 1, x: 0 }}
            style={{ transformOrigin: "left" }}
            transition={{ duration: 0.5 }}
            className="text-center text-xl font-semibold tracking-wider text-primary lg:text-2xl xl:text-3xl 2xl:text-4xl"
          >
            Contact
          </motion.h1>
          <Separator className="ml-auto mt-2 h-[3px] w-1/4 bg-primary" />
        </div>
        <div className="z-10 mt-8 w-full gap-2 sm:mt-12 lg:ml-28 lg:w-1/2">
          <div className="rounded-lg border border-foreground bg-background px-4 py-2 lg:px-12 lg:py-6">
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 h-[150px] w-[150px] md:h-[200px] md:w-[200px] lg:h-[300px] lg:w-[300px] xl:h-[500px] xl:w-[500px]">
        <motion.div
          animate={{ rotate: [0, 180, 360] }}
          transition={{
            duration: 200,
            ease: "linear",
            repeat: Infinity,
          }}
          className="h-full w-full"
        >
          <SVGImages.polygon color={"209, 209, 209, .2"} />
        </motion.div>
      </div>
    </div>
  );
}
