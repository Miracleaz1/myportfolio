import { testimonials } from '../data/testimonials'
import { Star } from 'lucide-react'

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Professional Highlights</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 rounded-lg bg-white dark:bg-slate-700 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-slate-700 dark:text-slate-300 mb-6 italic">
                {testimonial.content}
              </p>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-600">
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {testimonial.role} | {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
