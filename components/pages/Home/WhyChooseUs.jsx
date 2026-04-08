import React from "react";
import Image from "next/image";
import Button from "@/components/ui/button";

const features = [
  "Brilliant Client Service",
  "Flexibility & Adaptibility",
  "We make it Personal",
  "We have expart in our team",
];

const WhyChooseUs = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-24 py-16">
      <div className="w-full bg-[#FCF0F3] rounded-[24px] px-8 sm:px-12 md:px-16 py-12 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        {/* Left Side Content */}
        <div className="w-full lg:w-[45%] flex flex-col items-start max-w-[480px]">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#111827] leading-[1.25] mb-5 tracking-tight">
            Few Reasons Why you
            <br className="hidden lg:block" /> Choose us?
          </h2>
          <p className="text-[#111827] text-[14px] leading-relaxed mb-8 font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>

          <ul className="flex flex-col gap-[18px] mb-[45px] w-full">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-4">
                <span className="flex-shrink-0 w-[24px] h-[24px] rounded-full bg-[#F5C7D1] flex items-center justify-center text-primary">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-[14px] font-bold text-[#111827]">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <Button className="!rounded-md !px-7 !py-3 hover:opacity-90 transition-opacity !font-bold text-[14px]">
            Schedule A Meeting
          </Button>
        </div>

        {/* Right Side Image */}
        <div className="w-full lg:w-[52%] flex justify-center lg:justify-end relative">
          <Image
            src="/images/why-choose-us.png"
            alt="Why Choose Us"
            width={1500}
            height={1500}
            className="w-full h-auto object-contain"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
