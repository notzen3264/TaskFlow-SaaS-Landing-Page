"use client";

import ArrowRight from '@/assets/arrow-right.svg';
import Star from '@/assets/star.png';
import Spring from '@/assets/spring.png';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { tr } from 'framer-motion/client';

export const CallToAction = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-details-wrapper relative">
          <h2 className="title text-center text-3xl md:text-[54px] md:leading-[60px] mt-5">Sign up for free now</h2>
          <p className="description text-center text-[22px] leading-[30px] mt-5">
            Join thousands of satisfied users today and boost your productivity to the next level.
          </p>
          <motion.img
            src={Star.src}
            alt="Star"
            width={360}
            height={360}
            className="absolute -left-[350px] -top-[137px] select-none transition-none"
            draggable="false"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={Spring.src}
            alt="Spring"
            width={360}
            height={360}
            className="absolute -right-[331px] -top-[19px] select-none transition-none"
            draggable="false"
            style={{
              translateY,
            }}
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">
            Get Started
          </button>
          <button className="btn btn-text gap-1">
            <span>
              Book a Demo
            </span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
