"use client";

import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";

export default function Page() {
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
        <h1 className="text-4xl font-semibold tracking-wider text-primary">
          Contact
        </h1>
        <div className="mt-6">
          <hr
            style={{
              border: "0",
              height: "1px",
              backgroundColor: "#FF9900",
              width: "100px",
              marginBottom: "0.5rem",
            }}
          />
          <h4 className="text-xl font-semibold md:text-2xl lg:text-3xl">
            お困りごとがございましたら、お気軽にご連絡ください。まずは無料の相談を行いお客様の「やりたい」を教えてください。
          </h4>
          <hr
            style={{
              border: "0",
              height: "1px",
              backgroundColor: "#FF9900",
              width: "100px",
              marginTop: "0.5rem",
            }}
          />
        </div>
      </motion.div>
      <div
        className="container mb-48  mt-40 flex flex-col gap-36 px-[3rem] sm:px-[5rem] md:px-[7rem] lg:px-[9rem] xl:mt-64
        xl:w-1/2"
      >
        <ContactForm />
      </div>
    </div>
  );
}
