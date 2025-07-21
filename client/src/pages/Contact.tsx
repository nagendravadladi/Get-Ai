import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg mb-4">
          Have feedback, suggestions, or just want to say hi? I’d love to hear from you.
        </p>
        <p className="text-lg mb-4">
          Whether it's a new AI tool recommendation, bug report, or partnership idea — your message matters.
        </p>
        <p className="text-lg mb-4">
          Please email me directly at:
        </p>
        <p className="text-lg font-semibold text-primary mb-8">
          📩 <a href="mailto:nagendravadladi@gmail.com" className="hover:underline">nagendravadladi@gmail.com</a>
        </p>
        <p className="text-sm text-muted-foreground">
          I usually respond within 24–48 hours. Thanks for helping make Get AI even better!
        </p>
      </div>
    </div>
  );
}
