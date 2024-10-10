"use client";
import { HoverBorderGradient } from "@/components/hover-border-gradient";
import ProductImage from "@/public/product-image.png";
import Image from "next/image";
import PyramidImage from "@/public/pyramid.png";
import TubeImage from "@/public/tube.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [200, -200]);
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b  from-white to-[#D2DCFF] py-24 px-5 overflow-x-clip"
    >
      <div className="container mx-auto">
        <div className="max-w-[580px] mx-auto flex flex-col items-center">
          <div className="flex flex-col items-center justify-center">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="text-black flex items-center space-x-2 tracking-tight bg-transparent"
            >
              <span>Boost your productivity</span>
            </HoverBorderGradient>
            <h1 className="heading-gradient">
              A more effective way to track progress
            </h1>
            <p className="subheading">
              Celebrate the joy of accomplishment with an app designed to track
              your progress and motivate your efforts.
            </p>
          </div>
        </div>
        <div className="relative">
          <Image src={ProductImage} alt="product image" className="mt-10" />
          <motion.img
            src={PyramidImage.src}
            alt="pyramid image"
            height={262}
            width={262}
            className="hidden md:block absolute -top-32 -right-36"
            style={{
              translateY: translateY,
            }}
          />
          <motion.img
            src={TubeImage.src}
            alt="tube image"
            height={248}
            width={248}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{
              translateY: translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
