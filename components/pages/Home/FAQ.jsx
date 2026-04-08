"use client";
import { RoundedMinus, RoundedPlus } from "@/components/ui/customIcons";
import React, { useState } from "react";

const faqs = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time from your account settings.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "You can cancel your subscription at any time. Your cancellation will take effect at the end of the current paid term.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, you can add custom information to your invoices such as your company name, VAT number, and address.",
  },
  {
    question: "How does billing work?",
    answer:
      "We offer both monthly and annual billing options. Payments are processed securely via Stripe.",
  },
  {
    question: "How do I change my account email?",
    answer:
      "You can change your account email from the profile settings page after logging in.",
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b last:border-b-0 border-primary/20 py-5">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between text-left focus:outline-none group"
      >
        <span className="text-lg font-bold text-black group-hover:text-primary transition-colors duration-300">
          {question}
        </span>
        <span
          className={`ml-6 shrink-0 flex items-center justify-center transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
        >
          {isOpen ? <RoundedMinus /> : <RoundedPlus />}
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 mt-3"
            : "grid-rows-[0fr] opacity-0 mt-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pr-10 pb-1">
            <p className="text-base leading-relaxed text-[#606060]">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-24 mt-8">
      <div className="w-full bg-[#F9FAFB] rounded-2xl py-20 px-6 sm:px-12 md:px-20 lg:px-[120px]">
        <div className="text-center mb-10">
          <h4 className="text-4xl font-semibold text-gray-900 mb-5">
            Frequently asked{" "}
            <span className="text-4xl text-primary font-semibold">
              questions
            </span>
          </h4>
          <p className="text-black text-xl">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className="max-w-[700px] mx-auto flex flex-col">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
