import { ArrowRight, Linkedin, Mail } from 'lucide-react'
import profilePhoto from '../image/WhatsApp Image 2026-04-18 at 20.02.16.jpeg'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-16 px-4 min-h-screen flex items-center">
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />
      <div className="hero-grid-overlay" aria-hidden="true" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 fade-up" style={{ animationDelay: '120ms' }}>
            <div>
              <p className="inline-flex items-center rounded-full border border-blue-300/60 bg-blue-100/70 dark:bg-blue-900/30 px-4 py-1 text-sm font-medium text-blue-700 dark:text-blue-200 mb-4">
                Available for Software and Automation Roles
              </p>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                Hi, I'm Miracle Azenabor
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 mt-4">
                Software Developer and AI Automation Builder
              </p>
            </div>

            <p className="text-lg text-slate-700 dark:text-slate-300">
              I build responsive web apps and real-time automation systems using JavaScript, Next.js, Make.com, N8N, Supabase, APIs, and Telegram bots.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
              <div className="metric-chip">
                <span className="metric-chip-value">60%+ to &lt;10%</span>
                <span className="metric-chip-label">Stock Issue Drop</span>
              </div>
              <div className="metric-chip">
                <span className="metric-chip-value">4+</span>
                <span className="metric-chip-label">Deployed Projects</span>
              </div>
              <div className="metric-chip col-span-2 sm:col-span-1">
                <span className="metric-chip-value">1</span>
                <span className="metric-chip-label">Published Automation Agent</span>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="#projects" className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-500/20">
                View My Work
                <ArrowRight size={20} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 border-2 border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-slate-800 px-6 py-3 rounded-lg transition-all hover:-translate-y-0.5">
                Get In Touch
              </a>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/miracle-azenabor-30b7282b7"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a href="mailto:azenabormiracle2020@gmail.com" className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors" aria-label="Email">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="hidden md:flex justify-center fade-up" style={{ animationDelay: '280ms' }}>
            <div className="w-fit rounded-3xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 p-2 shadow-2xl shadow-cyan-500/20">
              <img
                src={profilePhoto}
                alt="Miracle Azenabor"
                className="profile-cutout block h-auto w-auto max-h-[560px] max-w-full rounded-xl object-contain object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
