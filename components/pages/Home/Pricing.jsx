"use client";

import { CheckPricingCard, X } from "@/components/ui/customIcons";
import Image from "next/image";
import React, { useState } from "react";

const featuresList = [
  "20,000+ of PNG & SVG graphics",
  "Access to 100 million stock images",
  "Upload custom icons and fonts",
  "Unlimited Sharing",
  "Upload graphics & video in up to 4k",
  "Unlimited Projects",
  "Instant Access to our design system",
  "Create teams to collaborate on designs",
];

const plans = [
  {
    name: "Freebie",
    desc: "Ideal for individuals who need quick access to basic features.",
    price: 0,
    features: [true, true, false, false, false, false, false, false],
    isPopular: false,
  },
  {
    name: "Professional",
    desc: "Ideal for individuals who who need advanced features and tools for client work.",
    price: 25,
    features: [true, true, true, true, true, true, false, false],
    isPopular: true,
  },
  {
    name: "Enterprise",
    desc: "Ideal for businesses who need personalized services and security for large teams.",
    price: 100,
    features: [true, true, true, true, true, true, true, true],
    isPopular: false,
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-24 py-20 mb-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h4 className="text-3xl md:text-[40px] font-bold text-neutral-800 mb-4 tracking-tight">
          Airnbn Assistent{" "}
          <span className="text-3xl md:text-[40px] font-bold text-primary">
            Pricing
          </span>
        </h4>
        <p className="text-neutral-800 text-xl">
          Choose a plan that's right for you
        </p>

        {/* Toggle & Save Badge */}
        <div className="flex items-center justify-center gap-4 mt-8 relative max-w-[400px] mx-auto">
          <span
            className={`text-[15px] font-medium ${!isYearly ? "text-[#1A1A1A]" : "text-[#6B7280]"}`}
          >
            Pay Monthly
          </span>

          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`w-11 h-6 rounded-full flex items-center p-0.5 transition-all duration-300 relative cursor-pointer ${isYearly ? "bg-primary!" : "bg-[#04092152]"}`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${
                isYearly ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>

          <span
            className={`text-[15px] font-medium ${isYearly ? "text-[#1A1A1A]" : "text-[#6B7280]"}`}
          >
            Pay Yearly
          </span>

          <div className="absolute -right-[70px] md:-right-[120px] top-1/2 -translate-y-[45%]">
            <Image
              src="/images/save-25.png"
              alt="Save 25%"
              width={185}
              height={88}
            />
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-[1200px] mx-auto mt-16">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`w-full rounded-[16px] px-8 py-10 transition-all duration-300 ${
              plan.isPopular
                ? "bg-[#F33969] text-white shadow-xl shadow-primary/20 scale-[1.02]"
                : "bg-white text-[#111827] border border-[#FADBDC] shadow-[0_8px_30px_-12px_rgba(0,0,0,0.06)]"
            }`}
          >
            <h3
              className={`text-2xl font-bold mb-4 ${plan.isPopular ? "text-white" : "text-[#1A1A1A]"}`}
            >
              {plan.name}
            </h3>
            <p
              className={`text-[14px] leading-relaxed mb-6 h-[42px] ${plan.isPopular ? "text-white" : "text-[#6B7280]"}`}
            >
              {plan.desc}
            </p>

            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-[52px] font-bold tracking-tight">
                ${plan.price}
              </span>
              <span
                className={`text-[14px] font-medium ${plan.isPopular ? "text-white" : "text-[#6B7280]"}`}
              >
                / Month
              </span>
            </div>

            <button
              className={`w-full py-3.5 rounded-md font-semibold text-[15px] mb-8 transition-colors ${
                plan.isPopular
                  ? "bg-white text-primary hover:bg-gray-50"
                  : "bg-white text-primary border border-primary hover:bg-primary/5"
              }`}
            >
              Get Started Now
            </button>

            <ul className="flex flex-col gap-[18px]">
              {plan.features.map((hasFeature, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  {/* Icon Badge */}
                  {hasFeature ? (
                    <span
                      className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                        plan.isPopular
                          ? "bg-white text-primary"
                          : "bg-[#FCE6EA] text-primary"
                      }`}
                    >
                      <CheckPricingCard />
                    </span>
                  ) : (
                    <span
                      className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                        plan.isPopular
                          ? "bg-white text-primary"
                          : "bg-[#F3F4F6] text-[#9CA3AF]"
                      }`}
                    >
                      <X />
                    </span>
                  )}

                  {/* Feature Text */}
                  <span
                    className={`text-[14px] leading-tight ${
                      plan.isPopular
                        ? "text-white font-medium"
                        : hasFeature
                          ? "text-[#111827] font-medium"
                          : "text-[#9CA3AF]"
                    }`}
                  >
                    {featuresList[idx]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
