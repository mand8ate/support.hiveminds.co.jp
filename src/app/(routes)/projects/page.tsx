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
    id: "consulting-3",
    title: "Product Branding",
    img: "consulting/consulting_3.jpg",
  },
  {
    id: "event-1",
    title: "Dior",
    img: "event/event_1.jpg",
  },
];

interface ProjectItem {
  id: string;
  title: string;
  desc: string;
  img: string;
  link?: string;
  href?: string;
  subtitle?: string;
  location?: string;
}

const projects: ProjectItem[][] = [
  [
    {
      id: "digital-1",
      title: "内閣府主催 宇宙ビジコン｜S-booster 特設サイト作成",
      desc: "内閣府主催の宇宙ビジネスコンテスト　S-booster2023の特設サイト制作を行わせていただきました。プロジェクトはWEBサイト制作だけではなく、プレゼンター、来賓、審査員の情報集計ができるシステムを組む開発業務や、視聴者集客のマーケティング活動、イベント当日の運営まで一貫して対応しました。",
      link: "Web site｜https://s-booster.jp/",
      href: "https://s-booster.jp/",
      img: "/projects/digital/digital_1.jpg",
    },
    {
      id: "digital-2",
      title: "著名作曲家｜Shigeru Umebayashi氏 紹介サイト制作",
      desc: "「Ghost of Tsushima」など有名なコンテンツミュージックなどを作曲する梅林茂 氏の紹介サイトを制作させていただきました。日本国内だけではなく、世界的に活躍の輪を広げられる梅林氏のこれまでとこれからが世界に届けられる様、幅広い層に届けられるデザイン設計を施しています。",
      link: "Web site｜https://shigeru-umebayashi.com/",
      href: "https://shigeru-umebayashi.com/",
      img: "/projects/digital/digital_2.jpg",
    },
  ],
  [
    {
      id: "consulting-1",
      title: "事業拡大に向けた採用拡大プロジェクト支援",
      desc: "創業8期目のバーチャルスペース株式会社様の採用拡大に向け採用体制の構築から戦略・戦術設計と実行サポートまでトータルコンサルティングを実施させていただきました。",
      img: "/projects/consulting/consulting_1.jpg",
    },
    {
      id: "consulting-2",
      title: "現場負担減少へ。働きやすい環境作りのための採用支援",
      desc: "児童福祉、高齢者福祉事業を行っている合同会社せせらぎ様の現場負担軽減計画の一環とした従業員確保に向け、体制の構築から戦略・戦術・採用代行までトータルコンサルティングと伴走支援を実施実施させていただきました。",
      img: "/projects/consulting/consulting_2.jpg",
    },
    {
      id: "consulting-3",
      title: "コンテンツから商品化へ。プロダクトブランディング支援",
      desc: "ヘアケアブランド「ToUJI」のブランド立ち上げコンサルティングを実施ブランドオーナーが元々発信していたヘアアレンジコンテンツをブランド化し、より「ヘアスタイリングをもっと楽しめる商品を作りたい」というご要望から、HiveMindsにてブランド立ち上げのご提案を行い、コンサルティングサポートを実行させていただきました。",
      img: "/projects/consulting/consulting_3.jpg",
    },
  ],
  [
    {
      id: "event-1",
      title: "Dior - Travel Retail Asia Pasific",
      subtitle: "BEAUTY CONSULTANT SEMINAR",
      desc: "イベント提案・企画、会場施工、プロジェクトディレクター、スタッフや備品手配等を含め、VISAサポートも実施いたしました。",
      location: "Grand Hyatt Tokyo & Hilton Roppongi, Tokyo, Japan",
      img: "/projects/event/event_1.jpg",
    },
    {
      id: "event-2",
      title: "JAXA (Japan Aerospace Exploration Agency) - ",
      subtitle: "IAC (International Astronautical Congress) ",
      desc: "イベント提案・企画、会場施工、プロジェクトディレクター、スタッフや備品手配等を含め、VISAサポートも実施いたしました。",
      location:
        "Walter E. Washington Convention Center, Washington D.C., United States of America",
      img: "/projects/event/event_2.jpg",
    },
  ],
];

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
        className="mt-24 flex w-full flex-col items-center justify-center gap-16 lg:mt-32 lg:flex-row lg:items-start lg:gap-12 xl:gap-36"
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
                className="h-[450px] sm:basis-1/2"
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
        className="mt-12 md:mt-24 lg:mt-32"
      >
        <div className="flex flex-col items-center justify-center gap-6">
          <h2 className="text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl">
            Category
          </h2>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:text-lg">
            <Link href="#digital">Digital Solution</Link>
            <Separator className="h-[1px] w-full rounded-md bg-white sm:h-6 sm:w-1" />

            <Link href="#consulting">Consulting</Link>
            <Separator className="h-[1px] w-full rounded-md bg-white sm:h-6 sm:w-1" />

            <Link href="#event">Event</Link>
          </div>
        </div>
      </motion.div>

      {/* First Section  */}
      <div className="edged-div my-24 w-full bg-glowgreen lg:my-32">
        <motion.div
          initial={{ opacity: 0, x: "-100px" }}
          whileInView={{ opacity: 1, x: 0 }}
          style={{ transformOrigin: "left" }}
          transition={{ duration: 0.5 }}
          className="container flex flex-col gap-12 px-[2rem] py-24 sm:px-[4rem] md:px-[6rem]
        lg:px-[8rem]"
          id="digital"
        >
          <h1 className="text-3xl font-bold lg:text-4xl">Digital Solution</h1>
          <div className="flex flex-col gap-12 lg:gap-24 xl:gap-32">
            {projects[0].map((project) => (
              <div
                className="flex min-h-[400px] w-full flex-col gap-4 lg:flex-row"
                key={project.id}
                id={project.id}
              >
                <div className="relative aspect-[16/9] w-full lg:w-1/2 xl:w-2/5">
                  <Image
                    src={project.img}
                    alt={project.title}
                    className="h-full w-full rounded-md object-cover"
                    fill
                  />
                </div>
                <div className="flex w-full flex-col justify-start gap-4 md:gap-8 lg:w-3/5">
                  <h6 className="text-xl font-bold lg:text-3xl xl:text-4xl">
                    {project.title}
                  </h6>
                  <p className="text-base lg:text-lg">{project.desc}</p>
                  {project.href && project.link ? (
                    <Link href={project.href} target="_blank">
                      {project.link}
                    </Link>
                  ) : null}
                </div>
              </div>
            ))}
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
      </div>

      {/* Second Section  */}
      <motion.div
        initial={{ opacity: 0, x: "-100px" }}
        whileInView={{ opacity: 1, x: 0 }}
        style={{ transformOrigin: "left" }}
        transition={{ duration: 0.5 }}
        className="container flex flex-col gap-12 px-[2rem] sm:px-[4rem] md:px-[6rem]
        lg:px-[8rem]"
        id="consulting"
      >
        <h1 className="text-3xl font-bold lg:text-4xl">Consulting</h1>
        <div className="flex flex-col gap-12 lg:gap-24 xl:gap-32">
          {projects[1].map((project) => (
            <div
              className="flex min-h-[400px] w-full flex-col gap-4 lg:flex-row"
              key={project.id}
              id={project.id}
            >
              <div className="relative aspect-[16/9] w-full lg:w-1/2 xl:w-2/5">
                <Image
                  src={project.img}
                  alt={project.title}
                  className="h-full w-full rounded-md object-cover"
                  fill
                />
              </div>
              <div className="flex w-full flex-col justify-start gap-4 md:gap-8 lg:w-3/5">
                <h6 className="text-xl font-bold lg:text-3xl xl:text-4xl">
                  {project.title}
                </h6>
                <p className="text-base lg:text-lg">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/projects"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "w-fit self-center bg-foreground px-8 py-6 text-xl text-background hover:bg-foreground/90 hover:text-background",
          )}
        >
          See More
        </Link>
      </motion.div>

      {/* Third Section  */}
      <div className="edged-div my-24 w-full bg-glowgreen lg:my-32 xl:mb-64 xl:mt-40">
        <motion.div
          initial={{ opacity: 0, x: "-100px" }}
          whileInView={{ opacity: 1, x: 0 }}
          style={{ transformOrigin: "left" }}
          transition={{ duration: 0.5 }}
          className="container flex flex-col gap-12 px-[2rem] py-24 sm:px-[4rem] md:px-[6rem]
        lg:px-[8rem]"
          id="event"
        >
          <h1 className="text-3xl font-bold lg:text-4xl">Event Solution</h1>
          <div className="flex flex-col gap-12 lg:gap-24 xl:gap-32">
            {projects[2].map((project) => (
              <div
                className="flex min-h-[400px] w-full flex-col gap-4 lg:flex-row"
                key={project.id}
                id={project.id}
              >
                <div className="relative aspect-[16/9] w-full lg:w-1/2 xl:w-2/5">
                  <Image
                    src={project.img}
                    alt={project.title}
                    className="h-full w-full rounded-md object-cover"
                    fill
                  />
                </div>
                <div className="flex w-full flex-col justify-start gap-4 md:gap-8 lg:w-3/5">
                  <h6 className="text-xl font-bold lg:text-3xl xl:text-4xl">
                    {project.title}
                    {project.subtitle ? (
                      <>
                        <br />
                        {project.subtitle}
                      </>
                    ) : null}
                  </h6>
                  <p className="text-base lg:text-lg">{project.desc}</p>
                  {project.location ? (
                    <p className="text-base lg:text-lg">
                      会場: {project.location}
                    </p>
                  ) : null}
                </div>
              </div>
            ))}
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
      </div>
    </div>
  );
}
