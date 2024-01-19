import { motion } from "framer-motion";
import { SVGImages } from "../SVGImages";

export default function ServicesInterlude() {
  return (
    <div className="container mt-32 flex items-start justify-between">
      <motion.div
        initial={{ opacity: 0, x: "-100px" }}
        whileInView={{ opacity: 1, x: 0 }}
        style={{ transformOrigin: "left" }}
        transition={{ duration: 0.5 }}
        className="z-10"
      >
        <h1 className="text-4xl font-semibold tracking-wider text-glowgreen">
          Your Project, Our Passion.
        </h1>
        <div className="mt-6">
          <hr
            style={{
              border: "0",
              height: "1px",
              backgroundColor: "#0ACF83",
              width: "100px",
              marginBottom: "0.5rem",
            }}
          />
          <h4 className="text-3xl font-semibold">
            ビジョナリーなウェブサイトから最先端のモバイルアプリケーションまで、私たちは魅力的でインスピレーションを与えるデジタル体験を創造します。私たちとパートナーを組み、あなたの夢のプロジェクトを予定通り、そして予算内で実現しましょう。
          </h4>
          <hr
            style={{
              border: "0",
              height: "1px",
              backgroundColor: "#0ACF83",
              width: "100px",
              marginTop: "0.5rem",
            }}
          />
        </div>
      </motion.div>
      <div className="flex-grow"></div>
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        style={{ transformOrigin: "top" }}
        transition={{ duration: 0.5 }}
        className="ml-6"
      >
        <SVGImages.lineLeft height="h-36 md:h-96" color="#0ACF83" />
      </motion.div>
    </div>
  );
}
