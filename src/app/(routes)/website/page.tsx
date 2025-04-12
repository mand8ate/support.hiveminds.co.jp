"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { SVGImages } from "@/components/SVGImages";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChevronRight,
  ArrowRight,
  Check,
  Users,
  CheckCircle2,
  Layout,
  Briefcase,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function RecruitmentSitePage() {
  const { theme } = useTheme();

  // Animation variants for consistent animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="bg-stone-950 text-white">
      {/* Hero Section - Improved responsiveness */}
      <div className="relative h-[500px] w-full overflow-hidden pt-14 sm:h-[550px] md:h-[580px]">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/website/hero.png"
            alt="Hero Background"
            className="h-full w-full object-cover"
          />
          {/* Enhanced gradient overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/50 to-green-700/40"></div>
        </div>

        {/* Hero content */}
        <div className="container relative z-10 flex h-full flex-col items-center justify-center px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="mb-8 text-3xl font-bold leading-tight text-white [text-shadow:_2px_2px_4px_rgb(0_0_0_/_0.3)] md:text-5xl lg:text-6xl">
              採用サイト制作代行サービス
            </h1>
            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mx-auto max-w-2xl text-lg text-white [text-shadow:_1px_1px_2px_rgb(0_0_0_/_0.3)] md:text-xl"
            >
              求職者に伝わる採用サイトで人材確保の課題を解決
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Service Introduction - With improved responsive buttons */}
      <div className="bg-gradient-to-b from-stone-950 to-stone-900 py-16 md:py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <h2 className="mb-12 text-center text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
              求職者に伝わる。
              <br className="mb-4" />
              <span className="mt-6 block pt-4">
                採用に強い"自社専用"サイトを、丸ごと制作代行。
              </span>
            </h2>
            <div className="max-w-3xl space-y-6 text-center">
              <p className="text-lg leading-relaxed text-white/90">
                300社以上の採用に携わってきたノウハウをもとに
                採用特化型の構成・デザイン・ライティングで求職者の心を掴みます。
              </p>
              <p className="text-lg font-bold leading-relaxed text-white/90">
                中小企業・地方企業に特化した「伝わる採用サイト」をご提案いたします。
              </p>
            </div>
          </motion.div>

          {/* Improved responsive buttons */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row"
          >
            <Link
              href="https://hiveminds.co.jp/contact"
              className="w-full max-w-xs sm:w-auto"
            >
              <Button
                variant="destructive"
                size="lg"
                className="w-full rounded-full px-6 py-3 text-base font-medium shadow-lg transition-all duration-300 hover:scale-105 md:px-8 md:py-4 md:text-lg"
              >
                すぐ見積もり相談する{" "}
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </Link>
            <Link
              href="https://hiveminds.co.jp/contact"
              className="w-full max-w-xs sm:w-auto"
            >
              <Button
                variant="default"
                size="lg"
                className="w-full rounded-full bg-green-500 px-6 py-3 text-base font-medium shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-600 md:px-8 md:py-4 md:text-lg"
              >
                まずは無料相談をする{" "}
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Common Issues Section - Perfect desktop layout with improved mobile view */}
      <section className="bg-stone-900 py-16 md:py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            transition={{ duration: 0.7 }}
            className="mb-12 flex flex-col items-center"
          >
            <h2 className="mb-4 text-center text-2xl font-bold leading-tight md:text-3xl">
              中小企業が抱える採用活動のお悩み
            </h2>
            <div className="h-0.5 w-16 bg-green-500"></div>
          </motion.div>

          {/* Mobile view - Card-based layout */}
          <div className="relative md:hidden">
            <div className="w-full">
              <img
                src="/website/nayami.png"
                alt="Recruitment Challenges"
                className="h-auto w-full rounded-lg object-cover shadow-lg"
              />
            </div>

            {/* Mobile cards - more readable and space-efficient */}
            <div className="mt-8 space-y-4">
              {[
                "自社の採用サイトがないため充分な情報提供ができていない",
                "採用に当てる人手が不足しており、採用体制が作れていない",
                "採用サイト自体はあるが、情報が古く自社の魅力が伝わりきれていない",
                "求職者に対してどのような情報をどのような方法で伝えれば良いか分からない",
              ].map((text, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  className="rounded-lg bg-gradient-to-r from-green-600/80 to-green-500/80 p-4 shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white text-green-600">
                      <span className="text-lg font-bold">{index + 1}</span>
                    </div>
                    <p className="font-medium text-white">{text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop/Tablet view - horizontal bubble layout as per original */}
          <div className="relative hidden md:block">
            {/* Image container with businessman thinking */}
            <div className="w-full">
              <img
                src="/website/nayami.png"
                alt="Recruitment Challenges"
                className="h-auto w-full rounded-lg object-cover shadow-lg"
              />
            </div>

            {/* Desktop horizontal bubbles - same as original */}
            <div className="absolute bottom-[-120px] left-0 right-0 flex justify-center gap-6 lg:gap-8">
              {[
                "自社の採用サイトがないため充分な情報提供ができていない",
                "採用に当てる人手が不足しており、採用体制が作れていない",
                "採用サイト自体はあるが、情報が古く自社の魅力が伝わりきれていない",
                "求職者に対してどのような情報をどのような方法で伝えれば良いか分からない",
              ].map((text, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  className="flex h-44 w-44 flex-shrink-0 items-center justify-center rounded-full bg-green-500/80 p-4 text-center shadow-lg"
                >
                  <p className="text-center text-base font-bold text-white">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom heading - responsive margins */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 text-center md:mt-48"
          >
            <h3 className="text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
              中小企業が抱える採用課題の多くは
              <br />
              「正しく設計された採用サイト」により解消されます。
            </h3>
          </motion.div>
        </div>
      </section>

      {/* Job Seeker Info Section - Improved animations and spacing */}
      <section className="bg-gradient-to-b from-stone-900 to-stone-950 py-16 md:py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="mb-12 flex flex-col items-center"
          >
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              求職者の情報収集
            </h2>
            <div className="h-0.5 w-16 bg-green-500"></div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src="/website/graphic.png"
              alt="Job Seeker Information Collection"
              className="mb-8 h-auto w-full max-w-4xl rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-16 text-center"
          >
            <h3 className="text-xl font-bold md:text-2xl lg:text-3xl">
              <span className="text-white">
                HiveMindsでは、採用支援先の採用率90%の実績を基に
              </span>
              <br />
              <span className="text-2xl text-green-500 md:text-3xl lg:text-4xl">
                貴社にとって最適な採用サイト制作
              </span>
              <span className="text-white">を実施いたします。</span>
            </h3>
          </motion.div>
        </div>
      </section>

      {/* Company Strengths - Improved animations and spacing with fixed-size cards */}
      <section className="bg-stone-950 py-16 md:py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="mb-12 flex flex-col items-center"
          >
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              HiveMindsの強み
            </h2>
            <div className="h-0.5 w-16 bg-green-500"></div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerChildren}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            {[
              {
                point: "Point01",
                title: "採用特化の構成と設計",
                description:
                  "求職者の知りたい情報や自社の魅力を求職者へ最大限に伝えるサイト構成、デザイン。",
              },
              {
                point: "Point02",
                title: "支援先採用率90%以上の実績",
                description:
                  "これまでご支援をさせていただいたクライアント様の採用率は90%を超えており、そのノウハウ・経験を元にサイト製作を実施。",
              },
              {
                point: "Point03",
                title: "サイト制作だけにとどまらない",
                description:
                  "HIveMindsでは単なる採用サイト制作だけで終わるのではなく、クライアント様のご状況に合わせた採用支援も実施可能。",
              },
              {
                point: "Point04",
                title: "中小企業・地方企業に特化した支援",
                description:
                  "HiveMindsが得意とする採用支援は中小企業・地方企業が中心。自社に採用担当者がおらず、サイト制作に着手できていないクライアント様に最適。",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="flex h-full"
              >
                <Card className="flex w-full flex-col overflow-hidden border-2 border-green-500 bg-stone-900 shadow-lg transition-all duration-300 hover:shadow-xl">
                  <div className="w-36 bg-green-500 px-3 py-1.5">
                    <span className="font-bold tracking-wider text-white">
                      {item.point}
                    </span>
                  </div>
                  <CardContent className="flex flex-grow flex-col p-6 pt-8">
                    <h4 className="mb-3 text-xl font-bold">{item.title}</h4>
                    <p className="text-base leading-relaxed text-white/90">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies - Improved animations and spacing with integrated images */}
      <section className="bg-gradient-to-b from-stone-950 to-stone-900 py-16 md:py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="mb-12 flex flex-col items-center"
          >
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">制作事例</h2>
            <div className="h-0.5 w-16 bg-green-500"></div>
          </motion.div>

          {/* Case Study 1 - with one image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <Card className="border-stone-700 bg-stone-900 shadow-xl transition-all duration-300 hover:shadow-2xl">
              <CardHeader className="pb-2">
                <Badge className="mb-2 w-fit bg-green-500 hover:bg-green-600">
                  Case 1
                </Badge>
                <CardTitle className="text-lg md:text-xl">
                  千葉県 中小メーカー様
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-6">
                <div className="mb-4 border-t border-white/20 pt-4">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="space-y-6">
                      <p className="whitespace-pre-line text-sm text-white/90 md:text-base">
                        同社はこれまで様々な採用手法を試されていましたが、応募者数が少なく、新たな採用手法を探していました。
                        <br />
                        HiveMIndsではクライアント様がこれまで手をつけていなかった「採用媒体」内での自社ページを構築し、現在も運営中です。
                      </p>

                      <div>
                        <div className="mb-3 inline-flex rounded bg-green-500 px-3 py-1 font-medium text-white">
                          HiveMindsの支援内容
                        </div>
                        <ul className="list-disc space-y-2 pl-5 text-sm text-white/90 md:text-base">
                          <li>採用媒体運営</li>
                          <li>採用媒体内での自社ページ構築</li>
                          <li>採用方針/採用ターゲット考案</li>
                          <li>自社の強み・魅力発掘</li>
                        </ul>
                      </div>
                    </div>

                    {/* Case 1 Image */}
                    <div className="relative flex h-full items-center justify-center">
                      <div className="overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                        <img
                          src="/website/case1Pic1.png"
                          alt="Case Study 1"
                          className="h-auto w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Case Study 2 - with two overlapping images */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-16"
          >
            <Card className="border-stone-700 bg-stone-900 shadow-xl transition-all duration-300 hover:shadow-2xl">
              <CardHeader className="pb-2">
                <Badge className="mb-2 w-fit bg-green-500 hover:bg-green-600">
                  Case 2
                </Badge>
                <CardTitle className="text-lg md:text-xl">
                  東京都 IT企業様
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-6">
                <div className="mb-4 border-t border-white/20 pt-4">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="space-y-6">
                      <p className="whitespace-pre-line text-sm text-white/90 md:text-base">
                        同社はシステム開発・SES・人材サービス事業を取り組んでいるITベンチャー企業です。
                        <br />
                        業績好調により人員増加を図る上で自社サイトが必要だと判断し、弊社と共にサイト制作を行いました。
                      </p>

                      <div>
                        <div className="mb-3 inline-flex rounded bg-green-500 px-3 py-1 font-medium text-white">
                          HiveMindsの支援内容
                        </div>
                        <ul className="list-disc space-y-2 pl-5 text-sm text-white/90 md:text-base">
                          <li>ワイヤーフレーム〜デザイン設計</li>
                          <li>サイト内へ掲載するコンテンツ企画</li>
                          <li>コーディング対応</li>
                          <li>採用媒体運営</li>
                          <li>採用媒体内での自社ページ構築</li>
                          <li>採用方針/採用ターゲット考案</li>
                        </ul>
                      </div>
                    </div>

                    {/* Case 2 Images - with artistic overlapping effect */}
                    <div className="relative flex h-full items-center justify-center pb-12">
                      <div className="relative z-10 max-w-[350px]">
                        <div className="overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                          <img
                            src="/website/case2Pic1.png"
                            alt="Case Study 2 - Main Image"
                            className="h-auto w-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="absolute -bottom-4 right-0 z-20 max-w-[280px] md:max-w-[300px]">
                        <div className="overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                          <img
                            src="/website/case2Pic2.png"
                            alt="Case Study 2 - Secondary Image"
                            className="h-auto w-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Pricing & Service Packages - Improved animations and spacing */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="mb-12 flex flex-col items-center"
          >
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              費用・サービスの流れ
            </h2>
            <div className="h-0.5 w-16 bg-green-500"></div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerChildren}
            className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {/* Light Package */}
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className="flex flex-col overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              <div className="bg-zinc-300 px-4 py-6 text-center">
                <h3 className="text-xl font-bold text-white [text-shadow:_0px_4px_4px_rgb(0_0_0_/_0.25)]">
                  ライトパッケージ
                </h3>
                <p className="mt-4 text-sm font-bold text-white [text-shadow:_0px_4px_4px_rgb(0_0_0_/_0.25)]">
                  費用を抑えながら
                  <br />
                  採用活動を行いたい
                </p>
              </div>
              <div className="flex-grow border-2 border-zinc-300 bg-white p-6 text-black">
                <div className="mb-6 text-center text-3xl font-bold">
                  30万円〜
                </div>
                <h4 className="mb-4 text-center text-xl font-bold">
                  実施業務例
                </h4>
                <ul className="space-y-3 pl-2 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2 text-xl">◾️</span>
                    <span>採用媒体内での企業ページ構成考案</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-xl">◾️</span>
                    <span>企業ページ制作代行業務</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-xl">◾️</span>
                    <span>自社の強み/魅力の引き出し</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-xl">◾️</span>
                    <span>採用方針・アドバイス業務（2ヶ月）</span>
                  </li>
                </ul>
                <p className="mt-6 text-center text-sm">
                  その他ヒアリングを通して
                  <br />
                  ご提案いたします。
                </p>
              </div>
            </motion.div>

            {/* Standard Package */}
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="flex flex-col overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              <div className="bg-green-500 px-4 py-6 text-center">
                <h3 className="text-xl font-bold text-white [text-shadow:_0px_4px_4px_rgb(0_0_0_/_0.25)]">
                  スタンダードパッケージ
                </h3>
                <p className="mt-4 text-sm font-bold text-white [text-shadow:_0px_4px_4px_rgb(0_0_0_/_0.25)]">
                  しっかりとした自社の採用
                  <br />
                  サイトを低予算で制作したい
                </p>
              </div>
              <div className="flex-grow border-2 border-green-500 bg-white p-6 text-black">
                <div className="mb-6 text-center text-3xl font-bold">
                  50万円〜
                </div>
                <h4 className="mb-4 text-center text-xl font-bold">
                  実施業務例
                </h4>
                <ul className="space-y-3 pl-2 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2 text-xl">◾️</span>
                    <span>採用サイト構成考案</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-xl">◾️</span>
                    <span>
                      サイト制作
                      <br />（ WordPressテンプレート使用）
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-xl">◾️</span>
                    <span>自社の強み/魅力の引き出し</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-xl">◾️</span>
                    <span>採用方針・アドバイス業務（2ヶ月）</span>
                  </li>
                </ul>
                <p className="mt-6 text-center text-sm">
                  その他ヒアリングを通して
                  <br />
                  ご提案いたします。
                </p>
              </div>
            </motion.div>

            {/* Original Package */}
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
              className="flex flex-col overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              <div className="bg-amber-500 px-4 py-6 text-center">
                <h3 className="text-xl font-bold text-white [text-shadow:_0px_4px_4px_rgb(0_0_0_/_0.25)]">
                  オリジナルパッケージ
                </h3>
                <p className="mt-4 text-xs font-bold text-white [text-shadow:_0px_4px_4px_rgb(0_0_0_/_0.25)]">
                  自社の強み・魅力をしっかりとデザインに落とし込んだサイトを作りたい
                </p>
              </div>
              <div className="flex-grow border-2 border-amber-500 bg-white p-6 text-black">
                <div className="mb-6 text-center text-3xl font-bold">
                  70万円〜
                </div>
                <h4 className="mb-4 text-center text-xl font-bold">
                  実施業務例
                </h4>
                <ul className="space-y-3 pl-2 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2 text-xl">◾️</span>
                    <span>ワイヤーフレーム、デザイン考案</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-xl">◾️</span>
                    <span>コーディング業務</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-xl">◾️</span>
                    <span>会社見学、ヒアリング業務</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-xl">◾️</span>
                    <span>採用方針・アドバイス業務（2ヶ月）</span>
                  </li>
                </ul>
                <p className="mt-6 text-center text-sm">
                  その他ヒアリングを通して
                  <br />
                  ご提案いたします。
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Service Flow Section - Styled as a subheader of the previous section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="mt-12"
          >
            {/* Subheader styling - smaller, more subtle */}
            <div className="mb-8 flex flex-col items-center">
              <h3 className="mb-2 text-xl font-medium text-white/90 md:text-2xl">
                サービスフロー
              </h3>
              <div className="h-0.5 w-12 bg-green-500/70"></div>
            </div>

            {/* Responsive service flow images */}
            <div className="relative">
              {/* Desktop version */}
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.7 }}
                className="hidden md:block lg:block"
              >
                <img
                  src="/website/workflow1.png"
                  alt="Service Flow - Desktop"
                  className="h-auto w-full rounded-lg shadow-lg"
                />
              </motion.div>

              {/* Tablet version */}
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.7 }}
                className="hidden sm:block md:hidden"
              >
                <img
                  src="/website/workflow2.png"
                  alt="Service Flow - Tablet"
                  className="h-auto w-full rounded-lg shadow-lg"
                />
              </motion.div>

              {/* Mobile version */}
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.7 }}
                className="block sm:hidden"
              >
                <img
                  src="/website/workflow3.png"
                  alt="Service Flow - Mobile"
                  className="h-auto w-full rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action - Improved animations and spacing with better mobile button display */}
      <section className="bg-gradient-to-b from-stone-900 to-stone-950 py-16 md:py-24">
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            transition={{ duration: 0.7 }}
            className="mb-16 text-center"
          >
            <h2 className="text-2xl font-bold leading-relaxed md:text-3xl">
              最適な採用活動に切り替えるため、一緒に考えていきましょう！
              <br />
              ご不明点等があればお気軽にご相談ください。
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex flex-col items-center justify-center gap-6 sm:flex-row"
          >
            <Link
              href="https://hiveminds.co.jp/contact"
              className="w-full max-w-xs sm:w-auto"
            >
              <Button
                variant="destructive"
                size="lg"
                className="w-full rounded-full px-6 py-3 text-base font-medium shadow-lg transition-all duration-300 hover:scale-105 md:px-8 md:py-4 md:text-lg"
              >
                すぐ見積もり相談する{" "}
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </Link>
            <Link
              href="https://hiveminds.co.jp/contact"
              className="w-full max-w-xs sm:w-auto"
            >
              <Button
                variant="default"
                size="lg"
                className="w-full rounded-full bg-green-500 px-6 py-3 text-base font-medium shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-600 md:px-8 md:py-4 md:text-lg"
              >
                まずは無料相談をする{" "}
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
