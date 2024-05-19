"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const examples = [
  {
    title: "Event 1",
    img: "",
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
    title: "Event 2",
    img: "",
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
          Event Solution
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
            日本で商品展開を行いたい海外の企業と、海外へ商品展開を行いたい国内企業のイベント出展を支援するソリューションを提供いたします。
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
                お客様のニーズに合わせたイベントソリューションを提供いたします。
                <br />
                国内外、リアルイベント・オンラインイベント問わず幅広い対応が可能です。
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
            <div className="flex flex-col items-center justify-center gap-4 md:gap-12 lg:gap-24 xl:flex-row">
              <motion.div
                initial={{ opacity: 0, x: "-100px" }}
                whileInView={{ opacity: 1, x: 0 }}
                style={{ transformOrigin: "left" }}
                transition={{ duration: 0.5 }}
                className="flex min-h-[550px] w-full flex-col rounded-xl border-4 border-primary px-8 py-2 md:w-1/2 md:px-16 md:py-6"
              >
                <h1 className="text-center text-3xl font-semibold underline">
                  イベント時のブース出展
                </h1>
                <ul className="mt-4 flex list-disc flex-col gap-4 text-2xl">
                  <li>イベント期間中の集客力の向上</li>
                  <li>業界に関心を持つ顧客の創出</li>
                  <li>競合他社からの顧客獲得</li>
                </ul>
                <div className="mt-6 flex min-h-[100px] items-center justify-center gap-4 md:min-h-[300px]">
                  <img
                    src="/achievements/event/thumbnail/booth1.jpg"
                    alt="event"
                    className="w-1/2 rounded-xl"
                  />
                  <img
                    src="/achievements/event/thumbnail/booth2.jpg"
                    alt="event"
                    className="w-1/2 rounded-xl"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "-100px" }}
                whileInView={{ opacity: 1, x: 0 }}
                style={{ transformOrigin: "left" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex min-h-[550px] w-full flex-col rounded-xl border-4 border-primary px-6 py-6 md:w-1/2 md:px-16"
              >
                <h1 className="text-center text-3xl font-semibold underline">
                  独自のイベント主催​
                </h1>
                <ul className="mt-4 flex list-disc flex-col gap-4 text-2xl">
                  <li>イベント来場者数の向上</li>
                  <li>業界に関心を持つ顧客の創出</li>
                  <li>競合イベントからの顧客獲得</li>
                </ul>
                <div className="mt-6 flex min-h-[100px] items-center justify-center gap-4 md:min-h-[300px]">
                  <img
                    src="/achievements/event/thumbnail/event1.jpg"
                    alt="event"
                    className="w-1/3 rounded-xl"
                  />
                  <img
                    src="/achievements/event/thumbnail/event2.jpg"
                    alt="event"
                    className="w-1/3 rounded-xl"
                  />
                  <img
                    src="/achievements/event/thumbnail/event3.jpg"
                    alt="event"
                    className="w-1/3 rounded-xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* <div
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
                        {e.contents.map((c, i) => (
                          <li key={i}>{c}</li>
                        ))}
                      </ul>
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
      </div> */}
    </div>
  );
}
