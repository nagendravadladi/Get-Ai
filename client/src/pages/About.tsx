import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">About Get AI</h1>
        <p className="text-lg mb-4">
          Get AI was born from a simple frustration I personally faced — finding the right AI tools was taking too long. I’d search for one tool, then spend hours trying to check if it actually worked, what category it belonged to, and whether it was free or not. It felt like chaos.
        </p>
        <p className="text-lg mb-4">
          That’s when the idea hit me: what if there was one place where all AI tools were properly organized, with real-time status, categories, and short descriptions — something clean, helpful, and fast?
        </p>
        <p className="text-lg mb-4">
          <strong>Get AI</strong> is built for people like me (and maybe like you) — developers, students, marketers, creators — anyone trying to save time and get more done using AI. It’s completely free, and I’m constantly working on improving it to make your search easier.
        </p>
        <p className="text-lg">
          I hope this platform makes your AI journey smoother and more productive. Thanks for stopping by, and feel free to share your thoughts or suggest tools!
        </p>
      </div>
    </div>
  );
}
