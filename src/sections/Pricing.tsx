"use client";

import Check from "@/assets/check.svg";
import clsx from "clsx";
import { motion } from "framer-motion";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Get started",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
      "Request additional storage capacity",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Get started",
    popular: false,
    inverse: false,
    features: [
      "Unlimited project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Flow integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics engine",
      "Export capabilities",
      "API access",
      "Advanced security features",
      "Request additional storage space",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container py-24">
        <div className="section-details-wrapper">
          <h2 className="title text-center text-3xl md:text-[54px] md:leading-[60px]">Pricing</h2>
          <p className="description text-center text-[22px] leading-[30px] mt-5">
            Our services are freely available forever. Upgrade your plan for increased storage limits, exclusive premium features, enhanced security and more.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end justify-center">
          {pricingTiers.map((tier, index) => (
            <div key={index} className={clsx("card", tier.inverse === true ? "border-black bg-black text-white" : "bg-white")}>
              <div className="flex items-center justify-between">
                <h3 className={clsx("text-lg font-bold tracking-tight", tier.inverse === true ? "text-white/60" : "text-black/50")}>{tier.title}</h3>
                {tier.popular === true && tier.inverse && (
                  <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                    <motion.span
                      animate={{ backgroundPositionX: "100%", }}
                      transition={{ duration: "3", repeatType: "loop", repeat: Infinity, ease: "linear" }}
                      className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] [background-size:200%] text-transparent bg-clip-text font-medium transition-none"
                    >
                      Most Popular
                    </motion.span>
                  </div>
                )}
              </div>
              <div className="flex items-baseline gap-1 mt-[30px]">
                <span className="text-4xl font-bold tracking-tighter leading-none">
                  £{tier.monthlyPrice}
                </span>
                <span className={clsx("tracking-tight font-bold text-black/50", tier.inverse === true && "text-white/60")}>/month</span>
              </div>
              <button className={clsx("btn btn-primary w-full mt-[30px]", tier.inverse === true && "bg-white text-black hover:bg-white/80")}>
                {tier.buttonText}
              </button>
              <ul className="flex flex-col gap-5 mt-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm flex items-center gap-4">
                    <Check className="h-6 w-6" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3></h3>
          </div>
        </div>
      </div>
    </section>
  );
};
