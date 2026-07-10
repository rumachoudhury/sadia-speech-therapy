const conditions = [
  "Speech Delay",
  "Language Disorder",
  "Articulation Problems",
  "Voice Disorders",
  "Communication Challenges",
];

export default function ConditionsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-blue-600">Conditions Treated</h1>

      <ul className="mt-8 space-y-4">
        {conditions.map((condition) => (
          <li key={condition} className="border p-4 rounded-lg">
            {condition}
          </li>
        ))}
      </ul>
    </main>
  );
}
