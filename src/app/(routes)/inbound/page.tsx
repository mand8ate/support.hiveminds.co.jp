"use client";
import { cn } from "@/lib/utils";
import { Roboto, Inter } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700", "900"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function InboundPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-stone-950 text-white">
      {/* Hero Section with Overlay Images */}
      <div className="relative">
        {/* Background images with color overlays */}
        <img
          className="h-[400px] w-full object-cover sm:h-[500px] md:h-[600px] lg:h-[676px]"
          src="https://placehold.co/1920x676"
          alt="Background"
        />
        <div className="absolute inset-0 bg-sky-400/40"></div>

        {/* Header Title */}
        <div className="absolute left-1/2 top-1/3 w-full -translate-x-1/2 px-4 text-center">
          <h1
            className={cn(
              roboto.className,
              "text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-7xl",
              "shadow-[4px_4px_4px_rgb(0_0_0_/_0.14)]",
            )}
          >
            INBOUND TOTAL SUPPORT
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16 md:px-6 md:py-20 lg:px-8 lg:py-24">
        <div className="flex flex-col items-center gap-10 text-center sm:gap-12 md:gap-16 lg:gap-20">
          {/* Intro Section */}
          <div className="flex flex-col items-center gap-12 sm:gap-16 md:gap-20 lg:gap-24">
            <h2
              className={cn(
                inter.className,
                "text-xl font-bold leading-relaxed sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl",
              )}
            >
              東南アジア・EUからのインバウンドニーズを獲得する
              <br className="hidden sm:block" />
              トータルサポートサービスを。
            </h2>

            <p
              className={cn(
                inter.className,
                "text-base font-normal leading-relaxed sm:text-lg md:text-xl lg:text-2xl xl:text-3xl",
              )}
            >
              インバウンドニーズを獲得するためには、旬な施策や大きなPRをただ行えばよいというわけではなく、
              <br className="hidden md:block" />
              段階毎に最適な施策を多なうことが重要です。
              <br className="hidden md:block" />
              HiveMindsが提供するインバウンドサポートは、
              <br className="hidden md:block" />
              お客様それぞれの「フェーズ（段階）」に合わせたご提案・ご支援を
              <br className="hidden md:block" />
              ネイティブ外国人の視点から実施させていただきます。
            </p>
          </div>

          {/* CTA Button */}
          <div className="rounded-[70px] bg-sky-400 px-6 py-4 text-center text-white shadow-[0px_4px_0px_0px_rgba(9,132,176,1.00)] hover:bg-sky-500 sm:px-8 sm:py-5 md:px-12 md:py-6 lg:px-16 lg:py-6">
            <div className="flex flex-col sm:flex-row sm:items-center">
              <span className="mb-1 text-lg font-bold sm:mb-0 sm:mr-2 md:text-xl">
                自社のフェーズを知る
              </span>
              <span className="text-xl font-bold sm:text-2xl md:text-3xl">
                無料相談
              </span>
            </div>
          </div>
        </div>

        {/* Strengths Section */}
        <div className="mt-16 flex w-full flex-col items-center gap-16 sm:mt-20 md:mt-24 lg:mt-28 lg:gap-28">
          <div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-10">
            <h2
              className={cn(
                inter.className,
                "text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl",
              )}
            >
              HiveMindsの強み
            </h2>
            <div className="h-0 w-16 outline outline-[3px] outline-offset-[-1.5px] outline-purple-900 md:w-20"></div>
          </div>

          {/* Strengths Grid */}
          <div className="grid w-full grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
            {/* Point 01 */}
            <div className="relative h-auto min-h-[280px] overflow-hidden bg-stone-950 outline outline-[3px] outline-offset-[-3px] outline-purple-900 sm:min-h-[320px] md:h-80">
              <div className="absolute left-0 top-0 h-12 w-40 bg-purple-900 sm:h-14 sm:w-52"></div>
              <div className="absolute left-[25px] top-[13px] text-2xl font-bold leading-7 tracking-[2.8px] sm:left-[35px] sm:text-3xl">
                Point01
              </div>
              <div className="absolute left-[20px] top-[70px] flex max-w-full flex-col gap-4 px-4 pr-4 sm:left-[50px] sm:top-[88px] sm:gap-6 md:left-[76px] md:gap-8 md:pr-6">
                <h3 className="text-xl font-bold leading-normal sm:text-2xl sm:leading-[48px]">
                  海外市場を熟知したネイティブメンバーがサポート
                </h3>
                <p className="text-base font-medium leading-relaxed sm:text-lg md:text-xl">
                  東南アジアネイティブ（インドネシア）、EUネイティブ（ドイツ）のメンバーが海外目線でサポートします。
                </p>
              </div>
            </div>

            {/* Point 02 */}
            <div className="relative h-auto min-h-[280px] overflow-hidden bg-stone-950 outline outline-[3px] outline-offset-[-3px] outline-purple-900 sm:min-h-[320px] md:h-80">
              <div className="absolute left-0 top-0 h-12 w-40 bg-purple-900 sm:h-14 sm:w-52"></div>
              <div className="absolute left-[25px] top-[13px] text-2xl font-bold leading-7 tracking-[2.8px] sm:left-[35px] sm:text-3xl">
                Point02
              </div>
              <div className="absolute left-[20px] top-[70px] flex max-w-full flex-col gap-4 px-4 pr-4 sm:left-[50px] sm:top-[88px] sm:gap-6 md:left-[76px] md:gap-8 md:pr-6">
                <h3 className="text-xl font-bold leading-normal sm:text-2xl sm:leading-[48px]">
                  インバウンド需要に特化した戦略提案と情報共有
                </h3>
                <p className="text-base font-medium leading-relaxed sm:text-lg md:text-xl">
                  各国のインバウンド需要に特化した施策の提案と、現地情報のスピーディーな共有が可能です。
                </p>
              </div>
            </div>

            {/* Point 03 */}
            <div className="relative h-auto min-h-[280px] overflow-hidden bg-stone-950 outline outline-[3px] outline-offset-[-3px] outline-purple-900 sm:min-h-[320px] md:h-80">
              <div className="absolute left-0 top-0 h-12 w-40 bg-purple-900 sm:h-14 sm:w-52"></div>
              <div className="absolute left-[25px] top-[13px] text-2xl font-bold leading-7 tracking-[2.8px] sm:left-[35px] sm:text-3xl">
                Point03
              </div>
              <div className="absolute left-[20px] top-[70px] flex max-w-full flex-col gap-4 px-4 pr-4 sm:left-[50px] sm:top-[88px] sm:gap-6 md:left-[76px] md:gap-8 md:pr-6">
                <h3 className="text-xl font-bold leading-normal sm:text-2xl sm:leading-[48px]">
                  現地ネットワークを活かした
                  <br className="hidden sm:block" />
                  積極的なPR活動
                </h3>
                <p className="text-base font-medium leading-relaxed sm:text-lg md:text-xl">
                  現地企業やインフルエンサーとの連携を可能にし、受け身ではなく攻めのPR活動にも柔軟に対応します。
                </p>
              </div>
            </div>

            {/* Point 04 */}
            <div className="relative h-auto min-h-[280px] overflow-hidden bg-stone-950 outline outline-[3px] outline-offset-[-3px] outline-purple-900 sm:min-h-[320px] md:h-80">
              <div className="absolute left-0 top-0 h-12 w-40 bg-purple-900 sm:h-14 sm:w-52"></div>
              <div className="absolute left-[25px] top-[13px] text-2xl font-bold leading-7 tracking-[2.8px] sm:left-[35px] sm:text-3xl">
                Point04
              </div>
              <div className="absolute left-[20px] top-[70px] flex max-w-full flex-col gap-4 px-4 pr-4 sm:left-[50px] sm:top-[88px] sm:gap-6 md:left-[76px] md:gap-8 md:pr-6">
                <h3 className="text-xl font-bold leading-normal sm:text-2xl sm:leading-[48px]">
                  シームレスなワンストップサポート
                </h3>
                <p className="text-base font-medium leading-relaxed sm:text-lg md:text-xl">
                  サポート内容は1項目に限らず、必要に応じてシームレスなサポート対応もご協力できます。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Phases Section */}
        <div className="mt-16 flex w-full flex-col items-center sm:mt-20 md:mt-24">
          <div className="flex w-full flex-col items-center gap-16 sm:gap-20 md:gap-24 lg:gap-28">
            <div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-10">
              <h2
                className={cn(
                  inter.className,
                  "text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl",
                )}
              >
                フェーズに応じたサポート内容
              </h2>
              <div className="h-0 w-16 outline outline-[3px] outline-offset-[-1.5px] outline-purple-900 md:w-20"></div>
            </div>

            {/* Phase Timeline */}
            <div className="relative w-full">
              {/* Vertical line on the left - starts at the middle of the first dot */}
              <div className="absolute bottom-0 left-[30px] top-[22px] w-0.5 bg-purple-900 sm:left-[45px] md:left-[60px]"></div>

              {/* Phase 1 */}
              <div className="relative mb-20 sm:mb-28 md:mb-32 lg:mb-40">
                {/* Phase background text - positioned more to the right and higher */}
                <div className="absolute left-[60px] top-[-30px] z-0 opacity-40 sm:left-[90px] sm:top-[-40px] md:left-[120px] md:top-[-60px]">
                  <h3
                    className={cn(
                      roboto.className,
                      "text-[80px] font-black text-neutral-800 sm:text-[100px] md:text-[120px] lg:text-[152px]",
                    )}
                  >
                    Phase1
                  </h3>
                </div>

                <div className="relative z-10 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
                  <div className="relative pl-16 sm:pl-20 md:pl-28 lg:pl-32">
                    {/* Dot on the timeline - positioned higher and centered on the line */}
                    <div className="absolute left-[30px] top-0 z-10 h-6 w-6 -translate-x-1/2 rounded-full bg-purple-900 sm:left-[45px] sm:h-7 sm:w-7 md:left-[60px] md:h-8 md:w-8"></div>

                    <div className="flex flex-col pt-0 md:pt-3">
                      <div className="mb-4 flex flex-col gap-0 sm:mb-5 md:mb-6 md:gap-1">
                        <span className="text-base font-bold sm:text-lg">
                          フェーズ1
                        </span>
                        <span className="text-2xl font-bold sm:text-3xl md:text-4xl">
                          着手期
                        </span>
                      </div>

                      <div className="mb-6 max-w-[710px] text-base font-medium leading-relaxed sm:mb-8 sm:text-lg md:mb-10 md:text-xl">
                        インバウンドニーズ対応を考え始めた、もしくは着手し始めた段階です。この段階では「環境調査」と「即効性のあるリソース整理」を実施することがポイントです。
                      </div>

                      <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:gap-4 md:mb-10 md:gap-5">
                        <div className="flex items-center gap-2 bg-purple-900 px-4 py-2 sm:gap-2.5 sm:px-5 sm:py-2.5 md:px-6 md:py-3">
                          <span className="text-xl font-bold leading-7 sm:text-2xl">
                            サポートの具体例
                          </span>
                        </div>
                        <div className="flex flex-col gap-2 sm:gap-3 md:gap-3.5">
                          <p className="text-base font-medium sm:text-lg md:text-xl">
                            ・自社商品カテゴリーのインバウンドニーズ調査（国内）
                          </p>
                          <p className="text-base font-medium sm:text-lg md:text-xl">
                            ・自社商品カテゴリーのインバウンドニーズ調査（国外）
                          </p>
                          <p className="text-base font-medium sm:text-lg md:text-xl">
                            ・MEO対策　など
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center px-4 sm:px-0">
                    <img
                      className="h-auto max-w-full rounded-lg object-cover"
                      src="https://placehold.co/720x540"
                      alt="Phase 1"
                    />
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="relative mb-20 sm:mb-28 md:mb-32 lg:mb-40">
                {/* Phase background text - positioned more to the right and higher */}
                <div className="absolute left-[60px] top-[-30px] z-0 opacity-40 sm:left-[90px] sm:top-[-40px] md:left-[120px] md:top-[-60px]">
                  <h3
                    className={cn(
                      roboto.className,
                      "text-[80px] font-black text-neutral-800 sm:text-[100px] md:text-[120px] lg:text-[152px]",
                    )}
                  >
                    Phase2
                  </h3>
                </div>

                <div className="relative z-10 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
                  <div className="relative pl-16 sm:pl-20 md:pl-28 lg:pl-32">
                    {/* Dot on the timeline */}
                    <div className="absolute left-[30px] top-0 z-10 h-6 w-6 -translate-x-1/2 rounded-full bg-purple-900 sm:left-[45px] sm:h-7 sm:w-7 md:left-[60px] md:h-8 md:w-8"></div>

                    <div className="flex flex-col pt-0 md:pt-3">
                      <div className="mb-4 flex flex-col gap-0 sm:mb-5 md:mb-6 md:gap-1">
                        <span className="text-base font-bold sm:text-lg">
                          フェーズ2
                        </span>
                        <span className="text-2xl font-bold sm:text-3xl md:text-4xl">
                          シード期
                        </span>
                      </div>

                      <div className="mb-6 max-w-[710px] text-base font-medium leading-relaxed sm:mb-8 sm:text-lg md:mb-10 md:text-xl">
                        インバウンドニーズ対応に着手し、訪日外国人ニーズ対応の環境整備や攻めの施策を実施する段階です。この段階では「細かな配慮」と「継続」を実施することがポイントです。
                      </div>

                      <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:gap-4 md:mb-10 md:gap-5">
                        <div className="flex items-center gap-2 bg-purple-900 px-4 py-2 sm:gap-2.5 sm:px-5 sm:py-2.5 md:px-6 md:py-3">
                          <span className="text-xl font-bold leading-7 sm:text-2xl">
                            サポートの具体例
                          </span>
                        </div>
                        <div className="flex flex-col gap-2 sm:gap-3 md:gap-3.5">
                          <p className="text-base font-normal sm:text-lg md:text-xl">
                            ・自社サイトおよび商品サイトの多言語対応
                          </p>
                          <p className="text-base font-normal sm:text-lg md:text-xl">
                            ・インバウンド向けSNS・広告運用
                          </p>
                          <p className="text-base font-normal sm:text-lg md:text-xl">
                            ・インバウンド向けプラットフォーム活用　など
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center px-4 sm:px-0">
                    <img
                      className="h-auto max-w-full rounded-lg object-cover"
                      src="https://placehold.co/720x540"
                      alt="Phase 2"
                    />
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="relative mb-20 sm:mb-28 md:mb-32 lg:mb-40">
                {/* Phase background text - positioned more to the right and higher */}
                <div className="absolute left-[60px] top-[-30px] z-0 opacity-40 sm:left-[90px] sm:top-[-40px] md:left-[120px] md:top-[-60px]">
                  <h3
                    className={cn(
                      roboto.className,
                      "text-[80px] font-black text-neutral-800 sm:text-[100px] md:text-[120px] lg:text-[152px]",
                    )}
                  >
                    Phase3
                  </h3>
                </div>

                <div className="relative z-10 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
                  <div className="relative pl-16 sm:pl-20 md:pl-28 lg:pl-32">
                    {/* Dot on the timeline */}
                    <div className="absolute left-[30px] top-0 z-10 h-6 w-6 -translate-x-1/2 rounded-full bg-purple-900 sm:left-[45px] sm:h-7 sm:w-7 md:left-[60px] md:h-8 md:w-8"></div>

                    <div className="flex flex-col pt-0 md:pt-3">
                      <div className="mb-4 flex flex-col gap-0 sm:mb-5 md:mb-6 md:gap-1">
                        <span className="text-base font-bold sm:text-lg">
                          フェーズ3
                        </span>
                        <span className="text-2xl font-bold sm:text-3xl md:text-4xl">
                          グロース期
                        </span>
                      </div>

                      <div className="mb-6 max-w-[710px] text-base font-medium leading-relaxed sm:mb-8 sm:text-lg md:mb-10 md:text-xl">
                        インバウンドニーズ対応を継続して実施できており、更なるニーズ獲得のために各種の投資を行う段階です。この段階では、「インパクトあるPR」と「海外専門」などのキーワードが重要です。
                      </div>

                      <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:gap-4 md:mb-10 md:gap-5">
                        <div className="flex items-center gap-2 bg-purple-900 px-4 py-2 sm:gap-2.5 sm:px-5 sm:py-2.5 md:px-6 md:py-3">
                          <span className="text-xl font-bold leading-7 sm:text-2xl">
                            サポートの具体例
                          </span>
                        </div>
                        <div className="flex flex-col gap-2 sm:gap-3 md:gap-3.5">
                          <p className="text-base font-normal sm:text-lg md:text-xl">
                            ・在日および訪日インフルエンサーとのコラボ施策
                          </p>
                          <p className="text-base font-normal sm:text-lg md:text-xl">
                            ・海外需要獲得のための商品設計
                          </p>
                          <p className="text-base font-normal sm:text-lg md:text-xl">
                            ・海外対応専門のインフォメーション設置　など
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center px-4 sm:px-0">
                    <img
                      className="h-auto max-w-full rounded-lg object-cover"
                      src="https://placehold.co/720x540"
                      alt="Phase 3"
                    />
                  </div>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="relative mb-20 sm:mb-28 md:mb-32 lg:mb-40">
                {/* Phase background text - positioned more to the right and higher */}
                <div className="absolute left-[60px] top-[-30px] z-0 opacity-40 sm:left-[90px] sm:top-[-40px] md:left-[120px] md:top-[-60px]">
                  <h3
                    className={cn(
                      roboto.className,
                      "text-[80px] font-black text-neutral-800 sm:text-[100px] md:text-[120px] lg:text-[152px]",
                    )}
                  >
                    Phase4
                  </h3>
                </div>

                <div className="relative z-10 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
                  <div className="relative pl-16 sm:pl-20 md:pl-28 lg:pl-32">
                    {/* Dot on the timeline */}
                    <div className="absolute left-[30px] top-0 z-10 h-6 w-6 -translate-x-1/2 rounded-full bg-purple-900 sm:left-[45px] sm:h-7 sm:w-7 md:left-[60px] md:h-8 md:w-8"></div>

                    <div className="flex flex-col pt-0 md:pt-3">
                      <div className="mb-4 flex flex-col gap-0 sm:mb-5 md:mb-6 md:gap-1">
                        <span className="text-base font-bold sm:text-lg">
                          フェーズ4
                        </span>
                        <span className="text-2xl font-bold sm:text-3xl md:text-4xl">
                          継続期
                        </span>
                      </div>

                      <div className="mb-6 max-w-[710px] text-base font-medium leading-relaxed sm:mb-8 sm:text-lg md:mb-10 md:text-xl">
                        インバウンドニーズ対応が軌道に乗り、継続して自社のポジションを拡大してく段階です。この段階では既存の施策ではなく、個別施策を時期を見て実施することで、更なる拡大を目指します。
                      </div>

                      <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:gap-4 md:mb-10 md:gap-5">
                        <div className="flex items-center gap-2 bg-purple-900 px-4 py-2 sm:gap-2.5 sm:px-5 sm:py-2.5 md:px-6 md:py-3">
                          <span className="text-xl font-bold leading-7 sm:text-2xl">
                            サポートの具体例
                          </span>
                        </div>
                        <div className="flex flex-col gap-2 sm:gap-3 md:gap-3.5">
                          <p className="text-base font-normal sm:text-lg md:text-xl">
                            ・多言語対応の自社アプリ開発
                          </p>
                          <p className="text-base font-normal sm:text-lg md:text-xl">
                            ・海外に向けたダイレクトマーケティング戦略　など
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center px-4 sm:px-0">
                    <img
                      className="h-auto max-w-full rounded-lg object-cover"
                      src="https://placehold.co/720x540"
                      alt="Phase 4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phase circles with purple triangular arrows - Simplified Flow */}
          <div className="mx-auto my-32 w-full max-w-7xl px-4 md:px-8">
            {/* Large Desktop layout (4 in a row) - All arrows point right */}
            <div className="hidden items-center justify-center xl:flex">
              {/* Phase 1 Circle */}
              <div className="h-52 w-52 flex-shrink-0 overflow-hidden rounded-full bg-white">
                <img
                  src="https://placehold.co/300x300"
                  alt="Phase 1"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Purple arrow pointing right */}
              <div className="mx-2 h-0 w-0 flex-shrink-0 border-b-[10px] border-l-[20px] border-r-0 border-t-[10px] border-transparent border-l-purple-900"></div>

              {/* Phase 2 Circle */}
              <div className="h-52 w-52 flex-shrink-0 overflow-hidden rounded-full bg-white">
                <img
                  src="https://placehold.co/300x300"
                  alt="Phase 2"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Purple arrow pointing right */}
              <div className="mx-2 h-0 w-0 flex-shrink-0 border-b-[10px] border-l-[20px] border-r-0 border-t-[10px] border-transparent border-l-purple-900"></div>

              {/* Phase 3 Circle */}
              <div className="h-52 w-52 flex-shrink-0 overflow-hidden rounded-full bg-white">
                <img
                  src="https://placehold.co/300x300"
                  alt="Phase 3"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Purple arrow pointing right */}
              <div className="mx-2 h-0 w-0 flex-shrink-0 border-b-[10px] border-l-[20px] border-r-0 border-t-[10px] border-transparent border-l-purple-900"></div>

              {/* Phase 4 Circle */}
              <div className="h-52 w-52 flex-shrink-0 overflow-hidden rounded-full bg-white">
                <img
                  src="https://placehold.co/300x300"
                  alt="Phase 4"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Tablet Layout (2 rows with horizontal arrows within each row) */}
            <div className="hidden md:block xl:hidden">
              {/* Top Row */}
              <div className="mb-16 flex items-center justify-center">
                {/* Phase 1 Circle */}
                <div className="h-52 w-52 overflow-hidden rounded-full bg-white">
                  <img
                    src="https://placehold.co/300x300"
                    alt="Phase 1"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Right Arrow */}
                <div className="mx-6 h-0 w-0 border-b-[10px] border-l-[20px] border-r-0 border-t-[10px] border-transparent border-l-purple-900"></div>

                {/* Phase 2 Circle */}
                <div className="h-52 w-52 overflow-hidden rounded-full bg-white">
                  <img
                    src="https://placehold.co/300x300"
                    alt="Phase 2"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Bottom Row */}
              <div className="flex items-center justify-center">
                {/* Phase 3 Circle */}
                <div className="h-52 w-52 overflow-hidden rounded-full bg-white">
                  <img
                    src="https://placehold.co/300x300"
                    alt="Phase 3"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Right Arrow */}
                <div className="mx-6 h-0 w-0 border-b-[10px] border-l-[20px] border-r-0 border-t-[10px] border-transparent border-l-purple-900"></div>

                {/* Phase 4 Circle */}
                <div className="h-52 w-52 overflow-hidden rounded-full bg-white">
                  <img
                    src="https://placehold.co/300x300"
                    alt="Phase 4"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Mobile layout (vertical stack) - All arrows point down */}
            <div className="flex flex-col items-center md:hidden">
              <div className="relative mb-16">
                {/* Phase 1 Circle */}
                <div className="h-48 w-48 overflow-hidden rounded-full bg-white">
                  <img
                    src="https://placehold.co/300x300"
                    alt="Phase 1"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Down Arrow */}
                <div className="absolute -bottom-8 left-1/2 h-0 w-0 -translate-x-1/2 transform border-b-0 border-l-[10px] border-r-[10px] border-t-[20px] border-transparent border-t-purple-900"></div>
              </div>

              <div className="relative mb-16">
                {/* Phase 2 Circle */}
                <div className="h-48 w-48 overflow-hidden rounded-full bg-white">
                  <img
                    src="https://placehold.co/300x300"
                    alt="Phase 2"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Down Arrow */}
                <div className="absolute -bottom-8 left-1/2 h-0 w-0 -translate-x-1/2 transform border-b-0 border-l-[10px] border-r-[10px] border-t-[20px] border-transparent border-t-purple-900"></div>
              </div>

              <div className="relative mb-16">
                {/* Phase 3 Circle */}
                <div className="h-48 w-48 overflow-hidden rounded-full bg-white">
                  <img
                    src="https://placehold.co/300x300"
                    alt="Phase 3"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Down Arrow */}
                <div className="absolute -bottom-8 left-1/2 h-0 w-0 -translate-x-1/2 transform border-b-0 border-l-[10px] border-r-[10px] border-t-[20px] border-transparent border-t-purple-900"></div>
              </div>

              <div className="relative">
                {/* Phase 4 Circle */}
                <div className="h-48 w-48 overflow-hidden rounded-full bg-white">
                  <img
                    src="https://placehold.co/300x300"
                    alt="Phase 4"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA Button */}
          <div className="mt-8 rounded-[70px] bg-sky-400 px-6 py-4 text-center text-white shadow-[0px_4px_0px_0px_rgba(9,132,176,1.00)] hover:bg-sky-500 sm:mt-10 sm:px-8 sm:py-5 md:px-12 md:py-6 lg:px-16 lg:py-6">
            <div className="flex flex-col sm:flex-row sm:items-center">
              <span className="mb-1 text-lg font-bold sm:mb-0 sm:mr-2 md:text-xl">
                自社のフェーズを知る
              </span>
              <span className="text-xl font-bold sm:text-2xl md:text-3xl">
                無料相談
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
