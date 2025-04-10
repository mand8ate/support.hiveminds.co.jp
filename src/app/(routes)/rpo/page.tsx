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
  Clock,
  BarChart,
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

const caseStudies = [
  {
    company: "オフィスインフラ設備会社",
    location: "東京都",
    budget: "15万円",
    period: "1年～",
    description:
      "同社はこれまで様々な採用手法を試されていましたが、応募者数が少なく、新たな採用手法を探していました。\nHiveMIndsではお客様がこれまで手をつけていなかった手法を丁寧に対応し、現在も若手人材からの応募を獲得しています。",
    support: [
      "求人媒体管理（求人作成・編集・更新）",
      "応募者対応（※面接調整まで）",
      "採用媒体内での自社ページ構築",
      "採用方針・計画／採用ターゲット考案",
      "自社の強み・魅力発掘・企業訪問　他",
    ],
    results: [
      "各種求人媒体運用の習慣化",
      "採用媒体内での自社ページ構築",
      "事業戦略に合わせた人材採用計画の立案",
      "20代、30代の若手社員の採用成功",
      "若手求職者からの継続的な応募獲得",
      "自社の成功求人パターンの形成　他",
    ],
  },
  {
    company: "電子機器メーカー会社",
    location: "静岡県",
    budget: "25万円",
    period: "～6ヵ月",
    description:
      "同社はこれまで、代表様、取締役様が採用活動をされておられましたが、物理的な時間の確保ができず、採用業務も曖昧なものとなっておりました。そこでHiveMindsが中途・パート含め3職種の採用業務をお引き受けし、結果継続的な人材確保が可能となりました。",
    support: [
      "求人媒体管理（求人作成・編集・更新）",
      "応募者対応（※面接調整まで）",
      "採用媒体内での自社ページ構築",
      "エージェントコントロール対応",
      "採用方針／採用ターゲット考案",
      "自社の強み・魅力発掘・企業訪問　他",
    ],
    results: [
      "各種求人媒体運用の習慣化",
      "採用媒体内での自社ページ構築",
      "事業戦略に合わせた人材採用計画の立案",
      "特定の国家資格保有者の採用成功",
      "年間8名のパート人材の採用成功",
      "自社の成功求人パターンの形成　他",
    ],
  },
  {
    company: "福祉事業者",
    location: "東京都",
    budget: "10万円",
    period: "～6ヵ月",
    description:
      "同社が所属する福祉業界は人材難が著しく、これまで様々な採用投資を行ってきましたが応募は1~2名程度となっておりました。\nそこでHiveMindsより、全求人媒体の見直しと企業の魅力を正しくPRした結果、短期間で複数名のターゲット人材の確保に成功しました。",
    support: [
      "求人媒体管理（求人作成・編集・更新）",
      "採用媒体内での自社ページ構築",
      "採用方針・計画／採用ターゲット考案",
      "自社の強み・魅力発掘・企業訪問　他",
    ],
    results: [
      "各種求人媒体運用の習慣化",
      "採用媒体内での自社ページ構築",
      "事業戦略に合わせた人材採用計画の立案",
      "20～30代 正社員3名の採用成功",
      "年間5名のパート人材の採用成功",
      "自社の成功求人パターンの形成　他",
    ],
  },
  {
    company: "建設プランター設計",
    location: "愛媛県",
    budget: "8万円",
    period: "～3ヵ月",
    description:
      "同社は若手社員の確保に新卒採用を試みておりましたが、これまで経験がなく求人掲載のみとなっていました。HiveMindsでは求人内容の添削からインターンシップの企画、学校訪問対策などを共に構築した結果、新卒だけではなく若手中途社員の確保にもつながりました。",
    support: [
      "新卒採用アドバイザリー業務（高卒・大卒）",
      "新卒向けインターンシップ企画立案",
      "早期退職防止施策の提案と構築",
      "採用方針/採用ターゲット考案",
      "自社の強み・魅力発掘・企業訪問　他",
    ],
    results: [
      "新卒向け会社PR内容の明確化",
      "初めてのインターンシップで集客成功",
      "ターゲット人材だけではなく、20代の第二新卒の集客と採用に成功",
      "近隣地域の高校・大学への活動周知　他",
    ],
  },
];

