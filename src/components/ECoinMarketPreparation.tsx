"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ECoinMarketPreparation() {

  const targetDate = new Date();
  targetDate.setMonth(targetDate.getMonth() + 6);

  const [timeLeft, setTimeLeft] = useState<any>({});

  useEffect(() => {

    const timer = setInterval(() => {

      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ months, days, hours, minutes, seconds });

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  const currentPhase = "Phase 1 — Bootstrapping";

  return (
    <main className="min-h-screen bg-white text-black flex flex-col">

      {/* HERO */}

      <section className="relative flex-1 flex items-center justify-center px-6 py-24 overflow-hidden">

        <div
          className="absolute inset-0 bg-gradient-to-r
          from-[#D4AF37]/10 via-transparent to-[#D4AF37]/10"
        />

        <div className="relative z-10 max-w-3xl text-center">

          <span className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] block mb-4">
            EdenKingDom Protocol
          </span>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            ⚙️ <span className="text-[#D4AF37]">Economic Infrastructure & Market Preparation</span>
          </h1>

          <p className="text-gray-600 max-w-xl mx-auto mb-6 text-sm md:text-base">
            Before the official listing of <strong>E-Coin</strong> on major global exchanges,
            the <strong>EdenKingDom Protocol</strong> ecosystem is undergoing a strategic
            phase of fully on-chain economic preparation.
          </p>

        </div>
      </section>




      {/* COUNTDOWN */}

      <section className="py-24 px-6 bg-gray-50 text-center">

        <h2 className="text-3xl font-semibold mb-6">
          ⏳ Market Preparation Countdown
        </h2>

        <p className="text-gray-600 mb-10">
          Current Protocol Phase:
          <span className="text-[#D4AF37] font-semibold ml-2">
            {currentPhase}
          </span>
        </p>

        <div className="grid grid-cols-5 gap-6 max-w-3xl mx-auto">

          <div>
            <p className="text-3xl font-semibold">{timeLeft.months}</p>
            <p className="text-sm text-gray-500">Months</p>
          </div>

          <div>
            <p className="text-3xl font-semibold">{timeLeft.days}</p>
            <p className="text-sm text-gray-500">Days</p>
          </div>

          <div>
            <p className="text-3xl font-semibold">{timeLeft.hours}</p>
            <p className="text-sm text-gray-500">Hours</p>
          </div>

          <div>
            <p className="text-3xl font-semibold">{timeLeft.minutes}</p>
            <p className="text-sm text-gray-500">Minutes</p>
          </div>

          <div>
            <p className="text-3xl font-semibold">{timeLeft.seconds}</p>
            <p className="text-sm text-gray-500">Seconds</p>
          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="py-24 px-6 text-center relative overflow-hidden">

        <Link
          href="/ecoin-economic-phases"
          className="inline-flex items-center gap-2 px-10 py-4 rounded-full
          bg-black text-white font-semibold
          hover:bg-[#D4AF37] hover:text-black
          transition-all duration-300 shadow-lg"
        >
          Read Detailed Protocol Phases →
        </Link>

      </section>

    </main>
  );
}