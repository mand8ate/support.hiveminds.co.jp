"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { SVGImages } from "@/components/SVGImages";
import { Suspense } from "react";

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
    id: 1,
    title: "News 1",
    date: "2024-08-19",
    category: "announcement",
    content: "ホームページのデザインを更新しました！",
  },
  {
    id: 2,
    title: "News 2",
    date: "2024-05-29",
    category: "media",
    content: "開発中の「Bachly」クラウドファンディング名鑑に掲載されました！",
    url: "https://crowdfunding.meikan.org/project/campfire-751855/",
  },
  {
    id: 3,
    title: "News 3",
    date: "2024-05-28",
    category: "media",
    content: "開発中の「Bachly」がスポニチに掲載されました！！",
    url: "https://afn.jp/shop/47170",
  },
  {
    id: 4,
    title: "News 4",
    date: "2024-05-25",
    category: "announcement",
    content: "「Bachly」プロジェクトのクラウドファンディングが開始されました！",
  },
];

function NewsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const category = searchParams.get("category");

  const onClick = (selectedCategory: string | undefined) => {
    const query = { category: selectedCategory };

    const url = queryString.stringifyUrl(
      { url: window.location.href.split("?")[0], query },
      { skipNull: true },
    );

    router.push(url);
  };

  const filteredNews = category
    ? newsItems.filter((item) => item.category === category)
    : newsItems;

  return (
    <div className="container relative flex h-screen w-full snap-end pt-[60px]">
      <div className="flex w-full flex-col justify-evenly">
        <div className="w-1/2 md:w-1/3">
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
                filteredNews.map((newsItem) => (
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
