const LAST_UPDATED = 'May 6, 2026'

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By downloading, installing, or using the MoVaultX mobile application ("the App") or visiting this website, you agree to be bound by these Terms of Service ("Terms"). If you do not agree, do not use MoVaultX.

These Terms apply to all users, including regular members, group admins, and superadmins.`,
  },
  {
    title: '2. Eligibility',
    content: `You must be at least 18 years of age to create a MoVaultX account. By registering you confirm that:

• You are at least 18 years old.
• All registration information you provide (name, email, phone number) is accurate and belongs to you.
• You are not located in a jurisdiction where using MoVaultX is prohibited by law.`,
  },
  {
    title: '3. Account Registration & Security',
    content: `**Registration**
To create an account you must provide your full name and a valid email address. Phone number is optional. If your organisation has issued a group invite code, enter it at registration to join that group.

**Email verification**
After registration, a verification email is sent to your address. Your account is not fully activated until you confirm your email.

**Password & credentials**
Use a strong, unique password. You are responsible for maintaining confidentiality of your credentials. Do not share your password with anyone — including MoVaultX staff, who will never ask for it.

**Biometric login**
Enabling Face ID or fingerprint login is optional. Device biometric data is processed entirely on your device and never transmitted to our servers.

**Account responsibility**
You are responsible for all activity that occurs under your account. Notify us immediately at support@movaultvx.app if you suspect unauthorised access.`,
  },
  {
    title: '4. Deposits',
    content: `• You may deposit funds into your MoVaultX savings balance at any time.
• Deposits are accepted in Ghana Cedis (GHS). Values are stored in pesewas (minor units) and displayed as ₵.
• Preset deposit amounts are ₵50, ₵100, ₵200, ₵500, and ₵1,000. Custom amounts (minimum ₵1.00) are also supported.
• An optional description can be attached to any deposit.
• Your balance is updated immediately upon successful deposit processing.
• MoVaultX is not responsible for delays caused by third-party payment processors or network failures.
• Deposits are non-reversible by the user once confirmed. If you believe a deposit was made in error, contact support@movaultvx.app.`,
  },
  {
    title: '5. Payout Requests',
    content: `**Submitting a request**
You may request a payout via bank transfer or Mobile Money at any time, subject to your available balance. Payout types are on-demand (immediate processing after approval) or scheduled (a specific future date).

**Balance at submission**
Your savings balance is NOT debited when you submit a payout request. It is only debited if and when an admin approves the request.

**Admin review**
All payout requests are reviewed by a MoVaultX administrator. Approval is not guaranteed. Requests may be declined for reasons including (but not limited to): insufficient verification, suspected fraud, account lock, or incomplete payment details.

**Rejection reasons**
If a payout request is rejected, the admin must provide a written reason. This reason is visible to you in the App.

**Status lifecycle**
Pending → Approved (balance debited) → Paid (funds settled)
Pending → Rejected (balance unchanged)
Pending → Cancelled (by user while pending)

**Cancellation by user**
You may cancel a pending payout request before it is reviewed. Once a request is in Approved or Rejected status, it cannot be cancelled.

**Supported payout methods**
- Bank Transfer: 14 major Ghana banks. Requires bank name, account holder name, and account number.
- Mobile Money: MTN, Vodafone, or AirtelTigo. Requires provider, 10-digit mobile number, and the registered account name (must match exactly).

**Processing times**
Processing times are not guaranteed. Approved payouts are processed as quickly as possible, but settlement timelines depend on your bank or Mobile Money provider.`,
  },
  {
    title: '6. User Roles & Permissions',
    content: `MoVaultX has three user roles:

**User (Member)**
Regular members can deposit funds, view their savings history, request payouts, and view their personal reports and notifications.

**Admin**
Admins can review and approve/reject payout requests, manage user accounts (including locking accounts), view the transaction ledger, manage groups, and view platform reports.

**Superadmin**
Superadmins have all admin capabilities plus the ability to view and manage admin accounts and their group assignments.

Roles are assigned by MoVaultX. You may not claim a role beyond what is assigned to your account.`,
  },
  {
    title: '7. Groups',
    content: `**What groups are**
Groups represent organisations, associations, cooperatives, or savings circles using MoVaultX. Each group has an admin and an invite code.

**Joining a group**
Members join a group by entering the group's invite code at registration. A member can only belong to one group.

**Group invite codes**
Invite codes are generated and distributed by the group admin. If you share an invite code, you are responsible for who uses it.

**Group deactivation**
Admins may deactivate a group. Deactivated groups can no longer accept new members via their invite code.`,
  },
  {
    title: '8. KYC (Know Your Customer)',
    content: `MoVaultX maintains a KYC status on all member accounts: Pending (default), Verified, or Rejected.

