"use client";
import { useParams } from "next/navigation";

// Mock blog data - this would come from Supabase later
const mockBlogDetail = {
  id: 1,
  title: "中小企業の採用における最新トレンド2024",
  content: `
    <h2>採用市場の現状分析</h2>
    <p>2024年の中小企業採用市場は大きな変化を迎えています。人材不足が深刻化する中、従来の採用手法では優秀な人材の確保が困難になってきています。</p>
    
    <h3>主要なトレンド</h3>
    <p>今年注目すべき採用トレンドは以下の通りです：</p>
    <ul>
      <li>リモートワーク対応の採用プロセス</li>
      <li>SNSを活用した採用マーケティング</li>
      <li>データドリブンな採用戦略</li>
      <li>候補者体験の向上</li>
    </ul>

    <h3>具体的な対策</h3>
    <p>これらのトレンドに対応するため、中小企業が取り組むべき具体的な施策をご紹介します。</p>
    
    <h4>1. デジタル採用プラットフォームの活用</h4>
    <p>従来の求人媒体に加え、LinkedInやWantedlyなどの新しいプラットフォームを活用することで、より多くの候補者にリーチできます。</p>
    
    <h4>2. 採用プロセスの可視化</h4>
    <p>候補者が安心して応募できるよう、採用プロセスを明確に示すことが重要です。面接回数、選考期間、結果通知のタイミングなどを事前に伝えましょう。</p>
    
    <h4>3. 社員の声の活用</h4>
    <p>実際に働く社員の声を採用サイトやSNSで発信することで、会社の魅力を効果的に伝えることができます。</p>

    <h3>成功事例</h3>
    <p>当社がサポートした中小企業の成功事例をご紹介します。A社では、採用プロセスの見直しにより応募者数が前年比150%増加しました。</p>
    
    <p>詳細な実施方法や具体的なツールの使い方については、ぜひお気軽にご相談ください。</p>
  `,
  date: "2024.8.30",
  category: "採用戦略",
  image: "/rpo/hero.png",
  tags: ["#採用", "#中小企業", "#トレンド", "#戦略"],
};

// Mock categories
const categories = [
  { name: "採用戦略", count: 12, active: true },
  { name: "面接ノウハウ", count: 8, active: false },
  { name: "求人作成", count: 15, active: false },
  { name: "人材育成", count: 6, active: false },
  { name: "労務管理", count: 9, active: false },
  { name: "企業ブランディング", count: 4, active: false },
];

// Mock recommended blogs
const recommendedBlogs = [
  {
    id: 2,
    title: "効果的な求人票の書き方",
    date: "2024.8.25",
    image: "/rpo/case1Pic1.png",
  },
  {
    id: 3,
    title: "面接官のためのスキルアップガイド",
    date: "2024.8.20",
    image: "/rpo/case2Pic1.png",
  },
  {
    id: 4,
    title: "リモートワーク時代の採用戦略",
    date: "2024.8.15",
    image: "/rpo/case3Pic1.png",
  },
];

const BlogDetailPage = () => {
  const params = useParams();
  const blogId = params.id;

  // In a real app, you'd fetch the blog data based on the ID
  // const blog = await fetchBlogById(blogId);

  return (
    <>
      {/* Hero Image Section */}
      <section className="relative h-[300px] w-full overflow-hidden pt-[72px] md:h-[400px] lg:h-[500px]">
        <img
          src={mockBlogDetail.image}
          alt={mockBlogDetail.title}
          className="h-full w-full object-cover object-center"
        />
      </section>

      {/* Content Section */}
      <section className="bg-white px-4 py-8 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          {/* Date and Title */}
          <div className="mb-8 text-center lg:mb-12">
            <div className="mb-4 text-sm text-gray-500 md:text-base">
              {mockBlogDetail.date}
            </div>
            <h1 className="text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl xl:text-5xl">
              {mockBlogDetail.title}
            </h1>
          </div>

          {/* Main Content Layout */}
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
            {/* Left Column - Blog Content */}
            <div className="lg:w-[70%]">
              <div
                className="prose prose-lg max-w-none text-gray-800"
                dangerouslySetInnerHTML={{ __html: mockBlogDetail.content }}
                style={{
                  lineHeight: "1.8",
                }}
              />
            </div>

            {/* Right Column - Utilities */}
            <div className="lg:w-[30%]">
              <div className="space-y-8">
                {/* Categories Section */}
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-4 text-lg font-bold text-gray-900">
                    人気のカテゴリー
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map((category, index) => (
                      <div
                        key={index}
                        className="cursor-pointer text-sm text-gray-700 transition-colors hover:text-orange-600"
                      >
                        #{category.name}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommended Blogs Section */}
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-4 text-lg font-bold text-gray-900">
                    注目ランキング
                  </h3>
                  <div className="space-y-4">
                    {recommendedBlogs.map((blog, index) => (
                      <div
                        key={blog.id}
                        className="cursor-pointer overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
                        onClick={() =>
                          window.open(`/blogs/${blog.id}`, "_blank")
                        }
                      >
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="h-32 w-full object-cover md:h-36"
                        />
                        <div className="p-4">
                          <div className="mb-2 text-xs text-gray-500">
                            {blog.date}
                          </div>
                          <h4 className="text-sm font-bold leading-tight text-gray-900 transition-colors hover:text-orange-600">
                            {blog.title}
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Back to the top button with right arrow*/}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center justify-center gap-2 font-bold text-black transition-all duration-200"
            >
              Go back
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
