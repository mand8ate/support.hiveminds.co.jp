"use client";

import { motion, useAnimation } from "framer-motion";
import { SVGImages } from "../SVGImages";
import { Badge } from "../ui/badge";
import { useGradientEffect } from "@/lib/useGradientEffect";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

const achievements1 = [
  {
    titleEN: "S-Booster 2023",
    titleJP: "S-Booster 2023",
    image: "/achievements/thumbnail_sbooster.jpg",
    category: "IT",
    description: "宇宙を活用したビジネスアイデアコンテスト",
    work: [
      "ホームページ作成",
      "ニュースレター作成と配信",
      "ソーシャルメディアマネージメント",
      "オンライン広告",
      "イベント企画と開催",
    ],
  },
  {
    titleEN: "Grün Onlineshop",
    titleJP: "Grün EC-サイト",
    image: "/achievements/thumbnail_gruen.jpg",
    category: "IT",
    description:
      "千葉県のローカルブランド。プラントベースカフェと観葉植物の専門店",
    work: [
      "オンラインショップデザインと設置",
      "Shopifyアプリ設定など",
      "商品撮影",
      "商品登録",
      "カスタマーサポート",
    ],
  },
  {
    titleEN: "EMG 2023",
    titleJP: "EMG 2023",
    image: "/achievements/thumbnail_emg.jpg",
    category: "IT",
    description: "第20回神経筋診断セミナーの動画配信プラットフォーム",
    work: [
      "動画配信プラットフォーム作成",
      "ユーザー登録システム作成",
      "各自己更新ページ作成",
      "ユーザーデータ分析",
      "イベントサポート",
    ],
  },
  {
    titleEN: "Shigeru Umebayashi Official",
    titleJP: "梅林茂公式HP",
    image: "/achievements/thumbnail_umebayashi.jpg",
    category: "IT",
    description:
      "日本の作曲家、音楽プロデューサー、梅林茂さんの公式ウェブサイト",
    work: [
      "クライアントと複数ヒアリング",
      "ウェブサイトデザイン",
      "ウェブサイト作衛",
      "ウェブサイト更新",
    ],
  },
];

const achievements2 = [
  {
    titleEN: "Seseragi HR Consulting",
    titleJP: "（合）せせらぎ様採用コンサルティング",
    image: "/achievements/consulting/thumbnails/seseragi.jpg",
    category: "Consulting",
    description: "応募者確保と年間採用人数の増加に貢献。",
    work: [
      "採用ターゲットの再定義",
      "新規求人作成／運用 ",
      "採用サイトリニューアル",
      "採用情報管理と資産化など",
    ],
  },
  {
    titleEN: "Toiji Brand Creation",
    titleJP: "TOIJI ブランド立ち上げ",
    image: "/achievements/consulting/thumbnails/toiji.jpg",
    category: "Consulting",
    description: "新規ヘアオイルブランドの立ち上げサポートを実施",
    work: [
      "商品カテゴリー市場調査",
      "競合調査",
      "ブランドコンセプト設計",
      "販売マーケティング計画立案など",
    ],
  },
  {
    titleEN: "Cocojiku Brand Consulting",
    titleJP: "cocojiku ブランドコンサルティング",
    image: "/achievements/consulting/thumbnails/cocojiku.jpg",
    category: "IT",
    description: "ブランド立ち上げと認知拡大アドバイザリーを実施。",
    work: [
      "一貫した市場調査",
      "ブランドコンセプト設計",
      "ブランド認知拡大へのアドバイザリー",
      "マーケティングコンサルティングなど",
    ],
  },
];

