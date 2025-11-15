// src/components/TraitsSection.tsx
import Image from "next/image";

import { motion } from "framer-motion";
import React from "react";
import { TRAITS_PAGE } from "@/content/user-data";
import { TraitsPage } from "@/types/traints.t";

type Props = {
  data?: TraitsPage;
};

export default function TraitsSection({ data = TRAITS_PAGE }: Props) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
 
        <div className="md:col-span-7 relative">
         
          <div className="hidden md:block absolute -left-14 top-0 bottom-0">
            <div className="w-0.5 h-full bg-gray-200 mx-auto" />
            <div
              className="w-3 h-3 rounded-full bg-white border-2 border-blue-200 absolute -left-1.5 top-4"
              aria-hidden
            />
          </div>

          <div className="mt-2 md:mt-0">
            <p className="text-sm text-gray-500 mb-4">{data.date}</p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">{data.heading}</h2>
            <p className="text-gray-700 mb-4 max-w-prose">{data.intro}</p>
            {data.subIntro && <p className="text-gray-700 mb-6">{data.subIntro}</p>}

            <ol className="space-y-6">
              {data.items.map((it, idx) => (
                <li key={it.title} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <span className="text-blue-600 font-semibold text-lg">{idx + 1}.</span>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900">{it.title}</h3>
                    <p className="text-gray-600 mt-1 max-w-prose">{it.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Right column: image card */}
        <div className="md:col-span-5 flex justify-center md:justify-end items-start">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="w-full max-w-sm rounded-xl overflow-hidden shadow-lg"
            aria-hidden={false}
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={data.image}
                alt="attention to detail"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                priority
              />
              {/* center overlay text (visually similar to screenshot) */}
              <div className="absolute inset-0 flex items-center justify-center px-4">
                <h3
                  className="text-3xl md:text-4xl font-extrabold text-black text-center drop-shadow-sm"
                  style={{ lineHeight: 1.05 }}
                >
                  Attention to
                  <br />
                  detail
                </h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
