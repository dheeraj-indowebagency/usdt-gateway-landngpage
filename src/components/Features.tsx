"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowDownToLine,
  ArrowUpFromLine,
  ShieldCheck,
  Zap,
  RefreshCw,
  Code2,
} from "lucide-react";

const features = [
  {
    icon: ArrowDownToLine,
    title: "USDT Pay-In API",
    description:
      "Accept USDT deposits from customers instantly. Auto-generate unique wallet addresses, real-time webhook notifications, and seamless reconciliation.",
    gradient: "from-[#26a17b] to-[#3cc99c]",
    tag: "Receive",
  },
  {
    icon: ArrowUpFromLine,
    title: "USDT Pay-Out API",
    description:
      "Send USDT payouts to any wallet globally. Batch processing, scheduled transfers, and automated withdrawal fulfillment for your users.",
    gradient: "from-[#3cc99c] to-[#26a17b]",
    tag: "Send",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Multi-signature wallets, cold storage reserves, real-time AML monitoring, and encrypted API communications protect every transaction.",
    gradient: "from-[#6366f1] to-[#8b5cf6]",
    tag: "Secure",
  },
  {
    icon: Zap,
    title: "Instant Settlement",
    description:
      "Lightning-fast transaction confirmation. Sub-second processing on TRC20, near-instant on BEP20. No waiting, no delays.",
    gradient: "from-[#f0b90b] to-[#f7d56e]",
    tag: "Fast",
  },
  {
    icon: RefreshCw,
    title: "Auto Reconciliation",
    description:
      "Automated balance matching, real-time transaction tracking, and comprehensive reporting dashboards for complete financial oversight.",
    gradient: "from-[#ec4899] to-[#f472b6]",
    tag: "Track",
  },
  {
    icon: Code2,
    title: "Easy Integration",
    description:
      "RESTful API with comprehensive docs, SDKs for popular languages, sandbox environment, and dedicated integration support.",
    gradient: "from-[#06b6d4] to-[#22d3ee]",
    tag: "Build",
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#0a1628] to-[#030712]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[#26a17b] font-semibold text-sm uppercase tracking-wider mb-3"
          >
            Powerful Features
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold"
          >
            Everything You Need to{" "}
            <span className="gradient-text">Process USDT</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-gray-400 text-base sm:text-lg"
          >
            A complete payment infrastructure built for scale, security, and speed.
          </motion.p>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glow-card group bg-[#111827]/80 border border-[#1f2937] rounded-2xl p-6 sm:p-8 hover:border-[#26a17b]/30 transition-all duration-400"
            >
              {/* Tag */}
              <span className="inline-block text-xs font-medium text-[#26a17b] bg-[#26a17b]/10 px-3 py-1 rounded-full mb-4">
                {feature.tag}
              </span>

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
