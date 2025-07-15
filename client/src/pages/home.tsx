import { useState } from "react";
import Navigation from "@/components/navigation";
import CategorySection from "@/components/category-section";
import ToolCard from "@/components/tool-card";
import { categories, searchTools } from "@/data/ai-tools";
import type { AITool } from "@/data/ai-tools";

export default function Home() {
  const [searchResults, setSearchResults] = useState<AITool[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (query: string) => {
    if (query.trim()) {
      const results = searchTools(query);
      setSearchResults(results);
      setIsSearching(true);
    } else {
      setSearchResults([]);
      setIsSearching(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation onSearch={handleSearch} />
      
      <main className="pt-16">
        {!isSearching ? (
          <>
            {/* Welcome Section */}
            <section className="py-16 px-4 text-center">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  🧠 Tell us what you need —<br />We'll help you Get AI you want.
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Explore thousands of tools across every category — from content to code ai creative.
                </p>
              </div>
            </section>

            {/* Category Sections */}
            <div className="px-4 space-y-12 max-w-7xl mx-auto">
              {categories.map((category) => (
                <CategorySection key={category.id} category={category} />
              ))}
            </div>
          </>
        ) : (
          /* Search Results */
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                Search Results ({searchResults.length} tools found)
              </h2>
              
              {searchResults.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {searchResults.map((tool) => (
                    <ToolCard key={tool.id} tool={tool} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-xl text-muted-foreground">
                    No tools found. Try a different search term.
                  </p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="mt-24 py-12 px-4 border-t border-border">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-2xl">🧠</span>
              <span className="text-xl font-bold">Get AI</span>
            </div>
            <p className="text-muted-foreground mb-6">Discover the best AI tools across every category</p>
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <span>© 2025 Get AI. All rights reserved.</span>
              <a href="/about" className="mx-2 hover:underline">About</a> |
              <a href="/contact" className="mx-2 hover:underline">Contact</a> |
              <a href="/privacy-policy" className="mx-2 hover:underline">Privacy Policy</a>
            </div>
          </div>
        </footer>
      </main>

      {/* ✅ Mobile Sticky Ad Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background border-t border-border text-center py-2">
        <ins className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-9152398635458459"
          data-ad-slot="4204547238"
          data-ad-format="horizontal"
          data-full-width-responsive="true">
        </ins>
      </div>
    </div>
  );
}
