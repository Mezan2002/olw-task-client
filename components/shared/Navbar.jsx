"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Button from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Resources", href: "/resources" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-[0px_4px_62px_0px_#FAC4D2A1] sticky top-0 z-50">
      <div className="mx-auto flex h-[60px] md:h-[90px] max-w-[1440px] items-center justify-between px-6 lg:px-24">
        {/* Logo */}
        <div className="flex flex-1 justify-start">
          <Image
            src="/icons/google.png"
            alt="Google Logo"
            height={1000}
            width={1000}
            className="h-11 w-auto object-contain"
          />
        </div>
        {/* Menu items */}
        <ul className="hidden md:flex flex-1 items-center justify-center gap-6 lg:gap-10 mt-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.label} className={isActive ? "relative" : ""}>
                <Link
                  href={link.href}
                  className={`inline-block pb-1.5 text-lg font-normal transition-colors duration-200 ${
                    isActive
                      ? "group font-bold! relative text-primary"
                      : "text-dark-gray hover:text-primary/80"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute left-0 bottom-0 h-px w-full rounded-full bg-primary"></span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* CTA Button */}
        <div className="hidden md:flex flex-1 justify-end">
          <Button>Schedule A Meeting</Button>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="flex md:hidden flex-1 justify-end">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-900 focus:outline-none focus:text-primary transition-colors p-2"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-[90px] left-0 w-full bg-white shadow-[0px_20px_50px_-20px_rgba(0,0,0,0.15)] border-t border-[#FAC4D2A1] border-opacity-30 flex flex-col items-center py-8 gap-6 z-40 transition-all duration-300 origin-top ${
          isMobileMenuOpen
            ? "scale-y-100 opacity-100 visible"
            : "scale-y-0 opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col items-center justify-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`inline-block text-xl font-semibold transition-colors duration-200 ${
                    isActive
                      ? "text-primary"
                      : "text-dark-gray hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <Button
          onClick={() => setIsMobileMenuOpen(false)}
          className="px-8! py-3.5! mt-2 min-w-[200px]"
        >
          Schedule A Meeting
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
