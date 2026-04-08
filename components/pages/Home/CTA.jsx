import React from "react";
import Button from "@/components/ui/button";
import Image from "next/image";

const CTA = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-24 py-16 mt-4">
      <div className="w-full bg-[#F9FAFB] rounded-2xl flex flex-col items-center justify-center py-8 px-6 sm:px-12">
        {/* Avatars group */}
        <div className="flex items-baseline justify-center mb-6 -space-x-5">
          <div className="rounded-full border-2 border-white bg-gray-200 overflow-hidden relative z-0 shadow-sm">
            <Image
              src="/images/user3.png"
              alt="Avatar 1"
              width={48}
              height={48}
              className="w-full h-full object-cover bg-[#ABB677]"
            />
          </div>
          <div className="rounded-full border-2 border-white bg-gray-200 overflow-hidden relative z-10 shadow-sm">
            <Image
              src="/images/user1.png"
              alt="Avatar 1"
              width={56}
              height={56}
              className="w-full h-full object-cover bg-[#C7B9DA]"
            />
          </div>
          <div className="rounded-full border-2 border-white bg-gray-200 overflow-hidden relative z-0 shadow-sm">
            <Image
              src="/images/user2.png"
              alt="Avatar 1"
              width={48}
              height={48}
              className="w-full h-full object-cover bg-[#D9B9BB]"
            />
          </div>
        </div>

        <h2 className="text-gray-900 text-xl font-bold mb-2">
          Still have Questions?
        </h2>

        <p className="text-[#9C9C9C] text-lg mb-8 text-center">
          Can&apos;t find the answer you&apos;re looking for? Please chat to our
          friendly team.
        </p>

        <Button
          icon={<span className="hidden"></span>}
          className="py-2.5! px-4.5! bg-primary text-white text-base! font-medium! rounded-lg!"
        >
          Get in touch
        </Button>
      </div>
    </section>
  );
};

export default CTA;
