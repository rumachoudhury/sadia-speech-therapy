import AppointmentForm from "@/components/AppointmentForm";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AppointmentPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        Request Appointment
      </h1>

      <AppointmentForm />
    </main>
  );
}
