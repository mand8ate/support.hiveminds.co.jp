"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { SVGImages } from "@/components/SVGImages";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  const { theme } = useTheme();

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-background to-background/90">
        {/* Background grid */}
        <div className="bg-grid-pattern absolute inset-0 opacity-10"></div>

        {/* Background animated elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 100, ease: "linear", repeat: Infinity }}
            className="absolute -right-64 -top-64 h-[600px] w-[600px] opacity-15"
          >
            <SVGImages.polygon color={theme === "dark" ? "dark" : "light"} />
          </motion.div>

          {/* Bottom-right polygon like in original design */}
          <motion.div
            animate={{ rotate: [0, 180, 360] }}
            transition={{ duration: 200, ease: "linear", repeat: Infinity }}
            className="absolute bottom-20 right-10 h-[150px] w-[150px] opacity-20 md:h-[200px] md:w-[200px] lg:bottom-32 lg:right-20 lg:h-[300px] lg:w-[300px]"
          >
            <SVGImages.polygon color={theme === "dark" ? "dark" : "light"} />
          </motion.div>
        </div>

        {/* Color accent elements similar to original design */}
        <div className="hero_clippath-picture-bottom-left absolute bottom-0 left-0 h-2/3 w-1/3 rounded-full bg-blue-600 opacity-10 blur-3xl"></div>
        <div className="absolute right-0 top-0 h-1/2 w-1/4 rounded-full bg-indigo-700 opacity-10 blur-3xl"></div>

        <div className="container relative z-10 flex min-h-screen flex-col justify-center pt-16">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1
                className={cn(
                  "mb-4 text-4xl font-bold text-white md:text-6xl lg:text-8xl",
                )}
              >
                OVER SEAS ADVISORY
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="mt-6 text-xl font-medium text-white/90 lg:text-3xl">
                国内・国外のJAPAN NEEDsに対応し、事業の更なる加速をサポート。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <p className="mt-8 text-lg font-normal leading-relaxed text-white/80 lg:text-xl">
                「JAPAN
                BRAND」という言葉は世界中で使われ、日本の世界に対する需要は依然高くなっています。
                弊社ではこれからのJAPAN
                NEEDsに対応できるよう訪日ニーズ、進出ニーズを抑え、各カテゴリーに対応する施策を、
                ネイティブと共にサポートし、お客様の更なる事業成長に貢献いたします。
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Inbound Support Section */}
      <section className="py-20 md:py-28">
        <div className="container grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="mb-8 text-3xl font-semibold text-primary md:text-4xl lg:text-5xl">
              INBOUND TOTAL SUPPORT
            </h2>
            <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-muted">
              <motion.div
                initial={{ scale: 1.1 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="h-full w-full"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <img
                  src="https://placehold.co/992x662"
                  alt="Inbound Support"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <h3 className="text-2xl font-medium text-foreground md:text-3xl">
              「うち」の良いところを世界中の人に体験してもらう。
            </h3>
            <p className="text-lg leading-relaxed text-foreground/80">
              インバウンドニーズを獲得するためには、ただ単に言語対応などを行えばよいというわけではなく、
              時期や段階に応じた最適な施策を多なうことが重要です。弊社ではお客様のご状況に合わせた
              各種の施策を1つずつ丁寧にご案内させていただきます。
            </p>
            <div>
              <Link href="/inbound">
                <Button className="mt-4 rounded-full bg-violet-800 px-8 py-6 text-lg font-medium text-white hover:bg-violet-700">
                  READ MORE
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Outbound Support Section */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="order-2 flex flex-col justify-center md:order-1">
            <h2 className="mb-8 text-3xl font-semibold text-primary md:text-4xl lg:text-5xl">
              OUTBOUND PERSONAL SUPPORT
            </h2>
            <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-muted">
              <motion.div
                initial={{ scale: 1.1 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="h-full w-full"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <img
                  src="https://placehold.co/1001x628"
                  alt="Outbound Support"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </div>
          </div>

          <div className="order-1 flex flex-col justify-center space-y-6 md:order-2">
            <h3 className="text-2xl font-medium text-foreground md:text-3xl">
              世界に誇れる「JAPAN BRAND」へ
            </h3>
            <p className="text-lg leading-relaxed text-foreground/80">
              日本から海外へ進出することが必要な時代に突入している中で、様々な「JAPAN
              BRAND」が生まれています。
              HiveMindsでは東南アジア・EUを中心に、お客様の商品を世界へ届けるサポートをいたします。
              貴社の「JAPAN BRAND」を一緒に届けませんか？
            </p>
            <div>
              <Link href="outbound">
                <Button className="mt-4 rounded-full bg-amber-700 px-8 py-6 text-lg font-medium text-white hover:bg-amber-600">
                  READ MORE
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recruit Support Section */}
      <section className="py-20 md:py-28">
        <div className="container mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-primary md:text-5xl lg:text-7xl">
            RECRUIT SUPPORT SYSTEM
          </h2>
          <p className="mx-auto max-w-4xl text-2xl font-normal text-foreground/80 lg:text-3xl">
            すべての企業に「採用担当」を。
          </p>
          <p className="mx-auto mt-8 max-w-4xl text-lg font-normal leading-relaxed text-foreground/70 lg:text-xl">
            今や「採用難」は当たり前の時代に突入し、どの業界、どの業種でも人材採用が課題になっています。
            弊社では約300社におよぶ採用アドバイザリーの経験を基に、この課題を解消するための手法・ノウハウをご提供することが可能です。
            細かな施策レベルではなく、根本的な課題解決のためのシステム提供やアドバイザリーをご提供させていただきます。
          </p>
        </div>

        <div className="container grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-muted">
              <motion.div
                initial={{ scale: 1.1 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="h-full w-full"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <img
                  src="https://placehold.co/976x662"
                  alt="Recruit Support"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <h3 className="text-2xl font-medium text-foreground md:text-3xl">
              採用活動に「専念」できる環境を。
            </h3>
            <p className="text-lg leading-relaxed text-foreground/80">
              HiveMindsのRECRUIT SUPPORT
              SYSTEMでは、採用活動に課題を感じる企業が持つ根本的な要因を解決するためのご提案をさせていただきます。
              対象となる方は主に従業員100名以下の中小企業および新興企業の方がベストマッチしたサービスのご提供ができています。
            </p>
            <div>
              <Button className="mt-4 rounded-full bg-yellow-600/50 px-8 py-6 text-lg font-medium text-white hover:bg-yellow-600/70">
                UNDER CONSTRUCTION
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Components */}
      <div className="pb-20">
        {/* You can add the BrandSupport, Service, News, Contact or other components here */}
      </div>
    </div>
  );
}
