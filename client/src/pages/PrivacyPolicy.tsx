import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>

        <p className="mb-4">
          At <strong>Get AI</strong>, your privacy matters. This Privacy Policy outlines what information we collect and how we use it.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
        <ul className="list-disc list-inside mb-4">
          <li>We do not collect personal data like names or email addresses.</li>
          <li>We use basic cookies and analytics tools (like Google Analytics) to understand how the site is used.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">2. Google AdSense</h2>
        <p className="mb-4">
          We use Google AdSense to display ads. AdSense may use cookies to serve ads based on your previous visits to this and other websites.
        </p>
        <p className="mb-4">
          You can opt out of personalized ads by visiting{" "}
          <a
            href="https://www.google.com/settings/ads"
            className="text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Ads Settings
          </a>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">3. Your Control</h2>
        <p className="mb-4">
          You can clear your browser cookies or use privacy settings to control tracking. We don’t require login or store any of your personal content.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">4. Contact</h2>
        <p className="mb-4">
          If you have questions about this Privacy Policy, feel free to contact us at{" "}
          <a
            href="mailto:getai.tools@gmail.com"
            className="text-primary hover:underline"
          >
            getai.tools@gmail.com
          </a>.
        </p>

        <p className="text-sm text-muted-foreground mt-12">
          Last updated: July 2025
        </p>
      </div>
    </div>
  );
}
