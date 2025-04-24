"use client";

import ArrowRight from '@/assets/arrow-right.svg';
import Cog from '@/assets/cog.png';
import Cylinder from '@/assets/cylinder.png';
import Noodle from '@/assets/noodle.png';
import Image from 'next/image';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useRef } from 'react';

export const Hero = () => {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  useMotionValueEvent(translateY, "change", (latestValue) =>
    console.log(latestValue)
  );

  return (
    <section className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip md:h-[calc(100vh-9.5rem)] md:min-h-[50rem]' ref={heroRef}>
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">
              New | Announcing Version 2.0
            </div>
            <h1 className="text-5xl md:text-7xl title mt-6">
              Your portal to productivity
            </h1>
            <p className="text-xl description mt-6">
              Celebrate with the joy of accomplishment with an app designed to effectively track your progress, motivate your efforts, and record your successes.
            </p>
            <div className="flex gap-2 items-center mt-[30px]">
              <button className="btn btn-primary">
                Get Started
              </button>

              <button className="btn btn-text gap-1">
                <span>
                  Learn More
                </span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative'>
            <motion.img
              src={Cog.src}
              alt="Cog"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0 select-none"
              draggable="false"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 4,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={Cylinder.src}
              alt="Cylinder"
              width={220}
              height={220}
              className='hidden md:block -top-8 -left-28 md:absolute select-none'
              draggable="false"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src={Noodle.src}
              width={220}
              alt="Noodle"
              className="hidden lg:block absolute top-[524px] left-[462px] select-none"
              draggable="false"
              style={{
                rotate: 30,
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
