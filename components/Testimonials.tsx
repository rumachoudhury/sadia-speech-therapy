// import Image from "next/image";
// import { Star } from "lucide-react";

// export default function Testimonials() {
//   return (
//     <section className="bg-[#E3EEEA] py-20">
//       <div className="max-w-4xl mx-auto px-6 text-center">
//         {/* 5 Stars */}
//         <div className="flex justify-center gap-1 mb-6">
//           {Array.from({ length: 5 }).map((_, index) => (
//             <Star
//               key={index}
//               className="w-6 h-6 fill-[#E2984F] text-[#E2984F]"
//             />
//           ))}
//         </div>

//         {/* User Image */}
//         <div className="flex justify-center mb-6">
//           <Image
//             src="/images/testimonials/client-1.jpg"
//             alt="Happy Client"
//             width={80}
//             height={80}
//             className="rounded-full object-cover border-4 border-white shadow-lg"
//           />
//         </div>

//         {/* Quote */}
//         <blockquote className="font-serif text-2xl md:text-4xl leading-relaxed text-[#1B4A47]">
//           “Sadia created a welcoming environment where our son felt comfortable
//           and confident. Within a few months, he progressed from using single
//           words to speaking in full sentences. Every session was encouraging and
//           tailored to his needs.”
//         </blockquote>

//         {/* Client */}
//         <div className="mt-8">
//           <h4 className="text-lg font-semibold text-[#1B4A47]">Sarah M.</h4>

//           <p className="text-gray-600">
//             Parent of a Pediatric Speech Therapy Client
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// =======================================

import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    image: "/images/photo-1438761681033-6461ffad8d80.avif",
    name: "Sarah M.",
    role: "Parent of a Pediatric Speech Therapy Client",
    quote:
      "Sadia created a welcoming environment where our son felt comfortable and confident. His speech improved beyond our expectations, and every session was engaging and encouraging.",
  },
  {
    image: "/images/photo-1539571696357-5a69c17a67c6.avif",
    name: "Michael R.",
    role: "Adult Speech Therapy Client",
    quote:
      "The personalized approach made a tremendous difference in my communication skills. I always felt supported and motivated throughout the entire process.",
  },
  {
    image: "/images/photo-1580489944761-15a19d654956.avif",
    name: "Emily T.",
    role: "Parent of a Language Therapy Client",
    quote:
      "Our daughter looks forward to every session. We've seen remarkable progress in both her confidence and communication. We highly recommend Clarity Speech & Language.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#E3EEEA] py-20 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.2em] text-sm font-medium text-[#2B6F6A]">
            Testimonials
          </p>

          <h2 className="mt-4 text-4xl font-serif text-[#1B4A47]">
            Kind Words From Our Clients
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-2xl p-8 shadow-sm border border-[#CFE0DA]"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="w-5 h-5 fill-[#E2984F] text-[#E2984F]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 leading-7 mb-8">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* User */}
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover border-2 border-[#CFE0DA]"
                />

                <div>
                  <h4 className="font-semibold text-[#1B4A47]">
                    {testimonial.name}
                  </h4>

                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
