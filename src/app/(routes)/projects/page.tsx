"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Separator } from "@/components/ui/separator";

const projectHighlights = [
  {
    id: "digital-1",
    title: "S-Booster 2023",
    img: "digital/digital_1.jpg",
  },
  {
    id: "consulting-1",
    title: "Product Branding",
    img: "consulting/consulting_3.jpg",
  },
  {
    id: "event-1",
    title: "Dior",
    img: "event/event_1.jpg",
  },
];

const projects = {};

export default function Page() {
  const plugin = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: "-100px" },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="mt-24 lg:mt-32 xl:mt-64">
      <motion.div
        initial={{ opacity: 0, x: "-100px" }}
        whileInView={{ opacity: 1, x: 0 }}
        style={{ transformOrigin: "left" }}
        transition={{ duration: 0.5 }}
        className="container px-[2rem] sm:px-[4rem] md:px-[6rem]
        lg:px-[8rem]"
      >
        <h1 className="text-3xl font-semibold tracking-wider text-glowblue lg:text-4xl">
          Projects
        </h1>
        <div className="mt-6">
          <hr
            style={{
              border: "0",
              height: "1px",
              backgroundColor: "#1ABCFE",
              width: "100px",
              marginBottom: "0.5rem",
            }}
          />
          <h4 className="text-lg font-semibold sm:text-xl md:text-2xl lg:text-3xl">
            これまで手掛けたプロジェクト事例を掲載しております。
          </h4>
          <hr
            style={{
              border: "0",
              height: "1px",
              backgroundColor: "#1ABCFE",
              width: "100px",
              marginTop: "0.5rem",
            }}
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: "-100px" }}
        whileInView={{ opacity: 1, y: 0 }}
        style={{ transformOrigin: "top" }}
        transition={{ duration: 0.5 }}
        className="mt-32 flex w-full flex-col items-center justify-center gap-16 lg:flex-row lg:items-start lg:gap-12 xl:gap-36"
      >
        <Carousel
          opts={{ align: "center", loop: true }}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent className="flex gap-4">
            {projectHighlights.map((project, index) => (
              <CarouselItem
                key={index}
                className="h-[450px] basis-1/2"
                style={{ marginLeft: index === 0 ? "16px" : "0px" }}
              >
                <Link
                  href={`#${project.id}`}
                  className="flex w-full flex-col items-center gap-4"
                >
                  <div className="relative h-[400px] w-full rounded-md p-4">
                    <Image
                      src={`/projects/${project.img}`}
                      alt="service image 1"
                      className="rounded-md object-cover"
                      fill
                    />
                  </div>
                  <div>{project.title}</div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: "200px" }}
        whileInView={{ opacity: 1, y: 0 }}
        style={{ transformOrigin: "top" }}
        transition={{ duration: 0.5 }}
        className="mt-32"
      >
        <div className="flex flex-col items-center justify-center gap-6">
          <h2 className="text-lg font-semibold sm:text-xl md:text-2xl lg:text-3xl">
            Category
          </h2>
          <div className="flex items-center justify-center gap-6 text-lg">
            <Link href="#digital">Digital Solution</Link>
            <Separator
              orientation="vertical"
              className="h-6 w-1 rounded-md bg-white"
            />
            <Link href="#digital">Consulting</Link>
            <Separator
              orientation="vertical"
              className="h-6 w-1 rounded-md bg-white"
            />
            <Link href="#digital">Event</Link>
          </div>
        </div>
      </motion.div>

      {/* First Section  */}
      <div className="edged-div my-24 w-full bg-glowgreen lg:my-32 xl:my-40">
        <motion.div
          initial={{ opacity: 0, x: "-100px" }}
          whileInView={{ opacity: 1, x: 0 }}
          style={{ transformOrigin: "left" }}
          transition={{ duration: 0.5 }}
          className="container flex flex-col gap-12 px-[2rem] py-24 sm:px-[4rem] md:px-[6rem]
        lg:px-[8rem]"
        >
          <h1 className="text-3xl font-bold lg:text-4xl">Digital Solution</h1>
          <div className="flex h-[400px] w-full flex-col gap-4 lg:flex-row">
            <div className="relative min-w-[600px]">
              <Image
                src="/service/service-1.jpg"
                alt="service image 1"
                className="w-full rounded-md object-cover"
                fill
              />
            </div>
            <div className="flex flex-col justify-start gap-8">
              <h6 className="text-3xl font-semibold">
                内閣府主催 宇宙ビジコン｜S-booster 特設サイト作成
              </h6>
              <p className="text-lg">
                内閣府主催の宇宙ビジネスコンテスト　S-booster2023の特設サイト制作を行わせていただきました。
                プロジェクトはWEBサイト制作だけではなく、プレゼンター、来賓、審査員の情報集計ができるシステムを組む開発業務や、視聴者集客のマーケティング活動、イベント当日の運営まで一貫して対応しました。⁩
                Web site｜https://s-booster.jp/
              </p>
              <Link href="https://s-booster.jp/">
                Website｜https://s-booster.jp/
              </Link>
            </div>
          </div>
          <Link
            href="/projects"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "w-fit self-center px-8 py-6 text-xl",
            )}
          >
            See More
          </Link>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          className="flex flex-wrap justify-center gap-12 lg:gap-24"
        ></motion.div>
      </div>
    </div>
  );
}
