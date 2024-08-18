import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../../ui/card";
import { CalendarRange, MonitorSmartphone, Ship, Speech } from "lucide-react";
import DrawOutlineButton from "../../OutlineButton";

import Link from "next/link";

const solutions = [
  {
    title: "IT Solution",
    subtitle: "ITソリューション",
    value: "itsolution",
    url: "/solution/it",
    description:
      "IT SolutionやDX導入を通じてお客様の収益拡大および業務効率改善に貢献します。",
    icon: <MonitorSmartphone className="h-[70px] w-[70px] text-primary" />,
    bulletpoints: ["ウェブサイト作成", "アプリケーション開発", "DXサポート"],
  },
  {
    title: "Event",
    subtitle: "イベントソリューション",
    value: "event",
    url: "/solution/event",
    description:
      "国内外を問わず、商品・サービス展示会イベントなどの仲介サポートをさせていただきます。",
    icon: <CalendarRange className="h-[70px] w-[70px] text-primary" />,
    bulletpoints: ["展示会", "オンラインイベント", "アカウントマネジメント"],
  },
  {
    title: "Consultation",
    subtitle: "コンサルティング",
    value: "consultation",
    url: "/solution/consultation",
    description:
      "Webマーケティング・人材採用・ブランディングの3つの領域のコンサルティングサポートを通じて、お客様の企業力を底上げします。",
    icon: <Speech className="h-[70px] w-[70px] text-primary" />,
    bulletpoints: ["Webマーケティング", "ブランディング", "人材採用"],
  },
  {
    title: "Logistics",
    subtitle: "ロジスティックス",
    value: "logistics",
    url: "/solution/logistics",
    description:
      "輸入フォワーダーとしての機能を用いて、主にアジア諸国からの国外輸入をサポートいたします。",
    icon: <Ship className="h-[70px] w-[70px] text-primary" />,
    bulletpoints: ["輸入出サポート", "フォーワーディング", "市場調査"],
  },
];

export default function ServiceTabs() {
  return (
    <Tabs defaultValue="itsolution">
      <TabsList className="grid w-full grid-cols-1 border border-foreground/20 lg:grid-cols-4">
        <TabsTrigger value="itsolution">It Solution</TabsTrigger>
        <TabsTrigger value="event">Event</TabsTrigger>
        <TabsTrigger value="consultation">Consultation</TabsTrigger>
        <TabsTrigger value="logistics">Logistics</TabsTrigger>
      </TabsList>
      {solutions.map((solution, index) => (
        <TabsContent value={solution.value} key={index}>
          {
            <Card className="border-foreground/20">
              <CardHeader className="flex flex-col items-center">
                <CardTitle className="mt-4  flex flex-col items-center gap-4 text-4xl">
                  {solution.icon}
                  {solution.title}
                </CardTitle>
                <CardDescription className="text-lg">
                  {solution.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex flex-col items-center">
                  <div className="text-xl">{solution.description}</div>
                  <ul className="mt-8 list-inside list-disc text-left text-xl">
                    {solution.bulletpoints?.map((bulletpoint, index) => (
                      <li key={index} className="mb-2 text-xl">
                        {bulletpoint}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter className="my-4 flex justify-center">
                <DrawOutlineButton color="glowgreen">
                  <Link href={solution.url}>See More !</Link>
                </DrawOutlineButton>
              </CardFooter>
            </Card>
          }
        </TabsContent>
      ))}
    </Tabs>
  );
}
