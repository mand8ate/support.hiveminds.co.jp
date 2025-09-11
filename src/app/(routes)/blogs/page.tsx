"use client";
import { useState } from "react";

const HERO_TITLE = "社員100名未満の中小企業のための";
const HERO_SUBTITLE = "採用お役立ち情報";

// Mock blog data
const mockBlogs = [
  {
    id: 1,
    title: "中小企業の採用における最新トレンド",
    summary: "2024年の中小企業採用市場の変化と対策について詳しく解説します。",
    category: "#category",
    date: "2024.8.30",
    image: "/rpo/case1Pic1.png",
  },
  {
    id: 2,
    title: "効果的な求人票の書き方",
    summary: "応募者の心を掴む求人票作成のポイントをご紹介します。",
    category: "#category",
    date: "2024.8.25",
    image: "/rpo/case2Pic1.png",
  },
  {
    id: 3,
    title: "面接官のためのスキルアップガイド",
    summary: "優秀な人材を見極めるための面接テクニックを学びましょう。",
    category: "#category",
    date: "2024.8.20",
    image: "/rpo/case3Pic1.png",
  },
  {
    id: 4,
    title: "リモートワーク時代の採用戦略",
    summary: "コロナ後の働き方に対応した新しい採用アプローチについて。",
    category: "#category",
    date: "2024.8.15",
    image: "/rpo/case4Pic1.png",
  },
  {
    id: 5,
    title: "採用コストを削減する方法",
    summary: "限られた予算で最大の効果を得るための具体的な手法をご紹介。",
    category: "#category",
    date: "2024.8.10",
    image: "/rpo/case1Pic2.png",
  },
  {
    id: 6,
    title: "若手社員の定着率向上のコツ",
    summary: "新卒・若手社員が長く働ける環境づくりのポイントを解説。",
    category: "#category",
    date: "2024.8.05",
    image: "/rpo/case2Pic2.png",
  },
];

const BLOGS_PER_PAGE = 4;

const BlogsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(mockBlogs.length / BLOGS_PER_PAGE);

  const getCurrentBlogs = () => {
    const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
    const endIndex = startIndex + BLOGS_PER_PAGE;
    return mockBlogs.slice(startIndex, endIndex);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleTeamClick = () => {
    window.open("https://hiveminds.co.jp/company/team", "_blank");
  };

  return (
    <>
      <section
        className="relative flex h-[340px] w-full items-center justify-center overflow-hidden pt-[72px] md:h-[420px]"
        style={{ background: "#f5f6f7" }}
      >
        {/* Single hero background image, responsive */}
        <img
          src="/about-us/hero.png"
          alt="about us hero background"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full select-none object-cover object-center"
          style={{
            objectPosition: "center",
          }}
        />
        {/* Text Overlay */}
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center">
          <h1
            className="font-bold text-white drop-shadow-lg"
            style={{
              fontSize: "clamp(1.25rem, 5vw, 48px)", // smaller on mobile
              lineHeight: 1.1,
              textShadow: "0 2px 8px rgba(0,0,0,0.25)",
              marginBottom: "0.5rem", // smaller margin on mobile
            }}
          >
            {HERO_TITLE}
          </h1>
          <h2
            className="font-semibold text-white drop-shadow-md"
            style={{
              fontSize: "clamp(1.25rem, 5vw, 48px)", // smaller on mobile
              lineHeight: 1.1,
              textShadow: "0 2px 8px rgba(0,0,0,0.18)",
            }}
          >
            {HERO_SUBTITLE}
          </h2>
        </div>
      </section>

      {/* Content Section */}
      <section className="flex flex-col items-center justify-center bg-black px-8 py-16 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-2xl font-bold leading-relaxed tracking-wider md:text-4xl md:leading-relaxed lg:text-5xl lg:leading-relaxed xl:text-6xl xl:leading-relaxed">
            今日から活用できる、
            <br />
            採用現場を変えるノウハウ。
            <br />
            定期配信しています。
          </h2>

          <p className="mb-12 text-base leading-relaxed tracking-wider text-gray-200 md:text-xl lg:text-2xl xl:text-3xl">
            メルマガ登録で最新の採用情報をいち早くご覧いただけます。
          </p>

          <button
            onClick={handleTeamClick}
            className="text-md rounded-full bg-[#EA3E3E] px-6 py-3 font-bold tracking-wider text-white shadow-lg transition-all duration-200 hover:bg-[#D32F2F] active:translate-y-1 active:shadow-none md:px-8 md:py-4 md:text-lg md:tracking-widest"
            style={{
              boxShadow: "0 6px 0 #B71C1C, 0 12px 20px rgba(234, 62, 62, 0.4)",
            }}
          >
            最新コンテンツを受け取る
          </button>
        </div>
      </section>

      {/* Blog List Section */}
      <section className="bg-black px-8 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-xl font-bold tracking-widest md:text-3xl xl:text-4xl">
            社員100名未満の中小企業のための採用お役立ち情報
          </h2>
          <div className="mx-auto mb-12 h-1 w-12 rounded-full bg-green-400" />

          {/* Category Tags */}
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            <span className="rounded-full bg-blue-500 px-4 py-2 text-sm font-medium text-white">
              N
            </span>
            {[...Array(8)].map((_, i) => (
              <span
                key={i}
                className="rounded-full border border-gray-500 px-4 py-2 text-sm text-gray-300"
              >
                #category
              </span>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {getCurrentBlogs().map((blog) => (
              <div
                key={blog.id}
                className="cursor-pointer overflow-hidden rounded-lg bg-white text-black"
                onClick={() => window.open(`/blogs/${blog.id}`, "_blank")}
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <div className="mb-2 text-sm text-gray-500">{blog.date}</div>
                  <h3 className="mb-3 text-lg font-bold">{blog.title}</h3>
                  <div className="mb-4 text-sm text-gray-600">
                    {blog.category}
                  </div>
                  <p className="text-sm leading-relaxed text-gray-700">
                    {blog.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center space-x-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className={`h-10 w-10 rounded-full text-sm font-medium transition-colors ${
                  currentPage === i + 1
                    ? "bg-orange-500 text-white"
                    : "border border-gray-500 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <span className="ml-4 text-sm text-gray-400">次へ</span>
          </div>

          {/* Action Buttons */}
          <div className="mt-16 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-[#EA3E3E] px-8 py-3 font-bold text-white transition-all duration-200 hover:bg-[#D32F2F] active:translate-y-1 active:shadow-none">
              最新コンテンツを受け取る
            </button>
            <button className="rounded-full border-2 border-orange-400 px-8 py-3 font-bold text-orange-400 transition-all duration-200 hover:bg-orange-400 hover:text-white">
              採用についてご相談する
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogsPage;
