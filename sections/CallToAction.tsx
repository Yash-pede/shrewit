"use client";
import ArrowIcon from "@/public/arrow-right.svg";
import BtnMovingBorder from "@/components/border-btn";
import StarImage from "@/public/star.png";
import SpringImage from "@/public/spring.png";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [200, -200]);
  return (
    <section className="px-5 py-24 bg-gradient-to-b from-white to-[#D2DCFF] overflow-x-clip">
      <div className="container mx-auto w-full">
        <div className="relative max-w-[580px] mx-auto flex flex-col items-center">
          <h1 className="heading-gradient">Sign up for free today</h1>
          <p className="subheading">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <motion.img
            src={StarImage.src}
            alt="star image"
            width={360}
            height={360}
            className="absolute -left-[350px] -top-[137px]"
            style={{ translateY: translateY }}
          />
          <motion.img
            src={SpringImage.src}
            alt="star image"
            width={360}
            height={360}
            className="absolute -top-[19px] -right-[331px]"
            style={{ translateY: translateY }}
          />
          <div className="flex gap-1 items-center mt-[30px]">
            <BtnMovingBorder>Get for free</BtnMovingBorder>
            <button className="btn btn-text gap-1">
              <span>Learn More</span>
              <ArrowIcon className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
