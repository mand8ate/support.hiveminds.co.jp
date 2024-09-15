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
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { SVGImages } from "@/components/SVGImages";
import { type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const carouselItems = [
  {
    id: 1,
    number: "001",
    title: "Digital Solution",
    subtitleLines: [
      "私たちは、お客様の抱える課題を一緒に",
      "見つけ、デジタルの力で課題の解決、",
      "業務負担の軽減を実現していきます。",
    ],
    imageSrc: "/landing/carousel-digital.jpg",
  },
  {
    id: 2,
    number: "002",
    title: "Event Solution",
    subtitleLines: [
      "当社のイベントソリューションでは、",
      "日本で商品を展開したい海外の企業と、",
      "海外へ商品を展開したい国内企業のイベント",
      "出展をサポートし、お客様のブランド認知",
      "拡大に貢献しています。",
    ],
    imageSrc: "/landing/carousel-event.jpg",
  },
  {
    id: 3,
    number: "003",
    title: "Consulting",
    subtitleLines: [
      "店舗運営や人材採用など、多岐に渡る",
      "コンサルティングを長くお客様と",
      "伴走しながら実施することで、",
      "ブランドサポートに貢献いたします。",
    ],
    imageSrc: "/landing/carousel-consulting.jpg",
  },
];

export default function Service() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);

  const numberOfSlides = carouselItems.length;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const slideIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, numberOfSlides - 1],
  );

  useEffect(() => {
    return slideIndex.on("change", (latest) => {
      const index = Math.round(latest);
      api?.scrollTo(index);
    });
  });

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

  const navigationItems = [
    { number: "001", title: "Digital Solution" },
    { number: "002", title: "Event Solution" },
    { number: "003", title: "Consulting" },
  ];

  return (
    <div className="relative my-24 flex h-screen w-full lg:my-44">
      <div className="absolute left-[-30px] top-[30px] z-10 h-[100px] w-[100px] sm:h-[150px] sm:w-[150px] md:h-[200px] md:w-[200px] lg:h-[300px] lg:w-[300px]">
        <SVGPatterns.hivepattern />
      </div>

      <div className="relative">
        <Carousel
          setApi={setApi}
          opts={{ loop: true }}
          className="relative z-10 h-full w-full"
        >
          <CarouselContent>
            {carouselItems.map((item, index) => (
              <CarouselItem key={item.id} className="relative flex w-full">
                {/* Left Side Content */}
                <div className="relative flex h-screen w-screen flex-col justify-evenly gap-2 pt-[60px] text-center text-base md:text-xl xl:w-1/2 xl:text-2xl 2xl:text-4xl">
                  {/* Header */}
                  <div className="ml-auto mt-6 flex w-2/3 flex-col">
                    <Separator className="mb-2 mr-auto h-[3px] w-1/3 bg-primary" />
                    <motion.h1
                      initial={{ opacity: 0, x: "-100px" }}
                      whileInView={{ opacity: 1, x: 0 }}
                      style={{ transformOrigin: "left" }}
                      transition={{ duration: 0.5 }}
                      className="text-xl font-semibold tracking-wider text-primary lg:text-2xl xl:text-3xl 2xl:text-4xl"
                    >
                      <span className="text-primary/80">{item.number}</span> -{" "}
                      {item.title}
                    </motion.h1>
                    <Separator className="ml-auto mt-2 h-[3px] w-1/3 bg-primary" />
                  </div>
                  {/* Subtitle */}
                  <div className="mt-12 flex self-center pb-10 text-glowgreen md:pb-24 lg:mt-24 lg:pb-36 xl:mt-48">
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      variants={containerVariants}
                      className="flex flex-col items-start gap-2 md:gap-6 lg:items-center"
                    >
                      {/* Small Image on Medium Screens */}
                      <motion.div
                        variants={itemVariants}
                        className="mx-auto mb-2 flex xl:hidden"
                      >
                        <div className="relative h-[200px] w-[200px]">
                          <Image
                            src={item.imageSrc}
                            alt={`carousel ${item.title.toLowerCase()}`}
                            fill
                            className="rounded-lg ring-2 ring-foreground/60"
                          />
                        </div>
                      </motion.div>
                      {/* Subtitle Text */}
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={containerVariants}
                        className="flex flex-col items-start gap-2 md:gap-6"
                      >
                        {item.subtitleLines.map((line, idx) => (
                          <motion.h1 key={idx} variants={itemVariants}>
                            {line}
                          </motion.h1>
                        ))}
                      </motion.div>
                    </motion.div>
                  </div>
                  {/* Side Navigation */}
                  <div className="absolute -left-4 bottom-0 hidden items-end justify-end p-8 text-white lg:flex">
                    <motion.ul
                      initial={{ opacity: 0, x: "100px" }}
                      whileInView={{ opacity: 1, x: 0 }}
                      style={{ transformOrigin: "left" }}
                      transition={{ duration: 0.5 }}
                      className="flex flex-col justify-start text-start text-base text-primary"
                    >
                      {navigationItems.map((navItem, navIndex) => (
                        <li
                          className="flex items-center pl-8"
                          key={navItem.number}
                        >
                          <button
                            className="flex items-center"
                            onClick={() => setSlide(navIndex)}
                          >
                            <SVGImages.arrow visible={navIndex === index} />
                            <span className="ml-4 text-primary/80">
                              {navItem.number}
                            </span>
                            <span className="mx-2">-</span> {navItem.title}
                          </button>
                        </li>
                      ))}
                    </motion.ul>
                  </div>
                  {/* Navigation Buttons */}
                  <div className="absolute bottom-0 flex gap-8 self-end text-center md:gap-16 lg:bottom-4">
                    <button
                      className="flex items-center justify-center text-lg font-normal text-glowgreen md:text-2xl"
                      onClick={() => prevSlide()}
                    >
                      <ChevronLeft className="mr-2 h-8 w-8" /> Back
                    </button>
                    <button
                      className="flex items-center justify-center text-lg font-normal text-primary md:text-2xl"
                      onClick={() => nextSlide()}
                    >
                      Next <ChevronRight className="mr-2 h-8 w-8" />
                    </button>
                  </div>
                </div>
                {/* Right Side Image */}
                <div className="relative hidden h-screen text-4xl font-bold xl:flex xl:w-1/2">
                  <Image
                    src={item.imageSrc}
                    alt={`carousel ${item.title.toLowerCase()}`}
                    fill
                    className="mt-[55px] w-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div
          className="absolute bottom-12 left-1/2 z-0 h-[150px] w-[150px]
               -translate-x-1/2 transform
               md:h-[200px] md:w-[200px]
               lg:h-[300px] lg:w-[300px] xl:-bottom-16 xl:h-[500px] xl:w-[500px]"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
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
    </div>
  );
}
