import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { AITool } from "@/data/ai-tools";

interface ToolCardProps {
  tool: AITool;
  className?: string;
}

export default function ToolCard({ tool, className = "" }: ToolCardProps) {
  const handleVisitTool = () => {
    window.open(tool.link, "_blank", "noopener,noreferrer");
  };

  const getAccessBadgeVariant = (access: string) => {
    switch (access) {
      case "Free":
        return "bg-green-900/30 text-green-400 hover:bg-green-900/40";
      case "Limited Free":
        return "bg-amber-900/30 text-amber-400 hover:bg-amber-900/40";
      case "Paid":
        return "bg-red-900/30 text-red-400 hover:bg-red-900/40";
      default:
        return "secondary";
    }
  };

  const statusEmoji = tool.status === "Most Used" ? "🔥" : "💤";
  const statusTitle = tool.status === "Most Used" ? "Most Used" : "Underrated";

  return (
    <div className={`bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 transform hover:-translate-y-1 ${className}`}>
      <div className="flex items-start space-x-4 mb-4">
        <div className={`w-12 h-12 ${tool.iconBg} rounded-lg flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
          {tool.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-lg text-foreground truncate">{tool.name}</h3>
            <div className="flex items-center space-x-1 flex-shrink-0">
              <span className="text-green-400" title="Currently Working">✅</span>
              <span 
                className={tool.status === "Most Used" ? "text-orange-400" : "text-blue-400"} 
                title={statusTitle}
              >
                {statusEmoji}
              </span>
            </div>
          </div>
          <Badge variant="secondary" className={getAccessBadgeVariant(tool.access)}>
            {tool.access}
          </Badge>
        </div>
      </div>
      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
        {tool.description}
      </p>
      <Button 
        onClick={handleVisitTool}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
      >
        Visit Tool 
        <ExternalLink className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}
