export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-700 dark:text-slate-300">
              I am a Software Developer and AI Automation Builder with hands-on experience from internship, fellowship, capstone, and hackathon projects. I build responsive interfaces, integrate APIs, and automate business workflows.
            </p>

            <p className="text-lg text-slate-700 dark:text-slate-300">
              Beyond software development, I have strong operations and inventory management experience. I improved stock control processes and reduced daily out-of-stock issues from over 60% to less than 10% through better tracking and reconciliation.
            </p>

            <p className="text-lg text-slate-700 dark:text-slate-300">
              I enjoy solving complex problems, optimizing workflows, and delivering clean, scalable solutions that provide real value for users and teams.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="p-4 bg-white dark:bg-slate-700 rounded-lg">
                <p className="text-2xl font-bold text-blue-500">60% to &lt;10%</p>
                <p className="text-slate-600 dark:text-slate-400">Out-of-stock reduction</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-700 rounded-lg">
                <p className="text-2xl font-bold text-blue-500">4+</p>
                <p className="text-slate-600 dark:text-slate-400">Real-world projects delivered</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-white dark:bg-slate-700 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-semibold text-lg mb-2">Education</h3>
              <p className="text-slate-600 dark:text-slate-400">National Diploma in Computer Science (3.23)</p>
              <p className="text-sm text-slate-500 dark:text-slate-500">Edo State Polytechnic, 2021</p>
            </div>

            <div className="p-6 bg-white dark:bg-slate-700 rounded-lg border-l-4 border-purple-500">
              <h3 className="font-semibold text-lg mb-2">Current Role</h3>
              <p className="text-slate-600 dark:text-slate-400">Inventory Manager at La Monique Mart</p>
              <p className="text-sm text-slate-500 dark:text-slate-500">March 2025 - Present</p>
            </div>

            <div className="p-6 bg-white dark:bg-slate-700 rounded-lg border-l-4 border-pink-500">
              <h3 className="font-semibold text-lg mb-2">Training</h3>
              <p className="text-slate-600 dark:text-slate-400">3MTT NITDA Software Development and ALX AI Career Essentials</p>
              <p className="text-sm text-slate-500 dark:text-slate-500">2024 - 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
