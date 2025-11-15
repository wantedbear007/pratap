import Image from "next/image";
import { motion } from "framer-motion";
import { TAG_LINES, USER_DATA } from "@/content/user-data";
import { HighlightText } from "../enhancers/highlight-text";

export default function HeroSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-20 px-6 bg-white">
      {/* Name */}
      <h1 className="text-4xl font-semibold mb-10 w-full max-w-5xl">
        {USER_DATA.name}
      </h1>

      {/* Greeting card */}
      <div className="flex items-center gap-4 mb-10 w-full max-w-5xl">
        <Image
          src="/vercel.svg"
          alt="profile"
          width={72}
          height={72}
          className="rounded-full object-cover"
        />
        <div className="px-6 py-3 rounded-xl shadow-md bg-white text-lg font-medium">
          {USER_DATA.prefix}
        </div>
      </div>

      {/* Heading text */}
      <HighlightText
        setence={TAG_LINES.heroSection.sentence}
        highlights={TAG_LINES.heroSection.highlight}
      />
      {/* Sub text */}
      <p className="w-full max-w-5xl mt-6 text-gray-600 text-lg">
        Now directing UX design at Tigo Design Studio in Indonesia and Aura
        Finance in Dubai, UAE.
        <br />
        Based in Indonesia.
      </p>

      {/* Moving logo strip */}
      <div className="w-full overflow-hidden mt-14 py-4 border-t border-b border-gray-200">
        <motion.div
          className="flex items-center gap-20 whitespace-nowrap"
          animate={{ x: [0, -600] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          <Image src="/cashbac.png" alt="cashbac" width={120} height={40} />
          <Image src="/tigo.png" alt="tigo" width={120} height={40} />
          <Image src="/gojek.png" alt="gojek" width={120} height={40} />
          <Image src="/careem.png" alt="careem" width={120} height={40} />
          <Image src="/aura.png" alt="aura" width={120} height={40} />
        </motion.div>
      </div>
    </section>
  );
}
