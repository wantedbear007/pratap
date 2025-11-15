import React from "react";
import Image from "next/image";
import { FOOTER_DATA } from "@/content/user-data";

export default function Footer() {
  return (
    <footer className="w-full relative overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h2 className="text-4xl font-semibold mb-4">{FOOTER_DATA.title}</h2>
          <p className="text-lg text-gray-600 max-w-lg">
            {FOOTER_DATA.description}
          </p>

          <a
            href={`mailto:${FOOTER_DATA.email}`}
            className="text-xl mt-4 block text-blue-600 hover:underline"
          >
            {FOOTER_DATA.email}
          </a>
        </div>

        <div className="flex space-x-8 text-lg mt-10 md:mt-0">
          {FOOTER_DATA.socials.map((social) => (
            <a key={social.name} href={social.url} className="hover:underline">
              {social.name}
            </a>
          ))}
        </div>
      </div>

      <div className="w-full h-[260px] relative">
        <Image
          src={FOOTER_DATA.image}
          alt="Footer Illustration"
          fill
          className="object-cover object-bottom"
          priority
        />
      </div>
    </footer>
  );
}
