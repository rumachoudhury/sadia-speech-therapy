export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Reach out",
      description: "Request an appointment online or call the office directly.",
    },
    {
      number: "02",
      title: "Initial evaluation",
      description: "We assess your speech and language needs.",
    },
    {
      number: "03",
      title: "Personalized plan",
      description: "A therapy plan built around measurable goals.",
    },
    {
      number: "04",
      title: "Ongoing care",
      description: "Regular sessions and progress you can hear.",
    },
  ];

  return (
    <section className="py-24">
      <div className="container-custom">
        <div className="max-w-xl">
          <p className="text-sm uppercase tracking-widest text-[#2B6F6A]">
            What To Expect
          </p>

          <h2
            className="
mt-3
text-3xl
md:text-4xl
font-serif
text-[#1B4A47]
"
          >
            Getting started is simple.
          </h2>
        </div>

        <div
          className="
grid
md:grid-cols-2
lg:grid-cols-4
gap-8
mt-12
"
        >
          {steps.map((step) => (
            <div key={step.number}>
              <p className="text-[#E2984F] font-mono">{step.number}</p>

              <h3
                className="
mt-3
text-xl
font-semibold
text-[#1B4A47]
"
              >
                {step.title}
              </h3>

              <p className="mt-3 text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
