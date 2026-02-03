"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Browse Exclusive Deals",
    desc: "Open the NZL app and explore our curated selection of limited-time deals on premium products. Each deal shows the current price, time remaining, and how many items are left.",
  },
  {
    id: 2,
    title: "Watch Prices Drop",
    desc: "See the price decrease every second in real-time. The earlier you buy, the better chance you have at a great price. But wait too long and someone else might grab it first!",
  },
  {
    id: 3,
    title: "Make Your Decision",
    desc: "Choose your perfect moment to buy. You can purchase immediately or wait for the price to drop more. Remember: once it's sold out, the deal is gone forever.",
  },
  {
    id: 4,
    title: "Complete Purchase",
    desc: 'Tap "Buy Now" when you\'re ready. Complete payment using your preferred method (card, Apple Pay, etc.). Your order is confirmed instantly.',
  },
  {
    id: 5,
    title: "Receive Your Product",
    desc: "Track your order in the app. We deliver across Saudi Arabia. Your genuine product arrives at your doorstep within days.",
  },
];

const HowItWorksCompDemo = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.2", "end 0.9"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="bg-gray-50 py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl font-extrabold text-gray-900">
            How NZL Works
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
            Simple, exciting, and rewarding — save smarter every second.
          </p>
        </div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Base line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-200 hidden md:block" />

          {/* Animated fill line */}
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute left-1/2 top-0 h-full w-[4px] bg-gradient-to-b from-blue-500 to-indigo-500 origin-top hidden md:block"
          />

          {/* Start circle */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-4 hidden md:block">
            <div className="h-4 w-4 rounded-full bg-blue-500 shadow-md" />
          </div>

          {/* End circle */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 hidden md:block">
            <div className="h-4 w-4 rounded-full bg-indigo-500 shadow-md" />
          </div>

          <div className="space-y-24">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Card */}
                  <div
                    className={`relative w-full md:w-[45%] bg-white rounded-2xl p-8 shadow-sm ${
                      isLeft
                        ? "md:text-right md:pr-12"
                        : "md:text-left md:pl-12"
                    }`}
                  >
                    {/* Arrow */}
                    <span
                      className={`absolute top-1/2 -translate-y-1/2 hidden md:block shadow-2xl ${
                        isLeft
                          ? "-right-3 border-l-12 border-l-white border-y-8 border-y-transparent"
                          : "-left-3 border-r-12 border-r-white border-y-8 border-y-transparent"
                      }`}
                    />

                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>

                  {/* Step number */}
                  <div className="absolute md:left-1/2 md:-translate-x-1/2 -top-6 md:top-1/2 md:-translate-y-1/2 z-10">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full text-white font-bold text-xl shadow-lg bg-gradient-to-r from-blue-500 to-indigo-500">
                      {step.id}
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
};

export default HowItWorksCompDemo;
