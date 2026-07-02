"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const networks = [
  {
    name: "TRC20",
    chain: "TRON Network",
    logo: <TetherLogo />,
    color: "#50af95",
    bgColor: "rgba(80, 175, 149, 0.1)",
    borderColor: "rgba(80, 175, 149, 0.2)",
    features: [
      "Near-zero transaction fees (~$0.01)",
      "3-second block confirmation",
      "High throughput (2,000 TPS)",
      "Most popular USDT network",
      "Ideal for frequent transactions",
    ],
    stat: "~50% of all USDT supply",
  },
  {
    name: "BEP20",
    chain: "BNB Smart Chain",
    logo: <BscLogo />,
    color: "#f0b90b",
    bgColor: "rgba(240, 185, 11, 0.1)",
    borderColor: "rgba(240, 185, 11, 0.2)",
    features: [
      "Low gas fees (~$0.05)",
      "3-second block confirmation",
      "EVM compatible ecosystem",
      "Growing DeFi integration",
      "Cross-chain bridge support",
    ],
    stat: "Fast-growing network",
  },
];

export default function Networks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="networks" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#0a1628] to-[#030712]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[#26a17b] font-semibold text-sm uppercase tracking-wider mb-3"
          >
            Supported Networks
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold"
          >
            <span className="gradient-text">TRC20</span> &{" "}
            <span className="gradient-text">BEP20</span> Support
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-gray-400 text-base sm:text-lg"
          >
            Choose the network that best fits your business needs. Both fully supported with identical API interfaces.
          </motion.p>
        </div>

        {/* Network cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {networks.map((network, i) => (
            <motion.div
              key={network.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * i }}
              className="relative group"
            >
              <div
                className="bg-[#111827]/80 border rounded-2xl p-6 sm:p-8 transition-all duration-400 hover:shadow-lg"
                style={{ borderColor: network.borderColor }}
              >
                {/* Network header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ background: network.bgColor }}
                  >
                    {network.logo}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{network.name}</h3>
                    <p className="text-gray-400 text-sm">{network.chain}</p>
                  </div>
                </div>

                {/* Stat badge */}
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-6"
                  style={{ background: network.bgColor, color: network.color }}
                >
                  {network.stat}
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {network.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <Check
                        className="w-5 h-5 mt-0.5 flex-shrink-0"
                        style={{ color: network.color }}
                      />
                      <span className="text-gray-300 text-sm">{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Network visual */}
                <div className="mt-8 pt-6 border-t" style={{ borderColor: network.borderColor }}>
                  <NetworkFlowVisual color={network.color} name={network.name} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            Both networks share the same API interface — switch networks with a single parameter change.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function NetworkFlowVisual({ color, name }: { color: string; name: string }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex flex-col items-center gap-1 text-center flex-1">
        <div className="w-10 h-10 rounded-full bg-[#1f2937] flex items-center justify-center">
          <span className="text-xs text-gray-400">User</span>
        </div>
        <span className="text-[10px] text-gray-500">Customer</span>
      </div>

      {/* Arrow */}
      <div className="flex-1 flex items-center">
        <svg className="w-full h-6" viewBox="0 0 100 24" preserveAspectRatio="none">
          <line
            x1="0" y1="12" x2="90" y2="12"
            stroke={color}
            strokeWidth="1.5"
            strokeDasharray="5 5"
            className="animate-dash"
          />
          <polygon points="90,6 100,12 90,18" fill={color} />
        </svg>
      </div>

      <div className="flex flex-col items-center gap-1 text-center flex-1">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{ background: `${color}20` }}
        >
          <span className="text-xs font-bold" style={{ color }}>{name}</span>
        </div>
        <span className="text-[10px] text-gray-500">Network</span>
      </div>

      {/* Arrow */}
      <div className="flex-1 flex items-center">
        <svg className="w-full h-6" viewBox="0 0 100 24" preserveAspectRatio="none">
          <line
            x1="0" y1="12" x2="90" y2="12"
            stroke={color}
            strokeWidth="1.5"
            strokeDasharray="5 5"
            className="animate-dash"
          />
          <polygon points="90,6 100,12 90,18" fill={color} />
        </svg>
      </div>

      <div className="flex flex-col items-center gap-1 text-center flex-1">
        <div className="w-10 h-10 rounded-full bg-[#26a17b]/20 flex items-center justify-center">
          <span className="text-[#26a17b] text-xs font-bold">₮</span>
        </div>
        <span className="text-[10px] text-gray-500">Merchant</span>
      </div>
    </div>
  );
}

function TetherLogo() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 200 200" fill="none">
      <path d="M100 10 L185 75 L165 170 L35 170 L15 75 Z" fill="#50af95" />
      <rect x="55" y="52" width="90" height="22" rx="2" fill="white" />
      <rect x="85" y="72" width="30" height="62" rx="2" fill="white" />
      <ellipse cx="100" cy="118" rx="42" ry="12" stroke="white" strokeWidth="5" fill="none" />
    </svg>
  );
}

function BscLogo() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
      <path d="M16 4l-4 4 4 4 4-4-4-4zM8 12l-4 4 4 4 4-4-4-4zM24 12l-4 4 4 4 4-4-4-4zM16 20l-4 4 4 4 4-4-4-4z" fill="#f0b90b" />
    </svg>
  );
}
