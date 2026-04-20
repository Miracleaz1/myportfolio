import { useEffect, useState } from 'react'
import { projects, type Project } from '../data/projects'
import { Github, ExternalLink, X, Search, Star, ChevronLeft, ChevronRight } from 'lucide-react'

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [query, setQuery] = useState('')
  const [selectedTech, setSelectedTech] = useState('All')
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)
  const [favorites, setFavorites] = useState<number[]>([])
  const [expandedIds, setExpandedIds] = useState<number[]>([])
  const [activeMediaIndex, setActiveMediaIndex] = useState(0)

  const techOptions = ['All', ...new Set(projects.flatMap((project) => project.technologies))]

  const filteredProjects = projects.filter((project) => {
    const q = query.trim().toLowerCase()
    const matchesQuery =
      q.length === 0 ||
      project.title.toLowerCase().includes(q) ||
      project.description.toLowerCase().includes(q) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(q))

    const matchesTech = selectedTech === 'All' || project.technologies.includes(selectedTech)
    const matchesFavorite = !showFavoritesOnly || favorites.includes(project.id)

    return matchesQuery && matchesTech && matchesFavorite
  })

  useEffect(() => {
    if (!activeProject) {
      return
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveProject(null)
        setActiveMediaIndex(0)
      }

      if (event.key === 'ArrowRight') {
        setActiveMediaIndex((current) => {
          const mediaLength = activeProject.media.length
          return mediaLength === 0 ? current : (current + 1) % mediaLength
        })
      }

      if (event.key === 'ArrowLeft') {
        setActiveMediaIndex((current) => {
          const mediaLength = activeProject.media.length
          return mediaLength === 0 ? current : (current - 1 + mediaLength) % mediaLength
        })
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [activeProject])

  useEffect(() => {
    if (activeProject) {
      setActiveMediaIndex(0)
    }
  }, [activeProject])

  useEffect(() => {
    if (!activeProject || activeProject.media.length <= 1) {
      return
    }

    const intervalId = window.setInterval(() => {
      setActiveMediaIndex((current) => (current + 1) % activeProject.media.length)
    }, 5000)

    return () => window.clearInterval(intervalId)
  }, [activeProject])

  useEffect(() => {
    const rawFavorites = localStorage.getItem('portfolio-project-favorites')
    if (!rawFavorites) {
      return
    }

    try {
      const parsed = JSON.parse(rawFavorites)
      if (Array.isArray(parsed)) {
        setFavorites(parsed.filter((value) => typeof value === 'number'))
      }
    } catch {
      setFavorites([])
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('portfolio-project-favorites', JSON.stringify(favorites))
  }, [favorites])

  const toggleFavorite = (id: number) => {
    setFavorites((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]))
  }

  const toggleExpanded = (id: number) => {
    setExpandedIds((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]))
  }

  const handleNextMedia = () => {
    if (!activeProject || activeProject.media.length === 0) {
      return
    }

    setActiveMediaIndex((current) => (current + 1) % activeProject.media.length)
  }

  const handlePrevMedia = () => {
    if (!activeProject || activeProject.media.length === 0) {
      return
    }

    setActiveMediaIndex((current) => (current - 1 + activeProject.media.length) % activeProject.media.length)
  }

  return (
    <section id="projects" className="py-20 px-4 bg-slate-50 dark:bg-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.12),transparent_55%)]" />
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Featured Projects</h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          Product-style builds focused on measurable outcomes, real users, and automation that ships.
        </p>

        <div className="mb-8 grid gap-4 md:grid-cols-[1.3fr_1fr_auto] items-center">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search projects or technologies"
              className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <select
            value={selectedTech}
            onChange={(event) => setSelectedTech(event.target.value)}
            className="rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {techOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>

          <button
            type="button"
            onClick={() => setShowFavoritesOnly((current) => !current)}
            className={`rounded-lg border px-4 py-2.5 text-sm transition-colors ${showFavoritesOnly ? 'border-amber-400 bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300' : 'border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700'}`}
          >
            {showFavoritesOnly ? 'Showing Favorites' : 'Show Favorites'}
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const isFavorite = favorites.includes(project.id)
            const isExpanded = expandedIds.includes(project.id)
            const shortDescription =
              project.description.length > 110 ? `${project.description.slice(0, 110).trim()}...` : project.description

            return (
            <div
              key={project.id}
              className="project-spotlight-card rounded-2xl overflow-hidden shadow-lg group"
            >
              <div className="relative overflow-hidden h-48">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900/70 via-slate-900/0 to-transparent" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute z-20 left-4 top-4 rounded-full bg-white/85 dark:bg-slate-900/85 px-3 py-1 text-xs font-semibold text-slate-800 dark:text-slate-200">
                  Case Study
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <button
                    type="button"
                    onClick={() => toggleFavorite(project.id)}
                    className={`p-2 rounded-lg border transition-colors ${isFavorite ? 'border-amber-400 text-amber-500 bg-amber-50 dark:bg-amber-500/10' : 'border-slate-300 dark:border-slate-600 text-slate-500 hover:text-amber-500 hover:border-amber-400'}`}
                    aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                  >
                    <Star size={16} fill={isFavorite ? 'currentColor' : 'none'} />
                  </button>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {isExpanded ? project.description : shortDescription}
                </p>

                {project.description.length > 110 ? (
                  <button
                    type="button"
                    onClick={() => toggleExpanded(project.id)}
                    className="mb-4 text-sm text-cyan-600 dark:text-cyan-300 hover:underline"
                  >
                    {isExpanded ? 'Read less' : 'Read more'}
                  </button>
                ) : null}

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-sm mb-5 text-emerald-700 dark:text-emerald-300 font-medium">
                  {project.impact}
                </p>

                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all hover:-translate-y-0.5"
                  >
                    <ExternalLink size={16} />
                    Visit
                  </a>
                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-2 border border-cyan-500 text-cyan-600 dark:text-cyan-300 hover:bg-cyan-50 dark:hover:bg-slate-600 px-4 py-2 rounded-lg transition-colors"
                  >
                    View Details
                  </button>
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 border border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-slate-600 px-4 py-2 rounded transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          )})}
        </div>

        {filteredProjects.length === 0 ? (
          <p className="text-center mt-8 text-slate-500 dark:text-slate-400">
            No projects matched your filters. Try a different keyword or tech stack.
          </p>
        ) : null}
      </div>

      {activeProject ? (
        <div
          className="fixed inset-0 z-[60] bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => {
            setActiveProject(null)
            setActiveMediaIndex(0)
          }}
          role="presentation"
        >
          <div
            className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-300 uppercase tracking-wide mb-2">
                    Case Study
                  </p>
                  <h3 id="project-modal-title" className="text-2xl md:text-3xl font-bold">
                    {activeProject.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setActiveProject(null)
                    setActiveMediaIndex(0)
                  }}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  aria-label="Close case study"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-6">
                {activeProject.media.length > 0 ? (
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Project Gallery</h4>
                    <div className="floating-media-frame relative mx-auto overflow-hidden rounded-2xl">
                      <img
                        src={activeProject.media[activeMediaIndex].src}
                        alt={activeProject.media[activeMediaIndex].alt}
                        className="w-full h-64 md:h-80 object-cover"
                      />
                      {activeProject.media.length > 1 ? (
                        <>
                          <button
                            type="button"
                            onClick={handlePrevMedia}
                            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/85 dark:bg-slate-900/85 hover:bg-white dark:hover:bg-slate-800"
                            aria-label="Previous image"
                          >
                            <ChevronLeft size={18} />
                          </button>
                          <button
                            type="button"
                            onClick={handleNextMedia}
                            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/85 dark:bg-slate-900/85 hover:bg-white dark:hover:bg-slate-800"
                            aria-label="Next image"
                          >
                            <ChevronRight size={18} />
                          </button>
                        </>
                      ) : null}
                    </div>

                    {activeProject.media.length > 1 ? (
                      <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
                        {activeProject.media.map((media, index) => (
                          <button
                            key={media.src}
                            type="button"
                            onClick={() => setActiveMediaIndex(index)}
                            className={`shrink-0 rounded-md border-2 overflow-hidden ${index === activeMediaIndex ? 'border-cyan-500' : 'border-transparent'}`}
                            aria-label={`Open gallery image ${index + 1}`}
                          >
                            <img src={media.src} alt={media.alt} className="h-14 w-20 object-cover" />
                          </button>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ) : null}

                <div>
                  <h4 className="font-semibold text-lg mb-2">Problem</h4>
                  <p className="text-slate-700 dark:text-slate-300">{activeProject.caseStudy.problem}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Approach</h4>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300 list-disc pl-5">
                    {activeProject.caseStudy.approach.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Result</h4>
                  <p className="text-emerald-700 dark:text-emerald-300 font-medium">{activeProject.caseStudy.result}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {activeProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <a
                    href={activeProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all hover:-translate-y-0.5"
                  >
                    <ExternalLink size={16} />
                    Open Live Project
                  </a>
                  {activeProject.github ? (
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 border border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-slate-600 px-4 py-2 rounded-lg transition-colors"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}
