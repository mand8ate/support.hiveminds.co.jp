"use client";

import { motion } from "framer-motion";

import Company from "@/components/landing/old/Company";

const pictureArray = [
  {
    alt: "hiveminds group picture",
    src: "/company/hiveminds_group_1.jpg",
  },
  {
    alt: "hiveminds group picture",
    src: "/company/hiveminds_group_2.jpg",
  },
  {
    alt: "hiveminds member",
    src: "/company/hiveminds_member.jpg",
  },
  {
    alt: "hiveminds members",
    src: "/company/hiveminds_members.jpg",
  },
];

export default function Page() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: "-50px", scale: 0.8 },
    show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="mt-24 lg:mt-32 xl:mt-64">
      <motion.div
        initial={{ opacity: 0, x: "-100px" }}
        whileInView={{ opacity: 1, x: 0 }}
        style={{ transformOrigin: "left" }}
        transition={{ duration: 0.5 }}
        className="container px-[2rem] sm:px-[4rem] md:px-[6rem]
        lg:px-[8rem]"
      >
        <h1 className="text-4xl font-semibold tracking-wider text-glowviolet">
          Our Company
        </h1>
        <div className="mt-6">
          <hr
            style={{
              border: "0",
              height: "1px",
              backgroundColor: "#A259FF",
              width: "100px",
              marginBottom: "0.5rem",
            }}
          />
          <h4 className="text-xl font-semibold md:text-2xl lg:text-3xl">
            HiveMindsでは、一時的な解決策ではなく、将来の課題に対応するソリューション提供を重視しています。私たちは、お客様がいつまでも輝き続けるよう、革新的なアプローチでサポートいたします。
          </h4>
          <hr
            style={{
              border: "0",
              height: "1px",
              backgroundColor: "#A259FF",
              width: "100px",
              marginTop: "0.5rem",
            }}
          />
        </div>
      </motion.div>

      <div className="container mb-48  mt-40 flex flex-col gap-36 xl:mt-64">
        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
        >
          {pictureArray.map((p, i) => (
            <motion.div
              key={i}
              className="border border-foreground/30"
              variants={itemVariants}
              style={{ transformOrigin: "left" }}
            >
              <img
                src={p.src}
                alt={p.alt}
                className="h-full w-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Company />
    </div>
  );
}
