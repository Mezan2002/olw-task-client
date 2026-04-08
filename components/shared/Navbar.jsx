"use client";

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
  return (
    <nav className="w-full bg-white shadow-[0px_4px_62px_0px_#FAC4D2A1]">
      <div className="mx-auto flex h-[90px] max-w-[1440px] items-center justify-between px-6 lg:px-24">
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
      </div>
    </nav>
  );
};

export default Navbar;
