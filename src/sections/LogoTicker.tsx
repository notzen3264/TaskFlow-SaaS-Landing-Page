"use client";

import AcmeLogo from "@/assets/logo-acme.png";
import QuantumLogo from "@/assets/logo-quantum.png";
import EchoLogo from "@/assets/logo-echo.png";
import CelestialLogo from "@/assets/logo-celestial.png";
import PulseLogo from "@/assets/logo-pulse.png";
import ApexLogo from "@/assets/logo-apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="section-details-wrapper text-center">
          <h2 className="title text-center text-2xl md:text-[30px] md:leading-[34px] mt-5">Trusted by teams from the world's leading organizations</h2>
        </div>
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)] mt-8">
          <motion.div
            className="flex gap-14 flex-none transition-none pr-14"
            animate={{
              translateX: '-50%'
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop',
            }}
          >
            <Image
              src={AcmeLogo}
              alt="Acme Logo"
              draggable="false"
              className="logo-ticker-image"
            />
            <Image
              src={QuantumLogo}
              alt="Quantum Logo"
              draggable="false"
              className="logo-ticker-image"
            />
            <Image
              src={EchoLogo}
              alt="Echo Logo"
              draggable="false"
              className="logo-ticker-image"
            />
            <Image
              src={CelestialLogo}
              alt="Celestial Logo"
              draggable="false"
              className="logo-ticker-image"
            />
            <Image
              src={PulseLogo}
              alt="Pulse Logo"
              draggable="false"
              className="logo-ticker-image"
            />
            <Image
              src={ApexLogo}
              alt="Apex Logo"
              draggable="false"
              className="logo-ticker-image"
            />
            <Image
              src={AcmeLogo}
              alt="Acme Logo"
              draggable="false"
              className="logo-ticker-image"
            />
            <Image
              src={QuantumLogo}
              alt="Quantum Logo"
              draggable="false"
              className="logo-ticker-image"
            />
            <Image
              src={EchoLogo}
              alt="Echo Logo"
              draggable="false"
              className="logo-ticker-image"
            />
            <Image
              src={CelestialLogo}
              alt="Celestial Logo"
              draggable="false"
              className="logo-ticker-image"
            />
            <Image
              src={PulseLogo}
              alt="Pulse Logo"
              draggable="false"
              className="logo-ticker-image"
            />
            <Image
              src={ApexLogo}
              alt="Apex Logo"
              draggable="false"
              className="logo-ticker-image"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