• Admins may request identity verification for your account.
• Unverified accounts may have restricted access to certain platform features.
• Providing false identity documents or information is grounds for immediate account termination and may be reported to authorities.`,
  },
  {
    title: '9. Prohibited Activities',
    content: `You agree not to use MoVaultX to:

• Commit fraud, money laundering, or any other illegal financial activity.
• Deposit or withdraw funds on behalf of another person without their authorised consent.
• Attempt to reverse-engineer, hack, probe, or tamper with the app, API, or backend infrastructure.
• Create multiple accounts for the purpose of circumventing limits or restrictions.
• Impersonate another person, admin, or MoVaultX staff member.
• Submit false payout details (bank account or Mobile Money number belonging to someone else).
• Use automated bots or scripts to interact with the service.
• Post or submit abusive, threatening, or harmful content in any free-text field.

Violation of these rules may result in immediate account suspension or termination, reversal of pending transactions, and reporting to relevant Ghanaian authorities.`,
  },
  {
    title: '10. Fees',
    content: `MoVaultX reserves the right to introduce fees for certain services. Any fee will be:

• Clearly disclosed to you before you confirm a transaction.
• Deducted as a transaction type "fee" visible in your transaction history.

We will provide at least 30 days' notice before introducing any new fee structure for existing users.`,
  },
  {
    title: '11. Service Availability',
    content: `We aim for 24/7 availability but do not guarantee uninterrupted service. Scheduled maintenance will be announced in-app where possible. Unplanned downtime may occur due to infrastructure issues.

MoVaultX is not liable for loss of savings access, delayed payouts, or missed scheduled events caused by downtime beyond our reasonable control.`,
  },
  {
    title: '12. Limitation of Liability',
    content: `To the maximum extent permitted by applicable law:

• MoVaultX and its developers are not liable for indirect, incidental, special, consequential, or punitive damages — including loss of savings access, delayed payouts, or data loss.
• Our total aggregate liability arising from these Terms or your use of the App shall not exceed the total amount deposited by you in the 30-day period immediately preceding the event giving rise to the claim.
• Nothing in these Terms limits liability for death or personal injury caused by negligence, or for fraud or fraudulent misrepresentation.`,
  },
  {
    title: '13. Intellectual Property',
    content: `All content within MoVaultX — including the app code, this website, the name "MoVaultX", the logo, UI design, and written content — is the intellectual property of MoVaultX and its developers.

You may not reproduce, copy, distribute, reverse-engineer, or create derivative works from any part of MoVaultX without prior written permission.`,
  },
  {
    title: '14. Account Termination',
    content: `**By you**
You may delete your account at any time by contacting support@movaultvx.app. Pending payout requests will be cancelled upon deletion. Any remaining balance will be subject to a final payout process before closure.

**By us**
We reserve the right to suspend or terminate your account without notice if you violate these Terms, engage in fraudulent activity, or if required by law. We will make reasonable efforts to notify you where legally permitted.`,
  },
  {
    title: '15. Governing Law',
    content: `These Terms are governed by and construed in accordance with the laws of the Republic of Ghana. Any disputes shall be subject to the exclusive jurisdiction of the courts of Ghana.`,
  },
  {
    title: '16. Changes to These Terms',
    content: `We may update these Terms as the platform evolves. When we do:

• The "Last updated" date at the top of this page will change.
• Active users will be notified via an in-app notification.
• Continued use after the effective date of changes constitutes acceptance of the revised Terms.`,
  },
  {
    title: '17. Contact',
    content: `Questions about these Terms?

Email: legal@movaultvx.app
General support: support@movaultvx.app
Location: Accra, Ghana`,
  },
]

function renderContent(text: string) {
  return text.split('\n').map((line, i) => {
    if (!line.trim()) return <br key={i} />
    const formatted = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    return (
      <p
        key={i}
        className={`text-sm leading-relaxed ${line.startsWith('•') || line.startsWith('-') ? 'ml-3 text-gray-600' : 'text-gray-600'}`}
        dangerouslySetInnerHTML={{ __html: formatted }}
      />
    )
  })
}

export default function Terms() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-10">
        <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-indigo-100 text-indigo-700">
          Legal
        </span>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-400">Last updated: {LAST_UPDATED}</p>
        <p className="mt-5 text-sm text-gray-600 leading-relaxed bg-gray-50 border border-gray-100 rounded-xl p-4">
          Please read these Terms carefully. They govern your use of the MoVaultX mobile app and
          this website. By using MoVaultX you agree to these Terms.
        </p>
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
