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
    id: "all-rounder",
    title: "All Rounder",
    emoji: "🌐",
    tools: [
      {
        id: "chatgpt-all",
        name: "ChatGPT",
        description: "Conversational AI from OpenAI for writing, coding, reasoning, and more.",
        status: "Most Used",
        access: "Free",
        category: "all-rounder",
        working: true,
        link: "https://chat.openai.com",
        icon: "C",
        iconBg: "bg-green-500"
      },
      {
        id: "gemini-all",
        name: "Gemini",
        description: "Google's all-purpose AI assistant integrated with search and productivity tools.",
        status: "Most Used",
        access: "Free",
        category: "all-rounder",
        working: true,
        link: "https://gemini.google.com",
        icon: "G",
        iconBg: "bg-blue-500"
      },
      {
        id: "claude-all",
        name: "Claude",
        description: "Anthropic's advanced AI model for general-purpose use across writing and logic.",
        status: "Most Used",
        access: "Free",
        category: "all-rounder",
        working: true,
        link: "https://claude.ai",
        icon: "C",
        iconBg: "bg-orange-500"
      },
      {
        id: "perplexity-all",
        name: "Perplexity AI",
        description: "AI search engine that delivers concise answers with source citations.",
        status: "Most Used",
        access: "Free",
        category: "all-rounder",
        working: true,
        link: "https://www.perplexity.ai",
        icon: "P",
        iconBg: "bg-purple-500"
      },
      {
        id: "grok-all",
        name: "Grok",
        description: "AI chatbot created by xAI and integrated with X (Twitter).",
        status: "Underrated",
        access: "Paid",
        category: "all-rounder",
        working: true,
        link: "https://twitter.com",
        icon: "G",
        iconBg: "bg-black"
      },
      {
        id: "you-all",
        name: "You.com",
        description: "A private AI search engine with customizable tools for coding, writing, and browsing.",
        status: "Underrated",
        access: "Free",
        category: "all-rounder",
        working: true,
        link: "https://you.com",
        icon: "Y",
        iconBg: "bg-indigo-500"
      },
      {
        id: "poe-all",
        name: "Poe",
        description: "Multi-model AI chat platform by Quora that includes ChatGPT, Claude, and others.",
        status: "Underrated",
        access: "Limited Free",
        category: "all-rounder",
        working: true,
        link: "https://poe.com",
        icon: "P",
        iconBg: "bg-red-500"
      },
      {
        id: "writesonic-all",
        name: "Writesonic",
        description: "AI content generation platform for marketing, SEO, and chat.",
        status: "Most Used",
        access: "Limited Free",
        category: "all-rounder",
        working: true,
        link: "https://writesonic.com",
        icon: "W",
        iconBg: "bg-blue-600"
      },
      {
        id: "notion-ai-all",
        name: "Notion AI",
        description: "AI assistant built into Notion to help with writing, summarizing, and managing notes.",
        status: "Underrated",
        access: "Limited Free",
        category: "all-rounder",
        working: true,
        link: "https://notion.so",
        icon: "N",
        iconBg: "bg-gray-800"
      },
      {
        id: "zapier-ai-all",
        name: "Zapier AI",
        description: "AI-powered automation for workflows, integrating thousands of apps.",
        status: "Underrated",
        access: "Free",
        category: "all-rounder",
        working: true,
        link: "https://zapier.com",
        icon: "Z",
        iconBg: "bg-orange-600"
      }
    ]
  },
  {
    id: "writing",
    title: "AI Writing Tools",
    emoji: "✍️",
    tools: [
      {
        id: "jasper",
        name: "Jasper",
        description: "An AI content platform for creating blog posts, marketing copy, and more. Excellent for long-form content.",
        status: "Most Used",
        access: "Paid",
        category: "writing",
        working: true,
        link: "https://www.jasper.ai/",
        icon: "J",
        iconBg: "bg-blue-500"
      },
      {
        id: "copyai",
        name: "Copy.ai",
        description: "Generate marketing copy, sales emails, blog content, and digital ad copy with AI. Focus on short-form.",
        status: "Most Used",
        access: "Limited Free",
        category: "writing",
        working: true,
        link: "https://www.copy.ai/",
        icon: "C",
        iconBg: "bg-purple-500"
      },
      {
        id: "surfer-seo",
        name: "Surfer SEO",
        description: "AI-powered content optimization tool for writing SEO-friendly articles and blog posts. Integrates well with writing.",
        status: "Most Used",
        access: "Paid",
        category: "writing",
        working: true,
        link: "https://surferseo.com/",
        icon: "S",
        iconBg: "bg-cyan-500"
      },
      {
        id: "grammarly",
        name: "Grammarly",
        description: "AI-powered writing assistant for grammar, spelling, punctuation, clarity, and more.",
        status: "Most Used",
        access: "Free",
        category: "writing",
        working: true,
        link: "https://www.grammarly.com/",
        icon: "G",
        iconBg: "bg-green-600"
      },
      {
        id: "quillbot",
        name: "QuillBot",
        description: "AI paraphrasing tool that rewrites and enhances sentences, paragraphs, or articles.",
        status: "Most Used",
        access: "Limited Free",
        category: "writing",
        working: true,
        link: "https://quillbot.com/",
        icon: "Q",
        iconBg: "bg-blue-600"
      },
      {
        id: "rytr",
        name: "Rytr",
        description: "AI writing assistant that helps you create high-quality content, in just a few seconds, with many use cases.",
        status: "Underrated",
        access: "Limited Free",
        category: "writing",
        working: true,
        link: "https://rytr.me/",
        icon: "R",
        iconBg: "bg-yellow-500"
      },
      {
        id: "writer",
        name: "Writer",
        description: "AI writing platform designed for teams to ensure brand voice consistency across all content.",
        status: "Underrated",
        access: "Paid",
        category: "writing",
        working: true,
        link: "https://writer.com/",
        icon: "W",
        iconBg: "bg-indigo-500"
      },
      {
        id: "anyword",
        name: "Anyword",
        description: "AI copywriting platform that generates and optimizes copy for better performance across channels.",
        status: "Underrated",
        access: "Limited Free",
        category: "writing",
        working: true,
        link: "https://anyword.com/",
        icon: "A",
        iconBg: "bg-pink-500"
      }
    ]
  },
  {
    id: "video",
    title: "AI for Video Editing",
    emoji: "🎬",
    tools: [
      {
        id: "descript",
        name: "Descript",
        description: "All-in-one video and podcast editing with AI features like 'overdub' and transcription. Edit video by editing text.",
        status: "Most Used",
        access: "Limited Free",
        category: "video",
        working: true,
        link: "https://www.descript.com/",
        icon: "D",
        iconBg: "bg-orange-500"
      },
      {
        id: "synthesys-ai",
        name: "Synthesys AI Studio",
        description: "Create AI videos with realistic human presenters and voiceovers from text. Focus on synthetic media.",
        status: "Underrated",
        access: "Paid",
        category: "video",
        working: true,
        link: "https://www.synthesys.io/",
        icon: "S",
        iconBg: "bg-purple-600"
      },
      {
        id: "runway-ml",
        name: "RunwayML Gen-1/Gen-2",
        description: "Next-gen AI creative suite for video editing, content generation (text to video, image to video), and more.",
        status: "Most Used",
        access: "Limited Free",
        category: "video",
        working: true,
        link: "https://runwayml.com/",
        icon: "R",
        iconBg: "bg-gradient-to-br from-purple-500 to-pink-500"
      },
      {
        id: "heygen",
        name: "HeyGen",
        description: "Generate talking avatar videos from text in minutes, ideal for corporate training or marketing.",
        status: "Most Used",
        access: "Limited Free",
        category: "video",
        working: true,
        link: "https://www.heygen.com/",
        icon: "H",
        iconBg: "bg-blue-600"
      },
      {
        id: "pictory",
        name: "Pictory",
        description: "Automatically create short, highly shareable brand videos from long-form content, perfect for social media.",
        status: "Underrated",
        access: "Limited Free",
        category: "video",
        working: true,
        link: "https://pictory.ai/",
        icon: "P",
        iconBg: "bg-cyan-500"
      },
      {
        id: "veed-io",
        name: "VEED.io",
        description: "Online video editor with AI tools for automatic subtitles, translation, and background removal.",
        status: "Underrated",
        access: "Limited Free",
        category: "video",
        working: true,
        link: "https://www.veed.io/",
        icon: "V",
        iconBg: "bg-green-600"
      }
    ]
  },
  {
    id: "coding",
    title: "AI Coding Tools",
    emoji: "💻",
    tools: [
      {
        id: "github-copilot",
        name: "GitHub Copilot",
        description: "AI pair programmer that suggests code and entire functions in real-time, integrating with popular IDEs.",
        status: "Most Used",
        access: "Paid",
        category: "coding",
        working: true,
        link: "https://github.com/features/copilot",
        icon: "G",
        iconBg: "bg-gray-800"
      },
      {
        id: "tabnine",
        name: "Tabnine",
        description: "AI code completion tool for various programming languages and IDEs, focused on boosting developer productivity.",
        status: "Most Used",
        access: "Free",
        category: "coding",
        working: true,
        link: "https://www.tabnine.com/",
        icon: "T",
        iconBg: "bg-teal-600"
      },
      {
        id: "replit-ai",
        name: "Replit AI (Ghostwriter)",
        description: "AI-powered coding assistance within the Replit online IDE, offering code completion, generation, and explanation.",
        status: "Most Used",
        access: "Free",
        category: "coding",
        working: true,
        link: "https://replit.com/ai",
        icon: "R",
        iconBg: "bg-orange-600"
      },
      {
        id: "cody",
        name: "Cody (Sourcegraph)",
        description: "AI coding assistant that understands your codebase and helps with explanations, fixes, and generation.",
        status: "Underrated",
        access: "Free",
        category: "coding",
        working: true,
        link: "https://sourcegraph.com/cody",
        icon: "C",
        iconBg: "bg-purple-600"
      },
      {
        id: "codeium",
        name: "Codeium",
        description: "Free AI code completion and chat for developers, supporting over 70 languages.",
        status: "Underrated",
        access: "Free",
        category: "coding",
        working: true,
        link: "https://www.codeium.com/",
        icon: "C",
        iconBg: "bg-blue-600"
      },
      {
        id: "mutable-ai",
        name: "Mutable.ai",
        description: "AI-powered code assistant for generating, refactoring, and debugging code at speed.",
        status: "Underrated",
        access: "Paid",
        category: "coding",
        working: true,
        link: "https://mutable.ai/",
        icon: "M",
        iconBg: "bg-indigo-600"
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
        description: "AI image generator that creates stunning, often artistic, visuals from text prompts.",
        status: "Most Used",
        access: "Paid",
        category: "design",
        working: true,
        link: "https://www.midjourney.com/",
        icon: "M",
        iconBg: "bg-purple-600"
      },
      {
        id: "dalle3",
        name: "DALL-E 3",
        description: "OpenAI's AI model that generates images from natural language descriptions, known for its creative capabilities.",
        status: "Most Used",
        access: "Paid",
        category: "design",
        working: true,
        link: "https://openai.com/dall-e-3/",
        icon: "D",
        iconBg: "bg-green-600"
      },
      {
        id: "adobe-firefly",
        name: "Adobe Firefly",
        description: "A family of creative generative AI models for image generation, text effects, and more, integrated with Adobe apps.",
        status: "Most Used",
        access: "Free",
        category: "design",
        working: true,
        link: "https://www.adobe.com/sensei/generative-ai/firefly.html",
        icon: "A",
        iconBg: "bg-red-600"
      },
      {
        id: "canva-ai",
        name: "Canva Text to Image",
        description: "Generate images directly within Canva's design platform using text prompts, making design accessible.",
        status: "Most Used",
        access: "Free",
        category: "design",
        working: true,
        link: "https://www.canva.com/your-design/magic-media/text-to-image/",
        icon: "C",
        iconBg: "bg-cyan-500"
      },
      {
        id: "remove-bg",
        name: "Remove.bg",
        description: "Automatically remove the background from any image with high precision, saving time for designers.",
        status: "Most Used",
        access: "Limited Free",
        category: "design",
        working: true,
        link: "https://www.remove.bg/",
        icon: "R",
        iconBg: "bg-pink-500"
      },
      {
        id: "lexica",
        name: "Lexica Aperture",
        description: "A stable diffusion based image generator with a focus on ease of use and a large gallery of prompts.",
        status: "Underrated",
        access: "Free",
        category: "design",
        working: true,
        link: "https://lexica.art/",
        icon: "L",
        iconBg: "bg-indigo-500"
      },
      {
        id: "clipdrop",
        name: "Clipdrop",
        description: "Suite of AI tools for image editing, including background removal, relighting, and upscaling.",
        status: "Underrated",
        access: "Limited Free",
        category: "design",
        working: true,
        link: "https://clipdrop.co/",
        icon: "C",
        iconBg: "bg-yellow-600"
      }
    ]
  },
  {
    id: "audio-voice",
    title: "Audio & Voice Tools",
    emoji: "🎧",
    tools: [
      {
        id: "elevenlabs",
        name: "ElevenLabs",
        description: "AI voice generator for realistic text-to-speech and voice cloning, widely used for content creation.",
        status: "Most Used",
        access: "Limited Free",
        category: "audio-voice",
        working: true,
        link: "https://elevenlabs.io/",
        icon: "E",
        iconBg: "bg-purple-600"
      },
      {
        id: "murf-ai",
        name: "Murf.ai",
        description: "AI voice generator for lifelike voiceovers, supporting various languages and styles, with a focus on professional use.",
        status: "Most Used",
        access: "Limited Free",
        category: "audio-voice",
        working: true,
        link: "https://murf.ai/",
        icon: "M",
        iconBg: "bg-blue-600"
      },
      {
        id: "audyo",
        name: "Audyo",
        description: "AI text-to-audio platform for creating voiceovers, podcasts, and more, with a simple interface.",
        status: "Underrated",
        access: "Paid",
        category: "audio-voice",
        working: true,
        link: "https://audyo.ai/",
        icon: "A",
        iconBg: "bg-green-600"
      },
      {
        id: "aflorithmic",
        name: "Aflorithmic",
        description: "Scalable AI audio production platform for marketing, advertising, and content creation, focusing on audio branding.",
        status: "Underrated",
        access: "Paid",
        category: "audio-voice",
        working: true,
        link: "https://www.aflorithmic.ai/",
        icon: "A",
        iconBg: "bg-orange-600"
      },
      {
        id: "krisp",
        name: "Krisp",
        description: "AI-powered noise and voice cancellation app for online meetings and calls, enhancing audio clarity.",
        status: "Most Used",
        access: "Limited Free",
        category: "audio-voice",
        working: true,
        link: "https://krisp.ai/",
        icon: "K",
        iconBg: "bg-indigo-600"
      },
      {
        id: "resemble-ai",
        name: "Resemble.ai",
        description: "AI voice cloning and generation platform for creating realistic speech with custom emotions.",
        status: "Underrated",
        access: "Paid",
        category: "audio-voice",
        working: true,
        link: "https://www.resemble.ai/",
        icon: "R",
        iconBg: "bg-pink-600"
      }
    ]
  },
  {
    id: "chatbots",
    title: "AI Chatbots",
    emoji: "🤖",
    tools: [
      {
        id: "chatgpt-bot",
        name: "ChatGPT",
        description: "OpenAI's widely recognized conversational AI for diverse queries, writing, coding, and more.",
        status: "Most Used",
        access: "Free",
        category: "chatbots",
        working: true,
        link: "https://chat.openai.com",
        icon: "C",
        iconBg: "bg-green-500"
      },
      {
        id: "gemini-bot",
        name: "Gemini",
        description: "Google's conversational AI, integrated into search and other Google products, offering multimodal capabilities.",
        status: "Most Used",
        access: "Free",
        category: "chatbots",
        working: true,
        link: "https://gemini.google.com",
        icon: "G",
        iconBg: "bg-blue-500"
      },
      {
        id: "claude-bot",
        name: "Claude",
        description: "Anthropic's AI assistant, known for its strong performance in complex reasoning and creative tasks, with larger context windows.",
        status: "Most Used",
        access: "Free",
        category: "chatbots",
        working: true,
        link: "https://claude.ai",
        icon: "C",
        iconBg: "bg-orange-500"
      },
      {
        id: "poe-bot",
        name: "Poe",
        description: "A platform by Quora allowing users to interact with multiple AI models like ChatGPT and Claude in one place.",
        status: "Underrated",
        access: "Limited Free",
        category: "chatbots",
        working: true,
        link: "https://poe.com",
        icon: "P",
        iconBg: "bg-red-500"
      },
      {
        id: "character-ai",
        name: "Character.ai",
        description: "Create and interact with AI characters, from famous personalities to custom creations, for engaging conversations.",
        status: "Most Used",
        access: "Free",
        category: "chatbots",
        working: true,
        link: "https://beta.character.ai/",
        icon: "C",
        iconBg: "bg-purple-600"
      },
      {
        id: "grok-bot",
        name: "Grok",
        description: "AI chatbot created by xAI and integrated with X (Twitter), known for its humor and access to real-time information.",
        status: "Underrated",
        access: "Paid",
        category: "chatbots",
        working: true,
        link: "https://twitter.com",
        icon: "G",
        iconBg: "bg-black"
      }
    ]
  },
  {
    id: "pdf-documents",
    title: "PDF & Document Tools",
    emoji: "📄",
    tools: [
      {
        id: "chatpdf",
        name: "ChatPDF",
        description: "Summarize and ask questions about your PDF documents using AI, making research faster.",
        status: "Most Used",
        access: "Limited Free",
        category: "pdf-documents",
        working: true,
        link: "https://www.chatpdf.com/",
        icon: "C",
        iconBg: "bg-red-600"
      },
      {
        id: "humata-ai",
        name: "Humata AI",
        description: "AI-powered tool to summarize, analyze, and answer questions about any file, including research papers and reports.",
        status: "Underrated",
        access: "Limited Free",
        category: "pdf-documents",
        working: true,
        link: "https://www.humata.ai/",
        icon: "H",
        iconBg: "bg-blue-600"
      },
      {
        id: "pdfgear",
        name: "PDFgear",
        description: "Free AI PDF editor and converter with integrated AI chatbot for document interaction and management.",
        status: "Underrated",
        access: "Free",
        category: "pdf-documents",
        working: true,
        link: "https://www.pdfgear.com/",
        icon: "P",
        iconBg: "bg-green-600"
      },
      {
        id: "docuchat",
        name: "DocuChat",
        description: "Upload documents and chat with an AI to get answers and insights, similar to a personalized research assistant.",
        status: "Underrated",
        access: "Limited Free",
        category: "pdf-documents",
        working: true,
        link: "https://docuchat.io/",
        icon: "D",
        iconBg: "bg-purple-600"
      },
      {
        id: "scribbr",
        name: "Scribbr Plagiarism Checker",
        description: "AI-powered plagiarism checker that compares your document against a vast database of sources.",
        status: "Most Used",
        access: "Paid",
        category: "pdf-documents",
        working: true,
        link: "https://www.scribbr.com/plagiarism-checker/",
        icon: "S",
        iconBg: "bg-orange-600"
      }
    ]
  },
  {
    id: "marketing-seo",
    title: "Marketing & SEO Tools",
    emoji: "📈",
    tools: [
      {
        id: "surfer-seo-marketing",
        name: "Surfer SEO",
        description: "AI content optimization tool for writing SEO-friendly articles and blog posts, integrating keyword research.",
        status: "Most Used",
        access: "Paid",
        category: "marketing-seo",
        working: true,
        link: "https://surferseo.com/",
        icon: "S",
        iconBg: "bg-cyan-500"
      },
      {
        id: "semrush",
        name: "Semrush",
        description: "Comprehensive SEO platform with AI tools for content marketing, keyword research, and competitor analysis.",
        status: "Most Used",
        access: "Limited Free",
        category: "marketing-seo",
        working: true,
        link: "https://www.semrush.com/",
        icon: "S",
        iconBg: "bg-orange-600"
      },
      {
        id: "ahrefs",
        name: "Ahrefs",
        description: "SEO toolkit with features for site audit, keyword research, content exploration, and competitive analysis.",
        status: "Most Used",
        access: "Paid",
        category: "marketing-seo",
        working: true,
        link: "https://ahrefs.com/",
        icon: "A",
        iconBg: "bg-blue-600"
      },
      {
        id: "jasper-marketing",
        name: "Jasper (Marketing Focus)",
        description: "An AI content platform strong in generating marketing copy, ad creatives, and blog outlines.",
        status: "Most Used",
        access: "Paid",
        category: "marketing-seo",
        working: true,
        link: "https://www.jasper.ai/",
        icon: "J",
        iconBg: "bg-blue-500"
      },
      {
        id: "marketmuse",
        name: "MarketMuse",
        description: "AI-powered content intelligence platform for optimizing content strategy and identifying content gaps.",
        status: "Underrated",
        access: "Paid",
        category: "marketing-seo",
        working: true,
        link: "https://www.marketmuse.com/",
        icon: "M",
        iconBg: "bg-purple-600"
      },
      {
        id: "frase-io",
        name: "Frase.io",
        description: "AI content optimization tool that helps you research, write, and optimize high-ranking content.",
        status: "Underrated",
        access: "Paid",
        category: "marketing-seo",
        working: true,
        link: "https://www.frase.io/",
        icon: "F",
        iconBg: "bg-green-600"
      }
    ]
  },
  {
    id: "social-media",
    title: "Social Media Tools",
    emoji: "📱",
    tools: [
      {
        id: "buffer-ai",
        name: "Buffer AI Assistant",
        description: "AI assistant for crafting social media posts and repurposing content within Buffer's scheduling platform.",
        status: "Most Used",
        access: "Limited Free",
        category: "social-media",
        working: true,
        link: "https://buffer.com/ai-assistant",
        icon: "B",
        iconBg: "bg-blue-600"
      },
      {
        id: "hootsuite-ai",
        name: "Hootsuite AI Tools",
        description: "AI-powered features within Hootsuite for content generation, social listening, and analytics.",
        status: "Most Used",
        access: "Paid",
        category: "social-media",
        working: true,
        link: "https://www.hootsuite.com/",
        icon: "H",
        iconBg: "bg-orange-600"
      },
      {
        id: "tailwind-ai",
        name: "Tailwind AI",
        description: "AI-powered social media assistant for Pinterest and Instagram to optimize posts and create designs.",
        status: "Underrated",
        access: "Limited Free",
        category: "social-media",
        working: true,
        link: "https://www.tailwindapp.com/ai",
        icon: "T",
        iconBg: "bg-pink-600"
      },
      {
        id: "tweethunter",
        name: "TweetHunter",
        description: "AI-powered tool for generating viral tweets, scheduling, and growing Twitter audience.",
        status: "Underrated",
        access: "Paid",
        category: "social-media",
        working: true,
        link: "https://tweethunter.io/",
        icon: "T",
        iconBg: "bg-cyan-600"
      },
      {
        id: "later-ai",
        name: "Later AI",
        description: "AI caption generator and hashtag suggestions within the Later social media management platform.",
        status: "Most Used",
        access: "Limited Free",
        category: "social-media",
        working: true,
        link: "https://later.com/ai-caption-writer/",
        icon: "L",
        iconBg: "bg-purple-600"
      }
    ]
  },
  {
    id: "productivity",
    title: "Productivity Tools",
    emoji: "📌",
    tools: [
      {
        id: "notion-ai-prod",
        name: "Notion AI",
        description: "AI assistant built into Notion to help with writing, summarizing, and managing notes and documents.",
        status: "Most Used",
        access: "Limited Free",
        category: "productivity",
        working: true,
        link: "https://notion.so",
        icon: "N",
        iconBg: "bg-gray-800"
      },
      {
        id: "microsoft-365-copilot",
        name: "Microsoft 365 Copilot",
        description: "AI assistant for Microsoft 365 apps like Word, Excel, PowerPoint, and Outlook, transforming productivity.",
        status: "Most Used",
        access: "Paid",
        category: "productivity",
        working: true,
        link: "https://www.microsoft.com/en-us/microsoft-365/microsoft-365-copilot",
        icon: "M",
        iconBg: "bg-blue-600"
      },
      {
        id: "google-workspace-ai",
        name: "Google Workspace AI",
        description: "AI features integrated across Google Workspace apps like Docs, Gmail, and Sheets, enhancing collaboration.",
        status: "Most Used",
        access: "Limited Free",
        category: "productivity",
        working: true,
        link: "https://workspace.google.com/ai/",
        icon: "G",
        iconBg: "bg-green-600"
      },
      {
        id: "mem-ai",
        name: "Mem.ai",
        description: "AI-powered workspace that organizes your notes, tasks, and ideas automatically through 'Mems'.",
        status: "Underrated",
        access: "Limited Free",
        category: "productivity",
        working: true,
        link: "https://mem.ai/",
        icon: "M",
        iconBg: "bg-purple-600"
      },
      {
        id: "motion",
        name: "Motion",
        description: "AI calendar that intelligently schedules your day and optimizes your time, reducing manual planning.",
        status: "Underrated",
        access: "Paid",
        category: "productivity",
        working: true,
        link: "https://www.usemotion.com/",
        icon: "M",
        iconBg: "bg-indigo-600"
      },
      {
        id: "sanebox",
        name: "SaneBox",
        description: "AI email organizer that intelligently filters and prioritizes your inbox, reducing clutter.",
        status: "Underrated",
        access: "Paid",
        category: "productivity",
        working: true,
        link: "https://www.sanebox.com/",
        icon: "S",
        iconBg: "bg-orange-600"
      }
    ]
  },
  {
    id: "agents-automation",
    title: "Agents & Automation",
    emoji: "🛠️",
    tools: [
      {
        id: "zapier-ai-auto",
        name: "Zapier AI",
        description: "AI-powered automation for workflows, integrating thousands of apps to connect your tools.",
        status: "Most Used",
        access: "Free",
        category: "agents-automation",
        working: true,
        link: "https://zapier.com",
        icon: "Z",
        iconBg: "bg-orange-600"
      },
      {
        id: "make",
        name: "Make (formerly Integromat)",
        description: "Visual platform for automating workflows and integrating apps with AI capabilities for complex automations.",
        status: "Most Used",
        access: "Free",
        category: "agents-automation",
        working: true,
        link: "https://www.make.com/",
        icon: "M",
        iconBg: "bg-purple-600"
      },
      {
        id: "autogen",
        name: "Autogen (Microsoft Research)",
        description: "Framework for building multi-agent AI applications, allowing agents to converse to solve tasks.",
        status: "Underrated",
        access: "Free",
        category: "agents-automation",
        working: true,
        link: "https://microsoft.github.io/autogen/",
        icon: "A",
        iconBg: "bg-blue-600"
      },
      {
        id: "agentgpt",
        name: "AgentGPT",
        description: "Autonomous AI agents that can generate and execute tasks based on a given goal in a browser.",
        status: "Underrated",
        access: "Limited Free",
        category: "agents-automation",
        working: true,
        link: "https://agentgpt.reworkd.ai/",
        icon: "A",
        iconBg: "bg-green-600"
      },
      {
        id: "superagent",
        name: "Superagent",
        description: "Open-source framework for building, deploying, and managing LLM-powered autonomous agents.",
        status: "Underrated",
        access: "Free",
        category: "agents-automation",
        working: true,
        link: "https://github.com/homanp/superagent",
        icon: "S",
        iconBg: "bg-red-600"
      }
    ]
  },
  {
    id: "education-learning",
    title: "Education / Learning",
    emoji: "🎓",
    tools: [
      {
        id: "khanmigo",
        name: "Khanmigo (Khan Academy)",
        description: "AI-powered tutor and teaching assistant from Khan Academy, designed to help students learn effectively.",
        status: "Most Used",
        access: "Paid",
        category: "education-learning",
        working: true,
        link: "https://www.khanacademy.org/khanmigo",
        icon: "K",
        iconBg: "bg-green-600"
      },
      {
        id: "duolingo-max",
        name: "Duolingo Max",
        description: "AI-enhanced features within Duolingo for personalized language learning, including role-play and deeper explanations.",
        status: "Most Used",
        access: "Paid",
        category: "education-learning",
        working: true,
        link: "https://www.duolingo.com/duolingomax",
        icon: "D",
        iconBg: "bg-green-500"
      },
      {
        id: "ello",
        name: "Ello",
        description: "AI language tutor that helps you learn English by talking to an AI, providing real-time feedback.",
        status: "Underrated",
        access: "Limited Free",
        category: "education-learning",
        working: true,
        link: "https://ello.com/",
        icon: "E",
        iconBg: "bg-blue-600"
      },
      {
        id: "explain-everything",
        name: "Explain Everything Whiteboard",
        description: "Interactive whiteboard with AI features for educational content creation and collaborative learning.",
        status: "Underrated",
        access: "Limited Free",
        category: "education-learning",
        working: true,
        link: "https://explaineverything.com/",
        icon: "E",
        iconBg: "bg-purple-600"
      },
      {
        id: "caktus-ai",
        name: "Caktus AI",
        description: "AI study tool for generating essays, outlines, and coding answers, aimed at student support.",
        status: "Underrated",
        access: "Limited Free",
        category: "education-learning",
        working: true,
        link: "https://caktus.ai/",
        icon: "C",
        iconBg: "bg-orange-600"
      }
    ]
  },
  {
    id: "presentation-slides",
    title: "Presentation & Slides",
    emoji: "🗂️",
    tools: [
      {
        id: "tome",
        name: "Tome",
        description: "AI-powered storytelling format for creating engaging presentations and documents with dynamic layouts.",
        status: "Most Used",
        access: "Free",
        category: "presentation-slides",
        working: true,
        link: "https://tome.app/",
        icon: "T",
        iconBg: "bg-purple-600"
      },
      {
        id: "gamma",
        name: "Gamma",
        description: "AI-powered tool to generate beautiful and engaging presentations, documents, and webpages quickly from text.",
        status: "Most Used",
        access: "Free",
        category: "presentation-slides",
        working: true,
        link: "https://gamma.app/",
        icon: "G",
        iconBg: "bg-indigo-600"
      },
      {
        id: "beautiful-ai",
        name: "Beautiful.ai",
        description: "AI presentation maker that designs your slides for you, ensuring a professional and consistent look.",
        status: "Underrated",
        access: "Paid",
        category: "presentation-slides",
        working: true,
        link: "https://www.beautiful.ai/",
        icon: "B",
        iconBg: "bg-pink-600"
      },
      {
        id: "designs-ai",
        name: "Designs.ai",
        description: "AI-powered design platform for creating logos, videos, banners, and presentations with generative features.",
        status: "Underrated",
        access: "Limited Free",
        category: "presentation-slides",
        working: true,
        link: "https://designs.ai/",
        icon: "D",
        iconBg: "bg-cyan-600"
      },
      {
        id: "plus-ai",
        name: "Plus AI (for Google Slides)",
        description: "AI add-on for Google Slides that generates presentations from text, edits, and remixes slides.",
        status: "Most Used",
        access: "Limited Free",
        category: "presentation-slides",
        working: true,
        link: "https://www.plusdocs.com/",
        icon: "P",
        iconBg: "bg-green-600"
      }
    ]
  },
  {
    id: "resume-career",
    title: "Resume & Career Tools",
    emoji: "💼",
    tools: [
      {
        id: "kickresume",
        name: "Kickresume AI Resume Builder",
        description: "AI-powered resume builder with templates and AI writing assistance to optimize your application.",
        status: "Most Used",
        access: "Limited Free",
        category: "resume-career",
        working: true,
        link: "https://www.kickresume.com/en/ai-resume-builder/",
        icon: "K",
        iconBg: "bg-blue-600"
      },
      {
        id: "rezi",
        name: "Rezi AI Resume Builder",
        description: "AI resume builder optimized for ATS systems, with AI writing and keyword analysis for better job matching.",
        status: "Underrated",
        access: "Free",
        category: "resume-career",
        working: true,
        link: "https://rezi.ai/",
        icon: "R",
        iconBg: "bg-green-600"
      },
      {
        id: "jobscan",
        name: "JobScan",
        description: "AI-powered tool that optimizes your resume and LinkedIn profile for specific job descriptions.",
        status: "Most Used",
        access: "Limited Free",
        category: "resume-career",
        working: true,
        link: "https://www.jobscan.co/",
        icon: "J",
        iconBg: "bg-purple-600"
      },
      {
        id: "cover-letter-ai",
        name: "Cover Letter AI",
        description: "Generate personalized cover letters using AI for job applications, tailored to specific roles.",
        status: "Underrated",
        access: "Limited Free",
        category: "resume-career",
        working: true,
        link: "https://coverletter.ai/",
        icon: "C",
        iconBg: "bg-orange-600"
      },
      {
        id: "teal-hq",
        name: "Teal HQ",
        description: "AI-powered platform for career management, including resume and cover letter optimization and job tracking.",
        status: "Most Used",
        access: "Free",
        category: "resume-career",
        working: true,
        link: "https://www.tealhq.com/",
        icon: "T",
        iconBg: "bg-teal-600"
      }
    ]
  },
  {
    id: "research-analysis",
    title: "Research & Analysis",
    emoji: "🧪",
    tools: [
      {
        id: "elicit",
        name: "Elicit",
        description: "AI research assistant that automates parts of your research workflow, like finding relevant papers and summarizing arguments.",
        status: "Most Used",
        access: "Free",
        category: "research-analysis",
        working: true,
        link: "https://elicit.org/",
        icon: "E",
        iconBg: "bg-blue-600"
      },
      {
        id: "consensus",
        name: "Consensus",
        description: "AI search engine that extracts findings directly from scientific research papers, with citations.",
        status: "Most Used",
        access: "Limited Free",
        category: "research-analysis",
        working: true,
        link: "https://consensus.app/",
        icon: "C",
        iconBg: "bg-green-600"
      },
      {
        id: "perplexity-research",
        name: "Perplexity AI (Research focus)",
        description: "AI search engine that delivers concise answers with source citations, excellent for quick research.",
        status: "Most Used",
        access: "Free",
        category: "research-analysis",
        working: true,
        link: "https://www.perplexity.ai",
        icon: "P",
        iconBg: "bg-purple-500"
      },
      {
        id: "scite-ai",
        name: "Scite.ai",
        description: "A tool that shows how research papers have been cited and evaluates their claims, useful for academic integrity.",
        status: "Underrated",
        access: "Limited Free",
        category: "research-analysis",
        working: true,
        link: "https://scite.ai/",
        icon: "S",
        iconBg: "bg-orange-600"
      },
      {
        id: "research-rabbit",
        name: "ResearchRabbit",
        description: "Visual tool for discovering research papers and identifying key authors and topics, aiding literature reviews.",
        status: "Underrated",
        access: "Free",
        category: "research-analysis",
        working: true,
        link: "https://www.researchrabbit.ai/",
        icon: "R",
        iconBg: "bg-pink-600"
      }
    ]
  },
  {
    id: "cybersecurity-privacy",
    title: "Cybersecurity & Privacy",
    emoji: "🔐",
    tools: [
      {
        id: "darktrace",
        name: "Darktrace",
        description: "AI-powered cybersecurity platform for autonomous threat detection and response using self-learning AI.",
        status: "Most Used",
        access: "Paid",
        category: "cybersecurity-privacy",
        working: true,
        link: "https://www.darktrace.com/",
        icon: "D",
        iconBg: "bg-red-600"
      },
      {
        id: "cylance-protect",
        name: "CylancePROTECT (BlackBerry)",
        description: "AI-driven endpoint protection that predicts and prevents cyberattacks without relying on signatures.",
        status: "Underrated",
        access: "Paid",
        category: "cybersecurity-privacy",
        working: true,
        link: "https://www.blackberry.com/us/en/products/cylance-security/cylanceprotect",
        icon: "C",
        iconBg: "bg-black"
      },
      {
        id: "qradar-advisor",
        name: "IBM Security QRadar Advisor with Watson",
        description: "AI-driven security analytics for threat detection and investigation, leveraging Watson's cognitive abilities.",
        status: "Most Used",
        access: "Paid",
        category: "cybersecurity-privacy",
        working: true,
        link: "https://www.ibm.com/security/security-intelligence/qradar-advisor",
        icon: "I",
        iconBg: "bg-blue-600"
      },
      {
        id: "snyk",
        name: "Snyk",
        description: "Developer security platform with AI for identifying and fixing vulnerabilities in code, dependencies, and containers.",
        status: "Most Used",
        access: "Limited Free",
        category: "cybersecurity-privacy",
        working: true,
        link: "https://snyk.io/",
        icon: "S",
        iconBg: "bg-purple-600"
      },
      {
        id: "vade",
        name: "Vade",
        description: "AI-powered email security that protects against phishing, malware, and targeted attacks.",
        status: "Underrated",
        access: "Paid",
        category: "cybersecurity-privacy",
        working: true,
        link: "https://www.vadesecure.com/",
        icon: "V",
        iconBg: "bg-orange-600"
      }
    ]
  },
  {
    id: "fun-entertainment",
    title: "Fun / Meme / Entertainment",
    emoji: "😂",
    tools: [
      {
        id: "fotor-face-swap",
        name: "Fotor AI Face Swap",
        description: "Swap faces in photos and videos using AI for funny and creative content, easy to use.",
        status: "Most Used",
        access: "Free",
        category: "fun-entertainment",
        working: true,
        link: "https://www.fotor.com/features/ai-face-swap/",
        icon: "F",
        iconBg: "bg-pink-600"
      },
      {
        id: "capcut-ai",
        name: "CapCut AI",
        description: "Popular video editing app with AI features for effects, captions, and more, widely used for social media trends.",
        status: "Most Used",
        access: "Free",
        category: "fun-entertainment",
        working: true,
        link: "https://www.capcut.com/",
        icon: "C",
        iconBg: "bg-red-600"
      },
      {
        id: "deepmotion",
        name: "DeepMotion",
        description: "Generate 3D animations from videos using AI for character animation and virtual content, for beginners and pros.",
        status: "Underrated",
        access: "Limited Free",
        category: "fun-entertainment",
        working: true,
        link: "https://www.deepmotion.com/",
        icon: "D",
        iconBg: "bg-purple-600"
      },
      {
        id: "playground-ai",
        name: "Playground AI",
        description: "Free online AI image creator for generating art, memes, and more, with a focus on community and sharing.",
        status: "Underrated",
        access: "Free",
        category: "fun-entertainment",
        working: true,
        link: "https://playgroundai.com/",
        icon: "P",
        iconBg: "bg-blue-600"
      },
      {
        id: "voicemod",
        name: "Voicemod",
        description: "Real-time AI voice changer with numerous voice effects for gaming, streaming, and online calls.",
        status: "Most Used",
        access: "Free",
        category: "fun-entertainment",
        working: true,
        link: "https://www.voicemod.net/",
        icon: "V",
        iconBg: "bg-green-600"
      }
    ]
  },
  {
    id: "3d-ar-visual",
    title: "3D, AR & Visual Tools",
    emoji: "🧊",
    tools: [
      {
        id: "luma-genie",
        name: "Luma AI (Genie)",
        description: "Generate 3D models from text descriptions or 2D images using AI, pushing boundaries in 3D creation.",
        status: "Most Used",
        access: "Free",
        category: "3d-ar-visual",
        working: true,
        link: "https://lumalabs.ai/genie",
        icon: "L",
        iconBg: "bg-purple-600"
      },
      {
        id: "blockade-labs",
        name: "Blockade Labs (Skybox AI)",
        description: "AI-powered text-to-skybox generator for creating immersive 360° environments for games and virtual worlds.",
        status: "Underrated",
        access: "Limited Free",
        category: "3d-ar-visual",
        working: true,
        link: "https://www.blockadelabs.com/",
        icon: "B",
        iconBg: "bg-blue-600"
      },
      {
        id: "spline-ai",
        name: "Spline AI",
        description: "AI-powered 3D design tool that allows for real-time collaboration and intuitive creation of 3D scenes.",
        status: "Underrated",
        access: "Free",
        category: "3d-ar-visual",
        working: true,
        link: "https://spline.design/ai",
        icon: "S",
        iconBg: "bg-green-600"
      },
      {
        id: "polycam",
        name: "Polycam",
        description: "Capture and generate 3D models from photos using photogrammetry and AI, perfect for scanning real-world objects.",
        status: "Most Used",
        access: "Limited Free",
        category: "3d-ar-visual",
        working: true,
        link: "https://polycam.ai/",
        icon: "P",
        iconBg: "bg-indigo-600"
      },
      {
        id: "kaedim",
        name: "Kaedim",
        description: "Transform 2D images into 3D models using AI, speeding up asset creation for games and animation.",
        status: "Underrated",
        access: "Paid",
        category: "3d-ar-visual",
        working: true,
        link: "https://www.kaedim.com/",
        icon: "K",
        iconBg: "bg-orange-600"
      }
    ]
  },
  {
    id: "email-tools",
    title: "Email Tools",
    emoji: "📨",
    tools: [
      {
        id: "jasper-email",
        name: "Jasper Email Assistant",
        description: "AI assistance for writing compelling marketing emails, sales outreach, and newsletters, integrated with Jasper.",
        status: "Most Used",
        access: "Paid",
        category: "email-tools",
        working: true,
        link: "https://www.jasper.ai/features/email-marketing",
        icon: "J",
        iconBg: "bg-blue-500"
      },
      {
        id: "smartwriter-ai",
        name: "SmartWriter.ai",
        description: "AI platform for personalized cold emails and LinkedIn outreach, boosting conversion rates.",
        status: "Underrated",
        access: "Paid",
        category: "email-tools",
        working: true,
        link: "https://smartwriter.ai/",
        icon: "S",
        iconBg: "bg-purple-600"
      },
      {
        id: "lavender",
        name: "Lavender",
        description: "AI email assistant that helps sales professionals write better emails faster, with real-time coaching.",
        status: "Underrated",
        access: "Limited Free",
        category: "email-tools",
        working: true,
        link: "https://www.lavender.ai/",
        icon: "L",
        iconBg: "bg-pink-600"
      },
      {
        id: "copyai-email",
        name: "Copy.ai Email Marketing (Focus)",
        description: "Generate high-converting email copy for various campaigns with AI, from subject lines to full body content.",
        status: "Most Used",
        access: "Limited Free",
        category: "email-tools",
        working: true,
        link: "https://www.copy.ai/use-cases/email-marketing-copy-generator/",
        icon: "C",
        iconBg: "bg-purple-500"
      },
      {
        id: "gmail-magic-write",
        name: "Magic Write (Gmail Labs)",
        description: "AI-powered writing assistance directly within Gmail for drafting and refining emails.",
        status: "Most Used",
        access: "Free",
        category: "email-tools",
        working: true,
        link: "https://workspace.google.com/ai/",
        icon: "G",
        iconBg: "bg-red-600"
      }
    ]
  },
  {
    id: "finance-investment",
    title: "Finance & Investment AI",
    emoji: "📊",
    tools: [
      {
        id: "alphasense",
        name: "AlphaSense",
        description: "AI search engine for financial and market research, extracting insights from vast data sets including earnings calls.",
        status: "Most Used",
        access: "Paid",
        category: "finance-investment",
        working: true,
        link: "https://www.alpha-sense.com/",
        icon: "A",
        iconBg: "bg-blue-600"
      },
      {
        id: "yewno",
        name: "Yewno",
        description: "Knowledge discovery platform using AI to analyze vast amounts of unstructured data for investment insights and risk assessment.",
        status: "Underrated",
        access: "Paid",
        category: "finance-investment",
        working: true,
        link: "https://www.yewno.com/",
        icon: "Y",
        iconBg: "bg-green-600"
      },
      {
        id: "blackrock-aladdin",
        name: "BlackRock Aladdin",
        description: "AI-powered risk management and portfolio optimization platform for institutional investors, a market leader.",
        status: "Most Used",
        access: "Paid",
        category: "finance-investment",
        working: true,
        link: "https://www.blackrock.com/aladdin",
        icon: "B",
        iconBg: "bg-black"
      },
      {
        id: "atom-finance",
        name: "Atom Finance",
        description: "AI-powered investment research platform with data, news, and analytics for individual investors.",
        status: "Underrated",
        access: "Free",
        category: "finance-investment",
        working: true,
        link: "https://atom.finance/",
        icon: "A",
        iconBg: "bg-purple-600"
      },
      {
        id: "kensho",
        name: "Kensho (S&P Global)",
        description: "AI-driven analytics and natural language processing for financial markets intelligence.",
        status: "Underrated",
        access: "Paid",
        category: "finance-investment",
        working: true,
        link: "https://www.kensho.com/",
        icon: "K",
        iconBg: "bg-orange-600"
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
