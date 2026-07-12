export default function AppointmentForm() {
  return (
    <form className="space-y-4">
      <input className="w-full border p-3 rounded-lg" placeholder="Name" />

      <input
        className="w-full border p-3 rounded-lg"
        placeholder="Email"
        type="email"
      />

      <input className="w-full border p-3 rounded-lg" placeholder="Phone" />

      <input type="date" className="w-full border p-3 rounded-lg" />

      <textarea
        className="w-full border p-3 rounded-lg"
        placeholder="Message"
        rows={4}
      />

      <button className="bg-[#E2984F] text-white px-6 py-3 rounded-lg hover:opacity-90">
        Request Appointment
      </button>
    </form>
  );
}
