import { ShieldCheck, Target, Heart, Users, Layers, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'

const values = [
  {
    icon: <ShieldCheck className="text-indigo-600" size={26} />,
    title: 'Security by Architecture',
    desc: 'Security isn\'t a feature we added — it\'s how the system is structured. Row-level database security means users are isolated at the query level. Balance mutations only happen through server-side RPC functions. No client-side shortcut can ever touch your balance directly.',
  },
  {
    icon: <Target className="text-emerald-600" size={26} />,
    title: 'Radical Transparency',
    desc: 'Every deposit you make is recorded. Every payout request you submit shows its real-time status. If a request is rejected, you see the reason the admin wrote. Nothing happens to your money without you knowing.',
  },
  {
    icon: <Heart className="text-rose-500" size={26} />,
    title: 'Built for Everyday Ghanaians',
    desc: 'MoVaultX was designed around how people in Ghana actually save — in cedis, via Mobile Money (MTN, Vodafone, AirtelTigo) or bank transfer, and often through group arrangements organised by a trusted admin.',
  },
  {
    icon: <Users className="text-indigo-600" size={26} />,
    title: 'Group-First Savings',
    desc: 'Groups are a core concept in MoVaultX. Organisations, associations, and cooperatives use invite codes to onboard members. An admin oversees the group — approving payouts, monitoring balances, and managing membership.',
  },
  {
    icon: <Layers className="text-emerald-600" size={26} />,
    title: 'Admin Accountability',
    desc: 'Every admin action is logged. Payout approvals and rejections are timestamped and include the admin\'s written reason where applicable. The transaction ledger is immutable — nothing can be deleted or altered.',
  },
  {
    icon: <Globe className="text-rose-500" size={26} />,
    title: 'Mobile-First, Always',
    desc: 'MoVaultX is a native mobile app (Android & iOS). The entire savings experience — from deposit to payout — is designed for the phone in your pocket, not a desktop you might not have.',
  },
]

const techStack = [
  { label: 'Platform', value: 'React Native · Expo SDK 54' },
  { label: 'Navigation', value: 'Expo Router (file-based routing)' },
  { label: 'State Management', value: 'Redux Toolkit + TanStack Query v5' },
  { label: 'Forms & Validation', value: 'React Hook Form + Zod' },
  { label: 'Backend & Auth', value: 'Supabase (PostgreSQL + Auth + RLS)' },
  { label: 'Business Logic', value: 'Supabase Edge Functions (RPCs)' },
  { label: 'Currency', value: 'GHS — stored in pesewas, displayed as ₵' },
  { label: 'Security', value: 'Row-Level Security + Atomic RPC mutations' },
  { label: 'Biometrics', value: 'Face ID / Fingerprint via Expo LocalAuth' },
  { label: 'Theme', value: 'Dark mode + Light mode + System default' },
  { label: 'Roles', value: 'User · Admin · Superadmin' },
  { label: 'KYC', value: 'Pending · Verified · Rejected' },
]

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-emerald-50 py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-indigo-100 text-indigo-700">
            About MoVaultX
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-5 leading-tight">
            We built the savings vault that <span className="text-indigo-600">puts you in control</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            MoVaultX started from a simple frustration: people save diligently, then lose confidence
            the moment they request a withdrawal. Payout processes were opaque, slow, and
            untrustworthy. We built MoVaultX to change that — every payout is reviewed by a real
            admin, every decision is visible, and your balance is never touched without your
            knowledge.
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-6 text-center">
          {[
            {
              emoji: '👤',
              title: 'Individual savers',
              desc: 'Deposit regularly, track your weekly or monthly savings growth, and request payouts whenever you need funds — on-demand or on a schedule.',
            },
            {
              emoji: '🏢',
              title: 'Organisations & groups',
              desc: 'Businesses, cooperatives, and associations can create a group with an invite code. Members join under one admin who manages payouts and group finances.',
            },
            {
              emoji: '🛡️',
              title: 'Admins',
              desc: 'Review payout requests, approve or reject with a written reason, manage users, monitor the transaction ledger, and generate platform-wide reports.',
            },
          ].map(card => (
            <div key={card.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="text-4xl mb-3">{card.emoji}</div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-14 px-4 bg-indigo-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-indigo-100 text-lg leading-relaxed">
            To make disciplined, transparent saving accessible to every Ghanaian — with the
            confidence of admin-controlled payouts, the simplicity of a clean mobile experience,
            and the security of bank-grade infrastructure.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">What we stand for</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map(v => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex gap-4"
              >
                <div className="shrink-0 mt-0.5">{v.icon}</div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">{v.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-3">Built on solid foundations</h2>
        <p className="text-gray-500 text-center mb-10 max-w-lg mx-auto">
          MoVaultX uses modern, production-grade technology. Here's exactly what's under the hood.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {techStack.map(t => (
            <div key={t.label} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">{t.label}</p>
              <p className="text-sm font-medium text-gray-800">{t.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-950 py-14 px-4 text-center text-white">
        <h2 className="text-2xl font-bold mb-3">Have questions about MoVaultX?</h2>
        <p className="text-gray-400 mb-6">Our team is based in Accra and happy to help.</p>
        <Link
          to="/contact"
          className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-colors"
        >
          Contact Us
        </Link>
      </section>
    </div>
  )
}
