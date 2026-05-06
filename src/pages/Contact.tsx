import { useState } from 'react'
import { Mail, MessageSquare, Send, MapPin, Clock } from 'lucide-react'

type FormState = { name: string; email: string; subject: string; message: string }
type Status = 'idle' | 'sending' | 'sent'

const faq = [
  {
    q: 'Why was my payout request rejected?',
    a: 'Admins provide a written rejection reason visible in your Payouts tab. Common reasons include mismatched account names, incomplete details, or account verification issues.',
  },
  {
    q: 'How long does a payout take?',
    a: 'After admin approval, settlement time depends on your bank or Mobile Money provider. Bank transfers typically take 1–3 business days; Mobile Money is usually same-day.',
  },
  {
    q: 'Can I cancel a payout request?',
    a: 'Yes — you can cancel a Pending request directly in the Payouts tab. Once it moves to Approved or Rejected, it can no longer be cancelled.',
  },
  {
    q: 'Does submitting a payout request deduct from my balance?',
    a: 'No. Your balance is only debited if and when an admin approves the request.',
  },
  {
    q: 'How do I join a group?',
    a: 'Ask your organisation\'s admin for the invite code and enter it in the Group Code field during registration.',
  },
  {
    q: 'What Mobile Money providers are supported?',
    a: 'MTN Mobile Money, Vodafone Cash, and AirtelTigo Money.',
  },
]

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    await new Promise(r => setTimeout(r, 1000))
    setStatus('sent')
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  const inputClass =
    'w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition'

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-emerald-50 py-16 px-4 text-center">
        <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-indigo-100 text-indigo-700">
          Get in touch
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-gray-600 max-w-md mx-auto">
          Questions about your account, a payout, or anything else — we're here and we reply fast.
        </p>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Info */}
        <div className="flex flex-col gap-5">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex gap-4 items-start">
            <div className="bg-indigo-50 text-indigo-600 rounded-lg p-2 shrink-0"><Mail size={20} /></div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-0.5">General Support</h3>
              <a href="mailto:support@movaultvx.app" className="text-sm text-indigo-600 hover:underline">
                support@movaultvx.app
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex gap-4 items-start">
            <div className="bg-indigo-50 text-indigo-600 rounded-lg p-2 shrink-0"><Mail size={20} /></div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-0.5">Privacy & Legal</h3>
              <a href="mailto:privacy@movaultvx.app" className="text-sm text-indigo-600 hover:underline">
                privacy@movaultvx.app
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex gap-4 items-start">
            <div className="bg-indigo-50 text-indigo-600 rounded-lg p-2 shrink-0"><Clock size={20} /></div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-0.5">Response Time</h3>
              <p className="text-sm text-gray-500">Within 24 hours on business days</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex gap-4 items-start">
            <div className="bg-indigo-50 text-indigo-600 rounded-lg p-2 shrink-0"><MapPin size={20} /></div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-0.5">Based in</h3>
              <p className="text-sm text-gray-500">Accra, Ghana 🇬🇭</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex gap-4 items-start">
            <div className="bg-indigo-50 text-indigo-600 rounded-lg p-2 shrink-0"><MessageSquare size={20} /></div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-0.5">In-App Support</h3>
              <p className="text-sm text-gray-500">Use the profile screen in the app to reach us directly.</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          {status === 'sent' ? (
            <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
              <div className="bg-emerald-100 text-emerald-600 rounded-full p-4">
                <Send size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Message received!</h3>
              <p className="text-gray-500 max-w-sm">
                We'll reply to <strong>{form.email || 'your email'}</strong> within 24 hours on business days.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-2 text-sm text-indigo-600 hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <h2 className="text-xl font-bold text-gray-900 mb-1">Send us a message</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Your name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Kwame Mensah"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Email address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@email.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Topic</label>
                <select name="subject" value={form.subject} onChange={handleChange} required className={inputClass}>
                  <option value="">Select a topic</option>
                  <option value="account">Account & login</option>
                  <option value="deposit">Deposit issue</option>
                  <option value="payout">Payout request</option>
                  <option value="rejection">Payout rejection query</option>
                  <option value="group">Group & invite code</option>
                  <option value="kyc">KYC verification</option>
                  <option value="privacy">Privacy or data request</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Describe your question or issue in as much detail as possible..."
                  className={inputClass}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 disabled:opacity-60 transition-colors"
              >
                {status === 'sending' ? 'Sending…' : <><Send size={15} /> Send Message</>}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Frequently asked questions</h2>
          <div className="space-y-4">
            {faq.map(item => (
              <div key={item.q} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
