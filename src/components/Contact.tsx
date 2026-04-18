import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('https://formsubmit.co/ajax/azenabormiracle2020@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio contact from ${formData.name}`,
          _captcha: 'false',
          _template: 'table'
        })
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's connect</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                I am open to software development and AI automation opportunities. Reach out and let's discuss how I can help your team build and automate faster.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Mail className="text-blue-500 mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:azenabormiracle2020@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-blue-500">
                    azenabormiracle2020@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-blue-500 mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:+2349151651214" className="text-slate-600 dark:text-slate-400 hover:text-blue-500">
                    +234 915 165 1214
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-blue-500 mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-slate-600 dark:text-slate-400">
                    Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-colors"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-colors"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-colors resize-none"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 text-white font-semibold py-3 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              <Send size={20} />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' ? (
              <p className="text-sm text-emerald-600 dark:text-emerald-300">
                Message sent successfully. I will get back to you soon.
              </p>
            ) : null}

            {submitStatus === 'error' ? (
              <p className="text-sm text-rose-600 dark:text-rose-300">
                Message failed to send. Please try again or email me directly.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  )
}
