"use client";
import BtnMovingBorder from "@/components/border-btn";
import { HoverBorderGradient } from "@/components/hover-border-gradient";
import ArrowIcon from "@/public/arrow-right.svg";
import cogImage from "@/public/cog.png";
import noodleImage from "@/public/noodle.png";
import cylinderImage from "@/public/cylinder.png";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={heroRef}
      className="px-5 pt-8 md:pt-5 md:pb-10 pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip"
    >
      <div className="container mx-auto w-full">
        <div className="md:flex items-center">
          <div className="md:w-[476px] flex flex-col items-start">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="text-black flex items-center space-x-2 tracking-tight bg-transparent"
            >
              <span>Version 2.0 is here</span>
            </HoverBorderGradient>
            <h1 className="heading-gradient text-start">
              Pathway to Productivity
            </h1>
            <p className="subheading text-start">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <BtnMovingBorder>Get for free</BtnMovingBorder>
              <button className="btn btn-text gap-1">
                <span>Learn More</span>
                <ArrowIcon className="size-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
              src={cogImage.src}
              alt="cog"
              height={500}
              width={500}
              className="md:absolute md:h-full w-auto md:max-w-none md:-left-6 lg:left-0"
            />
            <motion.img
              src={cylinderImage.src}
              alt="cylinder"
              height={220}
              width={220}
              className="hidden md:block -top-8 -left-32 md:absolute"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src={noodleImage.src}
              alt="noodle"
              height={220}
              width={220}
              className="hidden lg:block  md:absolute top-[524px] left-[440px] rotate-[30deg]"
              style={{
                rotate: "30deg",
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
