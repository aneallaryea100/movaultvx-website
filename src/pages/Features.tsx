import { useAppModal } from '../components/ComingSoonModal'
import {
  Home,
  TrendingUp,
  Banknote,
  FileText,
  BarChart3,
  Bell,
  Users,
  Lock,
  ShieldCheck,
  UserCog,
  Smartphone,
  Fingerprint,
  Moon,
  CreditCard,
  CheckCircle2,
  ClipboardList,
  Building2,
  Phone,
  ScanFace,
  BadgeCheck,
  ChevronRight,
} from 'lucide-react'

const userFeatures = [
  {
    icon: <Home size={20} />,
    title: 'Home Dashboard',
    desc: 'Greets you by name, shows your current balance, and surfaces your last 5 transactions at a glance. Quick-action tiles take you to Deposit, Withdraw, Goals, and Reports in one tap.',
  },
  {
    icon: <Banknote size={20} />,
    title: 'Deposits',
    desc: 'Pick a preset amount (₵50, ₵100, ₵200, ₵500, ₵1,000) or type any custom value in cedis. Add an optional description and confirm — your balance updates instantly.',
  },
  {
    icon: <TrendingUp size={20} />,
    title: 'Savings Tracker',
    desc: 'Switch between Weekly, Monthly, or Yearly view for the last 6 periods. Each period shows total deposited (green), total withdrawn (red), and net change — with a visual progress bar.',
  },
  {
    icon: <FileText size={20} />,
    title: 'Payout Requests',
    desc: 'Request an on-demand (instant) or scheduled payout. Choose bank transfer (14 Ghana banks) or Mobile Money (MTN, Vodafone, AirtelTigo). Track every request by status: Pending → Approved → Paid.',
  },
  {
    icon: <BarChart3 size={20} />,
    title: 'Financial Reports',
    desc: 'Full-picture reporting: total saved, total withdrawn, current balance, and pending payout count. Drill into a period-by-period breakdown table and your last 10 approved payouts.',
  },
  {
    icon: <Bell size={20} />,
    title: 'In-App Notifications',
    desc: 'The profile screen shows your last 10 notifications — payout approved (green), payout rejected (red), deposit confirmed (blue). Unread count badge and "mark all read" button included.',
  },
  {
    icon: <Fingerprint size={20} />,
    title: 'Biometric Login',
    desc: 'Enable Face ID or fingerprint login from the profile screen. Automatically detects your device\'s biometric capabilities (or shows "not available" gracefully).',
  },
  {
    icon: <Moon size={20} />,
    title: 'Dark Mode',
    desc: 'Full dark and light theme support. Toggle manually or set to "Follow system" — the app adapts to your device\'s appearance setting automatically.',
  },
  {
    icon: <BadgeCheck size={20} />,
    title: 'KYC Status',
    desc: 'Your profile shows a KYC badge: Pending (default), Verified, or Rejected. Admins can flag accounts; verified members unlock full platform access.',
  },
  {
    icon: <Users size={20} />,
    title: 'Group Membership',
    desc: 'At registration, enter your organisation\'s invite code to join a group. Groups let admins manage members by organisation and track group-level savings.',
  },
]

const payoutMethods = [
  {
    icon: <Building2 size={20} />,
    label: 'Bank Transfer',
    detail: '14 major Ghana banks supported, including GCB, Ecobank, Fidelity, Absa, Zenith, UMB, and more.',
    fields: ['Bank name (chip selector)', 'Account holder name', 'Account number (with double-check hint)'],
    color: 'indigo',
  },
  {
    icon: <Phone size={20} />,
    label: 'Mobile Money',
    detail: 'MTN Mobile Money, Vodafone Cash, and AirtelTigo Money — each with its own colour-coded selector.',
    fields: ['Provider (MTN / Vodafone / AirtelTigo)', 'Mobile number (10-digit, phone-pad input)', 'Account name (must match registered name)'],
    color: 'emerald',
  },
]

const payoutStatusFlow = [
  { status: 'Pending', color: 'border-amber-400 bg-amber-50 text-amber-800', desc: 'Your request is submitted. Balance is untouched.' },
  { status: 'Approved', color: 'border-green-400 bg-green-50 text-green-800', desc: 'Admin approved. Balance debited atomically.' },
  { status: 'Paid', color: 'border-purple-400 bg-purple-50 text-purple-800', desc: 'Funds sent to your bank or Mobile Money account.' },
  { status: 'Rejected', color: 'border-red-400 bg-red-50 text-red-800', desc: 'Declined by admin. A written reason is provided. Balance unchanged.' },
  { status: 'Cancelled', color: 'border-gray-400 bg-gray-50 text-gray-700', desc: 'You cancelled the request while it was pending.' },
  { status: 'Processing', color: 'border-blue-400 bg-blue-50 text-blue-800', desc: 'Intermediate state during settlement.' },
]

