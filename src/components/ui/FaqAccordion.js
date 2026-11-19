"use client";

import { useId, useState } from "react";
import { ChevronDownIcon } from "@/components/ui/Icons";

/**
 * Accessible FAQ Accordion component:
 * - Single/multi toggle support
 * - Clean Ashik surface styling
 * - Smooth CSS height and chevron rotation
 * - Zero external packages
 */
export default function FaqAccordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(0); // first item open by default
  const baseId = useId();

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  if (!items || items.length === 0) return null;

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const triggerId = `${baseId}-trigger-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div
            key={item.question}
            className={`rounded-[22px] border transition-colors duration-300 ${
              isOpen
                ? "bg-canvas border-black/20 shadow-sm"
                : "bg-surface border-black/5 hover:border-black/15"
            }`}
          >
            <button
              id={triggerId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => handleToggle(index)}
              className="w-full flex items-center justify-between gap-3 sm:gap-4 p-4 sm:p-6 text-left cursor-pointer min-h-[52px]"
            >
              <span className="text-[15.5px] sm:text-[18px] font-bold text-heading leading-snug">
                {item.question}
              </span>
              <span
                className={`inline-flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 shrink-0 ${
                  isOpen
                    ? "bg-accent border-accent text-contrast rotate-180"
                    : "border-black/15 text-heading bg-canvas"
                }`}
                aria-hidden="true"
              >
                <ChevronDownIcon className="w-4 h-4" />
              </span>
            </button>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={triggerId}
                className="px-4 sm:px-6 pb-5 sm:pb-6 pt-1 text-[14.5px] sm:text-[15.5px] leading-[25px] sm:leading-[27px] text-body border-t border-black/5 mt-1"
              >
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
