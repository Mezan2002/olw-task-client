import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";
import React from "react";

const serviceData = [
  {
    title: "Manage Property Listings",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: (
      <Image src="/images/listing.png" alt="Listing" width={68} height={68} />
    ),
  },
  {
    title: "Manage Customer Bookings",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: (
      <Image src="/images/bookings.png" alt="Booking" width={68} height={68} />
    ),
  },
  {
    title: "Schedule House Cleaning",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: (
      <Image src="/images/cleaning.png" alt="Cleaning" width={68} height={68} />
    ),
  },
  {
    title: "Monitor Guest Reviews",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: (
      <Image src="/images/reviews.png" alt="Review" width={68} height={68} />
    ),
  },
  {
    title: "Track & Report Expenses",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: (
      <Image src="/images/expenses.png" alt="Report" width={68} height={68} />
    ),
  },
  {
    title: "Guest Inquiry & Support",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: (
      <Image src="/images/support.png" alt="Support" width={68} height={68} />
    ),
  },
];

const Services = () => {
  return (
    <section className="w-full bg-white px-6 lg:px-24 py-16 md:py-24">
      <div>
        <SectionHeader
          title="Our "
          highlightedText="Service"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mx-auto max-w-[1440px]">
          {serviceData.map((service, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-start hover:bg-white hover:border-transparent rounded-[13px] p-8 border border-[#FAC4D2] transition-all duration-300 hover:shadow-[0px_4px_90.3px_0px_#D7CDCF78] hover:-translate-y-1"
            >
              <div className="mb-8">{service.icon}</div>

              <h3 className="text-[22px] md:text-2xl font-bold text-[#1E1E1E] leading-[1.3] mb-3.5 pr-4">
                {service.title}
              </h3>

              <p className="text-black text-sm font-medium leading-relaxed mb-9 grow">
                {service.desc}
              </p>

              <button className="px-[25px] py-[8px] bg-white text-primary border border-[#FADBDC] rounded-full font-semibold text-[14px] tracking-wide transition-colors duration-300 group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
