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

  return (
    <div className="bg-stone-950 text-white">
      {/* Hero Section */}
      <div className="relative h-[480px] w-full overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-green-500/40 to-green-700/30"></div>

        {/* Hero content */}
        <div className="container relative z-10 flex h-full flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white/80 [text-shadow:_2px_2px_4px_rgb(0_0_0_/_0.25)] md:text-5xl lg:text-6xl">
              採用サイト制作代行サービス
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-white/80 md:text-2xl">
              求職者に伝わる採用サイトで人材確保の課題を解決
            </p>
          </motion.div>
        </div>
      </div>

      {/* Service Introduction */}
      <div className="bg-gradient-to-b from-stone-950 to-stone-900 py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <h2 className="mb-8 text-center text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
              求職者に伝わる。
              <br />
              採用に強い"自社専用"サイトを、丸ごと制作代行。
            </h2>
            <div className="max-w-3xl space-y-4 text-center">
              <p className="text-lg text-white/90">
                300社以上の採用に携わってきたノウハウをもとに
                採用特化型の構成・デザイン・ライティングで求職者の心を掴みます。
              </p>
              <p className="text-lg font-bold text-white/90">
                中小企業・地方企業に特化した「伝わる採用サイト」をご提案いたします。
              </p>
            </div>
          </motion.div>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              variant="destructive"
              size="lg"
              className="rounded-full font-medium shadow-lg"
            >
              すぐ見積もり相談する <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
            <Button
              variant="default"
              size="lg"
              className="rounded-full bg-amber-500 font-medium shadow-lg hover:bg-amber-600"
            >
              まずは無料相談をする <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Common Issues Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-12 flex flex-col items-center">
            <h2 className="mb-4 text-center text-2xl font-bold md:text-3xl">
              中小企業が抱える採用活動のお悩み
            </h2>
            <div className="h-0.5 w-16 bg-green-500"></div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <img
              src="/api/placeholder/600/400"
              alt="Recruitment Challenges"
              className="col-span-2 h-auto w-full rounded-lg shadow-lg"
            />

            <div className="mt-8 flex flex-col items-center justify-center gap-6 md:mt-0">
              <div className="flex h-64 w-64 items-center justify-center rounded-full bg-green-500/70 p-8">
                <p className="text-center text-lg font-bold text-white md:text-xl">
                  自社の採用サイトがないため充分な情報提供ができていない
                </p>
              </div>

              <div className="flex h-64 w-64 items-center justify-center rounded-full bg-green-500/70 p-8">
                <p className="text-center text-lg font-bold text-white md:text-xl">
                  採用に当てる人手が不足しており、採用体制が作れていない
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-6 md:mt-0">
              <div className="flex h-64 w-64 items-center justify-center rounded-full bg-green-500/70 p-8">
                <p className="text-center text-lg font-bold text-white md:text-xl">
                  採用サイト自体はあるが、情報が古く自社の魅力が伝わりきれていない
                </p>
              </div>

              <div className="flex h-64 w-64 items-center justify-center rounded-full bg-green-500/70 p-8">
                <p className="text-center text-lg font-bold text-white md:text-xl">
                  求職者に対してどのような情報をどのような方法で伝えれば良いか分からない
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="mb-8 text-2xl font-bold md:text-3xl lg:text-4xl">
              中小企業が抱える採用課題の多くは
              <br />
              「正しく設計された採用サイト」により解消されます。
            </h3>
          </div>
        </div>
      </section>

      {/* Job Seeker Info Section */}
      <section className="bg-gradient-to-b from-stone-900 to-stone-950 py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-12 flex flex-col items-center">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              求職者の情報収集
            </h2>
            <div className="h-0.5 w-16 bg-green-500"></div>
          </div>

          <div className="flex justify-center">
            <img
              src="/api/placeholder/800/400"
              alt="Job Seeker Information Collection"
              className="mb-8 h-auto w-full max-w-4xl rounded-lg shadow-lg"
            />
          </div>

          <div className="mt-16 text-center">
            <h3 className="mb-4 text-xl font-bold md:text-2xl lg:text-3xl">
              <span className="text-white">
                HiveMindsでは、採用支援先の採用率90%の実績を基に
              </span>
              <br />
              <span className="text-2xl text-green-500 md:text-3xl lg:text-4xl">
                貴社にとって最適な採用サイト制作
              </span>
              <span className="text-white">を実施いたします。</span>
            </h3>
          </div>
        </div>
      </section>

      {/* Company Strengths */}
      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-12 flex flex-col items-center">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              HiveMindsの強み
            </h2>
            <div className="h-0.5 w-16 bg-green-500"></div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card className="overflow-hidden border-2 border-green-500 bg-stone-900 shadow-lg">
              <div className="w-36 bg-green-500 px-3 py-1.5">
                <span className="font-bold tracking-wider text-white">
                  Point01
                </span>
              </div>
              <CardContent className="p-6 pt-8">
                <h4 className="mb-3 text-xl font-bold">採用特化の構成と設計</h4>
                <p className="text-base text-white/80">
                  求職者の知りたい情報や自社の魅力を求職者へ最大限に伝えるサイト構成、デザイン。
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2 border-green-500 bg-stone-900 shadow-lg">
              <div className="w-36 bg-green-500 px-3 py-1.5">
                <span className="font-bold tracking-wider text-white">
                  Point02
                </span>
              </div>
              <CardContent className="p-6 pt-8">
                <h4 className="mb-3 text-xl font-bold">
                  支援先採用率90%以上の実績
                </h4>
                <p className="text-base text-white/80">
                  これまでご支援をさせていただいたクライアント様の採用率は90%を超えており、そのノウハウ・経験を元にサイト製作を実施。
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2 border-green-500 bg-stone-900 shadow-lg">
              <div className="w-36 bg-green-500 px-3 py-1.5">
                <span className="font-bold tracking-wider text-white">
                  Point03
                </span>
              </div>
              <CardContent className="p-6 pt-8">
                <h4 className="mb-3 text-xl font-bold">
                  サイト制作だけにとどまらない
                </h4>
                <p className="text-base text-white/80">
                  HIveMindsでは単なる採用サイト制作だけで終わるのではなく、クライアント様のご状況に合わせた採用支援も実施可能。
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2 border-green-500 bg-stone-900 shadow-lg">
              <div className="w-36 bg-green-500 px-3 py-1.5">
                <span className="font-bold tracking-wider text-white">
                  Point04
                </span>
              </div>
              <CardContent className="p-6 pt-8">
                <h4 className="mb-3 text-xl font-bold">
                  中小企業・地方企業に特化した支援
                </h4>
                <p className="text-base text-white/80">
                  HiveMindsが得意とする採用支援は中小企業・地方企業が中心。自社に採用担当者がおらず、サイト制作に着手できていないクライアント様に最適。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-gradient-to-b from-stone-950 to-stone-900 py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-12 flex flex-col items-center">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">制作事例</h2>
            <div className="h-0.5 w-16 bg-green-500"></div>
          </div>

          <div className="mb-16">
            <Card className="border-stone-700 bg-stone-900 shadow-xl">
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
                  <p className="mb-6 text-sm text-white/90 md:text-base">
                    同社はこれまで様々な採用手法を試されていましたが、応募者数が少なく、新たな採用手法を探していました。
                    <br />
                    HiveMIndsではクライアント様がこれまで手をつけていなかった「採用媒体」内での自社ページを構築し、現在も運営中です。
                  </p>

                  <div>
                    <div className="mb-3 inline-flex rounded bg-green-500 px-3 py-1 font-medium text-white">
                      HiveMindsの支援内容
                    </div>
                    <ul className="list-disc space-y-1 pl-5 text-sm text-white/90 md:text-base">
                      <li>採用媒体運営</li>
                      <li>採用媒体内での自社ページ構築</li>
                      <li>採用方針/採用ターゲット考案</li>
                      <li>自社の強み・魅力発掘</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-8">
            <Card className="border-stone-700 bg-stone-900 shadow-xl">
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
                  <p className="mb-6 text-sm text-white/90 md:text-base">
                    同社はシステム開発・SES・人材サービス事業を取り組んでいるITベンチャー企業です。
                    <br />
                    業績好調により人員増加を図る上で自社サイトが必要だと判断し、弊社と共にサイト制作を行いました。
                  </p>

                  <div>
                    <div className="mb-3 inline-flex rounded bg-green-500 px-3 py-1 font-medium text-white">
                      HiveMindsの支援内容
                    </div>
                    <ul className="list-disc space-y-1 pl-5 text-sm text-white/90 md:text-base">
                      <li>ワイヤーフレーム〜デザイン設計</li>
                      <li>サイト内へ掲載するコンテンツ企画</li>
                      <li>コーディング対応</li>
                      <li>採用媒体運営</li>
                      <li>採用媒体内での自社ページ構築</li>
                      <li>採用方針/採用ターゲット考案</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 flex justify-center">
            <img
              src="/api/placeholder/800/400"
              alt="Sample Site"
              className="h-auto w-full max-w-4xl rounded-lg shadow-lg"
            />
          </div>

          <div className="mt-6">
            <h3 className="mb-4 text-xl font-bold">制作サイト例</h3>
          </div>
        </div>
      </section>

      {/* Pricing & Service Packages */}
      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-12 flex flex-col items-center">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              費用・サービスの流れ
            </h2>
            <div className="h-0.5 w-16 bg-green-500"></div>
          </div>

          <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Light Package */}
            <div className="flex flex-col overflow-hidden rounded-3xl">
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
            </div>

            {/* Standard Package */}
            <div className="flex flex-col overflow-hidden rounded-3xl">
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
            </div>

            {/* Original Package */}
            <div className="flex flex-col overflow-hidden rounded-3xl">
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
            </div>
          </div>

          <div className="mt-12">
            <h3 className="mb-8 text-xl font-bold">サービスフロー</h3>

            <div className="relative grid grid-cols-1 gap-4 md:grid-cols-5">
              <div className="absolute left-[10%] right-[10%] top-1/2 -z-10 hidden h-0.5 bg-white/20 md:block"></div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <img
                    src="/api/placeholder/120/80"
                    alt="Step 1"
                    className="h-auto w-24 rounded"
                  />
                </div>
                <p className="text-sm font-medium md:text-base">
                  お客様の採用に関する
                  <br />
                  お困り事についてのヒアリング
                </p>
                <div className="mt-6 hidden h-0.5 w-10 bg-white md:block"></div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <img
                    src="/api/placeholder/120/80"
                    alt="Step 2"
                    className="h-auto w-24 rounded"
                  />
                </div>
                <p className="text-sm font-medium md:text-base">
                  ヒアリング内容を元にした
                  <br />
                  採用サイト設計のご提案
                </p>
                <div className="mt-6 hidden h-0.5 w-10 bg-white md:block"></div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <img
                    src="/api/placeholder/120/80"
                    alt="Step 3"
                    className="h-auto w-24 rounded"
                  />
                </div>
                <p className="text-sm font-medium md:text-base">
                  お客様の強み・魅力・求めている人材などのヒアリング
                </p>
                <div className="mt-6 hidden h-0.5 w-10 bg-white md:block"></div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <img
                    src="/api/placeholder/120/80"
                    alt="Step 4"
                    className="h-auto w-24 rounded"
                  />
                </div>
                <p className="text-sm font-medium md:text-base">
                  ヒアリング内容を元にした求職者に「伝わる」
                  <br />
                  サイト制作
                </p>
                <div className="mt-6 hidden h-0.5 w-10 bg-white md:block"></div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <img
                    src="/api/placeholder/120/80"
                    alt="Step 5"
                    className="h-auto w-24 rounded"
                  />
                </div>
                <p className="text-sm font-medium md:text-base">
                  制作した採用サイトの運用方法と採用に関する
                  <br />
                  アドバイス
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-b from-stone-900 to-stone-950 py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-12 text-center text-2xl font-bold leading-tight md:text-3xl">
            最適な採用活動に切り替えるため、一緒に考えていきましょう！
            <br />
            ご不明点等があればお気軽にご相談ください。
          </div>

          <div className="flex flex-col justify-center gap-6 sm:flex-row">
            <Button
              variant="destructive"
              size="lg"
              className="rounded-full font-medium shadow-lg"
            >
              すぐ見積もり相談する <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              variant="default"
              size="lg"
              className="rounded-full bg-amber-500 font-medium shadow-lg hover:bg-amber-600"
            >
              まずは無料相談をする <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
