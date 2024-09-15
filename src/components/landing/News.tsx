"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { SVGImages } from "@/components/SVGImages";
import { Suspense, useRef } from "react";

import Autoplay from "embla-carousel-autoplay";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const newsCategories = [
  {
    id: 1,
    title: "お知らせ",
    category: "announcement",
  },
  {
    id: 2,
    title: "プレスリリース",
    category: "press",
  },
  {
    id: 3,
    title: "メディア",
    category: "media",
  },
];

const newsItems = [
  {
    id: 0,
    title: "News 2",
    date: "2024-05-29",
    category: "media",
    content: "開発中の「Bachly」クラウドファンディング名鑑に掲載されました！",
    url: "https://crowdfunding.meikan.org/project/campfire-751855/",
  },
  {
    id: 1,
    title: "News 3",
    date: "2024-05-28",
    category: "media",
    content: "開発中の「Bachly」がスポニチに掲載されました！！",
    url: "https://afn.jp/shop/47170",
  },
  {
    id: 2,
    title: "News 4",
    date: "2024-05-25",
    category: "announcement",
    content: "「Bachly」プロジェクトのクラウドファンディングが開始されました！",
  },
  {
    id: 3,
    title: "News 1",
    date: "2024-08-19",
    category: "announcement",
    content: "ホームページのデザインを更新しました！",
  },
  {
    id: 4,
    title: "News 5",
    date: "2024-09-15",
    category: "announcement",
    content: "港区ワーケーション事業補助金に採択されました！",
    details: [
      {
        head: "News｜お知らせ",
        title: "港区ワーケーション事業補助金に採択されました！",
        content: [
          "港区が開催しているワーケーション事業補助金にHiveMindsが採択されました！",
          "今回は7月25日から7月27日で岡山県瀬戸内市にご訪問し、市内事業者の皆様との交流と瀬戸内市内を巡り、ワーケーションをしてきました。",
          "市内事業者様は教育事業、和菓子製造業、精油事業を営む事業者様の他、瀬戸内市役所様とも交流させていただき、連携事業の企画なども開始いたしました。",
          "市内散策では有名な牛窓オリーブ農園から牛窓神社の他、近隣地域へ足が運びやすく非常に良い時間を過ごすことができました。",
        ],
        images: [
          "/news/news-5/news-5_1.jpg",
          "/news/news-5/news-5_2.jpg",
          "/news/news-5/news-5_3.jpg",
          "/news/news-5/news-5_4.jpg",
        ],
      },
    ],
  },
];

function NewsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const plugin = useRef(
    Autoplay({
      delay: 3000,
    }),
  );

  const category = searchParams.get("category");

  const onClick = (selectedCategory: string | undefined) => {
    const query = { category: selectedCategory };

    const url = queryString.stringifyUrl(
      { url: window.location.href.split("?")[0], query },
      { skipNull: true },
    );

    router.push(url, { scroll: false });
  };

  const filteredNews = category
    ? newsItems.filter((item) => item.category === category)
    : newsItems;

  return (
    <div className="container relative flex w-full py-12 pt-[60px] sm:py-24 md:py-32 lg:py-36 xl:py-44">
      <div className="flex w-full flex-col justify-start">
        <div className="ml-8 flex flex-col py-6 md:w-1/3 md:py-12 xl:py-24">
          <Separator className="mb-2 h-[3px] w-1/4 bg-primary" />
          <motion.h1
            initial={{ opacity: 0, x: "-100px" }}
            whileInView={{ opacity: 1, x: 0 }}
            style={{ transformOrigin: "left" }}
            transition={{ duration: 0.5 }}
            className="text-center text-xl font-semibold tracking-wider text-primary lg:text-2xl xl:text-3xl 2xl:text-4xl"
          >
            News
          </motion.h1>
          <Separator className="ml-auto mt-2 h-[3px] w-1/4 bg-primary" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: "100px" }}
          whileInView={{ opacity: 1, y: 0 }}
          style={{ transformOrigin: "bottom" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap justify-center gap-2">
            <Button
              onClick={() => onClick(undefined)}
              className="text-xs sm:text-base"
            >
              All
            </Button>
            {newsCategories.map((activeCategory) => (
              <Button
                key={activeCategory.category}
                onClick={() => onClick(activeCategory.category)}
                className="text-xs sm:text-base"
              >
                {activeCategory.title}
              </Button>
            ))}
          </div>
          <div className="mt-8 flex flex-col items-center gap-2 sm:mt-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-2 lg:gap-4"
            >
              {filteredNews.length > 0 ? (
                filteredNews
                  .sort((a, b) => {
                    return b.id - a.id;
                  })
                  .map((newsItem) => (
                    <motion.div
                      key={newsItem.id}
                      className="flex flex-col items-center gap-2 sm:gap-6 lg:flex-row lg:gap-12 xl:gap-16"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-xs sm:text-base xl:text-lg">
                        {newsItem.date}
                      </p>
                      <Badge
                        className={cn(
                          "hover:bg-unset flex w-48 items-center justify-center text-sm sm:text-lg xl:w-64",
                          newsItem.category === "announcement"
                            ? "bg-primary"
                            : newsItem.category === "press"
                              ? "bg-glowblue"
                              : "bg-glowgreen",
                        )}
                      >
                        {newsItem.category === "announcement"
                          ? "お知らせ"
                          : newsItem.category === "press"
                            ? "プレスリリース"
                            : "メディア"}
                      </Badge>
                      {newsItem.url ? (
                        <Link href={newsItem.url}>
                          <h4 className="text-xs sm:text-sm lg:text-lg xl:text-xl">
                            {newsItem.content}
                          </h4>
                        </Link>
                      ) : newsItem.details ? (
                        <Dialog>
                          <DialogTrigger>
                            <h4 className="text-xs sm:text-sm lg:text-lg xl:text-xl">
                              {newsItem.content}
                            </h4>
                          </DialogTrigger>
                          <DialogContent className="flex max-h-screen w-full max-w-xs flex-col overflow-y-auto rounded-lg sm:max-w-sm md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
                            <DialogHeader className="flex justify-center">
                              <Carousel
                                opts={{ align: "end", loop: true }}
                                plugins={[plugin.current]}
                                className="m-auto w-full"
                              >
                                <CarouselContent>
                                  {newsItem.details[0].images.map(
                                    (image, index) => (
                                      <CarouselItem
                                        key={index}
                                        className="relative h-[250px] sm:h-[350px] md:h-[450px]"
                                      >
                                        <Image
                                          src={image}
                                          alt={`news image ${index}`}
                                          fill
                                          className="rounded-lg object-cover"
                                        />
                                      </CarouselItem>
                                    ),
                                  )}
                                </CarouselContent>
                                <CarouselPrevious className="ml-12 md:ml-8 lg:ml-10 xl:ml-12" />
                                <CarouselNext className="mr-12 md:mr-8 lg:mr-10 xl:mr-12" />
                              </Carousel>
                            </DialogHeader>
                            <div className="mb-6 px-4 text-center text-sm sm:text-base md:mt-4 md:text-lg lg:text-xl">
                              {newsItem.details[0].head}
                            </div>
                            <div className="flex flex-col gap-4 px-4 pb-6">
                              <h4 className="text-sm sm:text-lg lg:text-xl">
                                {newsItem.details[0].title}
                              </h4>
                              <div className="flex flex-col gap-4 text-xs sm:text-sm md:text-base lg:text-lg">
                                {newsItem.details[0].content.map(
                                  (paragraph, idx) => (
                                    <p key={idx}>{paragraph}</p>
                                  ),
                                )}
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      ) : (
                        <h4 className="text-xs sm:text-base lg:text-lg xl:text-xl">
                          {newsItem.content}
                        </h4>
                      )}
                    </motion.div>
                  ))
              ) : (
                <motion.div
                  className="flex gap-8"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-lg xl:text-xl">
                    このカテゴリーのニュースがまだないです。
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 right-0 h-[150px] w-[150px] md:h-[200px] md:w-[200px] lg:h-[300px] lg:w-[300px] xl:h-[500px] xl:w-[500px]">
        <motion.div
          animate={{ rotate: [0, 180, 360] }}
          transition={{
            duration: 200,
            ease: "linear",
            repeat: Infinity,
          }}
          className="h-full w-full"
        >
          <SVGImages.polygon color={"209, 209, 209, .2"} />
        </motion.div>
      </div>
    </div>
  );
}

export default function News() {
  return (
    <Suspense>
      <NewsContent />
    </Suspense>
  );
}
