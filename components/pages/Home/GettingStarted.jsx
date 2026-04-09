import SectionHeader from "@/components/shared/SectionHeader";
import { ConnectUser, Support } from "@/components/ui/customIcons";
import AddUser from "@/components/ui/customIcons/AddUser";
import React from "react";

const steps = [
  {
    num: "01",
    title: (
      <>
        Add requirements <br /> & sign up today
      </>
    ),
    icon: <AddUser />,
  },
  {
    num: "02",
    title: (
      <>
        Connect with your CSM & <br /> onboarding team
      </>
    ),
    icon: <ConnectUser />,
  },
  {
    num: "03",
    title: (
      <>
        Meet your STR <br /> Assistant next week
      </>
    ),
    icon: <Support />,
  },
];

const GettingStarted = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-24 py-16 mb-6">
      <SectionHeader
        title="Getting Started is "
        highlightedText="Easy"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />

      <div className="mt-[42px] w-full md:w-[80%] mx-auto flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-14 lg:gap-8 xl:gap-[50px] pt-4">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center w-full max-w-[340px]"
          >
            <div className="relative w-full h-[180px] md:h-[220px] rounded-[9px] border-2 border-[#FDEBF0] bg-white flex items-center justify-center">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 md:-top-8 md:-left-8 w-14 h-14 md:size-[76px] rounded-full border-[5px] border-primary bg-white flex items-center justify-center text-xl md:text-3xl font-medium text-black">
                {step.num}
              </div>
              <div className="flex items-center justify-center text-primary">
                {step.icon}
              </div>
            </div>
            <p className="mt-8 text-center text-xl font-semibold text-black leading-normal px-4">
              {step.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GettingStarted;
