"use client";
import { cn } from "@/lib/utils";
import { Roboto, Inter } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700", "900"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function OutboundPage() {
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
        <div className="absolute inset-0 bg-amber-500/40"></div>

        {/* Header Title */}
        <div className="absolute left-1/2 top-1/3 w-full -translate-x-1/2 px-4 text-center">
          <h1
            className={cn(
              roboto.className,
              "text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-7xl",
              "shadow-[4px_4px_4px_rgb(0_0_0_/_0.14)]",
            )}
          >
            OUTBOUND PERSONAL SUPPORT
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
              東南アジア・EUへのアウトバウンドに向けて
              <br className="hidden sm:block" />
              個別的なトータルサポートを。
            </h2>

            <p
              className={cn(
                inter.className,
                "text-base font-normal leading-relaxed sm:text-lg md:text-xl lg:text-2xl xl:text-3xl",
              )}
            >
              昨今、日本と海外の状況はより密接になっており、
              <br className="hidden md:block" />
              海外からヒト・モノを入れ込むだけでなく、
              <br className="hidden md:block" />
              積極的に日本から海外へ進出することが必要な時代になってきました。
              <br className="hidden md:block" />
              特に、弊社が得意とする東南アジア・EUに関しては経済成長も高く、
              <br className="hidden md:block" />
              大きな市場があります。
              <br className="hidden md:block" />
              HiveMindsでは、その大きな市場に参加する一助を、
              <br className="hidden md:block" />
              お客様毎に個別サポートをご提供いたします。
            </p>
          </div>

          {/* CTA Button */}
          <div className="rounded-[70px] bg-amber-500 px-6 py-4 text-center text-white shadow-[0px_4px_0px_0px_rgba(141,85,0,1)] hover:bg-amber-600 sm:px-8 sm:py-5 md:px-12 md:py-6 lg:px-16 lg:py-6">
            <div className="flex flex-col sm:flex-row sm:items-center">
              <span className="mb-1 text-lg font-bold sm:mb-0 sm:mr-2 md:text-xl">
                海外進出について
              </span>
              <span className="text-xl font-bold sm:text-2xl md:text-3xl">
                無料相談する
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
            <div className="h-0 w-16 outline outline-[3px] outline-offset-[-1.5px] outline-red-700 md:w-20"></div>
          </div>

          {/* Strengths Grid */}
          <div className="grid w-full grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
            {/* Point 01 */}
            <div className="relative h-auto min-h-[280px] overflow-hidden bg-stone-950 outline outline-[3px] outline-offset-[-3px] outline-red-700 sm:min-h-[320px] md:h-80">
              <div className="absolute left-0 top-0 h-12 w-40 bg-red-700 sm:h-14 sm:w-52"></div>
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
            <div className="relative h-auto min-h-[280px] overflow-hidden bg-stone-950 outline outline-[3px] outline-offset-[-3px] outline-red-700 sm:min-h-[320px] md:h-80">
              <div className="absolute left-0 top-0 h-12 w-40 bg-red-700 sm:h-14 sm:w-52"></div>
              <div className="absolute left-[25px] top-[13px] text-2xl font-bold leading-7 tracking-[2.8px] sm:left-[35px] sm:text-3xl">
                Point02
              </div>
              <div className="absolute left-[20px] top-[70px] flex max-w-full flex-col gap-4 px-4 pr-4 sm:left-[50px] sm:top-[88px] sm:gap-6 md:left-[76px] md:gap-8 md:pr-6">
                <h3 className="text-xl font-bold leading-normal sm:text-2xl sm:leading-[48px]">
                  現地パートナーとの強固な
                  <br className="hidden sm:block" />
                  ネットワークによる進出支援
                </h3>
                <p className="text-base font-medium leading-relaxed sm:text-lg md:text-xl">
                  現地パートナーとの密な連携で販売・進出の細かなところまでアドバイス可能。
                </p>
              </div>
            </div>

            {/* Point 03 */}
            <div className="relative h-auto min-h-[280px] overflow-hidden bg-stone-950 outline outline-[3px] outline-offset-[-3px] outline-red-700 sm:min-h-[320px] md:h-80">
              <div className="absolute left-0 top-0 h-12 w-40 bg-red-700 sm:h-14 sm:w-52"></div>
              <div className="absolute left-[25px] top-[13px] text-2xl font-bold leading-7 tracking-[2.8px] sm:left-[35px] sm:text-3xl">
                Point03
              </div>
              <div className="absolute left-[20px] top-[70px] flex max-w-full flex-col gap-4 px-4 pr-4 sm:left-[50px] sm:top-[88px] sm:gap-6 md:left-[76px] md:gap-8 md:pr-6">
                <h3 className="text-xl font-bold leading-normal sm:text-2xl sm:leading-[48px]">
                  日本法人ならではのスピーディーな対応力
                </h3>
                <p className="text-base font-medium leading-relaxed sm:text-lg md:text-xl">
                  日本法人のため、国内でのスピーディーなコミュニケーションが可能。
                </p>
              </div>
            </div>

            {/* Point 04 */}
            <div className="relative h-auto min-h-[280px] overflow-hidden bg-stone-950 outline outline-[3px] outline-offset-[-3px] outline-red-700 sm:min-h-[320px] md:h-80">
              <div className="absolute left-0 top-0 h-12 w-40 bg-red-700 sm:h-14 sm:w-52"></div>
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

        {/* Support Categories Section */}
        <div className="mt-16 flex w-full flex-col items-center sm:mt-20 md:mt-24">
          <div className="flex w-full flex-col items-center gap-16 sm:gap-20 md:gap-24 lg:gap-28">
            <div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-10">
              <h2
                className={cn(
                  inter.className,
                  "text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl",
                )}
              >
                サポートカテゴリー
              </h2>
              <div className="h-0 w-16 outline outline-[3px] outline-offset-[-1.5px] outline-red-700 md:w-20"></div>
            </div>

            {/* Case 1 */}
            <div className="w-full">
              <div className="mb-7">
                <span className="text-xl font-bold text-red-600 sm:text-2xl">
                  Case 1
                </span>
                <h3 className="mt-2 text-2xl font-bold sm:text-3xl md:text-4xl">
                  越境EC運用
                </h3>
              </div>
              <div className="h-[2px] w-full border-2 border-solid border-white"></div>
              <p className="mt-7 text-base leading-relaxed sm:text-lg md:text-xl lg:text-2xl">
                HiveMindsが運用する越境EC（東南アジア向け）へ無料掲載をさせていただき、商品を代理販売させていただきます。
                <br />
                自社の商品が対象国に需要があるのかどうかを確認する手段としてもご活用いただけるご支援内容です。
              </p>

              <div className="mt-10">
                <div className="inline-block bg-red-600 px-4 py-2 text-xl font-bold sm:text-2xl md:text-3xl">
                  HiveMindsの掲載実績
                </div>
                <div className="mt-7 text-base sm:text-lg md:text-xl lg:text-2xl">
                  <p>・ティーン向けスキンケアメーカー様</p>
                  <p className="mt-3.5">
                    ・医療機関向けスキンケアメーカー様　他
                  </p>
                </div>
              </div>

              <div className="mt-16 grid grid-cols-1 gap-5 sm:mt-20 md:mt-24 md:grid-cols-3">
                <div className="text-center">
                  <p className="mb-8 text-base font-bold sm:mb-10 sm:text-lg md:mb-14 md:text-xl">
                    越境ECサイト A
                  </p>
                  <img
                    src="https://placehold.co/400x200"
                    alt="EC Site A"
                    className="mx-auto h-auto w-full rounded-lg object-cover"
                  />
                </div>
                <div className="text-center">
                  <p className="mb-8 text-base font-bold sm:mb-10 sm:text-lg md:mb-14 md:text-xl">
                    越境ECサイト B
                  </p>
                  <img
                    src="https://placehold.co/400x200"
                    alt="EC Site B"
                    className="mx-auto h-auto w-full rounded-lg object-cover shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
                  />
                </div>
                <div className="text-center">
                  <p className="mb-8 text-base font-bold sm:mb-10 sm:text-lg md:mb-14 md:text-xl">
                    現地小売店
                  </p>
                  <div className="relative aspect-video w-full">
                    <img
                      src="https://placehold.co/400x200"
                      alt="Retail Store"
                      className="h-auto w-full rounded-lg object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="w-full">
              <div className="mb-7">
                <span className="text-xl font-bold text-red-600 sm:text-2xl">
                  Case 2
                </span>
                <h3 className="mt-2 text-2xl font-bold sm:text-3xl md:text-4xl">
                  海外商品展示会・PRイベント 出展サポート
                </h3>
              </div>
              <div className="h-[2px] w-full border-2 border-solid border-white"></div>
              <p className="mt-7 text-base leading-relaxed sm:text-lg md:text-xl lg:text-2xl">
                お客様が希望している海外商品展示会およびPRイベントへの出展サポートを実施いたします。
                <br />
                商品PRブースのデザイン設計から、当日の通訳手配、商品輸送手続きなど、必要な準備をトータルサポートいたします。
              </p>

              <div className="mt-10">
                <div className="inline-block bg-red-600 px-4 py-2 text-xl font-bold sm:text-2xl md:text-3xl">
                  HiveMindsの掲載実績
                </div>
                <p className="mt-7 text-base sm:text-lg md:text-xl lg:text-2xl">
                  こちらからご覧ください。（実績のURLを添付）
                </p>
              </div>

              <img
                src="https://placehold.co/1200x240"
                alt="Exhibition Support"
                className="mx-auto mt-16 h-auto w-full rounded-lg object-cover sm:mt-20 md:mt-24"
              />
            </div>

            {/* Case 3 */}
            <div className="w-full">
              <div className="mb-7">
                <span className="text-xl font-bold text-red-600 sm:text-2xl">
                  Case 3
                </span>
                <h3 className="mt-2 text-2xl font-bold sm:text-3xl md:text-4xl">
                  個別国ごとの進出サポート
                </h3>
              </div>
              <div className="h-[2px] w-full border-2 border-solid border-white"></div>
              <p className="mt-7 text-base leading-relaxed sm:text-lg md:text-xl lg:text-2xl">
                弊社では、インドネシアを中心に東南アジアおよびドイツへの個別的な進出サポートを行っています。
                <br />
                各国ごとに海外法人が進出する際の要件やポイントが異なるため、現地パートナーと協力しながらお客様の海外進出をトータルサポートいたします。
              </p>

              <img
                src="https://placehold.co/1200x360"
                alt="International Support"
                className="mx-auto mt-7 h-auto w-full rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Bottom CTA Button */}
          <div className="mt-8 rounded-[70px] bg-amber-500 px-6 py-4 text-center text-white shadow-[0px_4px_0px_0px_rgba(141,85,0,1)] hover:bg-amber-600 sm:mt-10 sm:px-8 sm:py-5 md:px-12 md:py-6 lg:px-16 lg:py-6">
            <div className="flex flex-col sm:flex-row sm:items-center">
              <span className="mb-1 text-lg font-bold sm:mb-0 sm:mr-2 md:text-xl">
                海外進出について
              </span>
              <span className="text-xl font-bold sm:text-2xl md:text-3xl">
                無料相談する
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
