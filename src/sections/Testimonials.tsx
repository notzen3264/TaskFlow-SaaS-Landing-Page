"use client";

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import clsx from "clsx";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Taskflow instantly grabbed my attention.",
    src: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    src: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    src: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    src: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    src: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    src: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    src: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    src: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    src: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

type Testimonial = {
  text: string;
  src: string;
  name: string;
  username: string;
};

const TestimonialsColumn = ({ className, testimonials, duration }: { className?: string; testimonials: Testimonial[]; duration?: number }) => {
  return (
    <div className={className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: duration || 10,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        className="flex flex-col gap-6 pb-6 transition-none"
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map((testimonial: Testimonial, index: number) => (
              <div className="card" key={index}>
                <div>{testimonial.text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="select-none"
                    draggable={false}
                  />
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5">
                      {testimonial.name}
                    </div>
                    <div className="leading-5 tracking-tight text-black/60">
                      {testimonial.username}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}

export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="flex justify-center">
          <div className="tag">
            Testimonials
          </div>
        </div>
        <div className="section-details-wrapper">
          <h2 className="title text-center text-3xl md:text-[54px] md:leading-[60px] mt-5">
            Loved by users like you
          </h2>
          <p className="description text-center text-[22px] leading-[30px] mt-5">
            Discover thousands of our users who have accelerated their workflow and optimised their task execution with our intuitive software.
          </p>
        </div>
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] mt-10 max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={16} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};
