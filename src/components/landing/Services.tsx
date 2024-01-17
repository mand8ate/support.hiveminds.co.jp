"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { SVGImages } from "../SVGImages";
import { Badge } from "../ui/badge";

import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

export default function Services() {
  const gradientX = useMotionValue(0);
  const gradientY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    gradientX.set(x);
    gradientY.set(y);
  };

  const gradientStyle = useTransform([gradientX, gradientY], ([x, y]) => {
    return `radial-gradient(circle at ${x}% ${y}%, rgba(10, 207, 131, 0.2) 5%, transparent 60%)`;
  });

  const solutions = [
    {
      title: "IT Solution",
      url: "/",
      description: "This is the IT solution blablabla",
    },
  ];

  return (
    <div className="container flex">
      <motion.div
        className="ml-6"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        style={{ transformOrigin: "top" }}
        transition={{ duration: 0.5 }}
      >
        <SVGImages.lineLeft height="h-36 md:h-96" color="#0ACF83" />
      </motion.div>
      <motion.div className="container ml-6 flex flex-col">
        <div className="mb-2 inline-block">
          <Badge variant="secondary">Trust in Professionals</Badge>
        </div>
        <h1 className="text-4xl font-semibold text-[#0ACF83]">
          Solutions We Offer
        </h1>
        <motion.div
          onMouseMove={handleMouseMove}
          style={{
            backgroundImage: gradientStyle,
            transform: "duration 0.5s",
          }}
          className="mt-6 rounded-2xl border border-primary-foreground/30 bg-primary-foreground/5 p-8 shadow-md shadow-[#0ACF83]/20 backdrop-blur-xl"
        >
          <Tabs defaultValue="itsolution">
            <TabsList className="grid w-full grid-cols-1 border border-primary-foreground/10 lg:grid-cols-4">
              <TabsTrigger value="itsolution">It Solution</TabsTrigger>
              <TabsTrigger value="event">Event</TabsTrigger>
              <TabsTrigger value="consultation">Consultation</TabsTrigger>
              <TabsTrigger value="logistics">Logistics</TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>
      </motion.div>
    </div>
  );
}
