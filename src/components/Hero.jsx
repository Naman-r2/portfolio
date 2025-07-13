export default function Hero() {
  return (
    <section className="h-[90vh] flex flex-col justify-center items-center text-center bg-gradient-to-br from-indigo-700 via-purple-700 to-fuchsia-600 text-white px-6 transition-all duration-500 ease-in-out">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg transition-all duration-500 hover:scale-105">
        Naman Sharma
      </h1>

      <p className="text-xl md:text-2xl mt-4 max-w-2xl font-medium text-white/80 backdrop-blur-sm">
        Python • C++ • Data Structures & Algorithms • AWS • PostgreSQL • FastAPI
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-2xl shadow-lg hover:scale-105 hover:bg-indigo-100 transition-all"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="border border-white text-white px-6 py-3 rounded-2xl hover:bg-white hover:text-indigo-700 transition-all"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}

