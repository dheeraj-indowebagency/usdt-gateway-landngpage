"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Radial gradient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-[#26a17b]/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-[#f0b90b]/5 rounded-full blur-[100px]" />

        {/* Floating particles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${10 + (i * 7) % 80}%`,
              top: `${15 + (i * 11) % 70}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${6 + (i % 4)}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#26a17b]/10 border border-[#26a17b]/20 rounded-full text-[#3cc99c] text-xs sm:text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-[#26a17b] rounded-full animate-pulse" />
              Enterprise-Grade USDT Payment Gateway
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight"
            >
              Accept{" "}
              <span className="gradient-text">USDT</span>
              <br />
              Payments{" "}
              <span className="text-[#26a17b]">Instantly</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Seamless USDT pay-in & pay-out APIs with TRC20 and BEP20 support.
              Built for iGaming, forex, and high-volume crypto businesses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start"
            >
              <a
                href="https://t.me/CoinPayUSDT"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#26a17b] hover:bg-[#3cc99c] text-white font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(38,161,123,0.5)] text-sm sm:text-base"
              >
                Start Integration
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-[#1f2937] hover:border-[#26a17b]/50 text-gray-300 hover:text-white rounded-full transition-all duration-300 text-sm sm:text-base"
              >
                Explore Features
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-6 mt-10 justify-center lg:justify-start"
            >
              {[
                { icon: Shield, text: "Enterprise Security" },
                { icon: Zap, text: "Instant Settlement" },
                { icon: Globe, text: "Global Coverage" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm">
                  <Icon className="w-4 h-4 text-[#26a17b]" />
                  {text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right visual — animated payment flow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <PaymentFlowVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PaymentFlowVisual() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Center USDT coin */}
      <div className="relative z-10 flex items-center justify-center">
        <div className="animate-float">
          <div className="relative w-40 h-40">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border-2 border-[#26a17b]/30 animate-spin" style={{ animationDuration: "20s" }} />
            <div className="absolute inset-2 rounded-full border border-[#26a17b]/20 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }} />
            {/* Inner coin */}
            <div className="absolute inset-4 bg-gradient-to-br from-[#26a17b] to-[#1a7a5a] rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(38,161,123,0.4)]">
              <span className="text-white text-4xl font-bold">₮</span>
            </div>
          </div>
        </div>
      </div>

      {/* Orbiting elements */}
      <div className="absolute inset-0">
        {/* TRC20 badge */}
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-4 left-4 bg-[#111827] border border-[#1f2937] rounded-xl px-4 py-3 shadow-lg"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#50af95]/10 flex items-center justify-center">
              <TetherLogo className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Network</p>
              <p className="text-sm font-semibold text-white">TRC20</p>
            </div>
          </div>
        </motion.div>

        {/* BEP20 badge */}
        <motion.div
          animate={{ y: [8, -8, 8] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-4 right-4 bg-[#111827] border border-[#1f2937] rounded-xl px-4 py-3 shadow-lg"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#f0b90b]/10 flex items-center justify-center">
              <BscLogo className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Network</p>
              <p className="text-sm font-semibold text-white">BEP20</p>
            </div>
          </div>
        </motion.div>

        {/* Transaction card */}
        <motion.div
          animate={{ y: [-5, 10, -5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-8 -right-8 bg-[#111827] border border-[#1f2937] rounded-xl px-4 py-3 shadow-lg"
        >
          <p className="text-xs text-gray-400">Pay-In</p>
          <p className="text-lg font-bold text-[#26a17b]">+5,000 USDT</p>
          <p className="text-xs text-[#3cc99c]">✓ Confirmed</p>
        </motion.div>

        {/* Payout card */}
        <motion.div
          animate={{ y: [5, -10, 5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-8 -left-8 bg-[#111827] border border-[#1f2937] rounded-xl px-4 py-3 shadow-lg"
        >
          <p className="text-xs text-gray-400">Pay-Out</p>
          <p className="text-lg font-bold text-white">-2,500 USDT</p>
          <p className="text-xs text-[#3cc99c]">✓ Sent</p>
        </motion.div>
      </div>
    </div>
  );
}

function TetherLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none">
      <path d="M100 10 L185 75 L165 170 L35 170 L15 75 Z" fill="#50af95" />
      <rect x="55" y="52" width="90" height="22" rx="2" fill="white" />
      <rect x="85" y="72" width="30" height="62" rx="2" fill="white" />
      <ellipse cx="100" cy="118" rx="42" ry="12" stroke="white" strokeWidth="5" fill="none" />
    </svg>
  );
}

function BscLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <path d="M16 4l-4 4 4 4 4-4-4-4zM8 12l-4 4 4 4 4-4-4-4zM24 12l-4 4 4 4 4-4-4-4zM16 20l-4 4 4 4 4-4-4-4z" fill="#f0b90b" />
    </svg>
  );
}
