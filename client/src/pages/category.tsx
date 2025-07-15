import { useState, useMemo } from "react";
import { useRoute } from "wouter";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import ToolCard from "@/components/tool-card";
import { getCategoryById, searchTools } from "@/data/ai-tools";
import type { AITool } from "@/data/ai-tools";

type FilterType = "all" | "working" | "not-working" | "most-used" | "underrated" | "free" | "limited-free" | "paid";

export default function Category() {
  const [match, params] = useRoute("/category/:categoryId");
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [searchResults, setSearchResults] = useState<AITool[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const categoryId = params?.categoryId;
  const category = categoryId ? getCategoryById(categoryId) : null;

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

  const filteredTools = useMemo(() => {
    if (isSearching) return searchResults;
    if (!category) return [];

    return category.tools.filter(tool => {
      switch (activeFilter) {
        case "working":
          return tool.working;
        case "not-working":
          return !tool.working;
        case "most-used":
          return tool.status === "Most Used";
        case "underrated":
          return tool.status === "Underrated";
        case "free":
          return tool.access === "Free";
        case "limited-free":
          return tool.access === "Limited Free";
        case "paid":
          return tool.access === "Paid";
        default:
          return true;
      }
    });
  }, [category, activeFilter, isSearching, searchResults]);

  const filterButtons: { key: FilterType; label: string }[] = [
    { key: "all", label: "All Tools" },
    { key: "working", label: "✅ Working" },
    { key: "not-working", label: "❌ Not Working" },
    { key: "most-used", label: "🔥 Most Used" },
    { key: "underrated", label: "💤 Underrated" },
    { key: "free", label: "Free" },
    { key: "limited-free", label: "Limited Free" },
    { key: "paid", label: "Paid" },
  ];

  if (!match || !category) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
          <Link href="/" className="text-primary hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation onSearch={handleSearch} />
      
      <main className="pt-16">
        <div className="px-4 py-8">
          <div className="max-w-7xl mx-auto">
            {/* Category Header */}
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl md:text-4xl font-bold">
                {category.emoji} {category.title}
              </h1>
              <Button variant="ghost" size="icon" asChild>
                <Link href="/">
                  <X className="h-6 w-6" />
                </Link>
              </Button>
            </div>

            {!isSearching && (
              /* Filters Bar */
              <div className="sticky top-20 bg-background/95 backdrop-blur-md border border-border rounded-lg p-4 mb-8 z-40">
                <div className="flex flex-wrap gap-3">
                  {filterButtons.map((filter) => (
                    <Button
                      key={filter.key}
                      variant={activeFilter === filter.key ? "default" : "outline"}
                      onClick={() => setActiveFilter(filter.key)}
                      className="font-medium"
                    >
                      {filter.label}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Results Section */}
            <div>
              {isSearching && (
                <h2 className="text-xl font-semibold mb-6">
                  Search Results ({filteredTools.length} tools found)
                </h2>
              )}
              
 {filteredTools.map((tool, index) => (
  <>
    <ToolCard key={tool.id} tool={tool} />

    {/* ✅ Show ad-like card after every 4 tools */}
    {(index + 1) % 4 === 0 && (
      <div className="bg-muted p-4 border rounded-lg text-center text-sm text-muted-foreground my-4">
        <ins className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-9152398635458459"
          data-ad-slot="4204547238"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>
      </div>
    )}
  </>
))}

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
