// import { Baby, UserRound, Activity, Utensils } from "lucide-react";

// import ServiceCard from "./ServiceCard";

// const services = [
//   {
//     title: "Pediatric Speech Therapy",
//     description:
//       "Articulation, language delays, and phonology support for toddlers through teens.",
//     icon: Baby,
//   },

//   {
//     title: "Adult Speech & Language Therapy",
//     description:
//       "Support for aphasia, cognitive communication changes, and voice disorders.",
//     icon: UserRound,
//   },

//   {
//     title: "Stuttering & Fluency Therapy",
//     description:
//       "Practical strategies for smoother, more confident speech at any age.",
//     icon: Activity,
//   },

//   {
//     title: "Swallowing & Feeding Therapy",
//     description:
//       "Safe, comfortable eating and swallowing support for children and adults.",
//     icon: Utensils,
//   },
// ];

// export default function ServicesSection() {
//   return (
//     <section className="py-20">
//       <div className="max-w-[1180px] mx-auto px-6 container-custom">
//         <p
//           className="
// text-xs
// uppercase
// tracking-[0.15em]
// text-[#2B6F6A]
// "
//         >
//           Services
//         </p>

//         <h2
//           className="
// mt-3
// text-3xl
// md:text-4xl
// font-serif
// text-[#1B4A47]
// "
//         >
//           Therapy built around how you communicate.
//         </h2>

//         <p className="mt-4 text-gray-600 max-w-2xl">
//           Every plan starts with your goals — whether that&apos;s a first word,
//           a clear sentence, or getting back the words you had before.
//         </p>

//         <div
//           className="
// grid
// md:grid-cols-2
// lg:grid-cols-4
// gap-5
// mt-10
// "
//         >
//           {services.map((service) => (
//             <ServiceCard
//               key={service.title}
//               title={service.title}
//               description={service.description}
//               icon={service.icon}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// ================================

import { Baby, UserRound, Activity, Utensils } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Pediatric Speech Therapy",
    description:
      "Articulation, language delays, and phonology support for toddlers through teens.",
    icon: Baby,
  },
  {
    title: "Adult Speech & Language Therapy",
    description:
      "Support for aphasia, cognitive communication changes, and voice disorders.",
    icon: UserRound,
  },
  {
    title: "Stuttering & Fluency Therapy",
    description:
      "Practical strategies for smoother, more confident speech at any age.",
    icon: Activity,
  },
  {
    title: "Swallowing & Feeding Therapy",
    description:
      "Safe, comfortable eating and swallowing support for children and adults.",
    icon: Utensils,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1180px] mx-auto px-6">
        <span className="font-mono uppercase tracking-[0.14em] text-xs text-[#2B6F6A]">
          Services
        </span>

        <h2 className="mt-3 text-3xl md:text-4xl font-serif text-[#1B4A47]">
          Therapy built around how you communicate.
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl">
          Every plan starts with your goals — whether that&apos;s a first word,
          a clear sentence, or getting back the words you had before.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
