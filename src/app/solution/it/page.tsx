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
} from "lucide-react";
import Link from "next/link";

const itSolutions = [
  {
    icon: <Monitor />,
    title: "ウェブサイト",
    bgImg: "/solutions/it/website.jpg",
  },
  {
    icon: <ShoppingCart />,
    title: "EC-サイト",
    bgImg: "/solutions/it/shop.jpg",
  },
  {
    icon: <Pencil />,
    title: "ブログ",
    bgImg: "/solutions/it/blog.jpg",
  },
  {
    icon: <PanelsTopLeft />,
    title: "SaaS プラットフォーム",
    bgImg: "/solutions/it/saas.jpg",
  },
  {
    icon: <TabletSmartphone />,
    title: "モバイル",
    bgImg: "/solutions/it/mobile.jpg",
  },
  {
    icon: <Blocks />,
    title: "ブロックチェーン",
    bgImg: "/solutions/it/blockchain.jpg",
  },
  {
    icon: <Bot />,
    title: "生成AI",
    bgImg: "/solutions/it/ai.jpg",
  },
  {
    icon: <Speech />,
    title: "DXコンサルティング",
    bgImg: "/solutions/it/consulting.jpg",
  },
];

const examples = [
  {
    title: "S-Booster 2023（ビジネスアイデアコンテスト）",
    img: "/achievements/sbooster2023.jpg",
    link: "s-booster.jp",
    url: "https://s-booster.jp/2023",
    contents: [
      "イベント特設サイト作成",
      "制作後 更新・改善対応",
      "オンライン広告運用（Google, Facebook, Twitter, LinkedIn）",
      "SNSマネージメント対応（Facebook, Twitter, LinkedIn）​",
      "メールマガジン作成・配信​",
      "集客数値集計・分析など​",
    ],
  },
  {
    title: "EMG 2023 （第20回神経筋診断セミナー）",
    img: "/achievements/emg2023.jpg",
    contents: [
      "オンライン動画配信プラットフォーム作成​",
      "ユーザー登録システム作成",
      "動画更新機能設置",
      "ユーザーアンケートの回答分析",
      "アンケート分析データ抽出機能設置",
      "自己更新型資料ダウンロード機能設置​",
    ],
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
          IT Solution
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
            私たちは、Webサイトの制作をはじめ、様々なITソリューションを通してお客様の抱える課題の解決、業務負担の軽減を実現しています。
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
                Our Expertise
              </h1>
              <p className="mb-4 text-lg font-semibold sm:text-xl md:text-2xl lg:text-3xl">
                私たちは、お客様の多様なITニーズに応えるホームページやプラットフォームの開発を手掛けています。
                <br />
                詳細は下記をご覧ください。
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
              className="flex flex-wrap justify-center gap-12 lg:gap-24"
            >
              {itSolutions.map((s, i) => (
                <motion.div variants={itemVariants} key={i}>
                  <ItSolutionCard
                    icon={s.icon}
                    title={s.title}
                    bgImg={s.bgImg}
                  />
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
                      <h2 className="text-2xl font-semibold">実施内容</h2>
                    </div>
                    <div className="w-full">
                      <ul className="ml-6 flex list-disc flex-col gap-4 py-6 text-xl">
                        {e.contents.map((c, index) => (
                          <li key={index}>{c}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                {e.link && (
                  <Link href={e.url} target="_blank">
                    {e.link}
                  </Link>
                )}
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
