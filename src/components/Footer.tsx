"use client";

const footerLinks = {
  Product: [
    { label: "Pay-In API", href: "#features" },
    { label: "Pay-Out API", href: "#features" },
    { label: "TRC20 Support", href: "#networks" },
    { label: "BEP20 Support", href: "#networks" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Contact", href: "#contact" },
    { label: "Telegram", href: "https://t.me/CoinPayUSDT" },
  ],
  Resources: [
    { label: "API Docs", href: "#" },
    { label: "Integration Guide", href: "#how-it-works" },
    { label: "FAQ", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-[#1f2937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 group">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-[#26a17b] rounded-lg rotate-45 group-hover:rotate-[135deg] transition-transform duration-500" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">
                  ₮
                </span>
              </div>
              <div>
                <span className="text-lg font-bold text-white">CoinPay</span>
                <span className="text-lg font-bold text-[#26a17b]">USDT</span>
              </div>
            </a>
            <p className="text-gray-500 text-sm mt-4 max-w-xs">
              Enterprise-grade USDT payment gateway for high-volume businesses worldwide.
            </p>

            {/* Social / Telegram */}
            <div className="mt-4">
              <a
                href="https://t.me/CoinPayUSDT"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-[#26a17b] text-sm transition-colors"
              >
                <TelegramIcon className="w-5 h-5" />
                @CoinPayUSDT
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-semibold text-sm mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
                      {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1f2937] mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} CoinPayUSDT. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#ff060a]/10 flex items-center justify-center">
                <TronSmall />
              </div>
              <span className="text-gray-500 text-xs">TRC20</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#f0b90b]/10 flex items-center justify-center">
                <BscSmall />
              </div>
              <span className="text-gray-500 text-xs">BEP20</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

function TronSmall() {
  return (
    <svg className="w-3 h-3" viewBox="0 0 200 200" fill="none">
      <path d="M100 10 L185 75 L165 170 L35 170 L15 75 Z" fill="#50af95" />
      <rect x="55" y="52" width="90" height="22" rx="2" fill="white" />
      <rect x="85" y="72" width="30" height="62" rx="2" fill="white" />
      <ellipse cx="100" cy="118" rx="42" ry="12" stroke="white" strokeWidth="5" fill="none" />
    </svg>
  );
}

function BscSmall() {
  return (
    <svg className="w-3 h-3" viewBox="0 0 32 32" fill="none">
      <path d="M16 4l-4 4 4 4 4-4-4-4zM8 12l-4 4 4 4 4-4-4-4zM24 12l-4 4 4 4 4-4-4-4zM16 20l-4 4 4 4 4-4-4-4z" fill="#f0b90b" />
    </svg>
  );
}
