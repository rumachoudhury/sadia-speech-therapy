// export default function AppointmentCTA() {
//   return (
//     <section className="py-20 ">
//       <div
//         className="
// container-custom
// bg-[#2B6F6A]
// rounded-2xl
// p-8
// md:p-12
// grid
// lg:grid-cols-2
// gap-10
// items-center
// "
//       >
//         <div>
//           <h2
//             className="
// text-3xl
// font-serif
// text-white
// "
//           >
//             Ready when you are.
//           </h2>

//           <p className="mt-4 text-[#DCEFEA]">
//             Request an appointment and take the first step toward clearer
//             communication.
//           </p>
//         </div>

//         <form className="space-y-3">
//           <input placeholder="Full name" className="w-full rounded-lg p-3" />

//           <input placeholder="Phone number" className="w-full rounded-lg p-3" />

//           <button
//             className="
// w-full
// bg-[#E2984F]
// text-white
// rounded-lg
// py-3
// font-semibold
// "
//           >
//             Request Appointment
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

// =====================

import Link from "next/link";
export default function AppointmentCTA() {
  return (
    <section className="py-24">
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        bg-[#2B6F6A]
        rounded-2xl
        p-10
        md:p-16
        grid
        md:grid-cols-2
        gap-12
        items-center
        "
      >
        {/* Text */}
        <div>
          <p
            className="
            uppercase
            tracking-[0.2em]
            text-sm
            text-[#DCEFEA]
            "
          >
            Ready when you are
          </p>

          <h2
            className="
            mt-4
            text-3xl
            md:text-5xl
            font-serif
            text-white
            leading-tight
            "
          >
            Take the first step toward clearer communication.
          </h2>

          <p
            className="
            mt-6
            text-lg
            text-[#DCEFEA]
            max-w-lg
            leading-relaxed
            "
          >
            Request an appointment and let our team create a personalized
            therapy plan designed around your goals.
          </p>
        </div>

        {/* Form */}
        <form
          className="
          bg-white
          rounded-xl
          p-6
          md:p-8
          space-y-4
          shadow-lg
          "
        >
          <input
            placeholder="Full name"
            className="
            w-full
            rounded-lg
            border
            border-gray-200
            p-4
            outline-none
            focus:border-[#2B6F6A]
            "
          />

          <input
            placeholder="Phone number"
            className="
            w-full
            rounded-lg
            border
            border-gray-200
            p-4
            outline-none
            focus:border-[#2B6F6A]
            "
          />

          <button
            type="submit"
            className="
    block
    w-full
    bg-[#E2984F]
    text-white
    text-center
    rounded-lg
    py-4
    font-semibold
    hover:bg-[#cf8340]
    transition
  "
          >
            Request Appointment
          </button>
        </form>
      </div>
    </section>
  );
}
