type ServiceCardProps = {
  title: string;
  description: string;
};

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="rounded-xl border p-6 shadow-sm hover:shadow-md transition">
      <h2 className="text-xl font-semibold text-blue-600">{title}</h2>

      <p className="mt-3 text-gray-600">{description}</p>
    </div>
  );
}
