"use client";
const HERO_TITLE = "中小企業の採用を一歩先へ。";
const HERO_SUBTITLE = "HiveMindsについて";

const AboutUsPage = () => {
  const handleTeamClick = () => {
    window.open("https://hiveminds.co.jp/company/team", "_blank");
  };

  const handleProductClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <section className="relative h-[500px] w-full overflow-hidden pt-14 sm:h-[550px] md:h-[580px]">
        <div className="absolute inset-0 z-0">
          <img
            src="/about-us/hero.png"
            alt="about us hero background"
            className="h-full w-full object-cover"
          />
          {/* stronger gradient like RPO for consistent look */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/50 to-amber-700/40" />
        </div>

        <div className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-8 text-3xl font-bold leading-tight text-white [text-shadow:_2px_2px_4px_rgb(0_0_0_/_0.3)] md:text-5xl lg:text-6xl">
            {HERO_TITLE}
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-white [text-shadow:_1px_1px_2px_rgb(0_0_0_/_0.3)] md:text-xl">
            {HERO_SUBTITLE}
          </p>
        </div>
      </section>

      {/* Business Philosophy Section */}
      <section className="flex flex-col items-center justify-center bg-black px-8 py-16 text-white">
        <h2 className="mb-6 text-center text-xl font-bold tracking-widest md:text-3xl xl:text-4xl">
          HiveMindsの事業理念
        </h2>
        <div className="mx-auto mb-10 h-1 w-12 rounded-full bg-green-400" />
        <h3
          className="mb-12 text-center text-3xl font-bold md:text-5xl xl:text-6xl"
          style={{ letterSpacing: "0.15em" }}
        >
          中小企業の採用を
          <span className="text-orange-500">一歩先</span>へ。
        </h3>
        <div className="mx-auto mb-14 max-w-5xl space-y-6 text-center text-lg md:text-xl xl:text-2xl">
          <p>日々深刻になる「採用ができない」。</p>
          <p>
            特に中小企業の採用活動は複雑な課題が重なり、止まり、採用難に繋がっています。
          </p>
          <p>
            私たちは複雑な課題を持つ中小企業の採用活動を動かし、壁を乗り越え、
          </p>
          <p>今よりも一歩先へ新保するお手伝いをいたします。</p>
        </div>
        <button
          onClick={handleTeamClick}
          className="text-md rounded-full bg-orange-400 px-6 py-3 font-bold tracking-wider text-white shadow-lg transition-all duration-200 hover:bg-orange-500 active:translate-y-1 active:shadow-none md:px-8 md:py-4 md:text-lg md:tracking-widest"
          style={{
            boxShadow: "0 6px 0 #cc5500, 0 12px 20px rgba(0, 0, 0, 0.5)",
          }}
        >
          HiveMindsのTeamを知る
        </button>
      </section>

      {/* VMV Section */}
      <section className="flex flex-col items-center justify-center bg-black px-8 py-16 text-white">
        <h2 className="mb-4 text-center text-2xl font-bold tracking-widest md:text-4xl lg:mb-6 xl:text-5xl">
          事業VMV
        </h2>
        <div className="mx-auto mb-10 h-1 w-12 rounded-full bg-green-400" />
        <div className="w-full max-w-5xl space-y-16 md:space-y-20 xl:max-w-6xl">
          {/* VISION */}
          <div className="flex flex-col gap-4 md:flex-row md:gap-8 lg:gap-16">
            <div className="flex w-[120px] min-w-[70px] flex-shrink-0 flex-col items-end justify-start">
              <span className="block w-full text-left text-lg font-bold tracking-widest text-orange-400 md:text-right md:text-xl lg:text-2xl xl:text-3xl">
                VISION
              </span>
            </div>
            <div className="flex-1">
              <div className="mb-5 text-left text-2xl font-extrabold md:mb-7 md:text-3xl lg:text-4xl xl:text-5xl">
                「採用難」の声を減らす
              </div>
              <p className="text-left text-base leading-relaxed text-gray-200 md:text-lg lg:text-xl xl:text-2xl">
                「採用ができない、難しい」と日本中で声が上がっている現代。
                <br className="hidden md:inline" />
                人口減少の日本社会で、どのように人材を獲得し、企業を成長させていくべきか、判断が難しい今の時代に何をするべきか。
                <br className="hidden md:inline" />
                どんな手段を使うべきか正しい現場の情報を伝え、実行をサポートすることで、「採用難」の声が１つでも出も未来を実現します。
              </p>
            </div>
          </div>
          {/* MISSION */}
          <div className="flex flex-col gap-4 md:flex-row md:gap-8 lg:gap-16">
            <div className="flex w-[120px] min-w-[70px] flex-shrink-0 flex-col items-end justify-start">
              <span className="block w-full text-left text-lg font-bold tracking-widest text-orange-400 md:text-right md:text-xl lg:text-2xl xl:text-3xl">
                MISSION
              </span>
            </div>
            <div className="flex-1">
              <div className="mb-5 text-left text-2xl font-extrabold md:mb-7 md:text-3xl lg:text-4xl xl:text-5xl">
                中小企業の採用ステージを一段上げる
              </div>
              <p className="text-left text-base leading-relaxed text-gray-200 md:text-lg lg:text-xl xl:text-2xl">
                中小企業を取り巻く採用市場は、猛烈な進歩をしています。
                <br className="hidden md:inline" />
                そんな状況に対応すべく、「人材不足」「採用難」の濃度が強まってしまっている企業が沢山あります。
                <br className="hidden md:inline" />
                私たちは、すべての中小企業の採用ステージが一段上がる。そんなミッションを達成していきます。
              </p>
            </div>
          </div>
          {/* VALUE */}
          <div className="flex flex-col gap-4 md:flex-row md:gap-8 lg:gap-16">
            <div className="flex w-[120px] min-w-[70px] flex-shrink-0 flex-col items-end justify-start">
              <span className="block w-full text-left text-lg font-bold tracking-widest text-orange-400 md:text-right md:text-xl lg:text-2xl xl:text-3xl">
                VALUE
              </span>
            </div>
            <div className="flex-1">
              <div className="mb-5 text-left text-2xl font-extrabold md:mb-7 md:text-3xl lg:text-4xl xl:text-5xl">
                その一社に合った、正しい選択肢と行動指針
              </div>
              <div className="space-y-5 text-left text-base leading-relaxed text-gray-200 md:text-lg lg:text-xl xl:text-2xl">
                <div>
                  <span className="mb-2 block text-lg font-bold md:text-xl lg:text-2xl xl:text-3xl">
                    一社に合ったアドバイザリー
                  </span>
                  現代の中小企業採用に求められているミスマッチのない採用方針。
                  <br />
                  一般論ではなく会社ごとに合った、正しい指針を提示いたします。
                </div>
                <div>
                  <span className="mb-2 block text-lg font-bold md:text-xl lg:text-2xl xl:text-3xl">
                    現場主義思想
                  </span>
                  理論や上から見たものではなく、現場で培った成果が担保されているアクションプラン、実行をご提供いたします。
                </div>
                <div>
                  <span className="mb-2 block text-lg font-bold md:text-xl lg:text-2xl xl:text-3xl">
                    無駄を省く効果的な情報提供
                  </span>
                  中小企業の採用現場では採用コストも大変重要な指標です。
                  <br />
                  コストパフォーマンスの高い、最適な採用投資判断と活用方法をご提供いたします。
                </div>
                <div>
                  <span className="mb-2 block text-lg font-bold md:text-xl lg:text-2xl xl:text-3xl">
                    資産としての採用力
                  </span>
                  採用活動は半永久的に続きます。
                  <br />
                  一時的な人材獲得ではなく、長期的な人材獲得ができる、資産としての採用力を蓄けることに貢献いたします。
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="flex flex-col items-center justify-center bg-black px-8 py-16 text-white">
        <h2 className="mb-4 text-center text-2xl font-bold tracking-widest md:text-4xl lg:mb-6 xl:text-5xl">
          VMVを達成するPRODUCT
        </h2>
        <div className="mx-auto mb-16 h-1 w-12 rounded-full bg-green-400" />

        <div className="w-full max-w-5xl space-y-16 md:space-y-20 xl:max-w-6xl">
          {/* Product 1: Saiyoujin */}
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12 lg:gap-16">
            <div className="w-full md:w-1/2">
              <img
                src="/about-us/3.png"
                alt="Saiyoujin - 中小企業専門 採用コンシェルジュ"
                className="h-auto w-full rounded-lg object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="mb-4 text-lg font-medium text-gray-300 md:text-xl xl:text-2xl">
                中小企業専門 採用コンシェルジュ
              </div>
              <h3 className="mb-6 text-3xl font-bold md:text-4xl xl:text-5xl">
                Saiyoujin（仮称）
              </h3>
              <p className="text-base !leading-9 text-gray-200 md:text-lg xl:text-2xl">
                中小企業の採用現場は日々アップデートされ、専門知識や正しい判断軸が必須となっています。Saiyoujinは採用専門の担当者に変わり、最新、最良情報を提供し、正しい判断を可能にするコンシェルジュとして貴社に貢献します。
              </p>
            </div>
          </div>

          {/* Product 2: Recruitment Outsourcing */}
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12 lg:gap-16">
            <div className="w-full md:w-1/2">
              <img
                src="/about-us/2.png"
                alt="採用代行／アドバイザリー - 社員100名以下の中小企業対象"
                className="h-auto w-full cursor-pointer rounded-lg object-cover"
                onClick={() => {
                  handleProductClick("https://support.hiveminds.co.jp/rpo");
                }}
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="mb-4 text-lg font-medium text-gray-300 md:text-xl xl:text-2xl">
                社員100名以下の中小企業対象
              </div>
              <h3 className="mb-6 text-3xl font-bold md:text-4xl xl:text-5xl">
                採用代行／アドバイザリー
              </h3>
              <p className="text-base !leading-9 text-gray-200 md:text-lg xl:text-2xl">
                昨今の採用環境は、情報・スピード・柔軟性と、様々なスキルや行動が必要不可欠です。HiveMindsは採用担当者がいない企業様へ専門スタッフが入り、採用業務の総合サポートを行い、最終的には、貴社内に採用ノウハウが溜まる仕組みを設計しています。
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsPage;
