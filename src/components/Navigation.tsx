"use client";

import { Koulen } from "next/font/google";
import * as React from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { FolderKanban, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Image from "next/image";
import Link from "next/link";

import { navigationItems } from "@/constants";

const koulen = Koulen({ subsets: ["latin"], weight: ["400"] });

export default function Navigation() {
  const { setTheme, theme } = useTheme();

  return (
    <nav className="fixed left-0 top-0 z-20 flex h-[55px] w-full items-center bg-background">
      <div className="ml-2 mr-10 flex items-center gap-2">
        <div className="relative my-1 h-[40px] w-[40px]">
          <Image
            src={theme === "light" ? "/logo_only.svg" : "/logo_only_dark.svg"}
            fill
            alt="hiveminds_logo"
          />
        </div>
        <Link
          href="/"
          className={cn(
            "hidden text-xl font-bold uppercase md:block",
            koulen.className,
          )}
        >
          <span className="text-primary">hive</span>minds
        </Link>
      </div>
      <div className="hidden lg:block">
        <NavigationMenu>
          <NavigationMenuList className="py-2">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Solution</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-4">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <FolderKanban className="h-6 w-6" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Case Study
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          私たちが過去に取り組んだプロジェクトの成果を、一緒にじっくりと見てみましょう！
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/solution/it" title="IT">
                    ウェブサイト・オンラインショップ・プラットフォーム開発。
                  </ListItem>
                  <ListItem href="/solution/event" title="Event">
                    展示会やオンラインイベントをお任せください！
                  </ListItem>
                  <ListItem href="/solution/consultation" title="Consultation">
                    DX化、ワークフロー、効率化に悩んでいる企業様におすすめのサービス。
                  </ListItem>
                  <ListItem href="/solution/logistics" title="Logistics">
                    日本への輸入、海外への輸出ソリューションを提案します！
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/achievements" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Achievements
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Company</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[600px] ">
                  {navigationItems.map((navigationItems) => (
                    <ListItem
                      key={navigationItems.title}
                      title={navigationItems.title}
                      href={navigationItems.href}
                    >
                      {navigationItems.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
