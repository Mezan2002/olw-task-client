import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="w-full bg-white shadow-[0px_4px_62px_0px_#FAC4D2A1]">
            <div className="mx-auto flex h-[84px] max-w-[1440px] items-center justify-between px-6 lg:px-10">
                <div className="flex flex-1 justify-start">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
                        alt="Google Logo" 
                        className="h-8 w-auto object-contain" 
                    />
                </div>
                
                <ul className="hidden md:flex flex-[2] items-center justify-center gap-6 lg:gap-10">
                    <li className="relative">
                        <Link href="/" className="group relative inline-block pb-1.5 text-[15px] font-medium text-[#F73565] transition-colors duration-200">
                            Home
                            <span className="absolute left-0 bottom-0 h-[2px] w-full rounded-full bg-[#F73565]"></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="inline-block pb-1.5 text-[15px] font-medium text-gray-600 transition-colors duration-200 hover:text-[#F73565]">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/services" className="inline-block pb-1.5 text-[15px] font-medium text-gray-600 transition-colors duration-200 hover:text-[#F73565]">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link href="/pricing" className="inline-block pb-1.5 text-[15px] font-medium text-gray-600 transition-colors duration-200 hover:text-[#F73565]">
                            Pricing
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog" className="inline-block pb-1.5 text-[15px] font-medium text-gray-600 transition-colors duration-200 hover:text-[#F73565]">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link href="/resources" className="inline-block pb-1.5 text-[15px] font-medium text-gray-600 transition-colors duration-200 hover:text-[#F73565]">
                            Resources
                        </Link>
                    </li>
                </ul>

                <div className="hidden md:flex flex-1 justify-end">
                    <button className="group flex cursor-pointer items-center gap-2.5 rounded-lg bg-gradient-to-r from-[#FF4B7A] to-[#F01E53] px-7 py-3 text-[15px] font-semibold text-white shadow-[0_4px_14px_rgba(244,43,94,0.3)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(244,43,94,0.3)] active:translate-y-0">
                        Schedule A Meeting
                        <svg className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;