import { Briefcase, Linkedin, Mail, Phone } from 'lucide-react'

export function QuickActions() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.2rem)] max-w-2xl">
      <div className="rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-2xl shadow-cyan-500/15 px-3 py-2">
        <div className="grid grid-cols-4 gap-2">
          <a
            href="#contact"
            className="inline-flex flex-col sm:flex-row items-center justify-center gap-1.5 px-2 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Briefcase size={17} className="text-cyan-600 dark:text-cyan-300" />
            <span className="text-[11px] sm:text-xs font-medium">Hire Me</span>
          </a>

          <a
            href="mailto:azenabormiracle2020@gmail.com"
            className="inline-flex flex-col sm:flex-row items-center justify-center gap-1.5 px-2 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Mail size={17} className="text-cyan-600 dark:text-cyan-300" />
            <span className="text-[11px] sm:text-xs font-medium">Email</span>
          </a>

          <a
            href="tel:+2349151651214"
            className="inline-flex flex-col sm:flex-row items-center justify-center gap-1.5 px-2 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Phone size={17} className="text-cyan-600 dark:text-cyan-300" />
            <span className="text-[11px] sm:text-xs font-medium">Call</span>
          </a>

          <a
            href="https://www.linkedin.com/in/miracle-azenabor-30b7282b7"
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-col sm:flex-row items-center justify-center gap-1.5 px-2 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Linkedin size={17} className="text-cyan-600 dark:text-cyan-300" />
            <span className="text-[11px] sm:text-xs font-medium">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  )
}
