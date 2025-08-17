import { useState } from "react";
import Navigation from "@/components/navigation";
import CategorySection from "@/components/category-section";
import ToolCard from "@/components/tool-card";
import { categories, searchTools } from "@/data/ai-tools";
import type { AITool } from "@/data/ai-tools";
import AdSlot from "@/components/AdSlot";
import SEO from "@/components/SEO";

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
      {/* ✅ SEO Meta Tags */}
      <SEO
        title="Get AI – Best AI Tools for Writing, Finance, Law, Marketing, Real Estate & More"
        description="Discover top AI tools for finance, healthcare, marketing, law, real estate, coding, writing, and more."
        keywords={[
          "AI tools",
          "AI writing tools",
          "AI coding tools",
          "AI finance software",
          "AI marketing automation",
          "AI real estate tools",
          "AI contract review",
          "AI SEO tools",
          "AI content optimization"
        ]}
      />

      <Navigation onSearch={handleSearch} />

      <main className="pt-16">
        {!isSearching ? (
          <>
            {/* Welcome Section */}
            <section className="py-16 px-4 text-center">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  🧠 Discover Smarter AI —<br />Find the Best AI Tools Instantly
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Browse trusted AI tools for finance, healthcare, marketing, law, real estate, and more. 
                  Get AI helps you explore, compare, and choose the right AI solutions for your needs.
                </p>
              </div>
            </section>

            {/* 📌 Ad after welcome section */}
           {/* <div className="my-8 px-4 mx-auto" style={{ maxWidth: '728px' }}>
  <AdSlot slot="4204547238" />
</div> */}

            {/* Categories with Ads after every 2 */}
             <div className="px-4 space-y-12 max-w-7xl mx-auto">
              {categories.map((category, index) => {
                const updatedCategory = {
                  ...category,
                  title:
                    category.title === "Finance"
                      ? "Finance & Investment AI Tools"
                      : category.title === "Law"
                      ? "Legal AI & Contract Review Tools"
                      : category.title === "Real Estate"
                      ? "Real Estate AI & Property Valuation Tools"
                      : category.title
                };

                return (
                  <div key={updatedCategory.id}>
                    <CategorySection category={updatedCategory} />
                    {/* {index % 2 === 1 && (
                      <div className="my-8">
                        <AdSlot slot="4204547238" />
                      </div>
                    )} */}
                  </div>
                );
              })}
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

        {/* 📌 Ad before footer */}
       {/* <div className="my-12 px-4 mx-auto" style={{ maxWidth: '728px' }}>
  <AdSlot slot="4204547238" />
</div> */}

        {/* Footer */}
        <footer className="mt-24 py-12 px-4 border-t border-border">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
             <span className="text-2xl">🧠</span>
              <span className="text-xl font-bold"> Get AI <br /> ✅ Working 🔥 Popular 💤 Underrated </span>
               </div>
                <p className="text-muted-foreground mb-6"> Discover the best AI tools across every category — finance AI, healthcare AI, AI trading bots, and more. </p>
                 <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground"> 
                  <span>© 2025 Get AI. All rights reserved.</span> 
                  <a href="/about" className="mx-2 hover:underline">About</a> |
                   <a href="/contact" className="mx-2 hover:underline">Contact</a> |
                    <a href="/privacy-policy" className="mx-2 hover:underline">Privacy Policy</a> |
                     <a href="/blog/ai-for-students" className="mx-2 hover:underline">AI for Students</a> |
                      <a href="/blog/ai-in-productivity" className="mx-2 hover:underline">AI in Productivity</a>
            </div>
          </div>
        </footer>
      </main>

      {/* ✅ Mobile Sticky Ad Bar */}
      {/* <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background border-t border-border text-center py-2">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-9152398635458459"
          data-ad-slot="4204547238"
          data-ad-format="horizontal"
          data-full-width-responsive="true"
        />
      </div> */}
    </div>
  );
}
