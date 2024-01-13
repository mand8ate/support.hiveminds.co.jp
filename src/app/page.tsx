import { Koulen } from "next/font/google";

const koulen = Koulen({ subsets: ["latin"], weight: ["400"] });

export default function Page() {
  return (
    <div className="h-[80vh] lg:h-screen w-full bg-primary hero_clippath_md lg:hero_clippath">
      <div className="container pt-20">
        <h1
          className={
            (koulen.className,
            "text-white text-4xl md:text-6xl lg:text-8xl font-bold gradient_header_2")
          }
        >
          HiveMinds
        </h1>
        <p className="text-xl lg:text-2xl font-semibold">
          Your Expectations, Your Reality
        </p>
      </div>
    </div>
  );
}
