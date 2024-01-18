import { motion } from "framer-motion";
import { SVGImages } from "../SVGImages";

export default function ServicesInterlude() {
  return (
    <div className="container mt-32 flex items-start justify-between">
      <div>
        <h1 className="text-glowgreen text-4xl font-semibold tracking-wider">
          Your Project, Our Passion.
        </h1>
        <div className="mt-6">
          <div className="bg-glowgreen mb-2 h-[2px] w-[100px]"></div>{" "}
          <h4 className="text-3xl font-semibold">
            From visionary websites to cutting-edge mobile applications, we
            craft digital experiences that captivate and inspire. Partner with
            us, and let's bring your dream project to life – on time and within
            budget.
          </h4>
          <div className="bg-glowgreen mt-2 h-[2px] w-[100px]"></div>{" "}
        </div>
      </div>
      <div className="flex-grow"></div>
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        style={{ transformOrigin: "top" }}
        transition={{ duration: 0.5 }}
      >
        <SVGImages.lineLeft height="h-36 md:h-96" color="#0ACF83" />
      </motion.div>
    </div>
  );
}
