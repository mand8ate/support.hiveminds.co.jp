"use client";
import { useState, useMemo, useEffect } from "react";
import { useBlogsData, useCategories } from "@/hooks/useBlogsData";
import Image from "next/image";
import { urlFor } from "@/sanity/imageUrl";

// Declare global type for Sender.net
declare global {
  interface Window {
    sender?: any;
  }
}

const HERO_TITLE = "社員100名未満の中小企業のための";
const HERO_SUBTITLE = "採用お役立ち情報";
const BLOGS_PER_PAGE = 4;

const SENDER_FORM_ID = "b68M47"; // Replace with your actual Sender.net form ID

const BlogsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showSenderPopup, setShowSenderPopup] = useState(false);

  // Try to load Sender.net script for fallback
  useEffect(() => {
    if (showSenderPopup && typeof window !== "undefined") {
      console.log("Modal opened - running Sender.net script");

      // Clean up any existing Sender.net scripts and global objects
      const existingScripts = document.querySelectorAll(
        'script[src*="sender.net"], script[src*="universal.js"]',
      );
      existingScripts.forEach((script) => script.remove());

      // Clear any existing sender objects
      if (window.sender) {
        delete window.sender;
      }

      // Clear the form container
      const formContainer = document.querySelector(
        '.sender-form-field[data-sender-form-id="' + SENDER_FORM_ID + '"]',
      );
      if (formContainer) {
        formContainer.innerHTML = "";
      }

      // Wait a bit for cleanup, then load fresh script
      setTimeout(() => {
        const script = document.createElement("script");
        script.innerHTML = `
          (function (s, e, n, d, er) {
            s['Sender'] = er;
            s[er] = s[er] || function () {
              (s[er].q = s[er].q || []).push(arguments)
            }, s[er].l = 1 * new Date();
            var a = e.createElement(n),
                m = e.getElementsByTagName(n)[0];
            a.async = 1;
            a.src = d;
            m.parentNode.insertBefore(a, m)
          })(window, document, 'script', 'https://cdn.sender.net/accounts_resources/universal.js', 'sender');
          sender('129e9322ab0463');
        `;

        script.onload = () => {
          console.log("Sender.net script loaded, trying form render");
          setTimeout(() => {
            try {
              if (window.sender) {
                window.sender("form", SENDER_FORM_ID);
                console.log("Script method: Form render attempted");
              }
            } catch (error) {
              console.error("Script method failed:", error);
            }
          }, 1000);
        };

        script.onerror = () => {
          console.error("Failed to load Sender.net script");
        };

        document.head.appendChild(script);
      }, 100);
    }
  }, [showSenderPopup]);

  const closeSenderPopup = () => {
    setShowSenderPopup(false);
  };

  // Fetch categories for filtering
  const { categories, loading: categoriesLoading } = useCategories();

  // Memoize the pagination and filters objects to prevent infinite re-renders
  const pagination = useMemo(
    () => ({
      page: currentPage,
      limit: BLOGS_PER_PAGE,
    }),
    [currentPage],
  );

  const filters = useMemo(
    () => ({
      categories: selectedCategories,
    }),
    [selectedCategories],
  );

  // Fetch blogs with pagination and filtering
  const {
    posts,
    totalCount,
    hasNextPage,
    hasPrevPage,
    totalPages,
    loading: postsLoading,
    error,
    refetch,
  } = useBlogsData({
    pagination,
    filters,
    enableAutoLoad: true,
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleCategoryFilter = (categoryId: string) => {
    setSelectedCategories((prev) => {
      const isSelected = prev.includes(categoryId);
      const newSelection = isSelected
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId];

      // Reset to page 1 when filter changes
      setCurrentPage(1);
      return newSelection;
    });
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setCurrentPage(1);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date
      .toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      })
      .replace(/\//g, ".");
  };

  const handleTeamClick = () => {
    setShowSenderPopup(true);
  };

  const handleContactClick = () => {
    window.open("https://hiveminds.co.jp/contact", "_blank");
  };

  return (
    <>
      <section className="relative h-[500px] w-full overflow-hidden pt-14 sm:h-[550px] md:h-[580px]">
        <div className="absolute inset-0 z-0">
          <img
            src="/blogs/hero.png"
            alt="blogs hero background"
            className="h-full w-full object-cover"
          />
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
            {/* All Posts Button */}
            <button
              onClick={clearAllFilters}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selectedCategories.length === 0
                  ? "bg-blue-500 text-white"
                  : "border border-gray-500 text-gray-300 hover:bg-gray-700"
              }`}
            >
              すべて
            </button>

            {/* Category Filter Buttons */}
            {categoriesLoading ? (
              <span className="text-gray-400">カテゴリー読み込み中...</span>
            ) : (
              categories.map((category) => (
                <button
                  key={category._id}
                  onClick={() => handleCategoryFilter(category._id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    selectedCategories.includes(category._id)
                      ? "bg-blue-500 text-white"
                      : "border border-gray-500 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  #{category.title}
                </button>
              ))
            )}
          </div>

          {/* Blog Grid */}
          {postsLoading ? (
            <div className="mb-12 flex justify-center">
              <div className="text-center">
                <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
                <p className="mt-2 text-gray-400">記事を読み込み中...</p>
              </div>
            </div>
          ) : error ? (
            <div className="mb-12 text-center text-red-400">
              <p>エラーが発生しました: {error}</p>
              <button
                onClick={refetch}
                className="mt-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              >
                再試行
              </button>
            </div>
          ) : posts.length === 0 ? (
            <div className="mb-12 text-center text-gray-400">
              <p>該当する記事が見つかりません。</p>
            </div>
          ) : (
            <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
              {posts.map((post) => (
                <div
                  key={post._id}
                  className="cursor-pointer overflow-hidden rounded-lg bg-white text-black transition-transform hover:scale-[1.02]"
                  onClick={() =>
                    window.open(`/blogs/${post.slug.current}`, "_blank")
                  }
                >
                  {post.mainImage ? (
                    <Image
                      src={urlFor(post.mainImage).width(400).height(200).url()}
                      alt={post.title}
                      width={400}
                      height={200}
                      className="h-48 w-full bg-white object-contain object-center"
                    />
                  ) : (
                    <div className="flex h-48 w-full items-center justify-center bg-gray-200">
                      <span className="text-gray-500">画像がありません</span>
                    </div>
                  )}
                  <div className="p-6">
                    <div className="mb-2 text-sm text-gray-500">
                      {formatDate(post.publishedAt)}
                    </div>
                    <h3
                      className="mb-3 overflow-hidden text-lg font-bold"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {post.title}
                    </h3>
                    <div className="mb-4 flex flex-wrap gap-1">
                      {post.categories?.map((category) => (
                        <span
                          key={category._id}
                          className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-600"
                        >
                          #{category.title}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center space-x-2">
              {/* Previous button */}
              {hasPrevPage && (
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  className="h-10 rounded border border-gray-500 px-3 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-700"
                >
                  前へ
                </button>
              )}

              {/* Page numbers */}
              {[...Array(totalPages)].map((_, i) => {
                const pageNum = i + 1;
                // Show page numbers with ellipsis for large number of pages
                if (totalPages > 7) {
                  if (
                    pageNum === 1 ||
                    pageNum === totalPages ||
                    (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`h-10 w-10 rounded-full text-sm font-medium transition-colors ${
                          currentPage === pageNum
                            ? "bg-orange-500 text-white"
                            : "border border-gray-500 text-gray-300 hover:bg-gray-700"
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  } else if (pageNum === 2 && currentPage > 4) {
                    return (
                      <span key={pageNum} className="text-gray-400">
                        ...
                      </span>
                    );
                  } else if (
                    pageNum === totalPages - 1 &&
                    currentPage < totalPages - 3
                  ) {
                    return (
                      <span key={pageNum} className="text-gray-400">
                        ...
                      </span>
                    );
                  }
                  return null;
                } else {
                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`h-10 w-10 rounded-full text-sm font-medium transition-colors ${
                        currentPage === pageNum
                          ? "bg-orange-500 text-white"
                          : "border border-gray-500 text-gray-300 hover:bg-gray-700"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                }
              })}

              {/* Next button */}
              {hasNextPage && (
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="h-10 rounded border border-gray-500 px-3 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-700"
                >
                  次へ
                </button>
              )}
            </div>
          )}

          {/* Results info */}
          <div className="mt-4 text-center text-sm text-gray-400">
            {totalCount > 0 && (
              <p>
                {totalCount}件中 {(currentPage - 1) * BLOGS_PER_PAGE + 1} -{" "}
                {Math.min(currentPage * BLOGS_PER_PAGE, totalCount)}件を表示
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="mt-16 flex flex-col justify-center gap-4 sm:flex-row">
            <button
              onClick={handleTeamClick}
              className="rounded-full bg-[#EA3E3E] px-8 py-3 font-bold text-white transition-all duration-200 hover:bg-[#D32F2F] active:translate-y-1 active:shadow-none"
            >
              最新コンテンツを受け取る
            </button>
            <button
              onClick={handleContactClick}
              className="rounded-full border-2 border-orange-400 bg-orange-400 px-8 py-3 font-bold text-white transition-all duration-200 hover:bg-orange-500 hover:text-white"
            >
              採用について相談する
            </button>
          </div>
        </div>
      </section>

      {/* Sender.net Popup */}
      {showSenderPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative max-h-[90vh] w-full max-w-md overflow-auto rounded-lg bg-white p-6 shadow-xl">
            {/* Close button */}
            <button
              onClick={closeSenderPopup}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            {/* Popup content */}
            <div className="mb-4">
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                最新の採用情報を受け取る
              </h3>
              <p className="text-sm text-gray-600">
                メルマガ登録で最新の採用ノウハウをお届けします。
              </p>
            </div>

            {/* Sender.net Embedded Form - Script Method (Working!) */}
            <div className="w-full">
              <div
                className="sender-form-field"
                data-sender-form-id={SENDER_FORM_ID}
                style={{ minHeight: "400px", placeSelf: "center" }}
              >
                {/* Script injects the working form here */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogsPage;
