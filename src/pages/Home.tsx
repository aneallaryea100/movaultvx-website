import { Link } from 'react-router-dom'
import { useAppModal } from '../components/ComingSoonModal'
import {
  ShieldCheck,
  TrendingUp,
  Banknote,
  Users,
  CheckCircle2,
  ArrowRight,
  Lock,
  Smartphone,
  Clock,
  Bell,
  BarChart3,
  Fingerprint,
} from 'lucide-react'

const features = [
  {
    icon: <TrendingUp className="text-indigo-600" size={26} />,
    title: 'Savings Dashboard',
    desc: 'See your current balance, recent transactions, and quick-action tiles the moment you open the app.',
    color: 'indigo',
  },
  {
    icon: <Banknote className="text-emerald-600" size={26} />,
    title: 'Instant Deposits',
    desc: 'Choose a preset amount (₵50 – ₵1,000) or enter any custom amount. Every deposit is confirmed and logged immediately.',
    color: 'emerald',
  },
  {
    icon: <ShieldCheck className="text-indigo-600" size={26} />,
    title: 'Admin-Approved Payouts',
    desc: 'Request a payout via bank transfer or Mobile Money. An admin reviews it before your balance is ever touched.',
    color: 'indigo',
  },
  {
    icon: <Users className="text-emerald-600" size={26} />,
    title: 'Group Savings',
    desc: 'Join an organisation or savings group at signup using an invite code. Members save together under one admin.',
    color: 'emerald',
  },
  {
    icon: <BarChart3 className="text-indigo-600" size={26} />,
    title: 'Weekly, Monthly & Yearly Reports',
    desc: 'Track net savings across any period. View a breakdown of deposited vs. withdrawn with visual progress bars.',
    color: 'indigo',
  },
  {
    icon: <Fingerprint className="text-emerald-600" size={26} />,
    title: 'Biometric Login',
    desc: 'Sign in with Face ID or fingerprint on supported devices. Your account stays locked to you.',
    color: 'emerald',
  },
]

const steps = [
  {
    step: '01',
    title: 'Create an Account',
    desc: 'Sign up with your name, email, and optional group invite code. Confirm your email to activate.',
  },
  {
    step: '02',
    title: 'Make a Deposit',
    desc: 'Tap Deposit, pick a preset or enter an amount, add an optional note, and confirm.',
  },
  {
    step: '03',
    title: 'Track Your Savings',
    desc: 'Watch your balance grow. View savings stats by week, month, or year on the Reports screen.',
  },
  {
    step: '04',
    title: 'Request a Payout',
    desc: 'Choose bank transfer or Mobile Money, fill in your details, and submit. An admin reviews and approves before any funds move.',
  },
]

const payoutStatuses = [
  { label: 'Pending', color: 'bg-amber-100 text-amber-700', desc: 'Submitted, awaiting admin review' },
  { label: 'Approved', color: 'bg-green-100 text-green-700', desc: 'Approved — balance debited, in settlement' },
  { label: 'Paid', color: 'bg-purple-100 text-purple-700', desc: 'Funds sent to your bank or Mobile Money' },
  { label: 'Rejected', color: 'bg-red-100 text-red-700', desc: 'Admin rejected with a written reason' },
]

const trustPoints = [
  'Balance only debited after admin approval — never on submission',
  'Every deposit and payout permanently logged in the transaction ledger',
  'Row-level database security — your data is invisible to other users',
  'Payout rejections include a written reason from the admin',
  'In-app notifications for every deposit confirmation and payout decision',
  'KYC identity verification to protect all members',
]

export default function Home() {
  const { openModal } = useAppModal()
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-emerald-50 py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-indigo-100 text-indigo-700">
              Your trusted savings vault
            </span>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Save smarter.<br />
              <span className="text-indigo-600">Withdraw safer.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
              MoVaultX is a mobile savings app built for Ghana. Deposit in cedis, track your growth,
              and request payouts via bank transfer or Mobile Money — every withdrawal reviewed and
              approved by a trusted admin before a single pesewa moves.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button
                onClick={openModal}
                className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold text-base hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
              >
                Download the App <ArrowRight size={16} />
              </button>
              <Link
                to="/features"
                className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold text-base hover:border-indigo-400 hover:text-indigo-700 transition-colors text-center"
              >
                See All Features
              </Link>
            </div>
          </div>

          {/* App screenshot */}
          <div className="shrink-0 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-200 rounded-[2.5rem] blur-2xl opacity-40 scale-95" />
              <img
                src="/assets/app-login.jpeg"
                alt="MoVaultX app login screen"
                className="relative w-64 sm:w-72 rounded-4xl shadow-2xl border border-white/60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Strip */}
      <section className="bg-indigo-600 py-4 text-white text-center text-sm font-medium tracking-wide">
        GHS · Bank Transfer · MTN · Vodafone · AirtelTigo · Biometric Login · Admin-Approved Payouts
      </section>

      {/* Features grid */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Everything you need to save with confidence
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            From the first deposit to the final payout, MoVaultX handles every step — transparently.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(f => (
            <div
              key={f.title}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl mb-4 ${f.color === 'indigo' ? 'bg-indigo-50' : 'bg-emerald-50'}`}>
                {f.icon}
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">How it works</h2>
            <p className="text-gray-500">From sign-up to payout in four steps.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <div key={s.step} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm relative">
                <span className="text-5xl font-extrabold text-indigo-100 leading-none">{s.step}</span>
                <h3 className="text-base font-semibold text-gray-900 mt-3 mb-1">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                {i < steps.length - 1 && (
                  <ArrowRight size={16} className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payout status flow */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Your payout, every step of the way</h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Every payout request moves through a clear, visible status. You're never left wondering where your money is.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {payoutStatuses.map(s => (
            <div key={s.label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold mb-3 ${s.color}`}>
                {s.label}
              </span>
              <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-100 text-sm text-amber-800 text-center">
          <strong>Important:</strong> Your savings balance is only debited after a payout is <em>Approved</em> — never when you first submit the request.
        </div>
      </section>

      {/* Trust block */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-3xl p-10 sm:p-14 text-white grid sm:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Built on transparency</h2>
            <p className="text-indigo-200 leading-relaxed mb-6">
              We built MoVaultX so you always know the state of your money. No surprises, no hidden
              deductions — every action is logged and visible to you.
            </p>
            <ul className="space-y-2.5">
              {trustPoints.map(item => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 size={15} className="text-emerald-300 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { icon: <Lock size={20} />, label: 'Row-Level Security', sub: 'Your data, only yours' },
              { icon: <Clock size={20} />, label: 'Atomic Transactions', sub: 'Balance changes via secure server functions' },
              { icon: <Bell size={20} />, label: 'Real-Time Notifications', sub: 'Instant alerts on every action' },
              { icon: <Smartphone size={20} />, label: 'Android & iOS', sub: 'Native mobile experience' },
            ].map(stat => (
              <div key={stat.label} className="bg-white/10 rounded-xl px-5 py-4 flex items-center gap-4">
                <div className="text-indigo-200">{stat.icon}</div>
                <div>
                  <p className="font-semibold text-sm">{stat.label}</p>
                  <p className="text-xs text-indigo-300">{stat.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-950 py-16 px-4 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to start saving?</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Download MoVaultX and take the first step toward secure, transparent savings in Ghana.
        </p>
        <button
          onClick={openModal}
          className="inline-flex items-center gap-2 px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-colors"
        >
          Get Started Free <ArrowRight size={16} />
        </button>
      </section>
    </div>
  )
}
