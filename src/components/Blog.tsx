import { blogPosts } from '../data/blog'
import { ArrowRight, Calendar, Clock } from 'lucide-react'

export function Blog() {
  return (
    <section id="blog" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Career Highlights</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group p-6 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <div className="flex items-center gap-4 mb-3 text-sm text-slate-600 dark:text-slate-400">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded text-xs font-medium">
                  {post.category}
                </span>
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  {new Date(post.date).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  {post.readTime} min read
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">
                {post.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                {post.excerpt}
              </p>

              {post.link ? (
                <a
                  href={post.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors"
                >
                  View Project
                  <ArrowRight size={16} />
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
