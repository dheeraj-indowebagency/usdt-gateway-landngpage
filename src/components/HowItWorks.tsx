"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Sign Up & Get API Keys",
    description:
      "Contact our team via Telegram. Get your sandbox API keys within minutes and start testing immediately.",
    visual: (
      <div className="flex flex-col gap-2 font-mono text-xs sm:text-sm">
        <div className="text-gray-500">{"// Your API credentials"}</div>
        <div>
          <span className="text-[#c084fc]">API_KEY</span>
          <span className="text-gray-500"> = </span>
          <span className="text-[#3cc99c]">&quot;cpay_live_****&quot;</span>
        </div>
        <div>
          <span className="text-[#c084fc]">SECRET</span>
          <span className="text-gray-500"> = </span>
          <span className="text-[#3cc99c]">&quot;sk_****_****&quot;</span>
        </div>
      </div>
    ),
  },
  {
    number: "02",
    title: "Integrate the API",
    description:
      "Use our RESTful API or SDKs. Create payment addresses, configure webhooks, and set up callbacks in your platform.",
    visual: (
      <div className="font-mono text-xs sm:text-sm">
        <div className="text-gray-500">{"// Create payment address"}</div>
        <div>
          <span className="text-[#60a5fa]">POST</span>
          <span className="text-gray-300"> /api/v1/payment</span>
        </div>
        <div className="mt-1 text-gray-400">{"{"}</div>
        <div className="ml-3">
          <span className="text-[#c084fc]">&quot;amount&quot;</span>
          <span className="text-gray-400">: </span>
          <span className="text-[#f0b90b]">1000</span>
          <span className="text-gray-400">,</span>
        </div>
        <div className="ml-3">
          <span className="text-[#c084fc]">&quot;network&quot;</span>
          <span className="text-gray-400">: </span>
          <span className="text-[#3cc99c]">&quot;TRC20&quot;</span>
        </div>
        <div className="text-gray-400">{"}"}</div>
      </div>
    ),
  },
  {
    number: "03",
    title: "Process Transactions",
    description:
      "Customers deposit USDT to generated addresses. Receive real-time webhook notifications on payment confirmation.",
    visual: (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#26a17b]/20 flex items-center justify-center flex-shrink-0">
            <span className="text-[#26a17b] text-xs">₮</span>
          </div>
          <div className="flex-1">
            <div className="h-2 bg-[#26a17b]/30 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#26a17b] rounded-full"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 2, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
          <span className="text-[#3cc99c] text-xs font-medium">Confirmed</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#f0b90b]/20 flex items-center justify-center flex-shrink-0">
            <span className="text-[#f0b90b] text-xs">₮</span>
          </div>
          <div className="flex-1">
            <div className="h-2 bg-[#f0b90b]/30 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#f0b90b] rounded-full"
                initial={{ width: "0%" }}
                whileInView={{ width: "75%" }}
                transition={{ duration: 1.8, delay: 0.8 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
          <span className="text-[#f0b90b] text-xs font-medium">Pending</span>
        </div>
      </div>
    ),
  },
  {
    number: "04",
    title: "Settle & Scale",
    description:
      "Funds are instantly available for payout. Scale to millions in volume with our high-availability infrastructure.",
    visual: (
      <div className="grid grid-cols-2 gap-3 text-center">
        <div className="bg-[#1f2937]/50 rounded-lg p-3">
          <p className="text-xl sm:text-2xl font-bold text-[#26a17b]">99.9%</p>
          <p className="text-xs text-gray-400 mt-1">Uptime</p>
        </div>
        <div className="bg-[#1f2937]/50 rounded-lg p-3">
          <p className="text-xl sm:text-2xl font-bold text-[#f0b90b]">&lt;1s</p>
          <p className="text-xs text-gray-400 mt-1">Latency</p>
        </div>
      </div>
    ),
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="relative py-20 sm:py-28 overflow-hidden grid-bg">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[#26a17b] font-semibold text-sm uppercase tracking-wider mb-3"
          >
            Integration Flow
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold"
          >
            Go Live in{" "}
            <span className="gradient-text">4 Simple Steps</span>
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#26a17b]/30 to-transparent" />

          <div className="space-y-12 lg:space-y-20">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 * i }}
                  className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Text */}
                  <div className={`flex-1 text-center ${isEven ? "lg:text-right" : "lg:text-left"}`}>
                    <span className="text-5xl sm:text-6xl font-bold text-[#1f2937]">
                      {step.number}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 mt-3 max-w-md mx-auto lg:mx-0 text-sm sm:text-base">
                      {step.description}
                    </p>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:flex items-center justify-center">
                    <div className="relative">
                      <div className="w-4 h-4 bg-[#26a17b] rounded-full z-10 relative" />
                      <div className="absolute inset-0 w-4 h-4 bg-[#26a17b] rounded-full pulse-ring" />
                    </div>
                  </div>

                  {/* Visual */}
                  <div className="flex-1 w-full max-w-md">
                    <div className="bg-[#111827]/80 border border-[#1f2937] rounded-2xl p-5 sm:p-6 hover:border-[#26a17b]/30 transition-colors duration-300">
                      {step.visual}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
