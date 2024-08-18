import { Koulen } from "next/font/google";

const koulen = Koulen({ subsets: ["latin"], weight: ["400"] });

import { SVGImages } from "../../SVGImages";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Badge } from "../../ui/badge";
import { useGradientEffect } from "@/lib/useGradientEffect";

export default function Company() {
  const { setTheme, theme } = useTheme();
  const { gradientStyle, handleMouseMove } = useGradientEffect(
    "rgba(26, 188, 254, 0.2)",
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      style={{ transformOrigin: "center" }}
      transition={{ duration: 1 }}
      className="mt-32 border-t border-foreground/30"
    >
      <div className="flex w-full flex-col items-center justify-center">
        <div className="relative z-0 flex h-[400px] w-full">
          <div className="absolute left-0 top-0 h-full w-full  bg-[url('/landing/office_space.jpg')] bg-cover bg-center"></div>
        </div>
        <div className="flex w-full flex-col justify-center gap-10 bg-foreground/10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            style={{ transformOrigin: "center" }}
            transition={{ duration: 0.5 }}
            className="z-10 -mt-6 text-center"
          >
            <h1 className="mb-4 text-5xl font-bold sm:text-6xl">Company</h1>
            <h4 className="text-center text-xl font-semibold text-primary sm:text-2xl">
              会社概要
            </h4>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            style={{ transformOrigin: "center" }}
            transition={{ duration: 0.5 }}
            className="my-10 flex w-full justify-center"
          >
            <table className="w-[95%] table-fixed border-collapse border-none sm:w-[80%] lg:w-[60%]">
              <thead>
                <tr>
                  <td className="w-1/3"></td>
                  <td className="w-2/3"></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-foreground/40 px-2 py-4  text-lg font-bold sm:p-6 sm:text-xl">
                    商号
                  </td>
                  <td className="border-b border-foreground/40 px-2 py-4  text-lg sm:p-6 sm:text-xl">
                    合同会社HiveMinds
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-foreground/40 px-2 py-4  text-lg font-bold sm:p-6 sm:text-xl">
                    代表者
                  </td>
                  <td className="border-b border-foreground/40 px-2 py-4  text-lg sm:p-6 sm:text-xl">
                    野尻拡
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-foreground/40 px-2 py-4  text-lg font-bold sm:p-6 sm:text-xl">
                    設立
                  </td>
                  <td className="border-b border-foreground/40 px-2 py-4  text-lg sm:p-6 sm:text-xl">
                    2024年01月01
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-foreground/40 px-2 py-4  text-lg font-bold sm:p-6 sm:text-xl">
                    所在地
                  </td>
                  <td className="border-b border-foreground/40 px-2 py-4  text-lg sm:p-6 sm:text-xl">
                    東京都港区南青山
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-foreground/40 px-2 py-4  text-lg font-bold sm:p-6 sm:text-xl">
                    連絡先
                  </td>
                  <td className="border-b border-foreground/40 px-2 py-4  text-lg sm:p-6 sm:text-xl">
                    info@hiveminds.co.jp
                  </td>
                </tr>
                <tr>
                  <td className="flex px-2 py-4  text-lg font-bold sm:p-6 sm:text-xl">
                    事業内容
                  </td>
                  <td className="px-2 py-4  text-lg sm:p-6 sm:text-xl">
                    (1) ITソリューションの提供事業
                    <br />
                    <br />
                    (2) メディア作成事業
                    <br />
                    <br />
                    (3) 地方自治体協力等地方創生事業
                    <br />
                    <br />
                    (4) 人材採用支援事業
                    <br />
                    <br />
                    (5) 経営コンサルティング事業
                    <br />
                    <br />
                    (6) 国際物流におけるフォワーダー事業
                    <br />
                    <br />
                    (7) 国際物流における海上および陸上物流事業
                    <br />
                    <br />
                    (8) 国内および国際イベントに関する企画・運営支援事業
                    <br />
                    <br />
                    (9) 前各号に附帯関連する一切の事業
                  </td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
