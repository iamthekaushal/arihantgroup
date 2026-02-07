import React from "react";

export default function TermsAndConditions() {
  return (
    <main className="pt-16 lg:pt-20 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Terms & Conditions
        </h1>

        <p className="text-gray-600 mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="space-y-8 text-gray-700 leading-relaxed">

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using our website and services, you agree to be
              bound by these Terms & Conditions. If you do not agree, please do
              not use our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              2. Use of Services
            </h2>
            <p>
              You agree to use our services only for lawful purposes and in a way
              that does not infringe the rights of others or restrict their use
              of the website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              3. Intellectual Property
            </h2>
            <p>
              All content, trademarks, logos, and intellectual property on this
              website are owned by us or licensed to us and may not be used
              without prior written permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              4. User Accounts
            </h2>
            <p>
              If you create an account, you are responsible for maintaining the
              confidentiality of your login information and all activities that
              occur under your account.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              5. Limitation of Liability
            </h2>
            <p>
              We shall not be liable for any direct, indirect, incidental, or
              consequential damages arising from your use of our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              6. Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate access to our
              services at any time without prior notice if you violate these
              terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              7. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the content or privacy practices of those sites.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              8. Changes to Terms
            </h2>
            <p>
              We may update these Terms & Conditions from time to time. Continued
              use of the website constitutes acceptance of the revised terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              9. Governing Law
            </h2>
            <p>
              These terms shall be governed by and interpreted in accordance
              with the laws of the applicable jurisdiction.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              10. Contact Information
            </h2>
            <p>
              If you have any questions regarding these Terms & Conditions,
              please contact us at:
              <br />
              <span className="font-medium text-gray-900">
                support@arihant.com
              </span>
            </p>
          </div>

        </section>
      </div>
    </main>
  );
}
