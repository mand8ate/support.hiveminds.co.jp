"use client";

import ItSolutionCard from "@/components/ItSolutionCard";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Pencil,
  Monitor,
  ShoppingCart,
  Blocks,
  TabletSmartphone,
  PanelsTopLeft,
  Bot,
  Speech,
  BarChart3,
  Users2,
  Crown,
  ArrowDown,
  ArrowBigDown,
  Building2,
  CloudCog,
  BarChart4,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const points = [
  {
    icon: <BarChart3 className="h-20 w-20" />,
    title: "Webマーケティング",
    descriptions: [
      "集客力の向上",
      "オンラインを通じた収益化の実現",
      "企業の発言力強化",
    ],
    bg: "rgba(255, 153, 0, 0.6)",
  },
  {
    icon: <Users2 className="h-20 w-20" />,
    title: "人材採用",
    descriptions: [
      "企業を担う人材の確保",
      "採用を通じた新規リソースの確保",
      "長期的視点の採用ノウハウ取得",
    ],
    bg: "rgba(255, 153, 0, 0.8)",
  },
  {
    icon: <Crown className="h-20 w-20" />,
    title: "ブランディング",
    descriptions: [
      "販売力の底上げ",
      "採用活動の支援",
      "ブランド認知向上をサポート",
    ],
    bg: "rgba(255, 153, 0, 1)",
  },
];

const flow = [
  {
    img: "/solutions/consulting/flow1.jpg",
    title: "ヒアリング",
    description:
      "現在抱えている課題感や潜在的な企業課題を抽出するために細かなヒアリングと分析を実施し、解決要素のアウトプットを行います。",
    place: "1",
  },
  {
    img: "/solutions/consulting/flow2.jpg",
    title: "企画・提案",
    description:
      "ヒアリング・分析で抽出した課題と解決要素を使い、企業成長、課題解決に向けた施策を企画・ご提案させていただきます。",
    place: "2",
  },
  {
    img: "/solutions/consulting/flow3.jpg",
    title: "実務サポート",
    description:
      "解決施策の企画・ご提案後は必要情報を提供するだけではなく、実行のサポートも行うことで、しっかりと実現できるようにご支援いたします。",
    place: "3",
  },
  {
    img: "/solutions/consulting/flow4.jpg",
    title: "経過測定",
    description:
      "施策実行後、課題解決度合いや企業成長度合いの経過観察を行い、必要に応じて新たにサポート内容のご提案を行い、確実に企業力を高めていきます。",
    place: "4",
  },
];

const examples = [
  {
    title: "cocojiku ブランド立ち上げ",
    img: "/achievements/consulting/cocojiku.jpg",
    contents:
      "自己理解プログラム「cocojiku」のブランド立ち上げコンサルティングを実施。\n ブランドオーナーの青山由香氏より「自己理解というノウハウの素晴らしさを強く発信したい」というご要望から、HiveMindsにてリサーチフェーズからコンセプト設計までのコンサルティングサポートを実行。\n 現在ではSNSを中心に広くブランド発信を行い、フロント集客で計画値150%超の数値が出るブランドとなっている。\n 今後はブランド展開の継続支援を実施予定。",
  },
  {
    title: "合同会社せせらぎ様　採用コンサルティング",
    img: "/achievements/consulting/seseragi.jpg",
    contents:
      "合同会社せせらぎ様の人材採用を強化するべく、コンサルティングを実施。\n これまで採用コストをかけていても、年間数名の応募にとどまっており、応募者状況によっては採用に至らず、年間採用人数0名となってしまうことも少なくない状況の中で、HiveMindsがコンサルティングサポートを実施。結果年間数名の応募が2か月間で2名の採用を実現し、その後も毎月求職者からの応募確保を継続できる状態に変革した。",
  },
];

