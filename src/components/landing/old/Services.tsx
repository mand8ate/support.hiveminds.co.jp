"use client";

import { motion } from "framer-motion";
import { SVGImages } from "../../SVGImages";
import { Badge } from "../../ui/badge";
import { CalendarRange, MonitorSmartphone, Ship, Speech } from "lucide-react";
import DrawOutlineButton from "../../OutlineButton";
import { useGradientEffect } from "@/lib/useGradientEffect";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../../ui/card";

import Link from "next/link";

const solutions = [
  {
    titleEN: "IT Solution",
    titleJP: "IT",
    value: "itsolution",
    url: "/solution/it",
    description:
      "ITソリューションの提供やDX化支援を通じて、お客様の課題や業務効率化を行います。",
    icon: (
      <MonitorSmartphone className="h-[50px] w-[50px] text-primary md:h-[70px] md:w-[70px] lg:h-[100px] lg:w-[100px]" />
    ),
    bulletpoints: ["ウェブサイト作成", "アプリケーション開発", "DXサポート"],
  },
  {
    titleEN: "Event",
    titleJP: "イベント",
    value: "event",
    url: "/solution/event",
    description:
      "国内外を問わず、展示会イベントなどの出展サポートを行い、お客様の集客力向上に貢献します。",
    icon: (
      <CalendarRange className="h-[50px] w-[50px] text-primary md:h-[70px] md:w-[70px] lg:h-[100px] lg:w-[100px]" />
    ),
    bulletpoints: [
      "展示会",
      "オンラインイベント",
      "プロジェクトマネージメント",
    ],
  },
  {
    titleEN: "Consulting",
    titleJP: "コンサルティング",
    value: "consultation",
    url: "/solution/consultation",
    description:
      "Webマーケティング・人材採用・ブランディングの3つのコンサルティングサポートを通じて、お客様の企業力を底上げします。",
    icon: (
      <Speech className="h-[50px] w-[50px] text-primary md:h-[70px] md:w-[70px] lg:h-[100px] lg:w-[100px]" />
    ),
    bulletpoints: ["Webマーケティング", "ブランディング", "人材採用"],
  },
  {
    titleEN: "Logistics",
    titleJP: "ロジスティックス",
    value: "logistics",
    url: "/solution/logistics",
    description:
      "アジア諸国を中心に、お客様の輸入手続きをフォワーディングサポートいたします。",
    icon: (
      <Ship className="h-[50px] w-[50px] text-primary md:h-[70px] md:w-[70px] lg:h-[100px] lg:w-[100px]" />
    ),
    bulletpoints: ["輸入出サポート", "フォーワーディング", "市場調査"],
  },
];

export default function Services() {
  const { gradientStyle, handleMouseMove } = useGradientEffect(
    "rgba(10,207,131,0.2)",
  );

  return (
    <div className="container mt-32 flex w-full flex-wrap">
      <motion.div
        initial={{ opacity: 0, x: "-100px" }}
        whileInView={{ opacity: 1, x: 0 }}
        style={{ transformOrigin: "left" }}
        transition={{ duration: 0.5 }}
        className="flex w-full flex-col"
      >
        <div className="mb-2 inline-block">
          <Badge variant="secondary">Trust in Professionals</Badge>
        </div>
        <h1 className="text-3xl font-semibold tracking-wider text-glowgreen md:text-4xl">
          Our Solutions
        </h1>
        <motion.div
          onMouseMove={handleMouseMove}
          style={{
            backgroundImage: gradientStyle,
          }}
          className="mt-6 border border-foreground/30 bg-foreground/10 p-4 shadow-lg shadow-glowgreen/20 backdrop-blur-xl lg:p-8"
        >
          <div className="grid grid-cols-1 gap-4  border-none sm:grid-cols-2 md:grid-cols-2 md:border  md:p-4 lg:grid-cols-4 lg:p-8">
            {solutions.map((solution, index) => (
              <motion.div
                initial={{ opacity: 0, x: "-100px" }}
                whileInView={{ opacity: 1, x: 0 }}
                style={{ transformOrigin: "left" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
              >
                <Card className="flex h-full flex-col justify-between rounded-none border border-foreground/20">
                  <CardHeader className="flex flex-col items-center">
                    <CardTitle className="mt-4 flex flex-col items-center gap-4 text-xl md:text-2xl">
                      {solution.icon}
                      {solution.titleJP}
                    </CardTitle>
                    <CardDescription className="text-md text-primary md:text-lg">
                      {solution.titleEN}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow text-center">
                    <div className="flex flex-col items-center">
                      <div className="text-md min-h-[90px] md:text-xl lg:min-h-[180px]">
                        {solution.description}
                      </div>
                      <ul className="mt-8 list-inside list-disc text-left">
                        {solution.bulletpoints?.map((bulletpoint, index) => (
                          <li key={index} className="text-md mb-2 md:text-xl">
                            {bulletpoint}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>

                  <CardFooter className="my-2 flex justify-center md:my-4">
                    <DrawOutlineButton color="glowgreen">
                      <Link href={solution.url}>See More !</Link>
                    </DrawOutlineButton>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
