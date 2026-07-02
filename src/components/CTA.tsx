"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="contact" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#0d2818] to-[#030712]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#26a17b]/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#26a17b]/10 border border-[#26a17b]/20 rounded-full text-[#3cc99c] text-xs sm:text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4" />
            Ready to Scale Your Payments?
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Start Processing{" "}
            <span className="gradient-text">USDT Today</span>
          </h2>

          <p className="mt-6 text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Join hundreds of businesses already using CoinPayUSDT. Get your API keys,
            test in sandbox, and go live — all within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a
              href="https://t.me/CoinPayUSDT"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#26a17b] hover:bg-[#3cc99c] text-white font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(38,161,123,0.5)] text-base"
            >
              <TelegramIcon className="w-5 h-5" />
              Contact Us on Telegram
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <p className="mt-6 text-gray-500 text-sm">
            No setup fees · Instant sandbox access · Dedicated support
          </p>
        </motion.div>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {[
            { title: "Free Sandbox", desc: "Test with unlimited transactions" },
            { title: "24/7 Support", desc: "Dedicated integration engineers" },
            { title: "Go Live in Hours", desc: "From signup to production" },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-[#111827]/50 border border-[#1f2937] rounded-xl p-5 hover:border-[#26a17b]/20 transition-colors duration-300"
            >
              <h4 className="text-white font-semibold text-sm">{item.title}</h4>
              <p className="text-gray-400 text-xs mt-1">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}
