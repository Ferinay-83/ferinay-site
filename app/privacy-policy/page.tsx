import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Ferinay",
  description: "Ferinay's Privacy Policy - POPIA compliant data protection and privacy practices for South Africa.",
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Effective Date: 24 August 2025</p>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">
            At Ferinay, we are committed to protecting your personal information in accordance with the Protection of
            Personal Information Act (POPIA) of South Africa. This Privacy Policy explains what information we collect,
            how we use it, and your rights.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Phone Number (if provided)</li>
            <li>Company/Business Name (if provided)</li>
            <li>Any information you include in your message</li>
            <li>Technical data such as IP address, browser type, and cookies</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Respond to your inquiries or requests for quotes</li>
            <li>Improve our website and services</li>
            <li>Maintain records of communication</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Sharing of Information</h2>
          <p className="text-gray-700 mb-4">
            We do not sell your personal information. We may share limited data with:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Email service providers to deliver responses</li>
            <li>Hosting and analytics providers to maintain website functionality</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Data Storage & Retention</h2>
          <p className="text-gray-700 mb-6">
            We securely store your information for up to 12 months unless required by law to keep it longer. After this
            period, it is deleted or anonymised.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Your Rights (POPIA)</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Access the personal data we hold about you</li>
            <li>Request correction or deletion of your data</li>
            <li>Withdraw consent to data processing</li>
            <li>Lodge a complaint with the Information Regulator (South Africa)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Cookies & Tracking</h2>
          <p className="text-gray-700 mb-6">
            Our site may use cookies to improve functionality and user experience. You can disable cookies in your
            browser settings.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Contact Us</h2>
          <p className="text-gray-700 mb-6">
            For privacy-related concerns, email us at:{" "}
            <a href="mailto:info@ferinay.co.za" className="text-blue-600 hover:underline">
              info@ferinay.co.za
            </a>
          </p>
        </div>

        <div className="mt-12">
          <a href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}
