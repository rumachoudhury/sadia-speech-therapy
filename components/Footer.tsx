// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white mt-20">
//       <div className="max-w-7xl mx-auto p-8 text-center">
//         <p>
//           © {new Date().getFullYear()} Sadia Speech Therapy. All rights
//           reserved.
//         </p>
//       </div>
//     </footer>
//   );
// }
// ===================
import Link from "next/link";
import Map from "./Map";

const site = ["Home", "About", "Services", "Conditions", "Blog"];

const patients = [
  "New Patient Info",
  "Insurance & Payment",
  "FAQ",
  "Testimonials",
  "Contact",
];

export default function Footer() {
  return (
    <footer
      className="
bg-[#1B4A47]
text-[#CFE3DF]
py-16
"
    >
      <div
        className="
max-w-[1180px]
mx-auto
px-6
"
      >
        <div
          className="
grid
md:grid-cols-2
lg:grid-cols-4
gap-10
border-b
border-white/20
pb-10
"
        >
          {/* Brand */}

          <div>
            <h4
              className="
text-white
font-mono
uppercase
text-xs
mb-4
"
            >
              Clarity Speech & Language
            </h4>

            <p>
              123 Harbor Lane
              <br />
              Suite 4
              <br />
              Stony Brook, NY 11790
            </p>

            <div className="mt-5">
              <Map />
            </div>
          </div>

          {/* Site */}

          <div>
            <h4 className="text-white font-mono text-xs uppercase mb-4">
              Site
            </h4>

            {site.map((item) => (
              <Link
                key={item}
                href="#"
                className="
block
mb-2
hover:text-white
"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Patients */}

          <div>
            <h4 className="text-white font-mono text-xs uppercase mb-4">
              Patients
            </h4>

            {patients.map((item) => (
              <Link
                key={item}
                href="#"
                className="
block
mb-2
hover:text-white
"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Contact */}

          <div>
            <h4 className="text-white font-mono text-xs uppercase mb-4">
              Connect
            </h4>

            <p>(555)123-4567</p>

            <p>hello@clarityspeech.com</p>

            <div className="flex gap-3 mt-4">
              <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
                f
              </div>

              <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
                ◎
              </div>
            </div>
          </div>
        </div>

        <div
          className="
pt-6
flex
flex-wrap
justify-between
text-sm
text-[#7FA39D]
"
        >
          <span>© 2026 Clarity Speech & Language. All rights reserved.</span>

          <span>Privacy Policy · Accessibility</span>
        </div>
      </div>
    </footer>
  );
}
