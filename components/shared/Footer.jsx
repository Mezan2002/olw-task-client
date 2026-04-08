import Image from "next/image";
import Link from "next/link";
import {
  FacebookLogo,
  GitHubLogo,
  InstagramLogo,
  TwitterLogo,
} from "@/components/ui/customIcons";

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Features", href: "/features" },
      { name: "Works", href: "/works" },
      { name: "Career", href: "/career" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "Customer Support", href: "/support" },
      { name: "Delivery Details", href: "/delivery" },
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Free eBooks", href: "/ebooks" },
      { name: "Development Tutorial", href: "/tutorial" },
      { name: "How to - Blog", href: "/blog" },
      { name: "Youtube Playlist", href: "/youtube" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-100 bg-white">
      {/* Top area */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-col justify-between gap-12 px-6 py-20 lg:flex-row lg:gap-0 lg:px-24">
        {/* Left column */}
        <div className="flex max-w-[340px] flex-col gap-5">
          <Image
            src="/icons/google.png"
            alt="Google Logo"
            width={120}
            height={40}
            className="h-10 w-auto object-contain object-left"
          />
          <p className="text-sm leading-5 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            dictum aliquet accumsan porta lectus ridiculus in mattis. Netus
            sodales in volutpat ullamcorper amet adipiscing fermentum.
          </p>
          <div className="mt-5 flex items-center gap-6">
            <TwitterLogo />
            <FacebookLogo />
            <InstagramLogo />
            <GitHubLogo />
          </div>
        </div>

        {/* Right columns */}
        <div className="flex flex-1 flex-wrap justify-between gap-10 lg:max-w-[700px] lg:flex-nowrap pt-2">
          {footerLinks.map((section) => (
            <div key={section.title} className="flex flex-col gap-6">
              <h3 className="text-[16px] font-bold text-gray-900">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-[18px] text-[14px] text-gray-900 font-medium">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-[#230B41] py-5">
        <p className="text-center text-[12px] md:text-[13px] text-[#D1D5DB] tracking-wide">
          © Copyright {new Date().getFullYear()}, All Rights Reserved by XYZ
        </p>
      </div>
    </footer>
  );
};

export default Footer;
