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

export const footerNav = [
  {
    title: "Solutions",
    links: [
      {
        title: "IT",
        url: "/solution/it",
      },
      { title: "Event", url: "/solution/event" },
      { title: "Consulting", url: "/solution/consulting" },
      { title: "Logistics", url: "/solution/logistics" },
    ],
  },
  {
    title: "Achievements",
    links: [
      { title: "IT", url: "/achievements/#it" },
      { title: "Event", url: "/achievements/#event" },
      { title: "Consulting", url: "/achievements/#consulting" },
      { title: "Logistics", url: "/achievements/#logistics" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "Team", url: "/company/team" },
      {
        title: "VMV",
        url: "/company/vmv",
      },
      { title: "Company", url: "/company" },
    ],
  },
];

export const achievements = [
  {
    it: [
      {
        project: "",
        client: "",
        details: "",
        image: "",
      },
    ],
    event: [{ project: "", client: "", date: "", details: "", image: "" }],
    consulting: [
      {
        project: "",
        client: "",
        details: "",
        image: "",
      },
    ],
    logistics: [
      {
        project: "",
        client: "",
        details: "",
        image: "",
      },
    ],
  },
];
