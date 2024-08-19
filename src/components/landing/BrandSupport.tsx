import { motion } from "framer-motion";
import { SVGPatterns } from "../SVGPatterns";
import { Separator } from "@/components/ui/separator";
import { SVGImages } from "../SVGImages";
import { useTheme } from "next-themes";

export default function BrandSupport() {
  const { setTheme, theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="container relative flex h-screen w-full snap-end pt-[60px]">
      <div className="absolute left-[-30px] top-[30px] h-[100px] w-[100px] sm:h-[150px] sm:w-[150px] md:h-[200px] md:w-[200px] lg:h-[300px] lg:w-[300px]">
        <SVGPatterns.hivepattern />
      </div>
      <div className="flex flex-col items-center justify-evenly gap-2">
        <div className="w-2/3 lg:w-1/2">
          <Separator className="mb-4 h-[3px] w-1/4 bg-primary" />
          <motion.h1
            initial={{ opacity: 0, x: "-100px" }}
            whileInView={{ opacity: 1, x: 0 }}
            style={{ transformOrigin: "left" }}
            transition={{ duration: 0.5 }}
            className="text-xl font-semibold tracking-wider text-primary lg:text-2xl xl:text-3xl 2xl:text-4xl"
          >
            3つのソリューションを通じて 人々に夢を叶える舞台を提供し、
            世の中に平等なチャンス創り出す。
          </motion.h1>
          <Separator className="ml-auto mt-4 h-[3px] w-1/4 bg-primary" />
        </div>
        <div className="relative flex w-full justify-center">
          <div className="h-[300px] w-[300px] md:h-[500px] md:w-[500px]">
            <SVGImages.triangle />
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            className="absolute right-0 hidden flex-col gap-2 text-glowgreen sm:flex lg:gap-6 xl:bottom-14 xl:right-14 2xl:right-32"
          >
            <motion.p variants={itemVariants}>
              「デジタル化で販路拡大と業務効率化」
            </motion.p>
            <motion.p variants={itemVariants}>
              「イベント参加でブランド認知の拡大」
            </motion.p>
            <motion.p variants={itemVariants}>
              「ヒト・モノ・情報で企業の根幹を強化」
            </motion.p>
          </motion.div>
        </div>
      </div>
      <motion.div
        animate={{ rotate: [0, 180, 360] }}
        transition={{ duration: 200, ease: "linear", repeat: Infinity }}
        className="absolute -bottom-16 -left-20 h-[150px] w-[150px] md:h-[200px] md:w-[200px] lg:h-[300px] lg:w-[300px] xl:h-[500px] xl:w-[500px]"
      >
        <SVGImages.polygon color={"209, 209, 209, .2"} />
      </motion.div>
    </div>
  );
}
