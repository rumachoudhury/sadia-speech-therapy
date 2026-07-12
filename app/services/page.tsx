// import ServiceCard from "@/components/ServiceCard";

// const services = [
//   {
//     title: "Children Speech Therapy",
//     description:
//       "Helping children improve speech sounds, language skills, and communication.",
//   },

//   {
//     title: "Adult Speech Therapy",
//     description:
//       "Supporting adults with speech, voice, and communication challenges.",
//   },

//   {
//     title: "Language Therapy",
//     description:
//       "Improving understanding, vocabulary, and expressive language skills.",
//   },
// ];

// export default function ServicesPage() {
//   return (
//     <main className="container-custom py-20">
//       <h1
//         className="
// text-4xl
// font-serif
// text-[#1B4A47] text-center mt-4
// "
//       >
//         Speech Therapy Services
//       </h1>

//       <div
//         className="
// grid
// md:grid-cols-3
// gap-6
// mt-10
// "
//       >
//         {services.map((service) => (
//           <ServiceCard
//             key={service.title}
//             title={service.title}
//             description={service.description}
//           />
//         ))}
//       </div>
//     </main>
//   );
// }
// ======================================

"use client";

import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F3F7F5] px-4 sm:px-6 lg:px-8">
      <section className="w-full max-w-3xl text-center">
        <p className="text-xs sm:text-sm uppercase tracking-widest text-[#2B6F6A]">
          Speech Therapy Services
        </p>

        <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-gray-600">
          We are preparing this page to showcase Sadia’s specialized speech
          therapy services for children and adults.
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
            Services page coming soon
          </span>
        </motion.div>
      </section>
    </main>
  );
}
