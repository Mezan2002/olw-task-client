"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import SectionHeader from "@/components/shared/SectionHeader";
import { Star } from "@/components/ui/customIcons";

const ReviewCard = ({ active, name, text, image, bgColor, stars, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`p-8 md:p-[42px] rounded-[24px] flex flex-col md:flex-row items-center gap-6 md:gap-7 shrink-0 w-[340px] md:w-[640px] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer snap-center ${
        active
          ? "bg-white shadow-[0_25px_65px_-15px_rgba(0,0,0,0.08)] scale-100 z-20"
          : "bg-[#FAFAFA] opacity-80 scale-[0.92] z-0 hover:opacity-100"
      }`}
    >
      <div
        className={`w-[85px] h-[85px] size-[100px] shrink-0 rounded-full overflow-hidden flex items-center justify-center ${bgColor}`}
      >
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col text-center md:text-left flex-1">
        <h4 className="font-extrabold text-[18px] md:text-[24px] text-[#1A1A1A] mb-1.5 md:mb-2">
          {name}
        </h4>
        <p className="text-[#374151] font-medium text-[14px] md:text-[15px] leading-[1.6] mb-4 md:mb-5">
          {text}
        </p>
        <div className="flex justify-center md:justify-start gap-1.5">
          {[...Array(stars)].map((_, i) => (
            <Star key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Reviews = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);

  const reviewsData = [
    {
      name: "Jenny Wilson",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/user6.png",
      bgColor: "bg-[#1E293B]",
      stars: 4,
    },
    {
      name: "Esther Howard",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/user4.png",
      bgColor: "bg-[#FFC554]",
      stars: 4,
    },
    {
      name: "Robert Fox",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/user5.png",
      bgColor: "bg-[#8BCBF1]",
      stars: 4,
    },
  ];

  // Set initial scroll to middle item
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      setTimeout(() => {
        const itemWidth =
          typeof window !== "undefined" && window.innerWidth < 768 ? 340 : 640;
        const targetScroll =
          container.scrollWidth / 2 - container.clientWidth / 2;
        container.scrollTo({ left: targetScroll, behavior: "smooth" });
      }, 100);
    }
  }, []);

  // Update active card on horizontal scroll natively
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const container = containerRef.current;
      const centerPos = container.scrollLeft + container.clientWidth / 2;

      let closestIdx = activeIndex;
      let minDistance = Infinity;

      // Children matching review cards are indices 1, 2, 3 (0 and 4 are spacer divs)
      Array.from(container.children).forEach((child, idx) => {
        const childCenter = child.offsetLeft + child.clientWidth / 2;
        const dist = Math.abs(childCenter - centerPos);
        if (dist < minDistance && idx > 0 && idx <= reviewsData.length) {
          minDistance = dist;
          closestIdx = idx - 1;
        }
      });

      if (closestIdx !== activeIndex) {
        setActiveIndex(closestIdx);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll, { passive: true });
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [activeIndex, reviewsData.length]);

  return (
    <section className="w-full pt-20 md:pt-32 pb-16 overflow-hidden bg-white">
      <SectionHeader
        title="Check Our Clients "
        highlightedText="Review"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />

      <div className="w-full relative mt-16">
        {/* Transparent Edge White Bleed Masks */}
        <div className="absolute top-0 left-0 w-[80px] md:w-[25vw] max-w-[350px] h-full bg-linear-to-r from-white via-white/80 to-transparent z-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[80px] md:w-[25vw] max-w-[350px] h-full bg-linear-to-l from-white via-white/80 to-transparent z-30 pointer-events-none" />

        {/* Scroll Container */}
        <div
          ref={containerRef}
          className="flex items-center gap-5 md:gap-8 overflow-x-auto snap-x snap-mandatory py-[30px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] scroll-smooth w-full px-0"
        >
          {/* Spatial padding divs to allow first and last elements to securely snap to the absolute center of viewport */}
          <div
            className="shrink-0 w-[calc(50vw-170px)] md:w-[calc(50vw-320px)]"
            aria-hidden="true"
          />

          {reviewsData.map((review, i) => (
            <ReviewCard
              key={i}
              active={activeIndex === i}
              name={review.name}
              text={review.text}
              image={review.image}
              bgColor={review.bgColor}
              stars={review.stars}
              onClick={() => {
                if (containerRef.current) {
                  const cardWidth = window.innerWidth < 768 ? 340 : 640;
                  const gap = window.innerWidth < 768 ? 20 : 32;
                  const targetScroll = i * (cardWidth + gap);
                  containerRef.current.scrollTo({
                    left: targetScroll,
                    behavior: "smooth",
                  });
                }
              }}
            />
          ))}

          <div
            className="shrink-0 w-[calc(50vw-170px)] md:w-[calc(50vw-320px)]"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
