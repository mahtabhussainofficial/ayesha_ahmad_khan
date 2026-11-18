import { counters } from "@/data/counters";

/**
 * Section 07 — Counters (#counters)
 * Confirmed Decision (CD-02): MUST remain hidden (return null) until
 * verifiable metrics are supplied and approved in src/data/counters.js.
 */
export default function CountersSection() {
  if (!counters.length) {
    return null;
  }

  return (
    <section id="counters" className="mt-[80px] lg:mt-[120px] bg-canvas">
      <div className="ashik-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
          {counters.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col lg:flex-row items-center gap-4 p-6 rounded-[20px] bg-surface"
            >
              <div>
                <p className="text-[34px] leading-[50px] font-bold text-contrast tabular-nums">
                  {stat.value}
                </p>
                <p className="text-[15px] text-body">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
