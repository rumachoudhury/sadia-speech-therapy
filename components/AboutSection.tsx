import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-8 md:py-12">
      <div
        className="
container-custom
grid
lg:grid-cols-2
gap-12
items-center
"
      >
        {/* Photo */}

        <div className="relative h-[420px] w-full">
          <Image
            src="/images/premium_photo-1664910451337-27077e14c96c.avif"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="Sadia - Speech Language Pathologist"
            className="object-cover overflow-hidden  rounded-2xl"
          />
        </div>

        <div>
          <p className="text-sm uppercase tracking-widest text-[#2B6F6A]">
            About Sadia
          </p>

          <h2
            className="
mt-3
text-3xl
font-serif
text-[#1B4A47]
"
          >
            A clinician who listens first.
          </h2>

          <p className="mt-5 text-gray-600 leading-7">
            Sadia is a licensed speech-language pathologist working with
            children and adults. Her approach is patient-centered,
            evidence-based, and focused on helping every person communicate
            confidently.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <span className="bg-[#E3EEEA] px-4 py-2 rounded-lg">CCC-SLP</span>

            <span className="bg-[#E3EEEA] px-4 py-2 rounded-lg">
              M.S. Speech-Language Pathology
            </span>

            <span className="bg-[#E3EEEA] px-4 py-2 rounded-lg">
              15+ Years Experience
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
