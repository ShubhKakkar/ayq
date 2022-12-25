import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-[80px] py-8 flex items-center justify-between max-w-7xl mx-auto">
      <p className="text-sm font-semibold text-[#b2b8c8] uppercase tracking-widest">@2022-AyQ Beverages. All Rights Reserved</p>
      <Link href="/privacy" className="text-sm font-semibold text-[#b2b8c8] hover:text-dark duration-300 ease-in-out uppercase tracking-widest">Privacy Policy</Link>
    </div>
  );
};

export default Footer;
