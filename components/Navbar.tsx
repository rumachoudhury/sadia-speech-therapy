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
//       <div className="max-w-[1180px] mx-auto px-4 md:px-6">
//         <div className="h-20 flex items-center justify-between">
//           {/* Logo */}
//           <Link
//             href="/"
//             className="text-lg md:text-xl font-semibold text-[#1B4A47] whitespace-nowrap"
//           >
//             Clarity Speech & Language
//           </Link>

//           {/* Desktop Menu */}
//           <nav className="hidden xl:flex items-center gap-4">
//             {links.map((link) => (
//               <Link
//                 key={link}
//                 href={`/${link.toLowerCase().replace(" ", "-")}`}
//                 className="text-sm text-[#1C2B28] hover:text-[#2B6F6A] transition"
//               >
//                 {link}
//               </Link>
//             ))}
//           </nav>

//           {/* Desktop Buttons */}
//           <div className="hidden lg:flex items-center gap-3">
//             <a
//               href="tel:+15551234567"
//               className="
//               border
//               border-[#2B6F6A]
//               text-[#2B6F6A]
//               rounded-full
//               px-4
//               py-2
//               flex
//               items-center
//               gap-2
//               text-sm
//               hover:bg-[#2B6F6A]
//               hover:text-white
//               transition
//               "
//             >
//               <Phone size={15} />
//               (555) 123-4567
//             </a>

//             <Link
//               href="/appointment"
//               className="
//               bg-[#E2984F]
//               text-white
//               rounded-full
//               px-5
//               py-2
//               text-sm
//               hover:bg-[#cf8340]
//               transition
//               "
//             >
//               Appointment
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}

//           <button onClick={() => setOpen(!open)} className="lg:hidden">
//             {open ? <X size={26} /> : <Menu size={26} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}

//       {open && (
//         <div className="lg:hidden bg-white border-t">
//           <nav className="flex flex-col gap-5 px-5 py-6">
//             {links.map((link) => (
//               <Link
//                 key={link}
//                 onClick={() => setOpen(false)}
//                 href={`/${link.toLowerCase().replace(" ", "-")}`}
//                 className="text-[#1C2B28]"
//               >
//                 {link}
//               </Link>
//             ))}

//             <a href="tel:+15551234567" className="text-[#2B6F6A] font-semibold">
//               📞 Call Office
//             </a>

//             <Link
//               href="/appointment"
//               className="
//               bg-[#E2984F]
//               text-white
//               text-center
//               rounded-full
//               py-3
//               "
//             >
//               Request Appointment
//             </Link>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }
// ============================
// "use client";

// import Link from "next/link";
// import { Phone, Menu, X, Activity } from "lucide-react";
// import { useState } from "react";

// const links = [
//   "Home",
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
//     <header
//       className="
//       sticky
//       top-0
//       z-50
//       bg-[#F3F7F5]/90
//       backdrop-blur-md
//       border-b
//       border-[#CFE0DA]
//       "
//     >
//       <div
//         className="
//         max-w-[1180px]
//         mx-auto
//         px-6
//         py-4
//         flex
//         items-center
//         justify-between
//         "
//       >
//         {/* Logo */}

//         <Link
//           href="/"
//           className="
//           flex
//           items-center
//           gap-3
//           font-serif
//           text-xl
//           font-semibold
//           text-[#1B4A47]
//           "
//         >
//           <div
//             className="
//             w-10
//             h-10
//             rounded-full
//             border-2
//             border-[#2B6F6A]
//             flex
//             items-center
//             justify-center
//             bg-white
//             "
//           >
//             <Activity size={22} className="text-[#E2984F]" />
//           </div>

//           <div className="leading-tight">
//             <p>Clarity Speech</p>
//             <p>& Language</p>
//           </div>
//         </Link>

//         {/* Desktop Navigation */}

//         <nav
//           className="
//           hidden
//           2xl:flex
//           items-center
//           gap-5
//           "
//         >
//           {links.map((link) => (
//             <Link
//               key={link}
//               href={
//                 link === "Home"
//                   ? "/"
//                   : `/${link.toLowerCase().replace(" ", "-")}`
//               }
//               className="
//               text-sm
//               text-[#1C2B28]
//               hover:text-[#2B6F6A]
//               transition
//               "
//             >
//               {link}
//             </Link>
//           ))}
//         </nav>

//         {/* Desktop CTA */}

