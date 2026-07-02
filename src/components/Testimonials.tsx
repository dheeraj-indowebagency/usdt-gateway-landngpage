"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "CoinPayUSDT transformed our payment processing. The TRC20 integration was live within a day, and our players love the instant deposits.",
    author: "Operations Director",
    company: "Leading iGaming Platform",
    rating: 5,
  },
  {
    quote:
      "We process millions in USDT daily through their API. The reliability and speed are unmatched — zero downtime in 12 months.",
    author: "CTO",
    company: "Global Crypto Exchange",
    rating: 5,
  },
  {
    quote:
      "Their BEP20 support and auto-reconciliation saved our team hundreds of hours. The API docs are excellent — our developers love it.",
    author: "Head of Payments",
    company: "Sports Betting Platform",
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#0a1628] to-[#030712]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[#26a17b] font-semibold text-sm uppercase tracking-wider mb-3"
          >
            Trusted by Industry Leaders
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold"
          >
            What Our Partners{" "}
            <span className="gradient-text">Say</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="bg-[#111827]/80 border border-[#1f2937] rounded-2xl p-6 sm:p-8 hover:border-[#26a17b]/20 transition-colors duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#f0b90b] text-[#f0b90b]" />
                ))}
              </div>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="border-t border-[#1f2937] pt-4">
                <p className="text-white font-semibold text-sm">{t.author}</p>
                <p className="text-gray-500 text-xs mt-0.5">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
