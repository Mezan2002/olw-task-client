import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative w-full pt-16 md:pt-28 flex flex-col justify-between overflow-hidden min-h-[calc(100vh-90px)]">
      {/* Background Grid & Gradient */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #F5F5F5 1px, transparent 1px),
            linear-gradient(to bottom, #F5F5F5 1px, transparent 1px)
          `,
          backgroundSize: "95px 95px",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-[800px] h-[300px] bg-[#FFEBF0] blur-[100px] rounded-[100%] z-0 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center px-6 max-w-[1440px] mx-auto w-full pt-10 md:pt-4">
        {/* Decorative Floating Elements */}
        {/* Placed relative to the container for stable positioning */}
        <div className="pointer-events-none absolute inset-0 z-0 hidden lg:block">
          {/* Airbnb Card */}
          <div className="absolute top-[4%] left-[14%] w-[120px] h-[120px] lg:w-[140px] lg:h-[140px]">
            <Image
              src="/images/airbnb.png"
              alt="Airbnb"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Booking Card */}
          <div className="absolute top-[8%] right-[15%] w-[110px] h-[110px] lg:w-[130px] lg:h-[130px]">
            <Image
              src="/images/booking.png"
              alt="Booking"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Vrbo Card */}
          <div className="absolute bottom-[16%] left-[20%] w-[110px] h-[110px] lg:w-[130px] lg:h-[130px]">
            <Image
              src="/images/vrbo.png"
              alt="Vrbo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Tripadvisor Card */}
          <div className="absolute bottom-[14%] right-[20%] w-[120px] h-[120px] lg:w-[140px] lg:h-[140px]">
            <Image
              src="/images/tripadvisor-transparent.png"
              alt="Tripadvisor"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* 3D Floating Dots */}
          <div
            className="absolute w-[14px] h-[14px] rounded-full shadow-md"
            style={{
              top: "18%",
              left: "10%",
              background: "radial-gradient(circle at 30% 30%, white, #8B5CF6)",
            }}
          />
          <div
            className="absolute w-[16px] h-[16px] rounded-full shadow-md"
            style={{
              top: "55%",
              left: "18%",
              background: "radial-gradient(circle at 30% 30%, white, #EF4444)",
            }}
          />
          <div
            className="absolute w-[10px] h-[10px] rounded-full shadow-sm"
            style={{
              bottom: "5%",
              left: "12%",
              background: "radial-gradient(circle at 30% 30%, white, #EAB308)",
            }}
          />
          <div
            className="absolute w-[16px] h-[16px] rounded-full shadow-md"
            style={{
              top: "8%",
              left: "55%",
              background: "radial-gradient(circle at 30% 30%, white, #10B981)",
            }}
          />
          <div
            className="absolute w-[14px] h-[14px] rounded-full shadow-md"
            style={{
              top: "35%",
              right: "12%",
              background: "radial-gradient(circle at 30% 30%, white, #EAB308)",
            }}
          />
          <div
            className="absolute w-[18px] h-[18px] rounded-full shadow-md"
            style={{
              bottom: "2%",
              left: "60%",
              background: "radial-gradient(circle at 30% 30%, white, #06B6D4)",
            }}
          />
          <div
            className="absolute w-[12px] h-[12px] rounded-full shadow-md"
            style={{
              bottom: "15%",
              right: "8%",
              background: "radial-gradient(circle at 30% 30%, white, #1E3A8A)",
            }}
          />
        </div>

        <div className="max-w-[760px] mx-auto text-center relative z-10 mt-6 md:mt-12">
          <h1 className="text-5xl leading-[1.1] font-bold text-black mb-6 tracking-tight">
            Airbnb Assistants For <br className="hidden md:block" />{" "}
            <span className="text-4xl font-medium text-black">
              Property Management
            </span>
          </h1>
          <p className="text-[#374151] text-[15px] md:text-[15px] font-medium max-w-[620px] mx-auto mb-10 leading-[1.6]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <div className="flex flex-col items-center justify-center gap-6">
            <Button className="px-[28px]! py-[13px]! rounded-md! hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(237,60,106,0.25)] transition-all duration-300">
              Schedule A Meeting
            </Button>
            <Link
              href="/pricing"
              className="text-[14.5px] font-bold text-[#111827] underline underline-offset-[5px] decoration-[1.5px] hover:text-primary transition-colors"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="relative z-10 w-full mt-24 md:mt-32">
        <p className="text-center font-bold text-gray-900 text-[18px] mb-8 tracking-tight">
          Trusted by leaders in 50+ industries
        </p>
        <div className="w-full bg-[#F6F7F9] py-8 border-y border-gray-100/50">
          <div className="max-w-[1400px] mx-auto flex flex-wrap justify-center items-center gap-x-12 lg:gap-x-16 gap-y-10 px-6">
            <div className="relative h-8 w-[100px]">
              <Image
                src="/images/airbnb-full.png"
                alt="Airbnb"
                fill
                className="object-contain"
                priority={true}
              />
            </div>
            <div className="relative h-8 w-[140px]">
              <Image
                src="/images/booking-full.png"
                alt="Booking.com"
                fill
                className="object-contain"
                priority={true}
              />
            </div>
            <div className="relative h-8 w-[100px]">
              <Image
                src="/images/vrbo-full.png"
                alt="Vrbo"
                fill
                className="object-contain"
                priority={true}
              />
            </div>
            <div className="relative h-8 w-[150px]">
              <Image
                src="/images/tripadvisor-full.png"
                alt="Tripadvisor"
                fill
                className="object-contain"
                priority={true}
              />
            </div>

            <div className="relative h-8 w-[150px]">
              <Image
                src="/images/agoda.png"
                alt="Agoda"
                fill
                className="object-contain"
                priority={true}
              />
            </div>
            <div className="relative h-8 w-[150px]">
              <Image
                src="/images/expedia.png"
                alt="Expedia"
                fill
                className="object-contain"
                priority={true}
              />
            </div>
            <div className="relative h-8 w-[150px]">
              <Image
                src="/images/home-to-go.png"
                alt="Home to go"
                fill
                className="object-contain"
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