export default function RecruitmentOutsourcingPage() {
  const { theme } = useTheme();

  return (
    <div className="bg-stone-950 text-white">
      {/* Hero Section */}
      <div className="relative h-[580px] w-full overflow-hidden pt-14">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/rpo/hero.png"
            alt="Hero Background"
            className="h-full w-full object-cover"
          />
          {/* Overlay gradient on top of the image */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/40 to-amber-700/30"></div>
        </div>

        {/* Hero content */}
        <div className="container relative z-10 flex h-full flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white [text-shadow:_2px_2px_4px_rgb(0_0_0_/_0.25)] md:text-5xl lg:text-6xl">
              採用担当業務外注サービス
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Service Introduction */}
      <div className="mt-12 bg-gradient-to-b from-stone-950 to-stone-900 py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <h2 className="mb-16 text-center text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
              採用業務を「プロ」が対応。
              <br className="mb-4" />
              <span className="mt-6 block pt-4">
                御社の採用活動を引き受けるプログラムです。
              </span>
            </h2>
            <div className="max-w-3xl space-y-4 text-center">
              <p className="text-lg text-white/90">
                <span className="mb-3 block font-normal">
                  「従業員100名以下の中小企業」で採用業務を行ってきた、
                </span>

                <span className="mb-3 block">
                  <span className="font-bold text-amber-500">
                    「中小企業採用の専門家」
                  </span>
                  <span className="font-normal">が、</span>
                </span>

                <span className="block font-normal">
                  御社の採用業務をお引き受けし、円滑でしっかり向き合った採用活動を創ります。
                </span>
              </p>
            </div>
          </motion.div>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="https://hiveminds.co.jp/contact">
              <Button
                variant="destructive"
                size="lg"
                className="rounded-full px-6 py-3 text-base font-medium shadow-lg md:px-8 md:py-4 md:text-lg"
              >
                すぐ見積もり相談する{" "}
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </Link>
            <Link href="https://hiveminds.co.jp/contact">
              <Button
                variant="default"
                size="lg"
                className="rounded-full bg-amber-500 px-6 py-3 text-base font-medium shadow-lg hover:bg-amber-600 md:px-8 md:py-4 md:text-lg"
              >
                まずは無料相談をする{" "}
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Common Issues Section */}
      <section className="bg-stone-900 py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-2xl font-bold leading-tight md:text-3xl">
              自社に人手が足りず、採用活動を充分に行えていない！
              <br />
              そんなお困りごとはありませんか？
            </h2>
          </motion.div>

          <div className="relative">
            {/* Image container that fills the entire width */}
            <div className="w-full">
              <img
                src="/rpo/nayami.png"
                alt="Recruitment Challenges"
                className="h-auto w-full rounded-lg object-cover shadow-lg"
              />
            </div>

            {/* Text positioned over the image */}
            <div className="absolute right-4 top-1/2 flex max-w-[50%] -translate-y-1/2 flex-col gap-3">
              {[
                { text: "採用活動の時間が確保できない", delay: 0.1 },
                { text: "何をどうすれば良いかわからない", delay: 0.2 },
                {
                  text: "時間をかけて色々やったが成果が出なかった",
                  delay: 0.3,
                },
                {
                  text: "成果が出ないのでついつい後回しになってしまう",
                  delay: 0.4,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: item.delay }}
                  className="rounded-xl bg-gradient-to-r from-orange-300/70 to-amber-300/70 px-5 py-3"
                >
                  <p className="text-base font-medium text-black md:text-lg">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-gradient-to-b from-stone-900 to-stone-950 py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h2 className="mb-10 text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
              企業の重要課題である採用業務を
              <br />
              HiveMindsの専門人材がお引き受けします。
            </h2>

            <div className="mb-10">
              <span className="text-2xl font-bold md:text-3xl">
                <span className="text-amber-500">
                  従業員100名以下の中小企業に特化
                </span>
                <span className="text-white">
                  した
                  <br />
                  採用担当業務代行サービス
                </span>
              </span>
            </div>

            <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed">
              HiveMindsではこれまでの中小企業様の採用に携わった実績と経験をもとに、
              「人手が足りず採用活動が十分にできていない従業員100名以下の中小企業様」に特化した
              採用業務代行サービスをご提供いたします。
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="border-stone-700 bg-stone-800 shadow-xl">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-amber-500">
                  <Users className="mr-2 h-5 w-5" />
                  <span>実績と信頼</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90">
                  300社以上の採用支援実績と90%以上の採用成功率。中小企業の現場を熟知した専門家がサポートします。
                </p>
              </CardContent>
            </Card>

            <Card className="border-stone-700 bg-stone-800 shadow-xl">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-amber-500">
                  <Clock className="mr-2 h-5 w-5" />
                  <span>時間の創出</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90">
                  採用業務に割く時間を確保できない企業様に代わり、プロが必要な時間と労力を投じて結果を出します。
                </p>
              </CardContent>
            </Card>

            <Card className="border-stone-700 bg-stone-800 shadow-xl">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-amber-500">
                  <BarChart className="mr-2 h-5 w-5" />
                  <span>戦略的アプローチ</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90">
                  単なる代行だけでなく、貴社に最適化された採用戦略と計画を立案し、継続的な成果を創出します。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-12 flex justify-center">
            <Badge
              variant="outline"
              className="rounded-full border-amber-500/50 bg-amber-500/20 px-6 py-2 text-lg text-amber-400"
            >
              サービスの特長
            </Badge>
          </div>

          <div className="space-y-6">
            {[
              {
                title:
                  "御社の採用活動をお引き受けし、時間と専門的な価値をご提供",
                img: "/rpo/jobIcon.png",
              },
              {
                title:
                  "各メンバーが中小企業出身。だから現場の実態が分かります！",
                img: "/rpo/schoolIcon.png",
              },
              {
                title:
                  "中小企業で「採用業務」を経験してきた専門家がご協力します！",
                img: "/rpo/businessmanIcon.png",
              },
              {
                title:
                  "専門官1人の経験ではなく、全社が持つ中小企業採用ノウハウを活用",
                img: "/rpo/bookshelfIcon.png",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border-stone-700 bg-stone-900 shadow-md transition-shadow hover:shadow-lg"
              >
                <CardContent className="p-5 md:p-6">
                  <div className="flex items-center gap-5">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-amber-500/20">
                      <img
                        src={feature.img}
                        alt={`Feature ${index + 1}`}
                        className="h-10 w-10 object-contain"
                      />
                    </div>
                    <p className="text-base font-medium leading-relaxed tracking-wide text-white md:text-lg">
                      {feature.title}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Item List Section */}
      <section className="bg-gradient-to-b from-stone-950 to-stone-900 py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-12 flex flex-col items-center">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              対応業務一覧（例）
            </h2>
            <div className="h-0.5 w-16 bg-green-500"></div>
          </div>

          <div className="overflow-x-auto">
            <Table className="w-full border-collapse">
              <TableHeader>
                <TableRow className="border-green-500">
                  <TableHead className="w-1/3 border border-green-500 bg-green-500/80 py-4 text-center text-lg font-bold text-white">
                    業務項目
                  </TableHead>
                  <TableHead className="w-2/3 border border-green-500 bg-green-500/80 py-4 text-center text-lg font-bold text-white">
                    業務詳細
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-green-500">
                  <TableCell className="border border-green-500 text-center font-medium">
                    状況確認と理想確認
                  </TableCell>
                  <TableCell className="border border-green-500 text-white/90">
                    お客様の現場までお伺いし、現在の採用状況の確認、環境・業務内容の理解と自社の強みと理想の採用活動のイメージを引き出します。
                  </TableCell>
                </TableRow>
                <TableRow className="border-green-500">
                  <TableCell className="border border-green-500 text-center font-medium">
                    採用計画考案
                  </TableCell>
                  <TableCell className="border border-green-500 text-white/90">
                    状況確認の内容、その他収集したお客様の情報をもとに自社にとって最適な採用計画（使うツール、採用人数、採用ターゲットなど）の設計を実施いたします。
                  </TableCell>
                </TableRow>
                <TableRow className="border-green-500">
                  <TableCell className="border border-green-500 text-center font-medium">
                    求人媒体運用
                  </TableCell>
                  <TableCell className="border border-green-500 text-white/90">
                    お客様と共に認識を併せた採用計画を達成するために、求人媒体の運用を実施いたします。具体的には、求人作成・求人編集／更新・数値データを用いた分析まで行い、効果的な運用を実施いたします。
                  </TableCell>
                </TableRow>
                <TableRow className="border-green-500">
                  <TableCell className="border border-green-500 text-center font-medium">
                    応募者対応
                  </TableCell>
                  <TableCell className="border border-green-500 text-white/90">
                    応募があった際には応募者との連絡対応も実行いたします。昨今の採用活動はスピーディーな対応が求められてるため、1営業日以内の対応を実施します。面接の対応は別途ご相談となります。
                  </TableCell>
                </TableRow>
                <TableRow className="border-green-500">
                  <TableCell className="border border-green-500 text-center font-medium">
                    状況報告と定例打合せ
                  </TableCell>
                  <TableCell className="border border-green-500 text-white/90">
                    月に1~2回の定期状況報告および次月以降の方針共有会を実施いたします。お客様と弊社、お互いにコミュニケーションを取りながら、最適な採用活動を創り上げます。
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="mt-8 space-y-2 text-center">
            <p className="text-sm text-white/80">
              上記業務項目は一部となります。具体的な対応業務はお客様毎の状況に応じた内容をご提案いたします。
            </p>
            <p className="text-sm text-white/80">
              ※ご支援内容は代行だけではなく、アドバイザリーのみも承っております。
            </p>
          </div>
        </div>
      </section>

      {/* Market Data */}
      <section className="bg-stone-950 py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="flex flex-col items-center">
            {/* Graph image */}
            <div className="mb-12 w-full max-w-[600px]">
              <img
                src="/rpo/graphic.png"
                alt="Market Data showing 72.4% of SMEs have recruitment staff with concurrent duties"
                className="h-auto w-full"
              />
            </div>

            {/* Explanatory text */}
            <div className="mb-12 max-w-3xl text-center text-lg leading-relaxed">
              中小企業の多くが【採用担当】がおらず、
              <br />
              社長が担当、または兼務で採用活動を行っている状況であり、
              <br />
              十分な採用活動が実施出来ていません。
            </div>

            {/* Bottom highlight */}
            <div className="w-full max-w-4xl text-center text-xl leading-relaxed">
              <p>
                <span className="text-white">本サービスでは、</span>
                <span className="font-bold text-amber-500">
                  歩留まりしてしまっている中小企業の採用活動を動かし、
                  <br />
                  資産としての採用力を創り上げる
                </span>
                <span className="text-white">ことをご提供します。</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Strengths */}
      <section className="bg-gradient-to-b from-stone-900 to-stone-950 py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-16 flex flex-col items-center">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              HiveMindsの強み
            </h2>
            <div className="h-0.5 w-16 bg-green-500"></div>
          </div>

          {/* Redesigned statistics showcase */}
          <div className="mb-16">
            <div className="grid grid-cols-1 gap-8 md:gap-12">
              {/* First statistic */}
              <div className="overflow-hidden rounded-xl bg-gradient-to-r from-stone-900 to-stone-800 shadow-xl">
                <div className="flex flex-col items-center p-8 md:flex-row md:items-center md:justify-center md:gap-6">
                  <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-amber-500/20 md:mb-0">
                    <span className="text-4xl font-bold text-amber-500 md:text-5xl">
                      300+
                    </span>
                  </div>
                  <div className="text-center md:text-left">
                    <span className="block text-lg text-amber-500/90 md:text-xl">
                      採用支援実績
                    </span>
                    <span className="text-xl font-medium text-white md:text-2xl">
                      300社以上の採用に携わり
                    </span>
                  </div>
                </div>
              </div>

              {/* Second statistic */}
              <div className="overflow-hidden rounded-xl bg-gradient-to-r from-stone-800 to-stone-900 shadow-xl">
                <div className="flex flex-col items-center p-8 md:flex-row md:items-center md:justify-center md:gap-6">
                  <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-amber-500/20 md:mb-0">
                    <span className="text-4xl font-bold text-amber-500 md:text-5xl">
                      90%
                    </span>
                  </div>
                  <div className="text-center md:text-left">
                    <span className="block text-lg text-amber-500/90 md:text-xl">
                      支援先採用成功率
                    </span>
                    <span className="text-xl font-medium text-white md:text-2xl">
                      90%以上の採用成功実績
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3 className="mb-12 text-center text-xl font-bold">
            HiveMindsの強み 他にも...
          </h3>

          <div className="space-y-6 md:space-y-8">
            {[
              {
                point: "Point01",
                title: "貴社の強みを引き出すヒアリング力",
                description:
                  "採用活動を行う上で必須となる【自社の強み】をさまざまな観点から引き出します。これまでの経験から他社には無いヒアリング手法、ヒアリング項目をもとに自社だけでは気づかなかった強みが発掘されます。",
              },
              {
                point: "Point02",
                title: "採用媒体運用ノウハウ",
                description:
                  "HiveMindsではこれまでindeedやengageなどの採用媒体を活用し、効果的に採用まで繋げるノウハウを蓄積しています。状況確認、会社見学、定期ミーティングを通して得た貴社の情報を元に求職者の興味関心を引く求人作成も行います。",
              },
              {
                point: "Point03",
                title:
                  "中小企業の採用現場経験からなる採用戦略/計画 企画立案スキル",
                description:
                  "中小企業の多くは、自社に採用担当者がおらず、採用活動に手が回っていない企業様の多くは「採用戦略/計画」をしっかりと構築しないまま採用活動を行なっているケースが多くあります。HiveMindsでは採用活動を成功させるためにそれらの企画立案を行い、お客様の採用活動をご支援いたします。",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden border border-green-500 bg-stone-900 shadow-md"
              >
                <div className="w-24 bg-green-500 px-3 py-1.5">
                  <span className="font-bold tracking-wider text-white">
                    {item.point}
                  </span>
                </div>
                <CardContent className="px-4 pb-4 pt-6 md:px-6 md:pb-6 md:pt-8">
                  <h4 className="mb-3 text-lg font-bold md:text-xl">
                    {item.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-white/90 md:text-base">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-stone-950 py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-16 flex flex-col items-center">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">支援事例</h2>
            <div className="h-0.5 w-16 bg-green-500"></div>
          </div>

          <Tabs defaultValue="case1" className="w-full">
            <TabsList className="mb-8 flex h-auto w-full flex-col bg-stone-800 p-1 sm:flex-row">
              {caseStudies.map((caseItem, index) => (
                <TabsTrigger
                  key={`tab-${index + 1}`}
                  value={`case${index + 1}`}
                  className={`py-2 text-sm ${index < 3 ? "mb-1 sm:mb-0" : ""} data-[state=active]:bg-green-500 md:text-base`}
                >
                  {caseItem.company}
                </TabsTrigger>
              ))}
            </TabsList>

            {caseStudies.map((caseItem, index) => (
              <TabsContent
                key={`content-${index + 1}`}
                value={`case${index + 1}`}
                className="mt-0"
              >
                <Card className="border-stone-700 bg-stone-900 shadow-xl">
                  <CardHeader className="pb-2">
                    <Badge className="mb-2 w-fit bg-green-500 hover:bg-green-600">
                      Case {index + 1}
                    </Badge>
                    <CardTitle className="text-lg md:text-xl">
                      {caseItem.location} {caseItem.company} 様
                    </CardTitle>
                    <CardDescription className="text-white/70">
                      ご予算：{caseItem.budget}／月　ご支援期間：
                      {caseItem.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <div className="mb-4 border-t border-white/20 pt-4">
                      <p className="mb-6 text-sm text-white/90 md:text-base">
                        {caseItem.description}
                      </p>

                      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="space-y-6">
                          <div>
                            <div className="mb-3 inline-flex rounded bg-green-500 px-3 py-1 font-medium text-white">
                              HiveMindsの支援内容
                            </div>
                            <ul className="list-disc space-y-1 pl-5 text-sm text-white/90 md:text-base">
                              {caseItem.support.map((item, itemIndex) => (
                                <li key={`support-${index}-${itemIndex}`}>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <div className="mb-3 inline-flex rounded bg-green-500 px-3 py-1 font-medium text-white">
                              支援成果
                            </div>
                            <ul className="list-disc space-y-1 pl-5 text-sm text-white/90 md:text-base">
                              {caseItem.results.map((item, itemIndex) => (
                                <li key={`result-${index}-${itemIndex}`}>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="justify-top relative flex items-center">
                          <img
                            src={`/rpo/case${index + 1}Pic1.png`}
                            alt={`Case Study ${index + 1} - Office`}
                            className="z-10 h-auto w-full max-w-[350px] rounded-lg"
                          />
                          <img
                            src={`/rpo/case${index + 1}Pic2.png`}
                            alt={`Case Study ${index + 1} - Blueprint`}
                            className="absolute bottom-4 right-2 z-20 hidden h-auto w-[350px] rounded-lg md:block"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Service Flow */}
      <section className="bg-gradient-to-b from-stone-950 to-stone-900 py-16">
        <div className="container mx-auto max-w-5xl px-4">
          {/* Header - only visible on mobile */}
          <div className="mb-12 flex flex-col items-center md:hidden">
            <h2 className="mb-4 text-2xl font-bold">サービスフロー</h2>
            <div className="h-0.5 w-16 bg-green-500"></div>
          </div>

          {/* Mobile image - only visible on small screens */}
          <div className="flex justify-center md:hidden">
            <img
              src="/rpo/serviceflowSP.png"
              alt="Service Flow Diagram Mobile"
              className="h-auto w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Desktop image - hidden on mobile, visible on md screens and up */}
          <div className="hidden justify-center md:flex">
            <img
              src="/rpo/serviceflow.png"
              alt="Service Flow Diagram Desktop"
              className="h-auto w-full max-w-[900px] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-b from-stone-900 to-stone-950 py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-16 text-center">
            <h2 className="text-2xl font-bold leading-relaxed md:text-3xl">
              <span className="mb-6 block">
                人手が足りず十分な採用活動を行えていない中小企業の皆様へ
              </span>
              <span className="block">
                人材採用に「プロの時間」を使いませんか？
              </span>
            </h2>
          </div>

          <div className="flex flex-col justify-center gap-6 sm:flex-row">
            <Link href="https://hiveminds.co.jp/contact">
              <Button
                variant="destructive"
                size="lg"
                className="rounded-full px-6 py-3 text-base font-medium shadow-lg md:px-8 md:py-4 md:text-lg"
              >
                すぐ見積もり相談する{" "}
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </Link>
            <Link href="https://hiveminds.co.jp/contact">
              <Button
                variant="default"
                size="lg"
                className="rounded-full bg-amber-500 px-6 py-3 text-base font-medium shadow-lg hover:bg-amber-600 md:px-8 md:py-4 md:text-lg"
              >
                まずは無料相談をする{" "}
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
