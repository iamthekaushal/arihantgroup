import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="pt-16 lg:pt-20 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Privacy Policy
        </h1>

        <p className="text-gray-600 mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="space-y-8 text-gray-700 leading-relaxed">
          
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              1. Introduction
            </h2>
            <p>
              We value your privacy and are committed to protecting your personal
              information. This Privacy Policy explains how we collect, use, and
              safeguard your data when you use our website and services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              2. Information We Collect
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal details such as name, email, and phone number</li>
              <li>Usage data including pages visited and interactions</li>
              <li>Technical data like IP address and browser type</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and improve our services</li>
              <li>To communicate with you regarding inquiries or support</li>
              <li>For security, analytics, and legal compliance</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              4. Cookies
            </h2>
            <p>
              We use cookies to enhance user experience, analyze traffic, and
              personalize content. You can control cookies through your browser
              settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              5. Data Security
            </h2>
            <p>
              We implement industry-standard security measures to protect your
              data. However, no method of transmission over the internet is 100%
              secure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              6. Third-Party Services
            </h2>
            <p>
              We may use trusted third-party tools for analytics, marketing, or
              hosting. These providers are obligated to protect your data.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              7. Your Rights
            </h2>
            <p>
              You have the right to access, update, or request deletion of your
              personal information. Contact us to exercise these rights.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              8. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated revision date.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              9. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please contact
              us at:
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
