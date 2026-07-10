// "use client";

// import Link from "next/link";
// import { Phone, Menu, X } from "lucide-react";
// import { useState } from "react";

// const links = [
//   "About",
//   "Services",
//   "Conditions",
//   "New Patients",
//   "Insurance",
//   "FAQ",
//   "Blog",
//   "Contact",
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[#CFE0DA]">
//       <div className="container-custom flex items-center justify-between py-6">
//         <Link
//           href="/"
//           className="text-lg md:text-xl font-semibold text-[#1B4A47]"
//         >
//           Clarity Speech & Language
//         </Link>

//         {/* Desktop Menu */}

//         <nav className="hidden lg:flex gap-6">
//           {links.map((link) => (
//             <Link
//               key={link}
//               href={`/${link.toLowerCase().replace(" ", "-")}`}
//               className="text-sm hover:text-[#2B6F6A]"
//             >
//               {link}
//             </Link>
//           ))}
//         </nav>

//         <div className="hidden md:flex gap-3">
//           <a
//             href="tel:+15551234567"
//             className="border border-[#2B6F6A] rounded-full px-4 py-2 flex items-center gap-2 text-sm"
//           >
//             <Phone size={15} />

//             <span>(555)123-4567</span>
//           </a>

//           <Link
//             href="/appointment"
//             className="bg-[#E2984F] text-white rounded-full px-5 py-2 text-sm"
//           >
//             Appointment
//           </Link>
//         </div>

//         {/* Mobile Button */}

//         <button onClick={() => setOpen(!open)} className="lg:hidden">
//           {open ? <X /> : <Menu />}
//         </button>
//       </div>

//       {/* Mobile Menu */}

//       {open && (
//         <div className="lg:hidden bg-white border-t">
//           <nav className="flex flex-col p-5 gap-4">
//             {links.map((link) => (
//               <Link
//                 onClick={() => setOpen(false)}
//                 key={link}
//                 href={`/${link.toLowerCase().replace(" ", "-")}`}
//                 className="text-gray-700"
//               >
//                 {link}
//               </Link>
//             ))}

//             <a href="tel:+15551234567" className="text-[#2B6F6A] font-semibold">
//               📞 Call Office
//             </a>

//             <Link
//               href="/appointment"
//               className="bg-[#E2984F] text-white text-center rounded-full py-3"
//             >
//               Request Appointment
//             </Link>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }

"use client";

import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  "About",
  "Services",
  "Conditions",
  "New Patients",
  "Insurance",
  "FAQ",
  "Blog",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[#CFE0DA]">
      <div className="max-w-[1180px] mx-auto px-4 md:px-6">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg md:text-xl font-semibold text-[#1B4A47] whitespace-nowrap"
          >
            Clarity Speech & Language
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden xl:flex items-center gap-4">
            {links.map((link) => (
              <Link
                key={link}
                href={`/${link.toLowerCase().replace(" ", "-")}`}
                className="text-sm text-[#1C2B28] hover:text-[#2B6F6A] transition"
              >
                {link}
              </Link>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+15551234567"
              className="
              border 
              border-[#2B6F6A] 
              text-[#2B6F6A]
              rounded-full 
              px-4 
              py-2 
              flex 
              items-center 
              gap-2 
              text-sm
              hover:bg-[#2B6F6A]
              hover:text-white
              transition
              "
            >
              <Phone size={15} />
              (555) 123-4567
            </a>

            <Link
              href="/appointment"
              className="
              bg-[#E2984F]
              text-white
              rounded-full
              px-5
              py-2
              text-sm
              hover:bg-[#cf8340]
              transition
              "
            >
              Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}

          <button onClick={() => setOpen(!open)} className="lg:hidden">
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="lg:hidden bg-white border-t">
          <nav className="flex flex-col gap-5 px-5 py-6">
            {links.map((link) => (
              <Link
                key={link}
                onClick={() => setOpen(false)}
                href={`/${link.toLowerCase().replace(" ", "-")}`}
                className="text-[#1C2B28]"
              >
                {link}
              </Link>
            ))}

            <a href="tel:+15551234567" className="text-[#2B6F6A] font-semibold">
              📞 Call Office
            </a>

            <Link
              href="/appointment"
              className="
              bg-[#E2984F]
              text-white
              text-center
              rounded-full
              py-3
              "
            >
              Request Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
