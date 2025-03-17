"use client";
import { cn } from "@/lib/utils";
import { Roboto, Inter } from "next/font/google";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700", "900"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function InboundPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-stone-950 text-white">
      {/* Hero Section with Overlay Images */}
      <div className="relative">
        {/* Background images with color overlays */}
        <img
          className="h-[676px] w-full object-cover"
          src="https://placehold.co/1920x676"
          alt="Background"
        />
        <div className="absolute inset-0 bg-sky-400/40"></div>

        {/* Header Title */}
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 text-center">
          <h1
            className={cn(
              roboto.className,
              "text-5xl font-bold leading-[72px] text-white md:text-7xl",
              "shadow-[4px_4px_4px_rgb(0_0_0_/_0.14)]",
            )}
          >
            INBOUND TOTAL SUPPORT
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-24 md:px-8">
        <div className="flex flex-col items-center gap-20 text-center">
          {/* Intro Section */}
          <div className="flex flex-col items-center gap-24">
            <h2
              className={cn(
                inter.className,
                "text-3xl font-bold leading-relaxed md:text-4xl lg:text-5xl",
              )}
            >
              東南アジア・EUからのインバウンドニーズを獲得する
              <br />
              トータルサポートサービスを。
            </h2>

            <p
              className={cn(
                inter.className,
                "text-xl font-normal leading-relaxed md:text-2xl lg:text-3xl",
              )}
            >
              インバウンドニーズを獲得するためには、旬な施策や大きなPRをただ行えばよいというわけではなく、
              <br />
              段階毎に最適な施策を多なうことが重要です。
              <br />
              HiveMindsが提供するインバウンドサポートは、
              <br />
              お客様それぞれの「フェーズ（段階）」に合わせたご提案・ご支援を
              <br />
              ネイティブ外国人の視点から実施させていただきます。
            </p>
          </div>

          {/* CTA Button */}
          <Button className="rounded-[70px] bg-sky-400 px-24 py-7 text-center text-white shadow-[0px_13px_0px_0px_rgba(9,132,176,1.00)] hover:bg-sky-500">
            <span className="text-2xl font-bold">自社のフェーズを知る</span>
            <span className="text-4xl font-bold">無料相談</span>
          </Button>
        </div>

        {/* Strengths Section */}
        <div className="mt-28 flex w-full flex-col items-center gap-28">
          <div className="flex flex-col items-center gap-10">
            <h2
              className={cn(
                inter.className,
                "text-4xl font-bold text-white lg:text-5xl",
              )}
            >
              HiveMindsの強み
            </h2>
            <div className="h-0 w-20 outline outline-[3px] outline-offset-[-1.5px] outline-purple-900"></div>
          </div>

          {/* Strengths Grid */}
          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
            {/* Point 01 */}
            <div className="relative h-80 overflow-hidden bg-stone-950 outline outline-[3px] outline-offset-[-3px] outline-purple-900">
              <div className="absolute left-0 top-0 h-14 w-52 bg-purple-900"></div>
              <div className="absolute left-[35px] top-[13px] text-3xl font-bold leading-7 tracking-[2.8px]">
                Point01
              </div>
              <div className="absolute left-[76px] top-[88px] flex max-w-[607px] flex-col gap-4">
                <h3 className="text-3xl font-bold leading-[48px]">
                  海外市場を熟知したネイティブメンバーがサポート
                </h3>
                <p className="text-2xl font-medium leading-10">
                  東南アジアネイティブ（インドネシア）、EUネイティブ（ドイツ）のメンバーが海外目線でサポートします。
                </p>
              </div>
            </div>

            {/* Point 02 */}
            <div className="relative h-80 overflow-hidden bg-stone-950 outline outline-[3px] outline-offset-[-3px] outline-purple-900">
              <div className="absolute left-0 top-0 h-14 w-52 bg-purple-900"></div>
              <div className="absolute left-[35px] top-[13px] text-3xl font-bold leading-7 tracking-[2.8px]">
                Point02
              </div>
              <div className="absolute left-[76px] top-[88px] flex max-w-[607px] flex-col gap-4">
                <h3 className="text-3xl font-bold leading-[48px]">
                  インバウンド需要に特化した戦略提案と情報共有
                </h3>
                <p className="text-2xl font-medium leading-10">
                  各国のインバウンド需要に特化した施策の提案と、現地情報のスピーディーな共有が可能です。
                </p>
              </div>
            </div>

            {/* Point 03 */}
            <div className="relative h-80 overflow-hidden bg-stone-950 outline outline-[3px] outline-offset-[-3px] outline-purple-900">
              <div className="absolute left-0 top-0 h-14 w-52 bg-purple-900"></div>
              <div className="absolute left-[35px] top-[13px] text-3xl font-bold leading-7 tracking-[2.8px]">
                Point03
              </div>
              <div className="absolute left-[76px] top-[88px] flex max-w-[607px] flex-col gap-4">
                <h3 className="text-3xl font-bold leading-[48px]">
                  現地ネットワークを活かした
                  <br />
                  積極的なPR活動
                </h3>
                <p className="text-2xl font-medium leading-10">
                  現地企業やインフルエンサーとの連携を可能にし、受け身ではなく攻めのPR活動にも柔軟に対応します。
                </p>
              </div>
            </div>

            {/* Point 04 */}
            <div className="relative h-80 overflow-hidden bg-stone-950 outline outline-[3px] outline-offset-[-3px] outline-purple-900">
              <div className="absolute left-0 top-0 h-14 w-52 bg-purple-900"></div>
              <div className="absolute left-[35px] top-[13px] text-3xl font-bold leading-7 tracking-[2.8px]">
                Point04
              </div>
              <div className="absolute left-[76px] top-[88px] flex max-w-[607px] flex-col gap-16">
                <h3 className="text-3xl font-bold leading-[48px]">
                  シームレスなワンストップサポート
                </h3>
                <p className="text-2xl font-medium leading-10">
                  サポート内容は1項目に限らず、必要に応じてシームレスなサポート対応もご協力できます。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Phases Section */}
        <div className="mt-24 flex w-full flex-col items-center">
          <div className="flex w-full flex-col items-center gap-28">
            <div className="flex flex-col items-center gap-10">
              <h2
                className={cn(
                  inter.className,
                  "text-4xl font-bold text-white lg:text-5xl",
                )}
              >
                フェーズに応じたサポート内容
              </h2>
              <div className="h-0 w-20 outline outline-[3px] outline-offset-[-1.5px] outline-purple-900"></div>
            </div>

            {/* Phase Timeline */}
            <div className="relative flex flex-col items-center">
              {/* Vertical line */}
              <div className="absolute bottom-0 left-1/2 top-0 w-0.5 -translate-x-1/2 bg-purple-900"></div>

              {/* Phase 1 */}
              <div className="relative mb-20 flex flex-col items-center">
                <h3
                  className={cn(
                    roboto.className,
                    "mb-16 text-[152px] font-black text-neutral-800",
                  )}
                >
                  Phase1
                </h3>
                <div className="z-10 mb-8 flex h-8 w-8 items-center justify-center rounded-full bg-purple-900"></div>
                <div className="mb-8 flex flex-col gap-1 text-center">
                  <span className="text-lg font-bold">フェーズ1</span>
                  <span className="text-4xl font-bold">着手期</span>
                </div>
                <div className="mb-10 max-w-[710px] text-2xl font-medium leading-10">
                  インバウンドニーズ対応を考え始めた、もしくは着手し始めた段階です。この段階では「環境調査」と「即効性のあるリソース整理」を実施することがポイントです。
                </div>
                <div className="mb-10 flex flex-col gap-5">
                  <div className="flex items-center gap-2.5 bg-purple-900 px-4 py-1.5">
                    <span className="text-3xl font-bold leading-7">
                      サポートの具体例
                    </span>
                  </div>
                  <div className="flex flex-col gap-3.5">
                    <p className="text-2xl font-medium">
                      ・自社商品カテゴリーのインバウンドニーズ調査（国内）
                    </p>
                    <p className="text-2xl font-medium">
                      ・自社商品カテゴリーのインバウンドニーズ調査（国外）
                    </p>
                    <p className="text-2xl font-medium">・MEO対策　など</p>
                  </div>
                </div>
                <img
                  className="h-[540px] w-[720px] object-cover"
                  src="https://placehold.co/720x540"
                  alt="Phase 1"
                />
              </div>

              {/* Phase 2 */}
              <div className="relative mb-20 flex flex-col items-center">
                <h3
                  className={cn(
                    roboto.className,
                    "mb-16 text-[152px] font-black text-neutral-800",
                  )}
                >
                  Phase2
                </h3>
                <div className="z-10 mb-8 flex h-8 w-8 items-center justify-center rounded-full bg-purple-900"></div>
                <div className="mb-8 flex flex-col gap-1 text-center">
                  <span className="text-lg font-bold">フェーズ2</span>
                  <span className="text-4xl font-bold">シード期</span>
                </div>
                <div className="mb-10 max-w-[710px] text-2xl font-medium leading-10">
                  インバウンドニーズ対応に着手し、訪日外国人ニーズ対応の環境整備や攻めの施策を実施する段階です。この段階では「細かな配慮」と「継続」を実施することがポイントです。
                </div>
                <div className="mb-10 flex flex-col gap-5">
                  <div className="flex items-center gap-2.5 bg-purple-900 px-4 py-1.5">
                    <span className="text-3xl font-bold leading-7">
                      サポートの具体例
                    </span>
                  </div>
                  <div className="flex flex-col gap-3.5">
                    <p className="text-2xl font-normal">
                      ・自社サイトおよび商品サイトの多言語対応
                    </p>
                    <p className="text-2xl font-normal">
                      ・インバウンド向けSNS・広告運用
                    </p>
                    <p className="text-2xl font-normal">
                      ・インバウンド向けプラットフォーム活用　など
                    </p>
                  </div>
                </div>
                <img
                  className="h-[540px] w-[720px] object-cover"
                  src="https://placehold.co/720x540"
                  alt="Phase 2"
                />
              </div>

              {/* Phase 3 */}
              <div className="relative mb-20 flex flex-col items-center">
                <h3
                  className={cn(
                    roboto.className,
                    "mb-16 text-[152px] font-black text-neutral-800",
                  )}
                >
                  Phase3
                </h3>
                <div className="z-10 mb-8 flex h-8 w-8 items-center justify-center rounded-full bg-purple-900"></div>
                <div className="mb-8 flex flex-col gap-1 text-center">
                  <span className="text-lg font-bold">フェーズ3</span>
                  <span className="text-4xl font-bold">グロース期</span>
                </div>
                <div className="mb-10 max-w-[710px] text-2xl font-medium leading-10">
                  インバウンドニーズ対応を継続して実施できており、更なるニーズ獲得のために各種の投資を行う段階です。この段階では、「インパクトあるPR」と「海外専門」などのキーワードが重要です。
                </div>
                <div className="mb-10 flex flex-col gap-5">
                  <div className="flex items-center gap-2.5 bg-purple-900 px-4 py-1.5">
                    <span className="text-3xl font-bold leading-7">
                      サポートの具体例
                    </span>
                  </div>
                  <div className="flex flex-col gap-3.5">
                    <p className="text-2xl font-normal">
                      ・在日および訪日インフルエンサーとのコラボ施策
                    </p>
                    <p className="text-2xl font-normal">
                      ・海外需要獲得のための商品設計
                    </p>
                    <p className="text-2xl font-normal">
                      ・海外対応専門のインフォメーション設置　など
                    </p>
                  </div>
                </div>
                <img
                  className="h-[540px] w-[720px] object-cover"
                  src="https://placehold.co/720x540"
                  alt="Phase 3"
                />
              </div>

              {/* Phase 4 */}
              <div className="relative mb-20 flex flex-col items-center">
                <h3
                  className={cn(
                    roboto.className,
                    "mb-16 text-[152px] font-black text-neutral-800",
                  )}
                >
                  Phase4
                </h3>
                <div className="z-10 mb-8 flex h-8 w-8 items-center justify-center rounded-full bg-purple-900"></div>
                <div className="mb-8 flex flex-col gap-1 text-center">
                  <span className="text-lg font-bold">フェーズ4</span>
                  <span className="text-4xl font-bold">継続期</span>
                </div>
                <div className="mb-10 max-w-[710px] text-2xl font-medium leading-10">
                  インバウンドニーズ対応が軌道に乗り、継続して自社のポジションを拡大してく段階です。この段階では既存の施策ではなく、個別施策を時期を見て実施することで、更なる拡大を目指します。
                </div>
                <div className="mb-10 flex flex-col gap-5">
                  <div className="flex items-center gap-2.5 bg-purple-900 px-4 py-1.5">
                    <span className="text-3xl font-bold leading-7">
                      サポートの具体例
                    </span>
                  </div>
                  <div className="flex flex-col gap-3.5">
                    <p className="text-2xl font-normal">
                      ・多言語対応の自社アプリ開発
                    </p>
                    <p className="text-2xl font-normal">
                      ・海外に向けたダイレクトマーケティング戦略　など
                    </p>
                  </div>
                </div>
                <img
                  className="h-[540px] w-[720px] object-cover"
                  src="https://placehold.co/720x540"
                  alt="Phase 4"
                />
              </div>
            </div>
          </div>

          {/* Phase Icons - These are more complex and would need SVGs or images */}
          <div className="my-20 grid grid-cols-2 gap-16 md:grid-cols-4">
            {/* You could add the phase icons here - I've simplified this section */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex h-80 w-80 items-center justify-center rounded-full bg-white">
                {/* Icon would go here */}
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <span className="text-xl font-bold text-purple-900">
                  Phase1
                </span>
                <span className="text-4xl font-bold text-stone-950">
                  着手期
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="flex h-80 w-80 items-center justify-center rounded-full bg-white">
                {/* Icon would go here */}
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <span className="text-xl font-bold text-purple-900">
                  Phase2
                </span>
                <span className="text-4xl font-bold text-stone-950">
                  シード期
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="flex h-80 w-80 items-center justify-center rounded-full bg-white">
                {/* Icon would go here */}
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <span className="text-xl font-bold text-purple-900">
                  Phase3
                </span>
                <span className="text-4xl font-bold text-stone-950">
                  グロース期
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="flex h-80 w-80 items-center justify-center rounded-full bg-white">
                {/* Icon would go here */}
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <span className="text-xl font-bold text-purple-900">
                  Phase4
                </span>
                <span className="text-4xl font-bold text-stone-950">
                  継続期
                </span>
              </div>
            </div>
          </div>

          {/* Bottom CTA Button */}
          <Button className="mt-10 rounded-[70px] bg-sky-400 px-24 py-7 text-center text-white shadow-[0px_13px_0px_0px_rgba(9,132,176,1.00)] hover:bg-sky-500">
            <span className="text-2xl font-bold">自社のフェーズを知る</span>
            <span className="text-4xl font-bold">無料相談</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
