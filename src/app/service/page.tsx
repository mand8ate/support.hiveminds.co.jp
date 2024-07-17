"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: "-100px" },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

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
        <h1 className="text-3xl font-semibold tracking-wider text-glowgreen lg:text-4xl">
          Service
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
          <h4 className="text-lg font-semibold sm:text-xl md:text-2xl lg:text-3xl">
            弊社が手掛ける各種サービスについて記載しております。
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

      {/* First Section  */}
      <div className="edged-div my-24 w-full bg-glowgreen lg:my-32 xl:my-64">
        <motion.div
          initial={{ opacity: 0, x: "-100px" }}
          whileInView={{ opacity: 1, x: 0 }}
          style={{ transformOrigin: "left" }}
          transition={{ duration: 0.5 }}
          className="container flex flex-col gap-12 py-24"
        >
          <h1 className="text-3xl font-bold lg:text-4xl">Digital Solution</h1>

          <div className="flex flex-col gap-4 md:flex-row">
            <div className="relative w-full md:w-1/2">
              <div className="relative pb-[56.25%]">
                <Image
                  src="/service/service-1.jpg"
                  fill
                  className="object-contain"
                  alt="service image 1"
                />
              </div>
            </div>

            <div className="flex w-full items-center md:w-1/2">
              <div>
                <p className="mb-4 text-center text-lg font-semibold sm:text-xl md:text-2xl lg:text-3xl">
                  お客様の「やりたいこと」に合わせた 最適なシステムの開発を。
                </p>
                <p className="text-md mb-4 font-semibold sm:text-lg md:text-xl lg:text-2xl">
                  システム開発は必要なシステムを構築して終わりではなく、構築から導入後の業務改善を実現するまでがゴールとなります。
                  弊社ではお客様の「やりたい」を言語化し、そこにあったシステムの企画から構築、導入支援まで伴走して対応いたします。
                </p>
              </div>
            </div>
          </div>

          <div className="md:px-18 flex flex-col gap-4 px-8 md:flex-row lg:px-24 xl:px-36">
            <div className="w-full flex-1">
              <div className="relative pb-[56.25%]">
                <Image
                  src="/service/service-2.jpg"
                  fill
                  className="object-contain"
                  alt="service image 2"
                />
              </div>
              <p className="text-center">Webシステム</p>
            </div>
            <div className="w-full flex-1">
              <div className="relative pb-[56.25%]">
                <Image
                  src="/service/service-3.jpg"
                  fill
                  className="object-contain"
                  alt="service image 3"
                />
              </div>
              <p className="text-center">デバイスアプリケーション</p>
            </div>
          </div>

          <Link
            href="/projects"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "w-fit self-center text-lg",
            )}
          >
            Projects｜実績
          </Link>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          className="flex flex-wrap justify-center gap-12 lg:gap-24"
        ></motion.div>
      </div>

      {/* Second Section  */}
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, x: "-100px" }}
          whileInView={{ opacity: 1, x: 0 }}
          style={{ transformOrigin: "left" }}
          transition={{ duration: 0.5 }}
          className="container flex flex-col gap-12"
        >
          <h1 className="text-right text-3xl font-bold lg:text-4xl">
            Event Solution
          </h1>

          <div className="flex flex-col-reverse gap-4 md:flex-row">
            <div className="flex w-full items-center md:w-1/2">
              <div>
                <p className="mb-4 text-center text-lg font-semibold sm:text-xl md:text-2xl lg:text-3xl">
                  プロダクトブランディングを 国内外の展示会を通じて。
                </p>
                <p className="text-md mb-4 font-semibold sm:text-lg md:text-xl lg:text-2xl">
                  弊社では国内、海外双方のプロダクトイベント開催・出展サポートを行っています。
                  これまで数々の国内外イベントを支援してきた実績とノウハウを用いて、新商品および既存商品のブランドPRをサポートいたします。
                </p>
              </div>
            </div>
            <div className="relative w-full md:w-1/2">
              <div className="relative pb-[56.25%]">
                <Image
                  src="/service/service-1.jpg"
                  fill
                  className="object-contain"
                  alt="service image 1"
                />
              </div>
            </div>
          </div>

          <div className="md:px-18 flex flex-col gap-4 px-8 md:flex-row lg:px-24 xl:px-36">
            <div className="w-full flex-1">
              <div className="relative pb-[56.25%]">
                <Image
                  src="/service/service-2.jpg"
                  fill
                  className="object-contain"
                  alt="service image 2"
                />
              </div>
              <p className="text-center">Webシステム</p>
            </div>
            <div className="w-full flex-1">
              <div className="relative pb-[56.25%]">
                <Image
                  src="/service/service-3.jpg"
                  fill
                  className="object-contain"
                  alt="service image 3"
                />
              </div>
              <p className="text-center">Webシステム</p>
            </div>
            <div className="w-full flex-1">
              <div className="relative pb-[56.25%]">
                <Image
                  src="/service/service-3.jpg"
                  fill
                  className="object-contain"
                  alt="service image 3"
                />
              </div>
              <p className="text-center">Webシステム</p>
            </div>
          </div>

          <Link
            href="/projects"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "w-fit self-center bg-foreground text-lg text-background",
            )}
          >
            Projects｜実績
          </Link>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          className="flex flex-wrap justify-center gap-12 lg:gap-24"
        ></motion.div>
      </div>

      {/* Third Section  */}
      <div className="edged-div my-24 mb-48 w-full bg-glowgreen lg:my-32 xl:my-64">
        <motion.div
          initial={{ opacity: 0, x: "-100px" }}
          whileInView={{ opacity: 1, x: 0 }}
          style={{ transformOrigin: "left" }}
          transition={{ duration: 0.5 }}
          className="container flex flex-col gap-12 py-24"
        >
          <h1 className="text-3xl font-bold lg:text-4xl">Consultation</h1>

          <div className="flex flex-col gap-4 md:flex-row">
            <div className="relative w-full md:w-1/2">
              <div className="relative pb-[56.25%]">
                <Image
                  src="/service/service-5.jpg"
                  fill
                  className="object-contain"
                  alt="service image 5"
                />
              </div>
            </div>

            <div className="flex w-full items-center md:w-1/2">
              <div>
                <p className="mb-4 text-center text-lg font-semibold sm:text-xl md:text-2xl lg:text-3xl">
                  企業の根幹を支える3軸を改良し、 企業力の底上げを実践。
                </p>
                <p className="text-md mb-4 font-semibold sm:text-lg md:text-xl lg:text-2xl">
                  人材採用・コーポレートブランディング・WEBマーケティング（EC）。
                  この3つの軸を改良することで、企業の底力が向上し、より強固な基盤を持つことができます。
                  弊社ではそれぞれの専門家が今の活動をより強固なものとできる様伴走したコンサルテーションを実施します。
                </p>
              </div>
            </div>
          </div>

          <div className="md:px-18 flex flex-col gap-4 px-8 md:flex-row lg:px-24 xl:px-36">
            <div className="w-full flex-1">
              <div className="relative pb-[56.25%]">
                <Image
                  src="/service/service-6.jpg"
                  fill
                  className="object-contain"
                  alt="service image 6"
                />
              </div>
              <p className="text-center">人材採用</p>
            </div>
            <div className="w-full flex-1">
              <div className="relative pb-[56.25%]">
                <Image
                  src="/service/service-7.jpg"
                  fill
                  className="object-contain"
                  alt="service image 7"
                />
              </div>
              <p className="text-center">ブランディング・WEBマーケティング</p>
            </div>
          </div>

          <Link
            href="/projects"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "w-fit self-center text-lg",
            )}
          >
            Projects｜実績
          </Link>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          className="flex flex-wrap justify-center gap-12 lg:gap-24"
        ></motion.div>
      </div>
    </div>
  );
}
