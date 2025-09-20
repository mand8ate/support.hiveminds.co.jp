"use client";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import { useBlogPost, useBlogsData, useCategories } from "@/hooks/useBlogsData";
import Image from "next/image";
import { urlFor } from "@/sanity/imageUrl";

// Simple component to render Sanity's portable text
const RenderPortableText = ({ content }: { content: any }) => {
  if (!content) return null;

  return (
    <div className="prose prose-lg max-w-none text-gray-800">
      {content.map((block: any, index: number) => {
        if (block._type === 'block') {
          const style = block.style || 'normal';
          const children = block.children?.map((child: any, childIndex: number) => {
            return <span key={childIndex}>{child.text}</span>;
          });

          switch (style) {
            case 'h1':
              return (
                <h1 key={index} className="mb-4 mt-8 text-3xl font-bold text-gray-900">
                  {children}
                </h1>
              );
            case 'h2':
              return (
                <h2 key={index} className="mb-3 mt-6 text-2xl font-bold text-gray-900">
                  {children}
                </h2>
              );
            case 'h3':
              return (
                <h3 key={index} className="mb-2 mt-4 text-xl font-bold text-gray-900">
                  {children}
                </h3>
              );
            default:
              return (
                <p key={index} style={{ lineHeight: "1.8", marginBottom: "1.5rem" }}>
                  {children}
                </p>
              );
          }
        }
        return null;
      })}
    </div>
  );
};

const BlogDetailPage = () => {
  const params = useParams();
  const slug = params.slug as string;

  // Fetch the specific blog post
  const { post, loading, error } = useBlogPost(slug);
  
  // Only fetch categories and recommended posts after the main post is loaded
  const { categories } = useCategories();
  
  // Fetch recommended blogs with memoized parameters to prevent infinite calls
  const recommendedParams = useMemo(() => ({
    pagination: { page: 1, limit: 4 }, // Get 4 so we can exclude current and show 3
    enableAutoLoad: !!post // Only load when we have the main post
  }), [post]);
  
  const { posts: recommendedPosts } = useBlogsData(recommendedParams);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    }).replace(/\//g, '.');
  };

  const handleToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center pt-[72px]">
        <div className="text-center">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
          <p className="mt-2 text-gray-600">記事を読み込み中...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center pt-[72px]">
        <div className="text-center">
          <p className="text-red-600">エラーが発生しました: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            再試行
          </button>
        </div>
      </div>
    );
  }

  // Post not found
  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center pt-[72px]">
        <div className="text-center">
          <p className="text-gray-600">記事が見つかりません。</p>
          <button
            onClick={handleToTop}
            className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            記事一覧に戻る
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Image Section */}
      <section className="relative h-[300px] w-full overflow-hidden pt-[72px] md:h-[400px] lg:h-[500px]">
        {post.mainImage ? (
          <Image
            src={urlFor(post.mainImage).width(1200).height(600).url()}
            alt={post.title}
            fill
            className="object-cover object-center"
            priority
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-200">
            <span className="text-gray-500">画像がありません</span>
          </div>
        )}
      </section>

      {/* Content Section */}
      <section className="bg-white px-4 py-8 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          {/* Date and Title */}
          <div className="mb-8 text-center lg:mb-12">
            <div className="mb-4 text-sm text-gray-500 md:text-base">
              {formatDate(post.publishedAt)}
            </div>
            <h1 className="text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl xl:text-5xl">
              {post.title}
            </h1>
            {/* Author and Categories */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
              {post.categories && post.categories.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.categories.map((category) => (
                    <span
                      key={category._id}
                      className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-600"
                    >
                      #{category.title}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Main Content Layout */}
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
            {/* Left Column - Blog Content */}
            <div className="lg:w-[70%]">
              {post.body && (
                <RenderPortableText content={post.body} />
              )}
            </div>

            {/* Right Column - Utilities */}
            <div className="lg:w-[30%]">
              <div className="space-y-8">
                {/* Categories Section */}
                {categories.length > 0 && (
                  <div className="rounded-lg bg-gray-50 p-6">
                    <h3 className="mb-4 text-lg font-bold text-gray-900">
                      人気のカテゴリー
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {categories.slice(0, 6).map((category) => (
                        <div
                          key={category._id}
                          className="cursor-pointer text-sm text-gray-700 transition-colors hover:text-orange-600"
                          onClick={() => window.open(`/blogs?category=${category._id}`, "_self")}
                        >
                          #{category.title}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Recommended Blogs Section */}
                {recommendedPosts.length > 0 && (
                  <div className="rounded-lg bg-gray-50 p-6">
                    <h3 className="mb-4 text-lg font-bold text-gray-900">
                      注目ランキング
                    </h3>
                    <div className="space-y-4">
                      {recommendedPosts
                        .filter(blog => blog.slug.current !== slug) // Exclude current post
                        .slice(0, 3)
                        .map((blog) => (
                        <div
                          key={blog._id}
                          className="cursor-pointer overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
                          onClick={() =>
                            window.open(`/blogs/${blog.slug.current}`, "_self")
                          }
                        >
                          {blog.mainImage ? (
                            <Image
                              src={urlFor(blog.mainImage).width(300).height(150).url()}
                              alt={blog.title}
                              width={300}
                              height={150}
                              className="h-32 w-full object-cover md:h-36"
                            />
                          ) : (
                            <div className="flex h-32 w-full items-center justify-center bg-gray-200 md:h-36">
                              <span className="text-gray-500 text-xs">画像なし</span>
                            </div>
                          )}
                          <div className="p-4">
                            <div className="mb-2 text-xs text-gray-500">
                              {formatDate(blog.publishedAt)}
                            </div>
                            <h4 className="text-sm font-bold leading-tight text-gray-900 transition-colors hover:text-orange-600 overflow-hidden"
                                style={{
                                  display: '-webkit-box',
                                  WebkitLineClamp: 2,
                                  WebkitBoxOrient: 'vertical'
                                }}>
                              {blog.title}
                            </h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Back to top of the page */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleToTop}
              className="flex items-center justify-center gap-2 font-bold text-black transition-all duration-200 hover:text-orange-600"
            >
              Go Back
              <img
                src="/svg/right-arrow.svg"
                alt="right arrow"
                className="h-3 w-3"
              />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailPage;