const adminFeatures = [
  {
    icon: <ClipboardList size={20} />,
    title: 'Admin Dashboard',
    desc: 'At-a-glance metrics: total users, platform balance, total deposits, total payouts, pending request count, and pending value. The top 5 pending requests queue directly below.',
  },
  {
    icon: <CheckCircle2 size={20} />,
    title: 'Payout Review & Approval',
    desc: 'Open any pending request to see full payout details (bank or Mobile Money info, masked account, request type, scheduled date if applicable). Approve in one tap or reject with a mandatory written reason.',
  },
  {
    icon: <UserCog size={20} />,
    title: 'User Management',
    desc: 'Search all members by name, phone, or account number. See account status (active or locked), join date, and current balance. Lock accounts to restrict access.',
  },
  {
    icon: <BarChart3 size={20} />,
    title: 'Transaction Ledger',
    desc: 'Immutable, paginated (30/page) record of every platform transaction — deposits, payouts, reversals, fees, adjustments. Shows user name, direction, amount, and full timestamp.',
  },
  {
    icon: <Users size={20} />,
    title: 'Groups Management',
    desc: 'Create savings groups with a name, description, and auto-generated invite code. Share the code with members so they can join at signup. Activate or deactivate groups as needed.',
  },
  {
    icon: <FileText size={20} />,
    title: 'Platform Reports',
    desc: 'Aggregate platform-wide statistics: total users, platform balance, all-time deposits, all-time payouts, pending count and value. Payout breakdown by status with percentage.',
  },
  {
    icon: <ScanFace size={20} />,
    title: 'Superadmin Panel',
    desc: 'Superadmins can view all admin accounts, their assigned groups, member counts, invite codes, and group status — from one dedicated platform overview screen.',
  },
]

const securityFeatures = [
  {
    icon: <Lock size={20} />,
    title: 'Row-Level Security (RLS)',
    desc: 'Enforced at the PostgreSQL layer — not just the API. Users physically cannot query other users\' rows, regardless of how the request is made.',
  },
  {
    icon: <ShieldCheck size={20} />,
    title: 'Atomic Balance Mutations',
    desc: 'All balance changes go through Supabase RPC functions (process_deposit, process_payout_approval). No client can write directly to balance columns.',
  },
  {
    icon: <CreditCard size={20} />,
    title: 'Secure Authentication',
    desc: 'Auth powered by Supabase Auth. Passwords are bcrypt-hashed. Sessions use secure tokens. Biometric unlock adds a second layer on the device.',
  },
  {
    icon: <BadgeCheck size={20} />,
    title: 'KYC Verification',
    desc: 'Identity verification layer on member accounts. Admins review and update KYC status (Pending / Verified / Rejected) to gatekeep sensitive actions.',
  },
]

function Section({ title, color, children }: { title: string; color: string; children: React.ReactNode }) {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-2 mb-6">
        <ChevronRight size={18} className={color === 'indigo' ? 'text-indigo-600' : color === 'emerald' ? 'text-emerald-600' : 'text-rose-500'} />
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      </div>
      {children}
    </div>
  )
}

export default function Features() {
  const { openModal } = useAppModal()
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-14">
        <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-indigo-100 text-indigo-700">
          Full feature list
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Every feature, explained
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          MoVaultX is built for everyday savers in Ghana. Here's exactly what the app does — for members and admins alike.
        </p>
      </div>

      {/* User features */}
      <Section title="Member Features" color="indigo">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {userFeatures.map(f => (
            <div key={f.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 mb-4">
                {f.icon}
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Payout methods */}
      <Section title="Payout Methods" color="emerald">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {payoutMethods.map(m => (
            <div key={m.label} className={`bg-white rounded-2xl border border-gray-100 shadow-sm p-6`}>
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg mb-3 ${m.color === 'indigo' ? 'bg-indigo-50 text-indigo-600' : 'bg-emerald-50 text-emerald-600'}`}>
                {m.icon}
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">{m.label}</h3>
              <p className="text-sm text-gray-500 mb-3 leading-relaxed">{m.detail}</p>
              <ul className="space-y-1">
                {m.fields.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${m.color === 'indigo' ? 'bg-indigo-400' : 'bg-emerald-400'}`} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-base font-semibold text-gray-900 mb-4">Payout status lifecycle</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {payoutStatusFlow.map(s => (
              <div key={s.status} className={`rounded-xl border-l-4 p-4 ${s.color}`}>
                <p className="font-semibold text-sm mb-1">{s.status}</p>
                <p className="text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-500 bg-amber-50 border border-amber-100 rounded-xl p-3">
            <strong className="text-amber-700">Key guarantee:</strong> Your balance is only debited when a payout moves to <em>Approved</em>. Submitting a request never affects your balance.
          </p>
        </div>
      </Section>

      {/* Admin features */}
      <Section title="Admin Features" color="rose">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-4">
          {adminFeatures.map(f => (
            <div key={f.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-purple-50 text-purple-600 mb-4">
                {f.icon}
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-purple-50 border border-purple-100 rounded-xl p-4 text-sm text-purple-800">
          <strong>Three admin tiers:</strong> Regular users save and request payouts. Admins manage groups, users, and payout approvals. Superadmins oversee the entire platform and all admin accounts.
        </div>
      </Section>

      {/* Security */}
      <Section title="Security Architecture" color="indigo">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {securityFeatures.map(f => (
            <div key={f.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex gap-4">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-50 text-gray-700 shrink-0">
                {f.icon}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-3xl p-10 text-center text-white">
        <h2 className="text-2xl font-bold mb-3">See it all in action</h2>
        <p className="text-indigo-200 mb-6 max-w-md mx-auto">
          Download MoVaultX and experience secure, transparent savings — built for Ghana.
        </p>
        <button
          onClick={openModal}
          className="inline-block px-8 py-3 bg-white text-indigo-700 font-semibold rounded-xl hover:bg-indigo-50 transition-colors"
        >
          Download Free
        </button>
      </div>
    </div>
  )
}
