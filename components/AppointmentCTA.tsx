export default function AppointmentCTA() {
  return (
    <section className="py-20">
      <div
        className="
container-custom
bg-[#2B6F6A]
rounded-2xl
p-8
md:p-12
grid
lg:grid-cols-2
gap-10
items-center
"
      >
        <div>
          <h2
            className="
text-3xl
font-serif
text-white
"
          >
            Ready when you are.
          </h2>

          <p className="mt-4 text-[#DCEFEA]">
            Request an appointment and take the first step toward clearer
            communication.
          </p>
        </div>

        <form className="space-y-3">
          <input placeholder="Full name" className="w-full rounded-lg p-3" />

          <input placeholder="Phone number" className="w-full rounded-lg p-3" />

          <button
            className="
w-full
bg-[#E2984F]
text-white
rounded-lg
py-3
font-semibold
"
          >
            Request Appointment
          </button>
        </form>
      </div>
    </section>
  );
}
