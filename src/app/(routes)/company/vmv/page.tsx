"use client";

import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="mt-24 lg:mt-32 xl:mt-64">
      <motion.div
        initial={{ opacity: 0, x: "-100px" }}
        whileInView={{ opacity: 1, x: 0 }}
        style={{ transformOrigin: "left" }}
        transition={{ duration: 0.5 }}
        className="container px-[2rem] sm:px-[4rem] md:px-[6rem]
        lg:px-[8rem]"
      >
        <h1 className="text-4xl font-semibold tracking-wider text-glowviolet">
          Our Vision, Mission, and Values
        </h1>
        <div className="mt-6">
          <hr
            style={{
              border: "0",
              height: "1px",
              backgroundColor: "#A259FF",
              width: "100px",
              marginBottom: "0.5rem",
            }}
          />
          <h4 className="text-xl font-semibold md:text-2xl lg:text-3xl">
            私たちの想い、価値観を記載しています。HiveMindsでは以下のVision,
            Mission, Valuesに基づきお客様をはじめ、社会へ貢献していきます。
          </h4>
          <hr
            style={{
              border: "0",
              height: "1px",
              backgroundColor: "#A259FF",
              width: "100px",
              marginTop: "0.5rem",
            }}
          />
        </div>
      </motion.div>
      <div
        className="relative mt-40 flex h-fit w-full flex-col gap-36 border border-foreground/30 bg-[url('/company/hiveminds_grid_bg.svg')] bg-contain bg-center shadow-xl sm:px-[2rem] md:px-[4rem] lg:px-[8rem]
        xl:mt-64"
      >
        <div className="absolute left-0 top-0 h-full w-full bg-foreground/20"></div>
        <motion.div
          initial={{ opacity: 0, x: "-100px" }}
          whileInView={{ opacity: 1, x: 0 }}
          style={{ transformOrigin: "left" }}
          transition={{ duration: 0.5 }}
          className="container z-10 py-14"
        >
          <h3 className="mb-4 text-2xl">Concept</h3>
          <h1 className="mb-4 text-2xl leading-normal tracking-normal sm:mb-5 sm:text-3xl sm:leading-relaxed sm:tracking-wider md:mb-6 md:text-4xl md:leading-relaxed md:tracking-wider lg:text-5xl lg:leading-relaxed lg:tracking-widest xl:text-6xl xl:leading-relaxed xl:tracking-widest">
            「やりたいこと」×「実現したいこと」＝ 一歩先の社会
          </h1>

          <p className="text-base leading-snug sm:text-lg sm:leading-relaxed md:text-xl md:leading-loose">
            HiveMindsはメンバーそれぞれが「やりたいことを実現する」ということを目的に作られた会社です。
            世の中には「やりたいけれど出来ていない、日の目があたらず実現できていない」というものが沢山あります。
            私たちは、欲張りにも「【やりたいこと】を行いながら、世の中の【実現したいこと】がもっと形になるような社会にしていく。」その想いを持ち続けます。
          </p>

          <div className="flex flex-col gap-16 py-24 lg:gap-16 lg:py-14 xl:gap-28">
            <motion.div
              initial={{ opacity: 0, x: "-100px" }}
              whileInView={{ opacity: 1, x: 0 }}
              style={{ transformOrigin: "left" }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row">
                <div style={{ width: "200px" }}>
                  <h2 className="text-3xl font-bold leading-relaxed tracking-widest underline md:no-underline">
                    Vision
                  </h2>
                </div>
                <div
                  style={{ width: "50px" }}
                  className="hidden justify-center md:flex"
                >
                  <div className="h-[150px] w-[1px] bg-foreground"></div>
                </div>
                <div className="responsiveWidth">
                  <h2 className="mb-2 text-xl font-bold leading-relaxed tracking-widest md:text-3xl">
                    人々に夢を叶える舞台を提供し、世の中に平等なチャンス創り出す。
                  </h2>
                  <p className="text-lg leading-relaxed">
                    私たちは、世の中にある【やりたい事】を実現させるためのサポートを行い、
                    <br />
                    夢や理想を誰でも叶えられるような社会を創り上げます。
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: "-100px" }}
              whileInView={{ opacity: 1, x: 0 }}
              style={{ transformOrigin: "left" }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row">
                <div style={{ width: "200px" }}>
                  <h2 className="text-3xl font-bold leading-relaxed tracking-widest underline md:no-underline">
                    Mission
                  </h2>
                </div>
                <div
                  style={{ width: "50px" }}
                  className="hidden justify-center md:flex"
                >
                  <div className="h-[150px] w-[1px] bg-foreground"></div>
                </div>
                <div className="responsiveWidth">
                  <h2 className="mb-2 text-xl font-bold leading-relaxed tracking-widest md:text-3xl">
                    社会を一歩前進させるソリューションの企画・開発を行い、一人ひとりのブランドにパーソナライズされた体験を提供する。
                  </h2>
                  <p className="text-lg leading-relaxed">
                    社会を一歩前進させるソリューションの企画・開発を行い、
                    <br />
                    一人ひとりのブランドにパーソナライズされた体験を提供する。
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: "-100px" }}
              whileInView={{ opacity: 1, x: 0 }}
              style={{ transformOrigin: "left" }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row">
                <div style={{ width: "200px" }}>
                  <h2 className="text-3xl font-bold leading-relaxed tracking-widest underline md:no-underline">
                    Values
                  </h2>
                </div>
                <div
                  style={{ width: "50px" }}
                  className="hidden justify-center md:flex"
                >
                  <div className="h-[150px] w-[1px] bg-foreground"></div>
                </div>
                <div className="responsiveWidth">
                  <h2 className="mb-2 text-xl font-bold leading-relaxed tracking-widest md:text-3xl">
                    革新」を追求し「誠実」さと「思いやり」を持って
                    「自分らしく」行動し、お客様と社会に価値を届ける。
                  </h2>
                  <p className="text-lg leading-relaxed">
                    私たちは、visionを達成すべく、お客様に寄り添いながら「やりたい事」を実現させるための
                    <br />
                    企画・開発、ブランド力の向上をサポートし、社会を前進させていきます。
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
