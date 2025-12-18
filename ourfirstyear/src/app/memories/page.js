const memories = [
  { src: "/m1.jpg", text: "This smile still gets me." },
  { src: "/m2.jpg", text: "Nothing special. Just us." },
  { src: "/m3.jpg", text: "I remember this day." },
];

export default function Memories() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        {memories.map((m, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-sm p-4"
          >
            <img
              src={m.src}
              alt=""
              className="rounded-lg mb-3"
            />
            <p className="text-sm opacity-70">{m.text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
