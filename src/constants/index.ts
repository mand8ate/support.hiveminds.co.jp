import { NavigationItemsProps } from "@/lib/types";

export const navigationItems: NavigationItemsProps[] = [
  {
    title: "Team",
    href: "/company/team",
    description: "私たちのチームを紹介します。",
  },
  {
    title: "VMV",
    href: "/company/vmv",
    description: "Vision, Mission, Values! 私たちのビジョンとミッション、理念",
  },
  {
    title: "Company",
    href: "/company",
    description: "HiveMindsの会社概要",
  },
];

export const navigationItemsService: NavigationItemsProps[] = [
  {
    title: "Branding",
    href: "/service",
    description: "多角的なブランド支援",
  },
  {
    title: "Global",
    href: "https://global.hiveminds.co.jp",
    description: "事業の国際化を支援",
  },
];

export const footerNav = [
  {
    title: "Service",
    link: "/service",
  },
  {
    title: "Projects",
    link: "/projects",
  },
  {
    title: "Company",
    link: "/company",
  },
];
