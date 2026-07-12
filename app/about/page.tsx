"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F3F7F5] px-6">
      <section className="max-w-2xl text-center">
        <p className="text-sm uppercase tracking-widest text-[#2B6F6A]">
          About Sadia
        </p>

        {/* <h1 className="mt-4 text-4xl md:text-5xl font-serif text-gray-900">
          Helping Individuals Find Their Voice
        </h1> */}

        <p className="mt-6 text-lg leading-relaxed text-gray-600">
          We are currently preparing this page to share Sadia’s professional
          background, experience, and personalized approach to speech therapy
          for children and adults.
        </p>

        <motion.div
          className="mt-8 inline-flex rounded-full bg-[#E2984F] px-8 py-3 shadow-sm"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="text-white font-medium">About page coming soon</span>
        </motion.div>
      </section>
    </main>
  );
}
