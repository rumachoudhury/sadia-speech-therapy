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
        <div
          className="
h-[420px]
rounded-xl
bg-[#E3EEEA]
flex
items-center
justify-center
text-gray-500
"
        >
          Photo of Sadia
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
