import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    title: "Children Speech Therapy",
    description:
      "Helping children improve speech sounds, language skills, and communication.",
  },

  {
    title: "Adult Speech Therapy",
    description:
      "Supporting adults with speech, voice, and communication challenges.",
  },

  {
    title: "Language Therapy",
    description:
      "Improving understanding, vocabulary, and expressive language skills.",
  },
];

export default function ServicesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-blue-600">
        Speech Therapy Services
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </main>
  );
}
