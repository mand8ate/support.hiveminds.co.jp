"use client";

import { SVGPatterns } from "@/components/SVGPatterns";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { SVGImages } from "@/components/SVGImages";
import { type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Service() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
  });

  const setSlide = (slide: number) => {
    return api?.scrollTo(slide);
  };

  const nextSlide = () => {
    return api?.scrollNext();
  };

  const prevSlide = () => {
    return api?.scrollPrev();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="relative flex h-screen w-full snap-end">
      <div className="absolute left-[-30px] top-[30px] z-10 h-[100px] w-[100px] sm:h-[150px] sm:w-[150px] md:h-[200px] md:w-[200px] lg:h-[300px] lg:w-[300px]">
        <SVGPatterns.hivepattern />
      </div>
      <div className="relative flex w-full">
        <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
          <CarouselContent>
            {/* Item 1 */}
            <CarouselItem className="flex w-full">
              <div className="relative flex h-screen w-full flex-col justify-evenly gap-2 pt-[60px] text-center text-base md:text-xl xl:w-1/2 xl:text-2xl 2xl:text-4xl">
                <div className="ml-auto flex w-2/3 flex-col">
                  <Separator className="mb-2 mr-auto h-[3px] w-1/3 bg-primary" />
                  <motion.h1
                    initial={{ opacity: 0, x: "-100px" }}
                    whileInView={{ opacity: 1, x: 0 }}
                    style={{ transformOrigin: "left" }}
                    transition={{ duration: 0.5 }}
                    className="text-xl font-semibold tracking-wider text-primary lg:text-2xl xl:text-3xl 2xl:text-4xl"
                  >
                    <span className="text-primary/80">001</span> - Digital
                    Solution
                  </motion.h1>
                  <Separator className="ml-auto mt-2 h-[3px] w-1/3 bg-primary" />
                </div>
                <div className="flex justify-center text-glowgreen">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={containerVariants}
                    className="flex flex-col items-start gap-2 md:gap-6"
                  >
                    <motion.div
                      variants={itemVariants}
                      className="mx-auto mb-2 hidden md:flex xl:hidden"
                    >
                      <Image
                        src="/landing/carousel-digital.jpg"
                        alt="carousel digital solution"
                        width={200}
                        height={200}
                        className="rounded-lg ring-2 ring-foreground/60"
                      />
                    </motion.div>
                    <motion.h1 variants={itemVariants}>
                      私たちは、お客様の抱える課題を一緒に
                    </motion.h1>
                    <motion.h1 variants={itemVariants}>
                      見つけ、デジタルの力で課題の解決、
                    </motion.h1>
                    <motion.h1 variants={itemVariants}>
                      業務負担の軽減を実現していきます。
                    </motion.h1>
                  </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 hidden items-end justify-end p-8 text-white sm:flex">
                  <motion.ul
                    initial={{ opacity: 0, y: "100px" }}
                    whileInView={{ opacity: 1, y: 0 }}
                    style={{ transformOrigin: "bottom" }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col justify-start text-start text-base text-primary"
                  >
                    <li className="flex items-center pl-8">
                      <button
                        className="flex items-center"
                        onClick={() => setSlide(0)}
                      >
                        <SVGImages.arrow visible={true} />
                        <span className="ml-4 text-primary/80">001</span>
                        <span className="mx-2">-</span> Digital Solution
                      </button>
                    </li>
                    <li className="flex items-center pl-8">
                      <button
                        className="flex items-center"
                        onClick={() => setSlide(1)}
                      >
                        <SVGImages.arrow visible={false} />
                        <span className="ml-4 text-primary/80">002</span>
                        <span className="mx-2">-</span> Event Solution
                      </button>
                    </li>
                    <li className="flex items-center pl-8">
                      <button
                        className="flex items-center"
                        onClick={() => setSlide(2)}
                      >
                        <SVGImages.arrow visible={false} />
                        <span className="ml-4 text-primary/80">003</span>
                        <span className="mx-2">-</span> Consulting
                      </button>
                    </li>
                  </motion.ul>
                </div>
                <div className="absolute -bottom-12 right-10 h-[150px] w-[150px] md:h-[200px] md:w-[200px] lg:h-[300px] lg:w-[300px] xl:-bottom-16 xl:-right-20 xl:h-[500px] xl:w-[500px]">
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
                  <div className="absolute bottom-20 left-1/2 z-20 flex -translate-x-1/2 transform gap-16 text-center sm:bottom-36">
                    <button
                      className="flex items-center justify-center text-2xl font-normal text-glowgreen"
                      onClick={() => prevSlide()}
                    >
                      <ChevronLeft className="mr-2 h-8 w-8" /> Back
                    </button>
                    <button
                      className="flex items-center justify-center text-2xl font-normal text-primary"
                      onClick={() => nextSlide()}
                    >
                      Next <ChevronRight className="mr-2 h-8 w-8" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative hidden h-screen text-4xl font-bold xl:flex xl:w-1/2">
                <Image
                  src="/landing/carousel-digital.jpg"
                  alt="carousel digital solution"
                  fill
                  className="mt-[55px] w-full object-cover"
                />
              </div>
            </CarouselItem>
            {/* Item 2 */}
            <CarouselItem className="flex w-full">
              <div className="relative flex h-screen w-full flex-col justify-evenly gap-2 pt-[60px] text-center text-base md:text-xl xl:w-1/2 xl:text-2xl 2xl:text-4xl">
                <div className="ml-auto flex w-2/3 flex-col">
                  <Separator className="mb-2 mr-auto h-[3px] w-1/3 bg-primary" />
                  <motion.h1
                    initial={{ opacity: 0, x: "-100px" }}
                    whileInView={{ opacity: 1, x: 0 }}
                    style={{ transformOrigin: "left" }}
                    transition={{ duration: 0.5 }}
                    className="text-xl font-semibold tracking-wider text-primary lg:text-2xl xl:text-3xl 2xl:text-4xl"
                  >
                    <span className="text-primary/80">002</span> - Event
                    Solution
                  </motion.h1>
                  <Separator className="ml-auto mt-2 h-[3px] w-1/3 bg-primary" />
                </div>
                <div className="flex justify-center text-glowgreen">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={containerVariants}
                    className="flex flex-col items-start gap-2 md:gap-6"
                  >
                    <motion.div
                      variants={itemVariants}
                      className="mx-auto mb-2 hidden md:flex xl:hidden"
                    >
                      <Image
                        src="/landing/carousel-event.jpg"
                        alt="carousel event"
                        width={200}
                        height={200}
                        className="rounded-lg ring-2 ring-foreground/60"
                      />
                    </motion.div>
                    <motion.h1 variants={itemVariants}>
                      当社のイベントソリューションでは、
                    </motion.h1>
                    <motion.h1 variants={itemVariants}>
                      日本で商品を展開したい海外の企業と、
                    </motion.h1>
                    <motion.h1 variants={itemVariants}>
                      海外へ商品を展開したい国内企業のイベント
                    </motion.h1>
                    <motion.h1 variants={itemVariants}>
                      出展をサポートし、お客様のブランド認知
                    </motion.h1>
                    <motion.h1 variants={itemVariants}>
                      拡大に貢献しています。
                    </motion.h1>
                  </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 hidden items-end justify-end p-8 text-white sm:flex">
                  <motion.ul
                    initial={{ opacity: 0, y: "100px" }}
                    whileInView={{ opacity: 1, y: 0 }}
                    style={{ transformOrigin: "bottom" }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col justify-start text-start text-base text-primary"
                  >
                    <li className="flex items-center pl-8">
                      <button
                        className="flex items-center"
                        onClick={() => setSlide(0)}
                      >
                        <SVGImages.arrow visible={false} />
                        <span className="ml-4 text-primary/80">001</span>
                        <span className="mx-2">-</span> Digital Solution
                      </button>
                    </li>
                    <li className="flex items-center pl-8">
                      <button
                        className="flex items-center"
                        onClick={() => setSlide(1)}
                      >
                        <SVGImages.arrow visible={true} />
                        <span className="ml-4 text-primary/80">002</span>
                        <span className="mx-2">-</span> Event Solution
                      </button>
                    </li>
                    <li className="flex items-center pl-8">
                      <button
                        className="flex items-center"
                        onClick={() => setSlide(2)}
                      >
                        <SVGImages.arrow visible={false} />
                        <span className="ml-4 text-primary/80">003</span>
                        <span className="mx-2">-</span> Consulting
                      </button>
                    </li>
                  </motion.ul>
                </div>
                <div className="absolute -bottom-12 right-10 h-[150px] w-[150px] md:h-[200px] md:w-[200px] lg:h-[300px] lg:w-[300px] xl:-bottom-16 xl:-right-20 xl:h-[500px] xl:w-[500px]">
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
                  <div className="absolute bottom-20 left-1/2 z-20 flex -translate-x-1/2 transform gap-16 text-center sm:bottom-36">
                    <button
                      className="flex items-center justify-center text-2xl font-normal text-glowgreen"
                      onClick={() => prevSlide()}
                    >
                      <ChevronLeft className="mr-2 h-8 w-8" /> Back
                    </button>
                    <button
                      className="flex items-center justify-center text-2xl font-normal text-primary"
                      onClick={() => nextSlide()}
                    >
                      Next <ChevronRight className="mr-2 h-8 w-8" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative hidden h-screen text-4xl font-bold xl:flex xl:w-1/2">
                <Image
                  src="/landing/carousel-event.jpg"
                  alt="carousel digital solution"
                  fill
                  className="mt-[55px] w-full object-cover"
                />
              </div>
            </CarouselItem>
            {/* Item 3  */}
            <CarouselItem className="flex w-full">
              <div className="relative flex h-screen w-full flex-col justify-evenly gap-2 pt-[60px] text-center text-base md:text-xl xl:w-1/2 xl:text-2xl 2xl:text-4xl">
                <div className="ml-auto flex w-2/3 flex-col">
                  <Separator className="mb-2 mr-auto h-[3px] w-1/3 bg-primary" />
                  <motion.h1
                    initial={{ opacity: 0, x: "-100px" }}
                    whileInView={{ opacity: 1, x: 0 }}
                    style={{ transformOrigin: "left" }}
                    transition={{ duration: 0.5 }}
                    className="text-xl font-semibold tracking-wider text-primary lg:text-2xl xl:text-3xl 2xl:text-4xl"
                  >
                    <span className="text-primary/80">003</span> - Consulting
                  </motion.h1>
                  <Separator className="ml-auto mt-2 h-[3px] w-1/3 bg-primary" />
                </div>
                <div className="flex justify-center text-glowgreen">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={containerVariants}
                    className="flex flex-col items-start gap-2 md:gap-6"
                  >
                    <motion.div
                      variants={itemVariants}
                      className="mx-auto mb-2 hidden md:flex xl:hidden"
                    >
                      <Image
                        src="/landing/carousel-consulting.jpg"
                        alt="carousel consulting"
                        width={200}
                        height={200}
                        className="rounded-lg ring-2 ring-foreground/60"
                      />
                    </motion.div>
                    <motion.h1 variants={itemVariants}>
                      店舗運営や人材採用など、多岐に渡る
                    </motion.h1>
                    <motion.h1 variants={itemVariants}>
                      コンサルティングを長くお客様と
                    </motion.h1>
                    <motion.h1 variants={itemVariants}>
                      伴走しながら実施することで、
                    </motion.h1>
                    <motion.h1 variants={itemVariants}>
                      ブランドサポートに貢献いたします。
                    </motion.h1>
                  </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 hidden items-end justify-end p-8 text-white sm:flex">
                  <motion.ul
                    initial={{ opacity: 0, y: "100px" }}
                    whileInView={{ opacity: 1, y: 0 }}
                    style={{ transformOrigin: "bottom" }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col justify-start text-start text-base text-primary"
                  >
                    <li className="flex items-center pl-8">
                      <button
                        className="flex items-center"
                        onClick={() => setSlide(0)}
                      >
                        <SVGImages.arrow visible={false} />
                        <span className="ml-4 text-primary/80">001</span>
                        <span className="mx-2">-</span> Digital Solution
                      </button>
                    </li>
                    <li className="flex items-center pl-8">
                      <button
                        className="flex items-center"
                        onClick={() => setSlide(1)}
                      >
                        <SVGImages.arrow visible={false} />
                        <span className="ml-4 text-primary/80">002</span>
                        <span className="mx-2">-</span> Event Solution
                      </button>
                    </li>
                    <li className="flex items-center pl-8">
                      <button
                        className="flex items-center"
                        onClick={() => setSlide(2)}
                      >
                        <SVGImages.arrow visible={true} />
                        <span className="ml-4 text-primary/80">003</span>
                        <span className="mx-2">-</span> Consulting
                      </button>
                    </li>
                  </motion.ul>
                </div>
                <div className="absolute -bottom-12 right-10 h-[150px] w-[150px] md:h-[200px] md:w-[200px] lg:h-[300px] lg:w-[300px] xl:-bottom-16 xl:-right-20 xl:h-[500px] xl:w-[500px]">
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
                  <div className="absolute bottom-20 left-1/2 z-20 flex -translate-x-1/2 transform gap-16 text-center sm:bottom-36">
                    <button
                      className="flex items-center justify-center text-2xl font-normal text-glowgreen"
                      onClick={() => prevSlide()}
                    >
                      <ChevronLeft className="mr-2 h-8 w-8" /> Back
                    </button>
                    <button
                      className="flex items-center justify-center text-2xl font-normal text-primary"
                      onClick={() => nextSlide()}
                    >
                      Next <ChevronRight className="mr-2 h-8 w-8" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative hidden h-screen text-4xl font-bold xl:flex xl:w-1/2">
                <Image
                  src="/landing/carousel-consulting.jpg"
                  alt="carousel digital solution"
                  fill
                  className="mt-[55px] w-full object-cover"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
