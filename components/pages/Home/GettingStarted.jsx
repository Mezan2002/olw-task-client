import React from "react";

const MiniUser = ({ cx, cy }) => (
  <g transform={`translate(${cx}, ${cy})`}>
    <circle cx="0" cy="-3" r="3.5" stroke="#1A1A1A" strokeWidth="2.5" />
    <path
      d="M-6.5 6.5C-6.5 3 -3 1.5 0 1.5C3 1.5 6.5 3 6.5 6.5"
      stroke="#1A1A1A"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </g>
);

const steps = [
  {
    num: "01",
    title: (
      <>
        Add requirements <br /> & sign up today
      </>
    ),
    icon: (
      <svg
        className="w-16 h-16 md:w-20 md:h-20"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="24" cy="24" r="8.5" stroke="#1A1A1A" strokeWidth="2.5" />
        <path
          d="M8 52C8 40 14 36 24 36C34 36 40 40 40 52"
          stroke="#1A1A1A"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M52 38V22M44 30H60"
          stroke="#ED3C6A"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    num: "02",
    title: (
      <>
        Connect with your CSM & <br /> onboarding team
      </>
    ),
    icon: (
      <svg
        className="w-16 h-16 md:w-[84px] md:h-[84px] -ml-2"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 39 17 Q 49 17 49 27"
          stroke="#ED3C6A"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M 49 39 Q 49 49 39 49"
          stroke="#ED3C6A"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M 25 49 Q 15 49 15 39"
          stroke="#ED3C6A"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M 15 27 Q 15 17 25 17"
          stroke="#ED3C6A"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <MiniUser cx={32} cy={10} />
        <MiniUser cx={54} cy={32} />
        <MiniUser cx={32} cy={54} />
        <MiniUser cx={10} cy={32} />
      </svg>
    ),
  },
  {
    num: "03",
    title: (
      <>
        Meet your STR <br /> Assistant next week
      </>
    ),
    icon: (
      <svg
        className="w-16 h-16 md:w-[72px] md:h-[72px]"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Band */}
        <path
          d="M16 38V24C16 15 23 8 32 8C41 8 48 15 48 24V38"
          stroke="#1A1A1A"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Earpads (Pink rectangles with rounded corners) */}
        <rect
          x="12"
          y="32"
          width="8"
          height="16"
          rx="4"
          stroke="#ED3C6A"
          strokeWidth="2.5"
        />
        <rect
          x="44"
          y="32"
          width="8"
          height="16"
          rx="4"
          stroke="#ED3C6A"
          strokeWidth="2.5"
        />
        {/* Mic arm */}
        <path
          d="M48 48C48 54 42 56 36 56H32"
          stroke="#1A1A1A"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M32 54v4"
          stroke="#1A1A1A"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Plus center */}
        <path
          d="M32 20V32M26 26H38"
          stroke="#ED3C6A"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const GettingStarted = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-24 py-16 mb-6">
      <div className="mb-16 md:mb-24 text-center">
        <h2 className="text-3xl md:text-[38px] font-bold text-[#111827] mb-5 tracking-tight">
          Getting Started is <span className="text-primary font-medium">Easy</span>
        </h2>
        <p className="text-[#374151] text-[14px] md:text-[15px] font-medium max-w-[800px] mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-14 lg:gap-8 xl:gap-[50px] pt-4">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center w-full max-w-[340px]">
            {/* Card Box */}
            <div className="relative w-full h-[180px] md:h-[220px] rounded-[16px] border border-primary/20 bg-white flex items-center justify-center">
              {/* Floating Circle Badge */}
              <div className="absolute -top-7 -left-7 md:-top-8 md:-left-8 w-14 h-14 md:w-16 md:h-16 rounded-full border-[3px] border-primary bg-white flex items-center justify-center text-xl md:text-2xl font-bold text-[#111827]">
                {step.num}
              </div>
              {/* Line Art Icon Graphic */}
              <div className="flex items-center justify-center text-primary">
                {step.icon}
              </div>
            </div>
            {/* External Label */}
            <p className="mt-8 md:mt-10 text-center text-[15.5px] md:text-[17px] font-bold text-[#1A1A1A] leading-relaxed px-4">
              {step.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GettingStarted;
