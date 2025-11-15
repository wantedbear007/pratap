/**
 * like "I love dogs" and you want to highlight dog without hard coding
 * it into jsx
 */

import { highlightTextArgs } from "@/types/highlight-text.t";

/**
 * @description This component highlights the text from a sentence without hard coading
 * @param args {@link highlightTextArgs}
 * @returns {JSX} componenet with highlighted text
 */
export const HighlightText = (args: highlightTextArgs) => {
  // set to remove duplicates and optimize search performance
  const highLightSet = new Set(args.highlights);

  return (
    <div
      className={
        args.classNameData
          ? args.classNameData
          : "w-full max-w-5xl text-[2.2rem] leading-snug font-light"
      }
    >
      {args.setence.split(" ").map((word, idx) => (
        <span
          key={idx}
          className={
            highLightSet.has(word)
              ? args.highlightStyle
                ? args.highlightStyle
                : "font-semibold"
              : ""
          }
        >
          {word}{" "}
        </span>
      ))}
    </div>
  );
};
