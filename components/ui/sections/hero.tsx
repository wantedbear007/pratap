import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IMAGES_PATH, TAG_LINES, USER_DATA } from "@/content/user-data";
import { HighlightText } from "../enhancers/highlight-text";

export default function HeroSection() {

  const { theme, resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const currentTheme = mounted ? (resolvedTheme || theme) : "light";

  const logo = (base: string) =>
    currentTheme === "dark" ? `${base.replace(".png", "_dark.png")}` : base;

  return (
    <section
      className={
        "w-full flex flex-col items-center justify-center py-20 px-6 " +
        "transition-colors duration-200"
      }
    >

      {/* Greeting card */}
      <div className="flex items-center gap-4 mb-10 w-full max-w-7xl">
        <Image
          src={IMAGES_PATH.small_profile}
          alt="profile"
          width={72}
          height={72}
          className="rounded-full object-cover shadow-xl"
        />
        <div
          className={
            "px-6 py-3 rounded-xl shadow-lg text-lg " +
            "bg-theme-bg-400 text-theme-fg-400"
          }
        >
          {USER_DATA.prefix}
        </div>
      </div>

      {/* Heading text */}
      <HighlightText
        setence={TAG_LINES.heroSection.sentence}
        highlights={TAG_LINES.heroSection.highlight}
      />

      {/* Sub text */}
      <p className="w-full max-w-7xl mt-6 text-theme-fg-300 text-lg">
        {TAG_LINES.subText.pre}
        <br />
        {TAG_LINES.subText.post}
      </p>

      {/* Moving logo strip */}
      <div
        className={
          "w-full overflow-hidden mt-14 py-4 border-t border-b " +
          "border-theme-bg-300"
        }
      >
        <motion.div
          className="flex items-center gap-20 whitespace-nowrap"
          animate={{ x: [0, -600] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          <Image src={logo("/cashbac.png")} alt="cashbac" width={120} height={40} />
          <Image src={logo("/tigo.png")} alt="tigo" width={120} height={40} />
          <Image src={logo("/gojek.png")} alt="gojek" width={120} height={40} />
          <Image src={logo("/careem.png")} alt="careem" width={120} height={40} />
          <Image src={logo("/aura.png")} alt="aura" width={120} height={40} />
        </motion.div>
      </div>
    </section>
  );
}
