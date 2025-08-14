// App.tsx
import React from "react";
import { Helmet } from "react-helmet-async";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./hooks/use-theme";

import Home from "@/pages/home";
import Category from "@/pages/category";
import NotFound from "@/pages/not-found";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import AIForStudents from "@/pages/blog/AIForStudents";
import AIProductivity from "@/pages/blog/AIProductivity";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/category/:categoryId" component={Category} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/blog/ai-for-students" component={AIForStudents} />
      <Route path="/blog/ai-in-productivity" component={AIProductivity} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          {/* ✅ Global SEO & Social Meta Tags */}
          <Helmet>
            <title>Get AI – Best AI Tools & Resources</title>
            <meta
              name="description"
              content="Discover the best AI tools for writing, coding, design, and productivity."
            />
            <meta
              name="keywords"
              content="AI tools, artificial intelligence, AI software, GPT tools, AI productivity"
            />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Get AI – Best AI Tools & Resources" />
            <meta
              property="og:description"
              content="Discover the best AI tools for writing, coding, design, and productivity."
            />
            <meta property="og:url" content="https://your-site-url.com" />
            <meta property="og:image" content="https://your-site-url.com/og-image.jpg" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Get AI – Best AI Tools & Resources" />
            <meta
              name="twitter:description"
              content="Discover the best AI tools for writing, coding, design, and productivity."
            />
            <meta name="twitter:image" content="https://your-site-url.com/twitter-image.jpg" />
          </Helmet>

          {/* Global UI Providers */}
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