export default function Page() {
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
        <h1 className="text-3xl font-semibold tracking-wider text-glowgreen lg:text-4xl">
          Consulting
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
            事業拡大に必要な３つのセグメントに対するコンサルティングを実施することで、現状の課題解決と企業成長の実現を
            同時にサポートいたします。
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
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: "-100px" }}
        whileInView={{ opacity: 1, y: 0 }}
        style={{ transformOrigin: "top" }}
        transition={{ duration: 0.5 }}
        className="mt-24 flex w-full flex-col items-center justify-center gap-16 lg:flex-row lg:items-start lg:gap-12 xl:gap-36"
      >
        {points.map((p, i) => (
          <div key={i} className="flex flex-col items-center justify-center">
            <div
              className="flex h-[300px] w-[300px] flex-col items-center justify-center gap-8 rounded-full"
              style={{ backgroundColor: `${p.bg}` }}
            >
              {p.icon}
              <p className="text-2xl font-semibold">{p.title}</p>
            </div>
            <div className="mt-2 h-fit w-[300px] border p-2 xl:-mt-12">
              <ul className="flex flex-col gap-2 text-center text-lg">
                {p.descriptions.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: "-100px" }}
        whileInView={{ opacity: 1, y: 0 }}
        style={{ transformOrigin: "top" }}
        transition={{ duration: 0.5 }}
        className="my-8 flex justify-center"
      >
        <motion.div
          animate={{
            y: 20,
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeOut",
            duration: 1,
          }}
          initial={{
            y: 0,
          }}
        >
          <ArrowDown className="h-36 w-36 text-foreground" />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: "100px" }}
        whileInView={{ opacity: 1, y: 0 }}
        style={{ transformOrigin: "bottom" }}
        transition={{ duration: 0.5 }}
        className="relative m-auto flex h-[100px] w-[250px] items-center justify-center bg-primary/60 md:w-[500px]"
      >
        <Building2 className="absolute -bottom-1 -left-8 h-[50px] w-[50px] text-primary md:-left-16 md:h-[125px] md:w-[125px] " />
        <div>
          <h1 className="text-3xl font-bold">企業力の底上げ</h1>
        </div>
        <CloudCog className="absolute -top-12 right-4 h-[50px] w-[50px] text-primary md:h-[125px] md:w-[125px] " />
        <BarChart4 className="absolute -bottom-8 -right-8 h-[50px] w-[50px] text-primary md:h-[125px] md:w-[125px] " />
      </motion.div>

      <div className="edged-div my-24 w-full bg-glowgreen lg:my-32 xl:my-64">
        <div className="container flex flex-col py-24">
          <div>
            <motion.div
              initial={{ opacity: 0, x: "-100px" }}
              whileInView={{ opacity: 1, x: 0 }}
              style={{ transformOrigin: "left" }}
              transition={{ duration: 0.5 }}
              className="mb-24"
            >
              <h1 className="mb-4 text-3xl font-bold lg:text-4xl">
                Our Workflow
              </h1>
              <p className="mb-4 text-lg font-semibold sm:text-xl md:text-2xl lg:text-3xl">
                HiveMindsのサポートフローをご確認ください。
              </p>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "text-lg",
                )}
              >
                Contact Us!!!
              </Link>
            </motion.div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              className="flex flex-col flex-wrap items-center justify-center gap-24 md:flex-row"
            >
              {flow.map((f, i) => (
                <motion.div
                  variants={itemVariants}
                  key={i}
                  className="flex items-center sm:gap-8"
                >
                  <motion.div
                    animate={{
                      y: 10,
                    }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeOut",
                      duration: 1.2,
                    }}
                    initial={{
                      y: 0,
                    }}
                  >
                    <div className="hidden text-xl font-bold sm:block lg:text-2xl xl:text-3xl">
                      {f.place}.
                    </div>
                  </motion.div>

                  <div className="flex min-h-[300px] w-[250px] flex-col border md:min-h-[400px] md:w-[300px]">
                    <div className="h-1/2 w-full">
                      <img src={f.img} alt="flow image" />
                    </div>
                    <div className="flex flex-col gap-4 p-4">
                      <h3 className="text-xl font-semibold">{f.title}</h3>
                      <p>{f.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <div
        className="container my-24 px-[2rem] sm:px-[4rem]
        md:px-[6rem]  lg:mb-32 lg:px-[8rem] xl:mb-64"
      >
        <motion.div
          initial={{ opacity: 0, x: "-100px" }}
          whileInView={{ opacity: 1, x: 0 }}
          style={{ transformOrigin: "left" }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-12 xl:mb-24"
        >
          <hr
            style={{
              border: "0",
              height: "1px",
              backgroundColor: "#0ACF83",
              width: "100px",
              marginBottom: "0.5rem",
            }}
          />
          <h1 className="text-4xl font-semibold tracking-wider">お客様事例</h1>
          <hr
            style={{
              border: "0",
              height: "1px",
              backgroundColor: "#0ACF83",
              width: "100px",
              marginTop: "0.5rem",
            }}
          />
        </motion.div>
        <div className="flex flex-col items-center justify-center gap-24">
          {examples.map((e, i) => (
            <motion.div
              initial={{ opacity: 0, x: "-100px" }}
              whileInView={{ opacity: 1, x: 0 }}
              style={{ transformOrigin: "left" }}
              transition={{ duration: 0.5 }}
              className="w-full"
              key={i}
            >
              <h3 className="mb-6 text-xl font-semibold">{e.title}</h3>
              <div className="flex flex-col gap-12 xl:flex-row">
                <div className="flex w-full justify-center xl:w-1/2">
                  <img
                    src={e.img}
                    className="h-auto max-w-full border border-foreground/30"
                    alt="example picture"
                  />
                </div>
                <div className="flex w-full flex-col items-center gap-6 xl:w-1/2">
                  <div className="w-full flex-col items-center justify-center">
                    <div className="w-full bg-primary py-2 text-center">
                      <h2 className="text-2xl font-semibold">
                        Consulting Report
                      </h2>
                    </div>
                    <div className="flex w-full flex-col gap-4 py-6 text-xl">
                      <p>
                        {e.contents.split("\n").map((line, index, array) => (
                          <React.Fragment key={index}>
                            {line}
                            {index < array.length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, x: "-100px" }}
            whileInView={{ opacity: 1, x: 0 }}
            style={{ transformOrigin: "left" }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Link
              href="/achievements"
              className={cn(buttonVariants({ size: "lg" }), "text-lg")}
            >
              See More!
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
