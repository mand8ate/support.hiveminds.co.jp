import { Koulen } from "next/font/google";

const koulen = Koulen({ subsets: ["latin"], weight: ["400"] });

import { SVGImages } from "../SVGImages";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Badge } from "../ui/badge";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function Company() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="container mt-32 overflow-visible">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute right-[-100px] top-[30px] h-[250px]  w-[250px] md:right-[-60px] md:top-[-100px] md:h-[500px] md:w-[500px]"
          style={{ transformOrigin: "center" }}
        >
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0.8 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeOut",
            }}
          >
            <SVGImages.gradientCircleBlue color={theme} />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: "-100px" }}
          whileInView={{ opacity: 1, x: 0 }}
          style={{ transformOrigin: "left" }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-2 inline-block">
            <Badge variant="secondary">We are the Hive</Badge>
          </div>
          <h1 className="text-glowblue mb-6 text-4xl font-semibold tracking-wider">
            About our Company
          </h1>

          <div className="shadow-glowblue/20 container overflow-visible rounded-2xl border border-foreground/30 bg-foreground/10 p-8 shadow-md backdrop-blur-xl">
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex flex-col">
                <div className="mb-6">
                  <h2
                    className={
                      (koulen.className, "mb-2 text-2xl font-bold uppercase")
                    }
                  >
                    <span className="text-primary">Hive</span>Mindsとは？
                  </h2>
                  <p className="text-lg">
                    「Hive」（巣）と「Minds」（思考）が融合した言葉です。これは、多様な才能と知恵が集い、一つの大きな目標に向かって協力する集団の象徴です。私たちはITソリューション、イベント企画、コンサルティング、物流の分野で、一丸となってお客様の夢の実現をサポートします。
                  </p>
                </div>

                <Accordion type="multiple" className="w-full">
                  <AccordionItem
                    value="vision"
                    className="border-b-foreground/30"
                  >
                    <AccordionTrigger className="accordion-trigger text-xl font-semibold">
                      Vision
                    </AccordionTrigger>
                    <AccordionContent className="text-lg">
                      人々に夢を叶える舞台を提供し、平等にチャンスを与える
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="mission"
                    className="border-b-foreground/30"
                  >
                    <AccordionTrigger className="accordion-trigger text-xl font-semibold">
                      Mission
                    </AccordionTrigger>
                    <AccordionContent className="text-lg">
                      社会を一歩前進させるソリューションの企画・開発を行い、一人ひとりにパーソナライズされた体験を提供する
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="values"
                    className="border-b-foreground/30"
                  >
                    <AccordionTrigger className="accordion-trigger text-xl font-semibold">
                      Values
                    </AccordionTrigger>
                    <AccordionContent className="text-lg">
                      Seek innovation, act with integrity, be helpful and be
                      yourself.
                      「革新」を追求し「誠実」さと「思いやり」を持って「自分らしく」行動し、お客様のブランドストーリーを創り、社会に価値を届ける
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="relative flex-col items-center overflow-visible">
                <div className="bg-glowblue/10 transform rounded-lg border border-foreground/20 p-4 shadow-2xl backdrop-blur-md transition duration-500 ease-in-out hover:scale-105">
                  <img
                    src="/landing/hiveminds_group_2.jpg"
                    alt="hive company"
                    className="rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:-translate-y-1 hover:translate-x-1 hover:-rotate-3"
                  />
                </div>

                <div className="bg-glowblue/10 absolute z-20 -translate-y-1/3 translate-x-[50px] transform rounded-lg border border-foreground/20 p-4 shadow-2xl backdrop-blur-md transition duration-500 ease-in-out hover:z-40 hover:scale-105">
                  <img
                    src="/landing/hiveminds_group_1.jpg"
                    alt="hive company"
                    className="rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:-translate-y-1 hover:translate-x-1 hover:rotate-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
