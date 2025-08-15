import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import ToolCard from "./tool-card";
import type { Category } from "@/data/ai-tools";

interface CategorySectionProps {
  category: Category;
}

export default function CategorySection({ category }: CategorySectionProps) {
  return (
    <section id={category.id} className="category-section">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold flex items-center">
          {category.emoji} {category.title}
        </h2>
        <Button variant="ghost" asChild className="text-primary hover:text-primary/80 font-medium">
          <Link href={`/category/${category.id}`}>
            View More <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
      
      <div className="overflow-x-auto pb-4">
        <div className="flex space-x-6 min-w-max">
          {category.tools.slice(0, 5).map((tool) => (
            <ToolCard 
              key={tool.id} 
              tool={tool} 
              className="w-80 flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
