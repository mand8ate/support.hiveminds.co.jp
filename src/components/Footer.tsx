import Link from "next/link";
import { Mails } from "lucide-react";
import { footerNav } from "@/constants";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="h-fit w-full">
      <div className="flex h-full bg-foreground/30 backdrop-blur-xl">
        <div className="flex w-full flex-col py-16 lg:flex-row lg:py-24">
          <Link
            href="/contact"
            className="mb-12 flex items-start justify-center gap-4 pr-4 lg:mb-0 lg:w-1/3"
          >
            <div className="flex gap-2 self-center">
              <Mails className="h-[30px] w-[30px] xl:h-[40px] xl:w-[40px]" />
              <h1 className="text-2xl font-bold xl:text-3xl">Contact Us</h1>
            </div>
          </Link>
          <div className="flex flex-col items-center justify-center gap-16 sm:flex-row sm:items-start lg:w-1/3 lg:gap-24">
            {footerNav.map((items, i) => (
              <div
                className="flex flex-col items-center sm:items-start"
                key={i}
              >
                <h2 className="mb-2 text-xl font-semibold">{items.title}</h2>
                <ul>
                  {items.links.map((link, i) => (
                    <li key={i}>
                      <Link className="text-lg" href={link.url}>
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="items-top mt-8 flex justify-center lg:mt-0 lg:w-1/3">
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
