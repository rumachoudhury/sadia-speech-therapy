// import Link from "next/link";
// import { Phone } from "lucide-react";

// export default function Hero() {
//   return (
//     <section
//       className="
//   container-custom
//    grid
// grid-cols-1
// lg:grid-cols-2
// gap-10
// items-center
// py-12
// md:py-20  max-width 1180
// "
//     >
//       <div>
//         <p
//           className="
// text-[#2B6F6A]
// font-mono
// text-xs
// md:text-sm mt-2
// "
//         >
//           Speech-Language Pathology · Children & Adults
//         </p>

//         <h1
//           className="
// text-4xl
// md:text-5xl
// leading-tight
// mt-5
// "
//         >
//           Find your voice, one sound at a time.
//         </h1>

//         <p
//           className="
// mt-5
// text-base
// md:text-lg
// text-gray-600
// "
//         >
//           Personalized speech and language therapy for kids and adults.
//         </p>

//         <div
//           className="
// flex
// flex-col
// sm:flex-row
// gap-4
// mt-8
// "
//         >
//           <Link
//             href="/appointment"
//             className="
// bg-[#E2984F]
// text-white
// px-6
// py-3
// rounded-full
// text-center
// "
//           >
//             Request Appointment
//           </Link>

//           <a
//             href="tel:+15551234567"
//             className="
// border
// border-[#2B6F6A]
// rounded-full
// px-6
// py-3
// flex
// justify-center
// items-center
// gap-2
// "
//           >
//             <Phone size={18} />
//             Call Office
//           </a>
//         </div>
//       </div>

//       <div
//         className="
// bg-white
// border
// rounded-xl
// p-5
// md:p-8
// "
//       >
//         <div
//           className="
// flex
// items-end
// gap-1
// h-24
// md:h-32
// "
//         >
//           {/* {Array.from({ length: 42 }).map((_, i) => (
//             <div
//               key={i}
//               className="
// flex-1
// bg-gradient-to-t
// from-[#2B6F6A]
// to-[#E2984F]
// rounded
// "
//               style={{
//                 height: `${30 + Math.random() * 60}%`,
//               }}
//             />
//           ))} */}

//           {Array.from({ length: 42 }).map((_, i) => (
//             <div
//               key={i}
//               className="
// flex-1
// rounded
// bg-gradient-to-t
// from-[#2B6F6A]
// to-[#E2984F]
// wave-bar
// "
//               style={{
//                 height: `${30 + Math.abs(Math.sin(i * 1.7)) * 55}%`,

//                 animationDelay: `${i * 0.045}s`,

//                 animationDuration: `${1.8 + (i % 5) * 0.15}s`,
//               }}
//             />
//           ))}
//         </div>

//         <p
//           className="
// text-center
// text-sm
// mt-4
// text-gray-500
// "
//         >
//           Every session is a step from sound to sentence.
//         </p>
//       </div>
//     </section>
//   );
// }

// ===========================
import Link from "next/link";
import { Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-[#F3F7F5] min-h-[700px] flex items-center">
      <div className="container-custom py-24">
        <div
          className="
          grid
          lg:grid-cols-2
          gap-14
          items-center
        "
        >
          {/* Left Content */}

          <div>
            <p
              className="
              text-xs
              uppercase
              tracking-[0.15em]
              text-[#2B6F6A]
              font-medium
            "
            >
              Speech-Language Pathology · Children & Adults
            </p>

            <h1
              className="
              text-5xl
              md:text-6xl
              leading-tight
              mt-5
              font-serif
              text-[#1B4A47]
              "
            >
              Find your voice,
              <br />
              one sound at a time.
            </h1>

            <p
              className="
              mt-6
              text-base
              md:text-lg
              text-gray-600
              max-w-xl
              "
            >
              Personalized speech and language therapy for kids and adults —
              from first words to clear conversations, we help you communicate
              with confidence.
            </p>

            <div
              className="
              flex
              flex-col
              sm:flex-row
              gap-4
              mt-10
              "
            >
              <Link
                href="/appointment"
                className="
                bg-[#E2984F]
                text-white
                rounded-full
                px-7
                py-3
                text-center
                font-semibold
                "
              >
                Request Appointment
              </Link>

              <a
                href="tel:+15551234567"
                className="
                border
                border-[#2B6F6A]
                text-[#2B6F6A]
                rounded-full
                px-7
                py-3
                flex
                justify-center
                items-center
                gap-2
                "
              >
                <Phone size={16} />
                Call Office
              </a>
            </div>
          </div>

          {/* Wave Card */}

          <div>
            <div
              className="
              bg-white
              border
              border-[#CFE0DA]
              rounded-2xl
              p-6
              md:p-10
              h-[330px]
              flex
              items-end
              gap-[3px]
              shadow-sm
              "
            >
              {Array.from({ length: 42 }).map((_, i) => (
                <div
                  key={i}
                  className="
                  flex-1
                  rounded
                  bg-gradient-to-t
                  from-[#2B6F6A]
                  to-[#E2984F]
                  wave-bar
                  "
                  style={{
                    height: `${30 + Math.abs(Math.sin(i * 1.7)) * 55}%`,
                    animationDelay: `${i * 0.045}s`,
                    animationDuration: `${1.8 + (i % 5) * 0.15}s`,
                  }}
                />
              ))}
            </div>

            <p
              className="
              text-center
              text-sm
              mt-5
              text-gray-500
              "
            >
              Every session is a step from sound to sentence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
