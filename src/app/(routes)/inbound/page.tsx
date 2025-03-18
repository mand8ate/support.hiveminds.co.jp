"use client";
import { cn } from "@/lib/utils";
import { Roboto, Inter } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700", "900"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function InboundPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-stone-950 text-white">
      {/* Hero Section with Overlay Images */}
      <div className="relative mt-[55px]">
        {/* Background images with color overlays */}
        <img
          className="h-[400px] w-full object-cover sm:h-[500px] md:h-[600px] lg:h-[676px]"
          src="https://placehold.co/1920x676"
          alt="Background"
        />
        <div className="absolute inset-0 bg-sky-400/40"></div>

        {/* Header Title */}
        <div className="absolute left-0 right-0 top-0 flex h-full w-full items-center justify-center px-4 text-center">
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
              <br className="md:block" />
              段階毎に最適な施策を多なうことが重要です。
              <br className="md:block" />
              HiveMindsが提供するインバウンドサポートは、
              <br className="md:block" />
              お客様それぞれの「フェーズ（段階）」に合わせたご提案・ご支援を
              <br className="md:block" />
              ネイティブ外国人の視点から実施させていただきます。
            </p>
          </div>

          {/* CTA Button */}
          <Link
            href="https://hiveminds.co.jp/contact"
            className="rounded-[70px] bg-sky-400 px-6 py-4 text-center text-white shadow-[0px_4px_0px_0px_rgba(9,132,176,1.00)] hover:bg-sky-500 sm:px-8 sm:py-5 md:px-12 md:py-6 lg:px-16 lg:py-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center">
              <span className="mb-1 text-lg font-bold sm:mb-0 sm:mr-2 md:text-xl">
                自社のフェーズを知る
              </span>
              <span className="text-xl font-bold sm:text-2xl md:text-3xl">
                無料相談
              </span>
            </div>
          </Link>
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
        <div className="mx-auto my-32 w-full max-w-7xl px-4 md:px-8">
          {/* Large Desktop layout (4 in a row) - All arrows point right */}
          <div className="hidden items-center justify-center xl:flex">
            {/* Phase 1 Circle */}
            <div className="h-64 w-64 flex-shrink-0 overflow-hidden rounded-full bg-white">
              <img
                src="/inbound/group1.png"
                alt="Phase 1"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Purple arrow pointing right */}
            <div className="mx-4 h-0 w-0 flex-shrink-0 border-b-[12px] border-l-[24px] border-r-0 border-t-[12px] border-transparent border-l-purple-900"></div>

            {/* Phase 2 Circle */}
            <div className="h-64 w-64 flex-shrink-0 overflow-hidden rounded-full bg-white">
              <img
                src="/inbound/group2.png"
                alt="Phase 2"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Purple arrow pointing right */}
            <div className="mx-4 h-0 w-0 flex-shrink-0 border-b-[12px] border-l-[24px] border-r-0 border-t-[12px] border-transparent border-l-purple-900"></div>

            {/* Phase 3 Circle */}
            <div className="h-64 w-64 flex-shrink-0 overflow-hidden rounded-full bg-white">
              <img
                src="/inbound/group3.png"
                alt="Phase 3"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Purple arrow pointing right */}
            <div className="mx-4 h-0 w-0 flex-shrink-0 border-b-[12px] border-l-[24px] border-r-0 border-t-[12px] border-transparent border-l-purple-900"></div>

            {/* Phase 4 Circle */}
            <div className="h-64 w-64 flex-shrink-0 overflow-hidden rounded-full bg-white">
              <img
                src="/inbound/group4.png"
                alt="Phase 4"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Tablet Layout (2 rows with horizontal arrows within each row) */}
          <div className="hidden md:block xl:hidden">
            {/* Top Row */}
            <div className="mb-20 flex items-center justify-center">
              {/* Phase 1 Circle */}
              <div className="h-60 w-60 overflow-hidden rounded-full bg-white">
                <img
                  src="/inbound/group1.png"
                  alt="Phase 1"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Right Arrow */}
              <div className="mx-8 h-0 w-0 border-b-[12px] border-l-[24px] border-r-0 border-t-[12px] border-transparent border-l-purple-900"></div>

              {/* Phase 2 Circle */}
              <div className="h-60 w-60 overflow-hidden rounded-full bg-white">
                <img
                  src="/inbound/group2.png"
                  alt="Phase 2"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex items-center justify-center">
              {/* Phase 3 Circle */}
              <div className="h-60 w-60 overflow-hidden rounded-full bg-white">
                <img
                  src="/inbound/group3.png"
                  alt="Phase 3"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Right Arrow */}
              <div className="mx-8 h-0 w-0 border-b-[12px] border-l-[24px] border-r-0 border-t-[12px] border-transparent border-l-purple-900"></div>

              {/* Phase 4 Circle */}
              <div className="h-60 w-60 overflow-hidden rounded-full bg-white">
                <img
                  src="/inbound/group4.png"
                  alt="Phase 4"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Mobile layout (vertical stack) - All arrows point down */}
          <div className="flex flex-col items-center md:hidden">
            <div className="relative mb-20">
              {/* Phase 1 Circle */}
              <div className="h-56 w-56 overflow-hidden rounded-full bg-white">
                <img
                  src="/inbound/group1.png"
                  alt="Phase 1"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Down Arrow */}
              <div className="absolute -bottom-10 left-1/2 h-0 w-0 -translate-x-1/2 transform border-b-0 border-l-[12px] border-r-[12px] border-t-[24px] border-transparent border-t-purple-900"></div>
            </div>

            <div className="relative mb-20">
              {/* Phase 2 Circle */}
              <div className="h-56 w-56 overflow-hidden rounded-full bg-white">
                <img
                  src="/inbound/group2.png"
                  alt="Phase 2"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Down Arrow */}
              <div className="absolute -bottom-10 left-1/2 h-0 w-0 -translate-x-1/2 transform border-b-0 border-l-[12px] border-r-[12px] border-t-[24px] border-transparent border-t-purple-900"></div>
            </div>

            <div className="relative mb-20">
              {/* Phase 3 Circle */}
              <div className="h-56 w-56 overflow-hidden rounded-full bg-white">
                <img
                  src="/inbound/group3.png"
                  alt="Phase 3"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Down Arrow */}
              <div className="absolute -bottom-10 left-1/2 h-0 w-0 -translate-x-1/2 transform border-b-0 border-l-[12px] border-r-[12px] border-t-[24px] border-transparent border-t-purple-900"></div>
            </div>

            <div className="relative">
              {/* Phase 4 Circle */}
              <div className="h-56 w-56 overflow-hidden rounded-full bg-white">
                <img
                  src="/inbound/group4.png"
                  alt="Phase 4"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
