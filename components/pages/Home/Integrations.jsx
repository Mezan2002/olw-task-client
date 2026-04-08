import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";
import React from "react";

const HostfullyLogo = () => (
  <div className="relative flex items-center justify-center">
    <svg
      className="absolute -top-[12px] left-[4px] w-[18px] h-[18px] text-[#05B699]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="5"
    >
      <path strokeLinecap="square" strokeLinejoin="miter" d="M4 16l8-8 8 8" />
    </svg>
    <span className="text-[25px] font-extrabold text-[#2C317E] tracking-tight ml-1">
      Hostfully
    </span>
  </div>
);

const GuestyLogo = () => (
  <div className="flex items-center gap-[12px]">
    <svg width="36" height="36" viewBox="0 0 32 32" fill="none">
      <path
        d="M16 4.5L4 14V28H14V18C14 16.5 15.5 16.5 16 16.5C16.5 16.5 18 16.5 18 18V28H28V14L16 4.5Z"
        stroke="#2E72D2"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <div className="flex flex-col items-start justify-center">
      <span className="text-[20px] font-bold text-[#1A3B66] leading-[1.1] mb-0.5">
        Guesty
      </span>
      <span className="text-[12px] text-[#2E72D2] font-semibold leading-none">
        For Hosts
      </span>
    </div>
  </div>
);

const LodgifyLogo = () => (
  <div className="flex items-center gap-[14px]">
    <div className="relative w-8 h-8">
      <div className="absolute bottom-0 left-0 w-6 h-6 bg-[#FF2D55] rounded-[3px]" />
      <div className="absolute top-[2px] right-[2px] w-[10px] h-[10px] bg-[#00D1B2] rounded-[2px]" />
    </div>
    <span className="text-[23px] font-black text-[#1A1A1A] tracking-wider uppercase">
      LODGIFY
    </span>
  </div>
);

const Integrations = () => {
  const cards = [
    {
      id: 1,
      glow: true,
      content: (
        <Image
          src="/images/price-plus.png"
          alt="Price plus"
          width={174}
          height={46}
        />
      ),
    },
    {
      id: 2,
      glow: false,
      content: (
        <Image
          src="/images/wheel-house.png"
          alt="Wheelhouse"
          width={210}
          height={27}
        />
      ),
    },
    {
      id: 3,
      glow: false,
      content: (
        <Image
          src="/images/beyond-pricing.png"
          alt="Beyond Pricing"
          width={193}
          height={31}
        />
      ),
    },
    {
      id: 4,
      glow: false,
      content: (
        <Image
          src="/images/hostfully.png"
          alt="Hostfully"
          width={151}
          height={56}
        />
      ),
    },
    {
      id: 5,
      glow: false,
      content: (
        <Image src="/images/guesty.png" alt="Guesty" width={135} height={55} />
      ),
    },
    {
      id: 6,
      glow: false,
      content: (
        <Image
          src="/images/lodgify.png"
          alt="Lodgify"
          width={193}
          height={31}
        />
      ),
    },
    {
      id: 7,
      glow: false,
      content: (
        <Image
          src="/images/hostfully.png"
          alt="Hostfully"
          width={151}
          height={56}
        />
      ),
    },
    {
      id: 8,
      glow: false,
      content: (
        <Image src="/images/guesty.png" alt="Guesty" width={135} height={55} />
      ),
    },
    {
      id: 9,
      glow: false,
      content: (
        <Image
          src="/images/lodgify.png"
          alt="Lodgify"
          width={193}
          height={31}
        />
      ),
    },
  ];

  return (
    <section className="w-full">
      <SectionHeader
        title="Our "
        highlightedText="Tools"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />

      <div className="w-full bg-[#F6F6F6] px-6 lg:px-24 pt-16 pb-20 md:pt-24 md:pb-32 mt-32">
        <div className="w-[75%] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[34px]">
            {cards.map((card) => (
              <div
                key={card.id}
                className="flex items-center justify-center bg-white rounded-[16px] h-[140px] cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_4px_30.3px_0px_#FF8AA847]"
              >
                {card.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
