export default function ConditionsSection() {
  const conditions = [
    "Apraxia of Speech",
    "Articulation Disorders",
    "Stuttering",
    "Language Delay",
    "Autism Spectrum Communication",
    "Aphasia",
    "Voice Disorders",
    "Dysphagia",
    "Auditory Processing",
    "Social Communication",
    "Cognitive Communication Disorders",
    "Accent Modification",
  ];

  return (
    <section className="bg-[#1B4A47] py-20">
      <div className="container-custom">
        <span className="text-sm uppercase tracking-widest text-white">
          Conditions Treated
        </span>

        <h2 className="mt-3 text-3xl md:text-4xl font-serif text-white">
          Whatever&apos;s getting in the way of being understood.
        </h2>

        <div className="flex flex-wrap gap-3 mt-10">
          {conditions.map((item, index) => (
            <span
              key={item}
              className={`
              px-5
              py-2
              rounded-full
              border
              text-sm
              ${
                index === 0 || index === 4
                  ? "bg-[#E2984F] border-[#E2984F] text-white"
                  : "border-white/40 text-white"
              }
              `}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
