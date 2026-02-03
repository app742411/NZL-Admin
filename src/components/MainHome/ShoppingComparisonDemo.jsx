"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaTimesCircle,
  FaCheckCircle,
  FaBolt,
  FaClock,
  FaUsers,
} from "react-icons/fa";

const traditionalFeatures = [
  "Fixed prices",
  "No urgency to buy",
  "Same deals for everyone",
  "Endless browsing",
  "Miss best prices",
];

const nzlFeatures = [
  { text: "Prices drop every second", icon: <FaBolt /> },
  { text: "Limited-time deals", icon: <FaClock /> },
  { text: "Exclusive group savings", icon: <FaUsers /> },
  { text: "Quick decisions", icon: <FaBolt /> },
  { text: "Best prices guaranteed", icon: <FaCheckCircle /> },
];

export default function ShoppingComparisonDemo() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-24">
      {/* Background effects */}
      <div className="absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-400/30 to-purple-400/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-green-400/20 to-blue-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold tracking-tight text-gray-900"
          >
            Every Second Saves You Money
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-lg text-gray-600"
          >
            Traditional shopping waits. <span className="font-semibold">NZL reacts.</span>
            Prices drop live — blink and you save.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Traditional Card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8, rotateX: 3 }}
            className="relative rounded-3xl border border-gray-200 bg-white/70 backdrop-blur-xl p-10 shadow-lg"
          >
            <h3 className="mb-8 flex items-center justify-center gap-3 text-xl font-semibold text-gray-800">
              <FaTimesCircle className="text-red-500 text-2xl" />
              Traditional Shopping
            </h3>

            <ul className="space-y-4">
              {traditionalFeatures.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 text-gray-600"
                >
                  <FaTimesCircle className="text-red-400 text-lg flex-none" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-red-50/40 to-transparent" />
          </motion.div>

          {/* NZL Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -12, scale: 1.02 }}
            className="relative rounded-3xl bg-gray-900 p-10 shadow-2xl"
          >
            {/* Animated border */}
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-70 blur-sm" />
            <div className="absolute inset-0 rounded-3xl bg-gray-900" />

            {/* Winner badge */}
            <div className="absolute -top-5 right-6 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500 px-4 py-1 text-xs font-bold text-black shadow-lg animate-pulse">
              BEST VALUE
            </div>

            <h3 className="relative mb-8 flex items-center justify-center gap-3 text-xl font-semibold text-white">
              <FaCheckCircle className="text-green-400 text-2xl drop-shadow-[0_0_6px_rgba(34,197,94,0.6)]" />
              Shopping with NZL
            </h3>

            <ul className="relative space-y-4">
              {nzlFeatures.map((item, i) => (
                <li
                  key={i}
                  className="group flex items-center gap-4 text-gray-300"
                >
                  <span className="text-green-400 text-lg flex-none group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]">
                    {item.icon}
                  </span>
                  <span className="font-medium text-white">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
