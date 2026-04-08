"use client";
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
    <div className="border-b border-primary/20 py-5">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between text-left focus:outline-none"
      >
        <span className="text-[17px] font-bold text-gray-900">{question}</span>
        <span className="ml-6 shrink-0 flex items-center justify-center">
          {isOpen ? (
            <svg
              className="h-6 w-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="mt-3 pr-10">
          <p className="text-[15px] leading-relaxed text-gray-500">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-24 mt-20">
      <div className="w-full bg-[#F9FAFB] rounded-t-[20px] py-[80px] px-6 sm:px-12 md:px-20 lg:px-[120px]">
        <div className="text-center mb-[50px]">
          <h2 className="text-3xl md:text-[34px] font-bold text-[#1A1A1A] mb-4 tracking-tight">
            Frequently asked{" "}
            <span className="text-primary font-medium">questions</span>
          </h2>
          <p className="text-[#4b5563] text-[17px]">
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
