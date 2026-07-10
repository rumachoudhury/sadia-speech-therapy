export default function AppointmentForm() {
  return (
    <form className="space-y-4">
      <input className="w-full border p-3 rounded" placeholder="Full Name" />

      <input className="w-full border p-3 rounded" placeholder="Email" />

      <input className="w-full border p-3 rounded" placeholder="Phone" />

      <input type="date" className="w-full border p-3 rounded" />

      <textarea className="w-full border p-3 rounded" placeholder="Message" />

      <button className="bg-blue-600 text-white px-6 py-3 rounded">
        Request Appointment
      </button>
    </form>
  );
}
