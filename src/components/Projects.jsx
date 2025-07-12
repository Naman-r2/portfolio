import { useEffect, useState } from 'react'

export default function Projects() {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/Naman-r2/repos')
      .then(res => res.json())
      .then(data => setRepos(data.filter(r => !r.fork).slice(0, 6)))
  }, [])

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {repos.map(repo => (
          <a key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer"
             className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">{repo.name}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{repo.description}</p>
          </a>
        ))}
      </div>
    </section>
  )
}
