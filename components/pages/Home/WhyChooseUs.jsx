import React from "react";
import Image from "next/image";
import Button from "@/components/ui/button";
import { Check } from "@/components/ui/customIcons";

const features = [
  "Brilliant Client Service",
  "Flexibility & Adaptibility",
  "We make it Personal",
  "We have expart in our team",
];

const WhyChooseUs = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-24 py-16">
      <div className="w-full bg-[#FCF0F3] border border-[#F8BECD] rounded-[24px] px-6 sm:px-12 md:p-20 py-10 md:py-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        {/* Left Side Content */}
        <div className="w-full lg:w-[45%] flex flex-col items-start max-w-[480px]">
          <h4 className="text-3xl md:text-4xl font-bold text-black leading-tight mb-6 tracking-tight">
            Few Reasons Why you
            <br className="hidden lg:block" /> Choose us?
          </h4>
          <p className="text-black text-sm leading-relaxed mb-8 font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>

          <ul className="flex flex-col gap-3.5 mb-[45px] w-full">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <span className="shrink-0 size-8 rounded-full bg-[#FAC4D2] flex items-center justify-center text-primary">
                  <Check />
                </span>
                <span className="text-base font-bold text-[#1E1E1E]">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <Button className="px-[22px]! py-4.5! hover:opacity-90 transition-opacity font-bold! text-[14px]">
            Schedule A Meeting
          </Button>
        </div>

        {/* Right Side Image */}
        <div className="w-full lg:w-[55%] flex justify-center lg:justify-end relative">
          <Image
            src="/images/why-choose-us.png"
            alt="Why Choose Us"
            width={1000}
            height={1000}
            className="w-full h-fit"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
