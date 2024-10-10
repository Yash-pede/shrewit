"use client";
import { HoverBorderGradient } from "@/components/hover-border-gradient";
import { cn } from "@/lib/utils";
import avatar1 from "@/public/avatar-1.png";
import avatar2 from "@/public/avatar-2.png";
import avatar3 from "@/public/avatar-3.png";
import avatar4 from "@/public/avatar-4.png";
import avatar5 from "@/public/avatar-5.png";
import avatar6 from "@/public/avatar-6.png";
import avatar7 from "@/public/avatar-7.png";
import avatar8 from "@/public/avatar-8.png";
import avatar9 from "@/public/avatar-9.png";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstCol = testimonials.slice(0, 3);
const secondCol = testimonials.slice(3, 6);
const thirdCol = testimonials.slice(6, 9);

const TestimonialCol = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 12,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
        className={cn("flex flex-col gap-6 pb-6")}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(
              ({ text, imageSrc, name, username }, index) => (
                <div className="card" key={index}>
                  <div className="">{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <Image
                      src={imageSrc}
                      alt={name}
                      width={40}
                      height={40}
                      className="size-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <h3 className=" font- medium tracking-tight leading-5">
                        {name}
                      </h3>
                      <p className="text-sm tracking-tight leading-5  ">
                        {username}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
export const Testimonials = () => {
  return (
    <section className="bg-white px-5 py-24">
      <div className="container mx-auto w-full">
        <div className="max-w-[580px] mx-auto flex flex-col items-center">
          <div className="flex flex-col items-center justify-center">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="text-black flex items-center space-x-2 tracking-tight bg-transparent"
            >
              <span>Version 2.0 is here</span>
            </HoverBorderGradient>
            <h1 className="heading-gradient">What our users say</h1>
            <p className="subheading">
              From intuitive design to powerful features, our app has become an
              essential tool for users around the world.
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-6 masked-gradient mt-10 max-h-[738px] overflow-hidden">
          <TestimonialCol testimonials={firstCol} duration={15} />
          <TestimonialCol
            testimonials={secondCol}
            duration={19}
            className="hidden md:block"
          />
          <TestimonialCol duration={17} testimonials={thirdCol} className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
};
