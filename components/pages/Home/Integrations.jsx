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
      <span className="text-[12px] text-[#2E72D2] font-semibold leading-[1]">
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
        <div className="flex items-center">
          <svg width="38" height="38" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="14" fill="#EF4444" />
            <path
              d="M13 11L8 16L13 21M19 11L24 16L19 21"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[23px] tracking-tight text-gray-900 ml-[10px]">
            <span className="font-semibold">Price</span>
            <span className="font-normal text-[#4b5563]">Labs</span>
          </span>
        </div>
      ),
    },
    {
      id: 2,
      glow: false,
      content: (
        <div className="flex items-center">
          <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
            <path d="M4 4H24L14 22L4 4Z" fill="#A835C4" />
            <circle cx="14" cy="9" r="2.5" fill="#1A1A1A" />
          </svg>
          <span className="text-[22px] font-medium text-[#1A1A1A] ml-2 tracking-tight">
            Wheelhouse
          </span>
        </div>
      ),
    },
    {
      id: 3,
      glow: false,
      content: (
        <div className="flex items-center">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 9.5V22H22V9.5L12 2Z" fill="#75C9C8" />
            <path
              d="M11.5 14L15.5 10M11 10.5L15 14.5"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-[21px] text-[#1A1A1A] ml-3">
            <span className="font-medium text-[#111827]">Beyond</span>{" "}
            <span className="text-[#6B7280] font-normal tracking-tight">
              Pricing
            </span>
          </span>
        </div>
      ),
    },
    { id: 4, glow: false, content: <HostfullyLogo /> },
    { id: 5, glow: false, content: <GuestyLogo /> },
    { id: 6, glow: false, content: <LodgifyLogo /> },
    { id: 7, glow: false, content: <HostfullyLogo /> },
    { id: 8, glow: false, content: <GuestyLogo /> },
    { id: 9, glow: false, content: <LodgifyLogo /> },
  ];

  return (
    <section className="w-full">
      {/* Header section with white background */}
      <div className="w-full bg-white px-6 pt-16 pb-12 md:pt-24 md:pb-16 text-center">
        <h2 className="text-3xl md:text-[38px] font-bold text-[#1A1A1A] mb-5 tracking-tight">
          Our <span className="text-primary font-semibold">Tools</span>
        </h2>
        <p className="text-[#374151] text-[14px] md:text-[15px] font-medium max-w-[800px] mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* Grid section with light gray background */}
      <div className="w-full bg-[#F6F7F9] px-6 lg:px-24 pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="max-w-[1150px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[34px]">
            {cards.map((card) => (
              <div
                key={card.id}
                className={`flex items-center justify-center bg-white rounded-[16px] h-[130px] md:h-[135px] cursor-pointer transition-transform duration-300 hover:-translate-y-1 ${
                  card.glow
                    ? "shadow-[0_20px_50px_-15px_rgba(237,60,106,0.18)]"
                    : "shadow-[0_8px_30px_-12px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)]"
                }`}
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
