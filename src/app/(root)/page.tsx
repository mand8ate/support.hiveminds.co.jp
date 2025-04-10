"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { SVGImages } from "@/components/SVGImages";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RecruitPage() {
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

        <div className="container relative z-10 flex h-screen flex-col justify-center pl-12 pt-16">
          <div className="max-w-5xl">
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
                RECRUIT SUPPORT SYSTEM
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="mt-6 text-xl font-medium text-white/90 lg:text-3xl">
                すべての企業に「採用担当」を。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <p className="mt-8 text-lg font-normal leading-relaxed text-white/80 lg:text-xl">
                今や「採用難」は当たり前の時代に突入し、どの業界、どの業種でも人材採用が課題になっています。
                弊社では約300社におよぶ採用アドバイザリーの経験を基に、この課題を解消するための手法・ノウハウをご提供することが可能です。
                細かな施策レベルではなく、根本的な課題解決のためのシステム提供やアドバイザリーをご提供させていただきます。
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Recruit Outsourcing Service Section */}
      <section className="py-20 md:py-28">
        <div className="container grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Image Column */}
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
                  src="/rpo/hero.png"
                  alt="Recruit Outsourcing"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </div>
          </div>

          {/* Text Column */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl font-semibold text-primary md:text-4xl lg:text-5xl">
              採用業務 外注サービス
            </h2>
            <h3 className="text-2xl font-medium text-foreground md:text-3xl">
              人材採用に「プロの時間」を使う。
            </h3>
            <p className="text-lg leading-relaxed text-foreground/80">
              昨今の人材採用市場では、何か特別な一手を打てば候補者が興味を持つ。という状況ではなくなり、多角的な方面のアプローチが必要となりました。
              HiveMindsの採用業務
              外注サービスでは、日々忙しい皆様に変わり、「中小企業採用の専門家」がしっかり時間と知見を使い、
              貴社の採用活動を一緒に大きく動かします。
            </p>
            <div>
              <Link href="/rpo">
                <Button className="mt-4 rounded-full bg-violet-800 px-8 py-6 text-lg font-medium text-white hover:bg-violet-700">
                  READ MORE
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Recruit Site Service */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Text Column */}
          <div className="order-2 flex flex-col justify-center md:order-2">
            <h2 className="text-3xl font-semibold text-primary md:text-4xl lg:text-5xl">
              採用サイト 制作サービス
            </h2>
            <h3 className="mt-6 text-2xl font-medium text-foreground md:text-3xl">
              「うち」で働く魅力を「正しく」伝える。
            </h3>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              情報媒体が多様化し、情報過多の中で求職者は「信用できる情報」の取得を求めており、
              企業には正しい情報の発信、取得助長が求められます。HiveMindsの採用サイト制作サービスでは、
              貴社で働く魅力を「正しく」「伝わりやすい」内容で発信できるよう設計から対応いたします。
            </p>
            <div className="mt-8">
              <Link href="/website">
                <Button className="rounded-full bg-amber-700 px-8 py-6 text-lg font-medium text-white hover:bg-amber-600">
                  READ MORE
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Column */}
          <div className="order-1 flex flex-col justify-center md:order-1">
            <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-muted">
              <motion.div
                initial={{ scale: 1.1 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="h-full w-full"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <img
                  src="/landing/landing2.png"
                  alt="Company Recruit Page"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-3xl font-bold text-white">
                    COMPANY
                    <br />
                    RECRUITMENT PAGE
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Recruiting Assistant */}
      <section className="py-20 md:py-28">
        <div className="container grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Image Column */}
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
                  src="/landing/landing3.png"
                  alt="AI Recruiting Assistant"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </div>
          </div>

          {/* Text Column */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl font-semibold text-primary md:text-4xl lg:text-5xl">
              中小企業の採用担当（仮称AI）
            </h2>
            <h3 className="text-2xl font-medium text-foreground md:text-3xl">
              すべての企業に「採用担当」を。
            </h3>
            <p className="text-lg leading-relaxed text-foreground/80">
              HiveMindsの「中小企業の採用担当」では、すべての企業に「採用担当」を。というコンセプトのもと、
              中小企業の採用活動が、社内でより高密度な設計・対応ができるシステムソリューションとなっております。
              貴社にとってベストな採用活動を、「中小企業の採用担当」と一緒に社内で練りだし、資産となる採用力を醸成します。
            </p>
            <div>
              <Button className="mt-4 rounded-full bg-yellow-600/50 px-8 py-6 text-lg font-medium text-white hover:bg-yellow-600/70">
                Under Construction
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container text-center">
          <h2 className="mb-8 text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
            CONTACT US
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-foreground/80">
            採用活動の課題解決に向けて、まずはお気軽にご相談ください。
            貴社の状況に合わせた最適なソリューションをご提案いたします。
          </p>
          <Link href="https://hiveminds.co.jp/contact/">
            <Button className="rounded-full bg-violet-800 px-12 py-6 text-lg font-medium text-white hover:bg-violet-700">
              お問い合わせ
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
