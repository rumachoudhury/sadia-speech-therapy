"use client";

import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="
      sticky
      top-0
      z-50
      bg-white
      border-b
      border-[#CFE0DA]
      "
    >
      <div
        className="
        max-w-7xl
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
          flex
          items-center
          gap-3
          text-[#1B4A47]
          font-bold
          "
        >
          <div
            className="
            w-10
            h-10
            rounded-full
            bg-[#2B6F6A]
            text-white
            flex
            items-center
            justify-center
            "
          >
            C
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
          {links.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{
                opacity: 0,
                y: -15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.08,
                duration: 0.4,
              }}
            >
              <Link
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
            </motion.div>
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
            hover:bg-[#2B6F6A]
            hover:text-white
            transition
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
            hover:scale-105
            transition
            "
          >
            Appointment
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="
          xl:hidden
          text-[#1B4A47]
          "
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
          xl:hidden
          bg-white
          border-t
          border-[#CFE0DA]
          px-6
          py-6
          overflow-hidden
          "
          >
            <div
              className="
            flex
            flex-col
            gap-5
            "
            >
              {links.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="
                  text-[#1C2B28]
                  hover:text-[#2B6F6A]
                  "
                  >
                    {item.name}
                  </Link>
                </motion.div>
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
