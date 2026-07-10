export default function BlogPreview() {
  const posts = [
    "5 Ways to Support Speech Development at Home",
    "Understanding Apraxia of Speech",
    "When Should You See a Speech Pathologist?",
  ];

  return (
    <section className="py-20">
      <div className="container-custom">
        <p className="text-sm uppercase tracking-widest text-[#2B6F6A]">
          Resources & Blog
        </p>

        <h2
          className="
mt-3
text-3xl
font-serif
text-[#1B4A47]
"
        >
          Guidance you can use between sessions.
        </h2>

        <div
          className="
grid
md:grid-cols-3
gap-6
mt-10
"
        >
          {posts.map((post) => (
            <div
              key={post}
              className="
bg-white
border
rounded-xl
p-6
hover:border-[#2B6F6A]
"
            >
              <h3 className="font-semibold text-[#1B4A47]">{post}</h3>

              <p className="mt-3 text-gray-600 text-sm">
                Learn helpful tips and strategies.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
