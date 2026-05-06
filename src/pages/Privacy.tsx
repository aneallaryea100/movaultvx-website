const LAST_UPDATED = 'May 6, 2026'

const sections = [
  {
    title: '1. What Information We Collect',
    content: `When you register for or use MoVaultX we collect the following:

**Account data**
Your full name, email address, and password. Passwords are never stored in plain text — they are hashed with bcrypt via Supabase Auth before being stored.

**Profile data**
Optional phone number, display name, and profile avatar. Your role (user / admin / superadmin) and KYC status (pending / verified / rejected) are also stored on your profile.

**Group membership data**
If you enter a group invite code at registration, your account is linked to that group. Group name, invite code, and your membership status are stored.

**Financial data**
All deposit amounts, payout requests, and transaction records. Monetary values are stored in minor units (pesewas, where 100 pesewas = ₵1.00) and converted to cedis for display.

**Transaction metadata**
Timestamps, transaction types (deposit / payout / reversal / fee / adjustment), and optional descriptions you provide at the time of deposit.

**Payout details**
For bank transfer requests: bank name, account holder name, and account number. For Mobile Money requests: provider (MTN / Vodafone / AirtelTigo), mobile number, and registered account name.

**Device & app data**
Device type, operating system version, and app version — used solely for debugging and crash reporting.

**Usage data**
Anonymised, aggregated feature interaction data to understand how the app is used and where to improve it.

We do NOT collect your bank login credentials, card numbers, or CVVs.`,
  },
  {
    title: '2. How We Use Your Information',
    content: `We use your data to:

• Authenticate your identity and maintain your session.
• Process deposits — crediting your savings balance when you make a deposit.
• Process payout requests — routing your bank or Mobile Money details to the admin review queue.
• Notify you in-app about deposit confirmations, payout approvals, and payout rejections.
• Enable admins to review, approve, or reject payout requests with full payout details.
• Enable superadmins to manage admin accounts and group assignments.
• Generate your personal savings reports (weekly, monthly, yearly breakdowns).
• Detect and prevent fraud or account abuse.
• Improve the app and fix bugs using anonymised usage data.
• Comply with applicable laws and regulations.

We do NOT sell, rent, or share your personal data with advertisers or third-party marketing platforms.`,
  },
  {
    title: '3. Data Sharing',
    content: `We share your data only in the following limited circumstances:

**Supabase (Infrastructure provider)**
All data is stored and processed on Supabase — a PostgreSQL database platform that is SOC 2 Type II certified. Supabase acts as a data processor under our instructions. Row-Level Security (RLS) policies ensure that even at the infrastructure level, users cannot access each other's rows.

**Payment and settlement partners**
When a payout is approved, relevant payment details (bank account or Mobile Money number) may be passed to settlement partners solely to facilitate the transfer. Only the minimum data required for the transaction is shared.

**Law enforcement and legal obligations**
We may disclose data if required by a valid court order, subpoena, or applicable law. We will notify you where legally permitted before complying.

We do not share your data with any other third parties.`,
  },
  {
    title: '4. Security Measures',
    content: `MoVaultX is built with security as a first principle, not an afterthought:

**Row-Level Security (RLS)**
All database tables are protected with RLS policies enforced at the PostgreSQL layer. A user's data rows are literally inaccessible to other users at the query level — not just filtered in application code.

**Atomic balance mutations via RPC**
All balance changes — both deposits and payout approvals — happen exclusively through server-side Supabase RPC functions (process_deposit, process_payout_approval). No client application can write directly to balance columns.

**Encrypted transit**
All communication between the app and our servers uses TLS 1.3 encryption.

**Bcrypt password hashing**
Passwords are hashed before storage. We never store or have access to your plain-text password.

**Biometric authentication**
Where your device supports it, you can enable Face ID or fingerprint unlock as an additional layer of protection on your MoVaultX session.

**KYC identity verification**
Admins can flag accounts for identity review. KYC status (pending / verified / rejected) controls access to sensitive platform actions.

Despite these controls, no system is completely risk-free. Use a unique, strong password and enable biometric login where available.`,
  },
  {
    title: '5. Data Retention',
    content: `We retain your data for as long as your account is active. If you close your account:

• Personal identifiers (name, email, phone) are deleted within 30 days of your deletion request.
• Financial transaction records (deposits, payouts, transaction ledger entries) may be retained for up to 7 years to satisfy legal, audit, and anti-money-laundering obligations.
• Anonymised or aggregated analytics data may be retained indefinitely.
• Backup data may persist for up to 90 days after deletion before being overwritten.`,
  },
  {
    title: '6. Your Rights',
    content: `Depending on your jurisdiction you may have the right to:

**Access** — Request a copy of all personal data we hold about you.
**Correction** — Ask us to correct inaccurate or incomplete data.
**Deletion** — Request deletion of your account and personal data, subject to legal retention requirements for financial records.
**Portability** — Request your data in a structured, machine-readable format (JSON or CSV).
**Objection** — Object to certain types of processing (e.g. analytics).
**Restriction** — Ask us to limit processing while a dispute is resolved.

To exercise any of these rights, contact us at privacy@movaultvx.app. We will respond within 30 days.`,
  },
  {
    title: '7. Payout Details & Financial Privacy',
    content: `Bank account numbers and Mobile Money numbers entered during a payout request are treated with the highest sensitivity:

• They are displayed in masked form in the admin review interface (e.g. ****1234).
• They are used solely to route your payout to the correct destination.
• They are not shared with other users or used for any other purpose.
• Full numbers are only accessible to authorised admins during the payout review process.`,
  },
  {
    title: '8. Notifications',
    content: `MoVaultX sends in-app notifications for the following events:

• Deposit confirmed (blue)
• Payout approved (green)
• Payout rejected (red) — includes the admin's written rejection reason
• System messages

Notifications are stored in-app and visible on your profile screen (last 10 shown). You can mark individual notifications or all notifications as read. We do not send marketing push notifications without your explicit consent.`,
  },
  {
    title: '9. Children\'s Privacy',
    content: `MoVaultX is intended only for users who are 18 years of age or older. We do not knowingly collect personal data from anyone under 18. If you believe a minor has created an account, please contact us immediately at privacy@movaultvx.app and we will delete the account promptly.`,
  },
  {
    title: '10. Cookies & Tracking (Website)',
    content: `The MoVaultX mobile app does not use browser cookies. This website (movaultvx.app) may use:

• **Essential cookies** — required for the website to function correctly (e.g. session management).
• **Analytics cookies** — anonymised data to understand page visits and improve the site. You can opt out via your browser settings or a cookie consent banner.

We do not use advertising cookies or cross-site tracking technologies.`,
  },
  {
    title: '11. Changes to This Privacy Policy',
    content: `We may update this Privacy Policy as the app evolves or regulations change. When we do:

• The "Last updated" date at the top will be revised.
• Active users will be notified via an in-app notification.
• Material changes will be summarised clearly.

Your continued use of MoVaultX after a policy update constitutes your acceptance of the revised terms.`,
  },
  {
    title: '12. Contact & Data Requests',
    content: `For any privacy-related question, data request, or concern:

Email: privacy@movaultvx.app
General support: support@movaultvx.app
Location: Accra, Ghana

We aim to respond to all privacy enquiries within 5 business days.`,
  },
]

function renderContent(text: string) {
  return text.split('\n').map((line, i) => {
    if (!line.trim()) return <br key={i} />
    const formatted = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    return (
      <p
        key={i}
        className={`text-sm leading-relaxed ${line.startsWith('•') ? 'ml-3 text-gray-600' : 'text-gray-600'}`}
        dangerouslySetInnerHTML={{ __html: formatted }}
      />
    )
  })
}

export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-10">
        <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-indigo-100 text-indigo-700">
          Legal
        </span>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-400">Last updated: {LAST_UPDATED}</p>
        <div className="mt-5 p-4 bg-indigo-50 rounded-xl border border-indigo-100 text-sm text-indigo-800 leading-relaxed">
          At MoVaultX, privacy is built into our architecture — not bolted on afterwards. Row-Level Security
          means your financial data is physically inaccessible to other users. This policy explains in plain
          language what we collect, why, and how you can control it.
        </div>
      </div>

      <div className="space-y-10">
        {sections.map(s => (
          <div key={s.title} className="border-b border-gray-100 pb-8 last:border-0">
            <h2 className="text-lg font-bold text-gray-900 mb-4">{s.title}</h2>
            <div className="space-y-1.5">{renderContent(s.content)}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
