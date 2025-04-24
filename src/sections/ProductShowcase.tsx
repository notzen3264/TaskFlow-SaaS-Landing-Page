"use client";
import ProductImage from '@/assets/product-image.png';
import Pyramid from '@/assets/pyramid.png';
import Torus from '@/assets/torus.png'
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-details-wrapper">
          <div className="flex justify-center">
            <div className="tag">
              Advance your productivity
            </div>
          </div>
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] title mt-5">
            Introducing a revolutionary way to track progress
          </h2>
          <p className="text-center text-[22px] leading-[30px] description mt-5">
            Motivate your team to efficiently plan, pursue and commemorate every milestone with our all-in-one platform designed to enhance your productivity without the stress.
          </p>
        </div>
        <div className="relative">
          <Image
            src={ProductImage}
            alt="Product Image"
            className="select-none mt-10"
            draggable="false"
          />
          <motion.img
            src={Pyramid.src}
            alt="Pyramid"
            height={262}
            width={262}
            className="select-none hidden md:block absolute -right-36 -top-32 transition-none"
            draggable="false"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={Torus.src}
            alt="Torus"
            height={248}
            width={248}
            className="select-none opacity-0 md:opacity-100 absolute bottom-24 -left-36"
            draggable="false"
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
