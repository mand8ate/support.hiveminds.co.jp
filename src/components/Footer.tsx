import Link from "next/link";
import { Mails } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Footer({ root }: { root?: boolean }) {
  return (
    <footer className={cn("h-fit w-full", root ? "snap-end" : "")}>
      <div className="flex h-full bg-foreground/30 backdrop-blur-xl">
        <div className="flex w-full flex-col py-16 lg:flex-row lg:items-center lg:py-24">
          <a
            href="https://hiveminds.co.jp/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-12 flex items-center justify-center lg:mb-0 lg:w-1/3"
          >
            <div className="flex gap-2">
              <Mails className="h-[30px] w-[30px] xl:h-[40px] xl:w-[40px]" />
              <h1 className="text-2xl font-bold xl:text-3xl">Contact Us</h1>
            </div>
          </a>
          <div className="flex flex-col items-center justify-center gap-16 text-center sm:flex-row lg:w-1/3 lg:gap-24">
            <div className="flex flex-col items-center sm:items-start">
              <h2 className="text-xl font-semibold">
                <Link href="/">Home</Link>
              </h2>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <h2 className="text-xl font-semibold">
                <Link href="/rpo">RPO</Link>
              </h2>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <h2 className="text-xl font-semibold">
                <Link href="/website">Recruit Website</Link>
              </h2>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-center lg:mt-0 lg:w-1/3">
            <Link href="/" className="relative h-[80px] w-[150px] lg:w-[200px]">
              <Image src="/logo_footer.svg" alt="HiveMinds Logo" fill />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-foreground py-12">
        <p className="text-background">
          Copyright &copy; HiveMinds, LLC. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
