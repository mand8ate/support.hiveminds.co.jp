import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-8">
      <h1 className="text-6xl font-bold uppercase text-primary">thank you</h1>
      <h1 className="text-4xl font-semibold">
        お問い合わせありがとうございます
      </h1>
      <h3>
        原則として24時間以内に返信をさせていただいておりますが、遅れる場合もございます。予めご了承くださいませ。
      </h3>
      <Link
        className={cn(buttonVariants({ variant: "ghost" }), "relative px-6")}
        href="/"
      >
        <ChevronLeft className="absolute left-2 h-4 w-4" /> Home
      </Link>
    </div>
  );
}
