export default function ContactForm() {
  return (
    <form className="space-y-4 ">
      <input className="w-full border p-3 rounded" placeholder="Name" />

      <input className="w-full border p-3 rounded" placeholder="Email" />

      <textarea
        className="w-full border p-3 rounded"
        placeholder="Your Message"
      />

      <button className="  bg-[#E2984F] text-white px-6 py-3 rounded">
        Send Message
      </button>
    </form>
  );
}