//         <div
//           className="
//           hidden
//           lg:flex
//           items-center
//           gap-3
//           "
//         >
//           <a
//             href="tel:+15551234567"
//             className="
//             flex
//             items-center
//             gap-2
//             border
//             border-[#2B6F6A]
//             text-[#2B6F6A]
//             rounded-full
//             px-4
//             py-2
//             text-sm
//             font-medium
//             hover:bg-[#2B6F6A]
//             hover:text-white
//             transition
//             "
//           >
//             <Phone size={15} />
//             (555) 123-4567
//           </a>

//           <Link
//             href="/appointment"
//             className="
//             bg-[#E2984F]
//             text-white
//             rounded-full
//             px-5
//             py-2
//             text-sm
//             font-semibold
//             hover:bg-[#cf8340]
//             transition
//             "
//           >
//             Appointment
//           </Link>
//         </div>

//         {/* Mobile Button */}

//         <button
//           onClick={() => setOpen(!open)}
//           className="
//           lg:hidden
//           text-[#1B4A47]
//           "
//         >
//           {open ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}

//       {open && (
//         <div
//           className="
//           lg:hidden
//           bg-white
//           border-t
//           border-[#CFE0DA]
//           "
//         >
//           <nav
//             className="
//             flex
//             flex-col
//             gap-5
//             px-6
//             py-6
//             "
//           >
//             {links.map((link) => (
//               <Link
//                 key={link}
//                 onClick={() => setOpen(false)}
//                 href={
//                   link === "Home"
//                     ? "/"
//                     : `/${link.toLowerCase().replace(" ", "-")}`
//                 }
//                 className="
//                 text-[#1C2B28]
//                 hover:text-[#2B6F6A]
//                 "
//               >
//                 {link}
//               </Link>
//             ))}

//             <a
//               href="tel:+15551234567"
//               className="
//               flex
//               items-center
//               gap-2
//               text-[#2B6F6A]
//               font-semibold
//               "
//             >
//               <Phone size={16} />
//               Call Office
//             </a>

//             <Link
//               href="/appointment"
//               className="
//               bg-[#E2984F]
//               text-white
//               text-center
//               rounded-full
//               py-3
//               font-semibold
//               "
//             >
//               Request Appointment
//             </Link>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }
// ===================================
"use client";

import Link from "next/link";
import { Phone, Menu, X, Activity } from "lucide-react";
import { useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Conditions", href: "/conditions" },
  { name: "New Patients", href: "/new-patients" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
      sticky top-0 z-50
      bg-[#F3F7F5]/90
      backdrop-blur-md
      border-b border-[#CFE0DA]
    "
    >
      <div
        className="
        max-w-[1180px]
        mx-auto
        px-6
        py-4
        flex
        items-center
        justify-between
      "
      >
        {/* Logo */}
        <Link
          href="/"
          className="
          flex items-center gap-3
          font-serif
          text-xl
          font-semibold
          text-[#1B4A47]
          "
        >
          <div
            className="
            w-10 h-10
            rounded-full
            border-2
            border-[#2B6F6A]
            flex items-center justify-center
            bg-white
          "
          >
            <Activity size={22} className="text-[#E2984F]" />
          </div>

          <div className="leading-tight">
            <p>Clarity Speech</p>
            <p>& Language</p>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav
          className="
          hidden
          xl:flex
          items-center
          gap-6
        "
        >
          {links.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="
              text-sm
              text-[#1C2B28]
              hover:text-[#2B6F6A]
              transition
              "
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div
          className="
          hidden
          lg:flex
          items-center
          gap-3
        "
        >
          <a
            href="tel:+15551234567"
            className="
            flex
            items-center
            gap-2
            border
            border-[#2B6F6A]
            text-[#2B6F6A]
            rounded-full
            px-4
            py-2
            text-sm
            "
          >
            <Phone size={15} />
            Call
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
            font-semibold
            "
          >
            Appointment
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="xl:hidden text-[#1B4A47]"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}

      {open && (
        <div
          className="
          xl:hidden
          bg-white
          border-t
          border-[#CFE0DA]
          px-6 py-6
          "
        >
          <div className="flex flex-col gap-5">
            {links.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="
                  text-[#1C2B28]
                  "
              >
                {item.name}
              </Link>
            ))}

            <a
              href="tel:+15551234567"
              className="
              text-[#2B6F6A]
              font-semibold
              "
            >
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
          </div>
        </div>
      )}
    </header>
  );
}
