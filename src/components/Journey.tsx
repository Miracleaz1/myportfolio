import { useEffect, useRef, useState } from 'react'
import { Briefcase, GraduationCap, Sparkles } from 'lucide-react'

const journey = [
  {
    period: '2016 - 2018',
    title: 'Customer Care Representative',
    org: 'Aiges Pharmacy, Benin City',
    detail:
      'Supported customers, handled product inquiries, and strengthened communication under pressure.',
    icon: Briefcase
  },
  {
    period: '2022 - 2024',
    title: 'Inventory Manager',
    org: 'City Best Mart, Lagos',
    detail:
      'Optimized stock processes and reduced daily out-of-stock issues from over 60% to under 10%.',
    icon: Briefcase
  },
  {
    period: '2024 - 2025',
    title: 'Software Development Training',
    org: '3MTT NITDA and ALX',
    detail:
      'Built practical web and automation projects with APIs, version control, and team collaboration.',
    icon: GraduationCap
  },
  {
    period: '2025 - Present',
    title: 'Software + Automation Builder',
    org: 'Projects, Fellowship, and Marketplace Publishing',
    detail:
      'Built and published an automation agent integrating Make.com, Supabase, CoinGecko, and Telegram.',
    icon: Sparkles
  }
]

function useCountUp(target: number, start: boolean, duration = 1200) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) {
      return
    }

    let frameId = 0
    const startTime = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      setValue(Math.round(progress * target))

      if (progress < 1) {
        frameId = requestAnimationFrame(tick)
      }
    }

    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [duration, start, target])

  return value
}

export function Journey() {
  const metricRef = useRef<HTMLDivElement | null>(null)
  const [metricsVisible, setMetricsVisible] = useState(false)

  const highRate = useCountUp(60, metricsVisible)
  const lowRate = useCountUp(10, metricsVisible)
  const deployedProjects = useCountUp(4, metricsVisible)
  const publishedAgents = useCountUp(1, metricsVisible)

  useEffect(() => {
    if (!metricRef.current || metricsVisible) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setMetricsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 }
    )

    observer.observe(metricRef.current)

    return () => observer.disconnect()
  }, [metricsVisible])

  return (
    <section className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Career Journey</h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          From customer operations to software and automation, every stage sharpened my ability to solve real problems.
        </p>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
          <div className="relative pl-8 md:pl-10">
            <div className="absolute left-2 md:left-3 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-cyan-500 to-emerald-500" />
            <div className="space-y-8">
              {journey.map((item, idx) => {
                const Icon = item.icon
                return (
                  <article key={item.title} className="relative fade-up" style={{ animationDelay: `${idx * 120}ms` }}>
                    <div className="absolute -left-[1.6rem] md:-left-[2rem] top-1.5 h-7 w-7 rounded-full bg-white dark:bg-slate-900 border-2 border-blue-500 flex items-center justify-center">
                      <Icon size={14} className="text-blue-500" />
                    </div>
                    <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-5">
                      <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-300 mb-1">
                        {item.period}
                      </p>
                      <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{item.org}</p>
                      <p className="text-slate-700 dark:text-slate-300">{item.detail}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>

          <div ref={metricRef} className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-gradient-to-br from-slate-50 to-cyan-50 dark:from-slate-800 dark:to-slate-900 p-6">
            <h3 className="text-2xl font-bold mb-6">Impact Snapshot</h3>
            <div className="space-y-4">
              <div className="impact-tile">
                <p className="impact-value">{highRate}%+ to &lt;{lowRate}%</p>
                <p className="impact-label">Daily out-of-stock rate after process optimization</p>
              </div>
              <div className="impact-tile">
                <p className="impact-value">{deployedProjects}+</p>
                <p className="impact-label">Web and automation products deployed to production</p>
              </div>
              <div className="impact-tile">
                <p className="impact-value">{publishedAgents} Published</p>
                <p className="impact-label">Automation agent approved on marketplace</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
