import Image from "next/image";

const ReviewCard = ({ active, name, text, image, bgColor, stars }) => {
  return (
    <div
      className={`p-7 md:p-9 rounded-[20px] flex gap-5 shrink-0 w-[380px] md:w-[460px] transition-all duration-300 ${
        active
          ? "bg-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] scale-[1.02] z-10"
          : "bg-[#F8F9FA] scale-100 z-0"
      }`}
    >
      <div
        className={`w-[75px] h-[75px] md:w-[90px] md:h-[90px] shrink-0 rounded-full overflow-hidden ${bgColor}`}
      >
        <Image
          src={image}
          alt={name}
          width={90}
          height={90}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h4 className="font-bold text-[17px] md:text-[19px] text-[#1A1A1A] mb-1.5">
          {name}
        </h4>
        <p className="text-[#4b5563] text-[13px] md:text-[14px] leading-[1.6] mb-3 pr-2">
          {text}
        </p>
        <div className="flex gap-1.5">
          {[...Array(stars)].map((_, i) => (
            <svg
              key={i}
              width="13"
              height="13"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 0L7.854 3.757L12 4.36L9 7.282L9.708 11.411L6 9.46L2.292 11.411L3 7.282L0 4.36L4.146 3.757L6 0Z"
                fill="#FBBF24"
              />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
};

const Reviews = () => {
  const reviewsData = [
    {
      name: "Jenny Wilson",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/user1.png",
      bgColor: "bg-[#1E293B]",
      stars: 4,
    },
    {
      name: "Esther Howard",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/user2.png",
      bgColor: "bg-[#FFC554]",
      stars: 4,
    },
    {
      name: "Robert Fox",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/user3.png",
      bgColor: "bg-[#8BCBF1]",
      stars: 4,
    },
  ];

  return (
    <section className="w-full pt-16 md:pt-24 pb-10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-24 mb-14 text-center">
        <h2 className="text-3xl md:text-[36px] font-bold text-[#1A1A1A] mb-5 tracking-tight">
          Check Our Clients <span className="text-primary font-medium">Review</span>
        </h2>
        <p className="text-[#4b5563] text-[14px] md:text-[15px] max-w-[800px] mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="w-full relative mt-8 pb-10">
        <div className="flex justify-start xl:justify-center items-center gap-6 px-6 md:px-10 overflow-x-auto snap-x snap-mandatory py-4 hide-scrollbar">
          {reviewsData.map((review, i) => (
            <div key={i} className="snap-center">
              <ReviewCard
                active={i === 1}
                name={review.name}
                text={review.text}
                image={review.image}
                bgColor={review.bgColor}
                stars={review.stars}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
