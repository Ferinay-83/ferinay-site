import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Ferinay",
  description:
    "Ferinay's Terms of Service - Legal terms and conditions for using our web design and development services.",
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Effective Date: 24 August 2025</p>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">
            Welcome to Ferinay. By using our website or services, you agree to these Terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Scope of Services</h2>
          <p className="text-gray-700 mb-6">
            We provide web design, development, hosting, and related consulting services. Submitting a form does not
            constitute a binding agreement until a proposal is accepted.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. User Responsibilities</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>You agree to provide accurate and truthful information.</li>
            <li>You must not misuse the website or attempt unauthorized access.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Intellectual Property</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>
              Content, designs, and materials created by Ferinay remain our property until payment is made in full.
            </li>
            <li>You retain ownership of materials you provide to us.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Limitation of Liability</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>
              We are not liable for indirect damages, loss of profits, or data arising from use of our website or
              services.
            </li>
            <li>Our liability is limited to the total amount paid for services in question.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Payment Terms</h2>
          <p className="text-gray-700 mb-6">
            All quotes and invoices are subject to acceptance of payment terms agreed upon in writing.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Governing Law</h2>
          <p className="text-gray-700 mb-6">These Terms are governed by the laws of South Africa.</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Updates</h2>
          <p className="text-gray-700 mb-6">
            We may revise these Terms. The latest version will always be available on our website. Continued use of the
            website constitutes acceptance of any changes.
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