export default function Achievements() {
  const firstEffect = useGradientEffect("rgba(26, 188, 254, 0.2)");
  const secondEffect = useGradientEffect("rgba(26, 188, 254, 0.2)");
  const sliderEffect = useGradientEffect("rgba(26, 188, 254, 0.2)");

  const animation = {
    x: [0, -50, 0, 50, 0],
    transition: {
      repeat: Infinity,
      duration: 15,
      ease: "linear",
    },
  };

  const animation2 = {
    x: [0, 50, 0, -50, 0],
    transition: {
      repeat: Infinity,
      duration: 15,
      ease: "linear",
    },
  };

  return (
    <div className="container mt-32 flex w-full flex-col">
      <motion.div
        initial={{ opacity: 0, x: "-100px" }}
        whileInView={{ opacity: 1, x: 0 }}
        style={{ transformOrigin: "left" }}
        transition={{ duration: 0.5 }}
        className="flex w-full flex-col"
      >
        <div className="mb-2 inline-block">
          <Badge variant="secondary">Proudly Presents</Badge>
        </div>
        <h1 className="text-4xl font-semibold tracking-wider text-glowblue">
          Achievement
        </h1>
        <div className="flex w-full justify-between gap-8">
          <motion.div
            onMouseMove={firstEffect.handleMouseMove}
            style={{
              backgroundImage: firstEffect.gradientStyle,
            }}
            className="mt-6 flex min-h-[400px] w-full flex-col border border-foreground/30 bg-foreground/10 p-4 shadow-lg shadow-glowblue/20 backdrop-blur-xl md:w-1/2 lg:p-8"
          >
            <h2 className="mb-4 text-3xl">
              私たちの<span className="font-semibold text-primary">実績</span>を
              確認しましょう
              <span className="font-semibold text-primary">！</span>
            </h2>
            <div className="flex-grow"></div>
            <ul className="mb-8 ml-6 list-disc text-xl text-foreground/70">
              <li>S-Booster 2023</li>
              <li>Grün オンラインショップ</li>
              <li>EMG 2023</li>
              <li>梅林茂公式HP</li>
              <li>（合）せせらぎ様採用コンサルティング</li>
              <li>Toiji ブランド立ち上げ</li>
              <li>cocojiku ブランドコンサルティング</li>
            </ul>
          </motion.div>
          <motion.div
            onMouseMove={secondEffect.handleMouseMove}
            style={{
              backgroundImage: secondEffect.gradientStyle,
            }}
            className="relative mt-6 hidden min-h-[400px] w-1/2 flex-col  border border-foreground/30 bg-foreground/10 p-4 shadow-lg shadow-glowblue/20 backdrop-blur-xl md:flex lg:p-8"
          >
            <h2 className="mb-4 text-3xl">
              <span className="font-semibold text-primary">Hive</span>
              Mindsの実績を
              <br />
              <span className="hidden lg:inline">クリック</span>
              <span className="inline lg:hidden">タッチ</span>
              しましょう
              <span className="font-semibold text-primary">!</span>
            </h2>
            <div className="flex-grow"></div>
            <div>
              <Link
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-none bg-background p-6 text-lg text-foreground hover:bg-primary",
                )}
                href="/achievements"
              >
                See More!
              </Link>
            </div>
            <div className="absolute right-6 top-3 hidden 2xl:block">
              <div className="absolute right-4 top-4 h-[250px] w-[350px]">
                <img src="/achievements/achievementTab1.png" />
              </div>
              <div className="absolute right-16 top-16 h-[250px] w-[350px]">
                <img src="/achievements/achievementTab1.png" />
              </div>
              <div className="absolute right-28 top-28 h-[250px] w-[350px]">
                <img src="/achievements/achievementTab1.png" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: "-100px" }}
        whileInView={{ opacity: 1, x: 0 }}
        style={{ transformOrigin: "left" }}
        transition={{ duration: 0.5 }}
        className="flex w-full flex-col"
      >
        <div className="flex w-full justify-between gap-8">
          <motion.div
            onMouseMove={sliderEffect.handleMouseMove}
            style={{
              backgroundImage: sliderEffect.gradientStyle,
            }}
            className="mt-6 w-full  border border-foreground/30  bg-foreground/10 p-4 shadow-lg shadow-glowblue/20 backdrop-blur-xl lg:p-8"
          >
            <div className="flex flex-col gap-8 py-16 sm:gap-14 md:gap-24 xl:gap-32">
              <div className="flex flex-row flex-wrap justify-around gap-8 sm:gap-14 md:gap-24 xl:gap-32">
                {achievements1.map((a, i) => (
                  <Dialog key={i}>
                    <DialogTrigger>
                      <SVGImages.hexagon
                        color={i % 2 == 0 ? "primary" : ""}
                        image={a.image}
                      />
                    </DialogTrigger>
                    <DialogContent className="flex flex-col justify-center border-foreground/50 bg-white/30 backdrop-blur-sm">
                      <DialogHeader className="flex flex-col items-center justify-center">
                        <DialogTitle className="text-2xl font-bold text-primary lg:text-3xl">
                          {a.titleJP}
                        </DialogTitle>
                        <DialogTitle className="text-xl font-semibold text-foreground/80 lg:text-2xl">
                          {a.titleEN}
                        </DialogTitle>
                        <DialogDescription className="text-md pt-6 text-foreground lg:text-lg">
                          {a.description}
                          <ul className="ml-6 list-disc pt-6 text-left">
                            <p className="mb-2 text-lg font-bold text-primary lg:text-xl">
                              実施ポイント
                            </p>
                            {a.work.map((w, i) => (
                              <li key={i} className="ml-6 text-sm md:text-lg">
                                {w}
                              </li>
                            ))}
                          </ul>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
              <div className="flex flex-row flex-wrap justify-around gap-8 sm:gap-14 md:gap-24 xl:gap-32">
                {achievements2.map((a, i) => (
                  <Dialog key={i}>
                    <DialogTrigger>
                      <SVGImages.hexagon
                        color={i % 2 == 0 ? "primary" : ""}
                        image={a.image}
                      />
                    </DialogTrigger>
                    <DialogContent className="flex flex-col justify-center border-foreground/50 bg-white/30 backdrop-blur-xl">
                      <DialogHeader className="flex flex-col items-center justify-center">
                        <DialogTitle className="text-3xl font-bold text-primary">
                          {a.titleJP}
                        </DialogTitle>
                        <DialogTitle className="text-2xl font-semibold text-foreground/80">
                          {a.titleEN}
                        </DialogTitle>
                        <DialogDescription className="pt-6 text-lg text-foreground">
                          {a.description}
                          <ul className="text ml-6 list-disc pt-6">
                            <p className="mb-2 text-xl font-bold text-primary underline-offset-1">
                              実施ポイント
                            </p>
                            {a.work.map((w, i) => (
                              <li key={i} className="ml-6">
                                {w}
                              </li>
                            ))}
                          </ul>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
