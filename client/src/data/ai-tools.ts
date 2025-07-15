export interface AITool {
  id: string;
  name: string;
  description: string;
  status: "Most Used" | "Underrated";
  access: "Free" | "Limited Free" | "Paid";
  category: string;
  working: boolean;
  link: string;
  icon: string;
  iconBg: string;
}

export interface Category {
  id: string;
  title: string;
  emoji: string;
  tools: AITool[];
}

export const categories: Category[] = [
  {
    id: "writing",
    title: "AI Writing Tools",
    emoji: "✍️",
    tools: [
      {
        id: "chatgpt",
        name: "ChatGPT",
        description: "Conversational AI for writing, coding, and questions. Advanced language model for various tasks.",
        status: "Most Used",
        access: "Free",
        category: "writing",
        working: true,
        link: "https://chat.openai.com",
        icon: "G",
        iconBg: "bg-green-500"
      },
      {
        id: "jasper",
        name: "Jasper",
        description: "AI content platform for generating marketing copy with brand voice and style consistency.",
        status: "Most Used",
        access: "Paid",
        category: "writing",
        working: true,
        link: "https://jasper.ai",
        icon: "J",
        iconBg: "bg-blue-500"
      },
      {
        id: "rytr",
        name: "Rytr",
        description: "Content assistant with various tone and language options for different writing needs.",
        status: "Underrated",
        access: "Limited Free",
        category: "writing",
        working: true,
        link: "https://rytr.me",
        icon: "R",
        iconBg: "bg-yellow-500"
      },
      {
        id: "copyai",
        name: "Copy.ai",
        description: "AI-powered copywriting assistant for marketing content, emails, and social media posts.",
        status: "Underrated",
        access: "Limited Free",
        category: "writing",
        working: true,
        link: "https://copy.ai",
        icon: "C",
        iconBg: "bg-purple-500"
      },
      {
        id: "writesonic",
        name: "Writesonic",
        description: "AI writing assistant for articles, blogs, and marketing content with SEO optimization.",
        status: "Underrated",
        access: "Limited Free",
        category: "writing",
        working: true,
        link: "https://writesonic.com",
        icon: "W",
        iconBg: "bg-blue-600"
      },
      {
        id: "grammarly",
        name: "Grammarly",
        description: "Advanced grammar checker and writing assistant with style suggestions and tone detection.",
        status: "Most Used",
        access: "Limited Free",
        category: "writing",
        working: true,
        link: "https://grammarly.com",
        icon: "G",
        iconBg: "bg-green-600"
      }
    ]
  },
  {
    id: "video",
    title: "AI for Video Editing",
    emoji: "🎬",
    tools: [
      {
        id: "runway",
        name: "Runway",
        description: "Creative suite for AI-powered video editing, visual effects, and content generation.",
        status: "Most Used",
        access: "Limited Free",
        category: "video",
        working: true,
        link: "https://runwayml.com",
        icon: "R",
        iconBg: "bg-gradient-to-br from-purple-500 to-pink-500"
      },
      {
        id: "descript",
        name: "Descript",
        description: "Video editor with text-based editing and AI features for seamless content creation.",
        status: "Underrated",
        access: "Paid",
        category: "video",
        working: true,
        link: "https://descript.com",
        icon: "D",
        iconBg: "bg-orange-500"
      },
      {
        id: "pictory",
        name: "Pictory",
        description: "Create videos from text content using AI with automatic scene selection and editing.",
        status: "Underrated",
        access: "Limited Free",
        category: "video",
        working: true,
        link: "https://pictory.ai",
        icon: "P",
        iconBg: "bg-cyan-500"
      },
      {
        id: "synthesia",
        name: "Synthesia",
        description: "AI video generation platform with virtual avatars and multiple language support.",
        status: "Most Used",
        access: "Paid",
        category: "video",
        working: true,
        link: "https://synthesia.io",
        icon: "S",
        iconBg: "bg-indigo-500"
      },
      {
        id: "loom",
        name: "Loom",
        description: "Screen recording tool with AI-powered features for quick video creation and sharing.",
        status: "Most Used",
        access: "Free",
        category: "video",
        working: true,
        link: "https://loom.com",
        icon: "L",
        iconBg: "bg-violet-500"
      }
    ]
  },
  {
    id: "coding",
    title: "AI Coding Tools",
    emoji: "💻",
    tools: [
      {
        id: "copilot",
        name: "Copilot",
        description: "AI pair programmer for autocompleting code and suggesting entire functions.",
        status: "Most Used",
        access: "Free",
        category: "coding",
        working: true,
        link: "https://github.com/features/copilot",
        icon: "Co",
        iconBg: "bg-teal-500"
      },
      {
        id: "anthropic",
        name: "Anthropic",
        description: "Safety-focused AI model for coding and language tasks with strong reasoning abilities.",
        status: "Underrated",
        access: "Free",
        category: "coding",
        working: true,
        link: "https://claude.ai",
        icon: "A",
        iconBg: "bg-gray-700"
      },
      {
        id: "clickup",
        name: "ClickUp",
        description: "AI assistant for writing, chat, and organizing project management tasks efficiently.",
        status: "Underrated",
        access: "Paid",
        category: "coding",
        working: true,
        link: "https://clickup.com",
        icon: "C",
        iconBg: "bg-purple-600"
      },
      {
        id: "replit",
        name: "Replit",
        description: "Online IDE with AI coding assistant for collaborative development and deployment.",
        status: "Underrated",
        access: "Free",
        category: "coding",
        working: true,
        link: "https://replit.com",
        icon: "R",
        iconBg: "bg-orange-600"
      },
      {
        id: "cursor",
        name: "Cursor",
        description: "AI-powered code editor with intelligent autocomplete and code generation features.",
        status: "Most Used",
        access: "Free",
        category: "coding",
        working: true,
        link: "https://cursor.sh",
        icon: "↗",
        iconBg: "bg-blue-600"
      },
      {
        id: "tabnine",
        name: "Tabnine",
        description: "AI code completion assistant that learns from your codebase and coding patterns.",
        status: "Underrated",
        access: "Limited Free",
        category: "coding",
        working: true,
        link: "https://tabnine.com",
        icon: "T",
        iconBg: "bg-teal-600"
      }
    ]
  },
  {
    id: "design",
    title: "AI Design Tools",
    emoji: "🎨",
    tools: [
      {
        id: "midjourney",
        name: "Midjourney",
        description: "High-quality AI image generation from text prompts with artistic and realistic styles.",
        status: "Most Used",
        access: "Paid",
        category: "design",
        working: true,
        link: "https://midjourney.com",
        icon: "M",
        iconBg: "bg-purple-600"
      },
      {
        id: "dalle",
        name: "DALL-E",
        description: "OpenAI's image generation model for creating unique images from text descriptions.",
        status: "Most Used",
        access: "Limited Free",
        category: "design",
        working: true,
        link: "https://openai.com/dall-e-2",
        icon: "D",
        iconBg: "bg-green-600"
      },
      {
        id: "canva",
        name: "Canva",
        description: "Design platform with AI-powered tools for creating graphics, presentations, and social media content.",
        status: "Most Used",
        access: "Limited Free",
        category: "design",
        working: true,
        link: "https://canva.com",
        icon: "C",
        iconBg: "bg-cyan-500"
      },
      {
        id: "figma",
        name: "Figma",
        description: "Collaborative interface design tool with AI plugins for enhanced design workflows.",
        status: "Most Used",
        access: "Free",
        category: "design",
        working: true,
        link: "https://figma.com",
        icon: "F",
        iconBg: "bg-red-500"
      },
      {
        id: "stable-diffusion",
        name: "Stable Diffusion",
        description: "Open-source AI image generation model with customizable parameters and local deployment.",
        status: "Underrated",
        access: "Free",
        category: "design",
        working: true,
        link: "https://stability.ai",
        icon: "S",
        iconBg: "bg-indigo-500"
      }
    ]
  }
];

export function getAllTools(): AITool[] {
  return categories.flatMap(category => category.tools);
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find(category => category.id === id);
}

export function searchTools(query: string): AITool[] {
  const allTools = getAllTools();
  const lowercaseQuery = query.toLowerCase();
  
  return allTools.filter(tool => 
    tool.name.toLowerCase().includes(lowercaseQuery) ||
    tool.description.toLowerCase().includes(lowercaseQuery) ||
    tool.category.toLowerCase().includes(lowercaseQuery)
  );
}
