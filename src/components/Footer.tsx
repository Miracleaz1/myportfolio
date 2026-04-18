import { Linkedin, Mail, Phone } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 dark:bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Miracle Azenabor
            </h3>
            <p className="text-slate-400">
              Software Developer and AI Automation Builder based in Lagos, Nigeria.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#blog" className="hover:text-blue-400 transition-colors">Highlights</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Focus Areas</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Frontend Development</li>
              <li>AI Automation Workflows</li>
              <li>API Integration</li>
              <li>Inventory Process Optimization</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/miracle-azenabor-30b7282b7"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-800 hover:bg-blue-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a href="mailto:azenabormiracle2020@gmail.com" className="p-2 rounded-lg bg-slate-800 hover:bg-blue-500 transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
              <a href="tel:+2349151651214" className="p-2 rounded-lg bg-slate-800 hover:bg-blue-500 transition-colors" aria-label="Phone">
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-400">
          <p>&copy; {currentYear} Miracle Azenabor. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="mailto:azenabormiracle2020@gmail.com" className="hover:text-blue-400 transition-colors">Email</a>
            <a href="https://www.linkedin.com/in/miracle-azenabor-30b7282b7" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
