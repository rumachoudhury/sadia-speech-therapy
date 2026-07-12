// import ContactForm from "@/components/ContactForm";

// export default function ContactPage() {
//   return (
//     <main className="max-w-3xl mx-auto px-6 py-16">
//       <h1 className="text-4xl font-bold text-blue-600 mb-8">Contact Us</h1>

//       <ContactForm />
//     </main>
//   );
// }
// ============================================

"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F3F7F5] px-4 sm:px-6 lg:px-8">
      <section className="w-full max-w-3xl text-center">
        <p className="text-xs sm:text-sm uppercase tracking-widest text-[#2B6F6A]">
          Contact Us
        </p>

        <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-gray-600">
          We are preparing this page to help you connect with Sadia, request
          appointments, and learn more about speech therapy services.
        </p>

        <motion.div
          className="mt-8 inline-flex rounded-full bg-[#E2984F] px-6 sm:px-8 py-3 shadow-sm"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="text-sm sm:text-base text-white font-medium">
            Contact page coming soon
          </span>
        </motion.div>
      </section>
    </main>
  );
}
