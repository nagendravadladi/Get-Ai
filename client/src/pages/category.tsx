import { useState, useMemo } from "react";
import { useRoute, Link } from "wouter";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import ToolCard from "@/components/tool-card";
import { getCategoryById, searchTools } from "@/data/ai-tools";
import type { AITool } from "@/data/ai-tools";
import AdSlot from "@/components/AdSlot";
import SEO from "@/components/SEO";

type FilterType =
  | "all"
  | "working"
  | "not-working"
  | "most-used"
  | "underrated"
  | "free"
  | "limited-free"
  | "paid";

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

  // ✅ Dynamically rename categories for CPC targeting
  const updatedCategory = category
    ? {
        ...category,
        title:
          category.title === "Finance"
            ? "Finance & Investment AI Tools"
            : category.title === "Law"
            ? "Legal AI & Contract Review Tools"
            : category.title === "Real Estate"
            ? "Real Estate AI & Property Valuation Tools"
            : category.title,
      }
    : null;

  const filteredTools = useMemo(() => {
    if (isSearching) return searchResults;
    const tools = updatedCategory?.tools ?? [];
    return tools.filter((tool) => {
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
  }, [updatedCategory, activeFilter, isSearching, searchResults]);

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

  if (!match || !updatedCategory) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <SEO
          title="Category Not Found – Get AI Tools"
          description="Sorry, the category you are looking for does not exist."
          keywords={["AI tools", "categories", "not found"]}
        />
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
      {/* ✅ Enhanced SEO for Category */}
      <SEO
        title={`${updatedCategory.title} – Best AI Tools & High CPC Keywords`}
        description={`Explore the best AI tools in the ${updatedCategory.title} category. Discover top tools for finance, law, real estate, marketing, and more while maximizing AdSense CPC.`}
        keywords={[
          `${updatedCategory.title} AI tools`,
          "AI software",
          "best AI tools",
          updatedCategory.title,
          "AI automation tools",
          "AI finance software",
          "AI bookkeeping software",
          "AI contract review tools",
          "AI legal research tools",
          "AI real estate lead generation",
          "AI marketing automation platforms",
          "AI cybersecurity solutions",
          "AI CRM lead scoring",
          "AI customer support software",
        ]}
      />

      <Navigation onSearch={handleSearch} />
         {/* Top Ad */}
            <div className="my-6">
              <AdSlot slot="1230440086" />
            </div>

      <main className="pt-16">
        <div className="px-4 py-8">
          <div className="max-w-7xl mx-auto">
            {/* Category Header */}
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl md:text-4xl font-bold">
                {updatedCategory.emoji} {updatedCategory.title}
              </h1>
              <Button variant="ghost" size="icon" asChild>
                <Link href="/">
                  <X className="h-6 w-6" />
                </Link>
              </Button>
            </div>

         

            {/* Filters */}
            {!isSearching && (
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

            {/* Tools List - This is the section to update */}
            <div>
              {isSearching && (
                <h2 className="text-xl font-semibold mb-6">
                  Search Results ({filteredTools.length} tools found)
                </h2>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredTools.map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
              {filteredTools.length === 0 && (
                <p className="text-center text-muted-foreground mt-8">No tools found for this category or search.</p>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Sticky Mobile Ad */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background border-t border-border text-center py-2">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-9152398635458459"
          data-ad-slot="1230440086"
          data-ad-format="horizontal"
          data-full-width-responsive="true"
        ></ins>
      </div>
    </div>
  );
}