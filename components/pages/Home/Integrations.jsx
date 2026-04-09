import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";

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

      <div className="w-full bg-[#F6F6F6] px-6 lg:px-24 pt-16 pb-20 md:pt-24 md:pb-32 mt-16 md:mt-32">
        <div className="w-full md:w-[85%] lg:w-[75%] mx-auto">
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
