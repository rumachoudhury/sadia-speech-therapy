export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto p-8 text-center">
        <p>
          © {new Date().getFullYear()} Sadia Speech Therapy. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
