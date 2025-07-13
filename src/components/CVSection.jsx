export default function CVSection() {
  return (
    <section
      id="resume"  
      className="py-20 px-6 text-center bg-gray-100 dark:bg-gray-800"
    >
      <h2 className="text-3xl font-bold mb-4">Download My CV</h2>
      <a
        href="/cv/Naman_Sharma_CV.pdf"
        download
        className="mt-4 inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
      >
        Download CV
      </a>
    </section>
  );
}
