// type ServiceCardProps = {
//   title: string;
//   description: string;
// };

// export default function ServiceCard({ title, description }: ServiceCardProps) {
//   return (
//     <div className="rounded-xl border p-6 shadow-sm hover:shadow-md transition">
//       <h2 className="text-xl font-semibold text-blue-600">{title}</h2>

//       <p className="mt-3 text-gray-600">{description}</p>
//     </div>
//   );
// }
// ============================
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <div
      className="
      bg-white
      border
      border-[#CFE0DA]
      rounded-xl
      p-6
      transition
      hover:-translate-y-1
      hover:border-[#2B6F6A]
      "
    >
      {Icon && (
        <div
          className="
          w-11
          h-11
          rounded-lg
          bg-[#E3EEEA]
          flex
          items-center
          justify-center
          mb-5
          "
        >
          <Icon size={22} className="text-[#2B6F6A]" />
        </div>
      )}

      <h3
        className="
        text-lg
        font-semibold
        text-[#1B4A47]
        "
      >
        {title}
      </h3>

      <p
        className="
        mt-3
        text-sm
        text-gray-600
        leading-6
        "
      >
        {description}
      </p>
    </div>
  );
}
