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
          backgroundSize: "95px 95px"
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-[800px] h-[300px] bg-[#FFEBF0] blur-[100px] rounded-[100%] z-0 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center px-6 max-w-[1440px] mx-auto w-full pt-10 md:pt-4">
        {/* Decorative Floating Elements */}
        {/* Placed relative to the container for stable positioning */}
        <div className="pointer-events-none absolute inset-0 z-0 hidden lg:block">
            {/* Airbnb Card */}
            <div className="absolute top-[8%] left-[16%] w-[110px] h-[110px] bg-[#FF5A5F] rounded-[24px] rotate-[-15deg] shadow-[0_20px_40px_rgba(255,90,95,0.3)] flex flex-col items-center justify-center text-white p-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[46px] h-[46px] mb-0.5">
                   <path d="M12 2C12 2 4 8 4 14C4 18 7 22 12 22C17 22 20 18 20 14C20 8 12 2 12 2Z" />
                   <circle cx="12" cy="14" r="2.5" fill="currentColor"/>
                </svg>
                <span className="font-bold text-[16px] tracking-tight">airbnb</span>
            </div>

            {/* Booking Card */}
            <div className="absolute top-[12%] right-[16%] w-[100px] h-[100px] bg-[#003580] rounded-[24px] rotate-[15deg] shadow-[0_20px_40px_rgba(0,53,128,0.3)] flex items-center justify-center text-white">
                <span className="font-bold text-[55px] leading-none mb-1">B</span>
                <span className="w-[14px] h-[14px] rounded-full bg-[#00B2FF] self-end mb-[22px] ml-[2px]"></span>
            </div>

            {/* Vrbo Card */}
            <div className="absolute bottom-[10%] left-[24%] w-[100px] h-[100px] bg-[#000048] rounded-[24px] rotate-[-20deg] shadow-[0_20px_40px_rgba(0,0,72,0.3)] flex items-center justify-center">
                <svg viewBox="0 0 32 32" className="w-[50px] h-[50px]" fill="none">
                   <path d="M4 4 L16 26 L28 4" stroke="#4C8DF5" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/>
                   <path d="M8 4 L16 19 L24 4" stroke="#00D2B4" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/>
                   <path d="M12 4 L16 11 L20 4" stroke="#F5333F" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>

            {/* Tripadvisor Card */}
            <div className="absolute bottom-[12%] right-[22%] w-[110px] h-[110px] bg-[#34E0A1] rounded-[26px] rotate-[18deg] shadow-[0_20px_40px_rgba(52,224,161,0.3)] flex flex-col items-center justify-center text-black">
                <svg viewBox="0 0 40 40" fill="none" className="w-[65px] h-[65px]">
                   <circle cx="14" cy="20" r="6" stroke="black" strokeWidth="4" fill="white"/>
                   <circle cx="26" cy="20" r="6" stroke="black" strokeWidth="4" fill="white"/>
                   <circle cx="14" cy="20" r="2" fill="black"/>
                   <circle cx="26" cy="20" r="2" fill="black"/>
                   <path d="M18 20L20 22L22 20" stroke="black" strokeWidth="2" fill="black"/>
                   <path d="M12 12 Q20 4 28 12" stroke="black" strokeWidth="3" fill="none"/>
                   <path d="M6 22 Q12 32 20 32 Q28 32 34 22" stroke="black" strokeWidth="3" fill="none"/>
                </svg>
            </div>

            {/* 3D Floating Dots */}
            <div className="absolute w-[14px] h-[14px] rounded-full shadow-md" style={{top: "18%", left: "10%", background: "radial-gradient(circle at 30% 30%, white, #8B5CF6)"}} />
            <div className="absolute w-[16px] h-[16px] rounded-full shadow-md" style={{top: "55%", left: "18%", background: "radial-gradient(circle at 30% 30%, white, #EF4444)"}} />
            <div className="absolute w-[10px] h-[10px] rounded-full shadow-sm" style={{bottom: "5%", left: "12%", background: "radial-gradient(circle at 30% 30%, white, #EAB308)"}} />
            <div className="absolute w-[16px] h-[16px] rounded-full shadow-md" style={{top: "8%", left: "55%", background: "radial-gradient(circle at 30% 30%, white, #10B981)"}} />
            <div className="absolute w-[14px] h-[14px] rounded-full shadow-md" style={{top: "35%", right: "12%", background: "radial-gradient(circle at 30% 30%, white, #EAB308)"}} />
            <div className="absolute w-[18px] h-[18px] rounded-full shadow-md" style={{bottom: "2%", left: "60%", background: "radial-gradient(circle at 30% 30%, white, #06B6D4)"}} />
            <div className="absolute w-[12px] h-[12px] rounded-full shadow-md" style={{bottom: "15%", right: "8%", background: "radial-gradient(circle at 30% 30%, white, #1E3A8A)"}} />
        </div>

        <div className="max-w-[760px] mx-auto text-center relative z-10 mt-6 md:mt-12">
          <h1 className="text-[42px] md:text-[54px] lg:text-[60px] leading-[1.1] font-bold text-black mb-6 tracking-tight">
            Airbnb Assistants For <br className="hidden md:block" /> Property Management
          </h1>
          <p className="text-[#374151] text-[15px] md:text-[15px] font-medium max-w-[620px] mx-auto mb-10 leading-[1.6]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <div className="flex flex-col items-center justify-center gap-6">
            <Button className="!px-[28px] !py-[13px] !rounded-md hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(237,60,106,0.25)] transition-all duration-300">
              Schedule A Meeting
            </Button>
            <Link href="/pricing" className="text-[14.5px] font-bold text-[#111827] underline underline-offset-[5px] decoration-[1.5px] hover:text-primary transition-colors">
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
          <div className="max-w-[1300px] mx-auto flex flex-wrap justify-center items-center gap-x-12 lg:gap-x-16 gap-y-10 px-6 lg:px-12">
            <div className="relative h-8 w-[100px]">
              <Image src="/images/airbnb.png" alt="Airbnb" fill className="object-contain" priority={true} />
            </div>
            <div className="relative h-8 w-[140px]">
              <Image src="/images/booking.png" alt="Booking.com" fill className="object-contain" priority={true} />
            </div>
            <div className="relative h-8 w-[100px]">
              <Image src="/images/vrbo.png" alt="Vrbo" fill className="object-contain" priority={true} />
            </div>
            <div className="relative h-8 w-[150px]">
              <Image src="/images/tripadvisor.png" alt="Tripadvisor" fill className="object-contain" priority={true} />
            </div>
            
            {/* Missing Logos Mocks */}
            <div className="flex flex-col items-center justify-center font-sans opacity-80 mt-1">
              <span className="text-[25px] tracking-wider text-gray-600 lowercase leading-none mb-1">agoda</span>
              <div className="flex gap-[4px] mt-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#EF4444]"></span>
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]"></span>
                  <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
                  <span className="w-2 h-2 rounded-full bg-[#8B5CF6]"></span>
                  <span className="w-2 h-2 rounded-full bg-[#06B6D4]"></span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 opacity-90">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="bg-[#FFC50A] rounded-[4px] p-1">
                 <path d="M7 17L17 7M17 7H9M17 7V15" stroke="#000048" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                 <circle cx="7" cy="17" r="1.5" fill="#000048"/>
              </svg>
              <span className="font-bold text-[#000048] text-[25px] tracking-tight">Expedia</span>
            </div>

            <div className="flex items-center opacity-90">
               <span className="font-black text-black leading-[0.85] text-[23px] tracking-tighter text-left">home<br/>togo_</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
