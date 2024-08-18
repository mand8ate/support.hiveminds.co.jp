"use client";

import { motion } from "framer-motion";

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
        <h1 className="text-4xl font-semibold tracking-wider text-glowviolet">
          Our Company
        </h1>
        <div className="mt-6">
          <hr
            style={{
              border: "0",
              height: "1px",
              backgroundColor: "#A259FF",
              width: "100px",
              marginBottom: "0.5rem",
            }}
          />
          <h4 className="text-xl font-semibold md:text-2xl lg:text-3xl">
            HiveMindsのメンバーを紹介します。様々なバックグラウンドを持ったメンバーが一丸となってお客様の課題解決に向けたソリューションを提供いたします。
          </h4>
          <hr
            style={{
              border: "0",
              height: "1px",
              backgroundColor: "#A259FF",
              width: "100px",
              marginTop: "0.5rem",
            }}
          />
        </div>
      </motion.div>

      <div className="container mb-48  mt-40 flex flex-col gap-36 xl:mt-64">
        <motion.div
          initial={{ opacity: 0, x: "-100px" }}
          whileInView={{ opacity: 1, x: 0 }}
          style={{ transformOrigin: "left" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-12 lg:flex-row lg:gap-24"
        >
          <div className="relative">
            <div className="w-[250px] overflow-hidden rounded-xl">
              <img src="/company/hiro.jpg" />
            </div>
            <div className="absolute -left-12 -top-4 rounded-full bg-foreground px-4 py-2">
              <p className="text-xl text-background">Consulting</p>
            </div>
            <div className="absolute -bottom-4 -left-12 rounded-full bg-foreground px-4 py-2">
              <p className="text-xl text-background">Human Ressources</p>
            </div>
            <div className="absolute -right-12 -top-4 rounded-full bg-foreground px-4 py-2">
              <p className="text-xl text-background">Branding</p>
            </div>
          </div>
          <div className="flex w-3/4 flex-col justify-start gap-2 lg:w-1/2">
            <h1 className="text-2xl font-bold text-primary">Hiro</h1>
            <h2 className="text-xl font-semibold">代表社員/CEO</h2>
            <h3 className="text-lg">
              千葉県浦安市出身。HiveMindsの代表社員であり、これまで税理士法人、ブランディングエージェンシーを経て企業経営の根幹部分のコンサルティングに従事。また企業の採用担当およびフリーの採用コンサルタントとして数多くの採用支援やコンサルティング・ブランディング支援を行ってきたエキスパート。
              ※Takuは一卵性双生児の兄
            </h3>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: "-100px" }}
          whileInView={{ opacity: 1, x: 0 }}
          style={{ transformOrigin: "left" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-12 lg:flex-row lg:gap-24"
        >
          <div className="order-last flex w-3/4 flex-col justify-start gap-2 lg:order-first lg:w-1/2">
            <h1 className="text-2xl font-bold text-primary">Surya</h1>
            <h2 className="text-xl font-semibold">Co-Founder/CEO</h2>
            <h3 className="text-lg">
              ジャカルタ出身。リアル・オンラインイベント出展サポートのエキスパートであり、Webデザインにも熟知。創造的な視点と独自のアプローチでお客様の課題を解決する。
            </h3>
          </div>
          <div className="relative">
            <div className="w-[250px] overflow-hidden rounded-xl">
              <img src="/company/surya.jpg" />
            </div>
            <div className="absolute -left-12 -top-4 rounded-full bg-foreground px-4 py-2">
              <p className="text-xl text-background">Event</p>
            </div>
            <div className="absolute -bottom-4 -left-12 rounded-full bg-foreground px-4 py-2">
              <p className="text-xl text-background">Logistics</p>
            </div>
            <div className="absolute -right-12 -top-4 rounded-full bg-foreground px-4 py-2">
              <p className="text-xl text-background">Design</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: "-100px" }}
          whileInView={{ opacity: 1, x: 0 }}
          style={{ transformOrigin: "left" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-12 lg:flex-row lg:gap-24"
        >
          <div className="relative">
            <div className="w-[250px] overflow-hidden rounded-xl">
              <img src="/company/taku.jpg" />
            </div>
            <div className="absolute -left-12 -top-4 rounded-full bg-foreground px-4 py-2">
              <p className="text-xl text-background">Sales</p>
            </div>
            <div className="absolute -bottom-4 -left-12 rounded-full bg-foreground px-4 py-2">
              <p className="text-xl text-background">Consulting</p>
            </div>
            <div className="absolute -right-12 -top-4 rounded-full bg-foreground px-4 py-2">
              <p className="text-xl text-background">Subsidiaries</p>
            </div>
          </div>
          <div className="flex w-3/4 flex-col justify-start gap-2 lg:w-1/2">
            <h1 className="text-2xl font-bold text-primary">Taku</h1>
            <h2 className="text-xl font-semibold">Co-Founder/CEO</h2>
            <h3 className="text-lg">
              千葉県浦安市出身。これまで営業経験や地方自治体との協業を通して、補助金申請のサポートや販売分野での支援を行う。
              ※Hiroは一卵性双生児の弟
            </h3>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: "-100px" }}
          whileInView={{ opacity: 1, x: 0 }}
          style={{ transformOrigin: "left" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-12 lg:flex-row lg:gap-24"
        >
          <div className="order-last flex w-3/4 flex-col justify-start gap-2 lg:order-first lg:w-1/2">
            <h1 className="text-2xl font-bold text-primary">Malte</h1>
            <h2 className="text-xl font-semibold">Co-Founder/CTO</h2>
            <h3 className="text-lg">
              ドイツ出身。IT、プログラミング、ウェブ開発、テクノロジーのエキスパートで、お客様の業務効率化やDX化支援、店舗運営コンサルティングなどを通して貢献する。
            </h3>
          </div>
          <div className="relative">
            <div className="w-[250px] overflow-hidden rounded-xl">
              <img src="/company/malte.jpg" />
            </div>
            <div className="absolute -left-12 -top-4 rounded-full bg-foreground px-4 py-2">
              <p className="text-xl text-background">Technology</p>
            </div>
            <div className="absolute -bottom-4 -left-12 rounded-full bg-foreground px-4 py-2">
              <p className="text-xl text-background">Development</p>
            </div>
            <div className="absolute -right-12 -top-4 rounded-full bg-foreground px-4 py-2">
              <p className="text-xl text-background">Consulting</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
