"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Gamepad2,
  TrendingUp,
  Coins,
  BarChart3,
  Layers,
  CreditCard,
  Building2,
  Globe,
} from "lucide-react";

const industries = [
  {
    icon: Gamepad2,
    title: "iGaming Platforms",
    description: "Instant deposits and withdrawals for seamless player experience.",
  },
  {
    icon: Coins,
    title: "Online Casinos",
    description: "High-volume transaction processing with zero chargebacks.",
  },
  {
    icon: BarChart3,
    title: "Sports Betting",
    description: "Real-time settlement for live betting and instant payouts.",
  },
  {
    icon: TrendingUp,
    title: "Forex Brokers",
    description: "Reliable funding and withdrawal channels for global traders.",
  },
  {
    icon: Layers,
    title: "Crypto Exchanges",
    description: "Deep liquidity integration and automated USDT transfers.",
  },
  {
    icon: Globe,
    title: "Gaming Aggregators",
    description: "Multi-platform payment orchestration with unified API.",
  },
  {
    icon: CreditCard,
    title: "Payment Aggregators",
    description: "Add USDT rails to your existing payment infrastructure.",
  },
  {
    icon: Building2,
    title: "Fintech Companies",
    description: "White-label USDT processing for your fintech product.",
  },
];

export default function Industries() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="industries" className="relative py-20 sm:py-28 overflow-hidden grid-bg">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[#26a17b] font-semibold text-sm uppercase tracking-wider mb-3"
          >
            Who We Serve
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold"
          >
            Built for{" "}
            <span className="gradient-text">High-Volume</span> Businesses
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-gray-400 text-base sm:text-lg"
          >
            Trusted by leading platforms across industries that demand speed, reliability, and scale.
          </motion.p>
        </div>

        {/* Industry grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              className="group bg-[#111827]/60 border border-[#1f2937] rounded-2xl p-5 sm:p-6 text-center hover:border-[#26a17b]/30 hover:bg-[#111827] transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-[#26a17b]/10 flex items-center justify-center mb-4 group-hover:bg-[#26a17b]/20 group-hover:scale-110 transition-all duration-300">
                <industry.icon className="w-6 h-6 text-[#26a17b]" />
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-white mb-2">
                {industry.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
