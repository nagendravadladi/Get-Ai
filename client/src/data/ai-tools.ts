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
        description: "A powerful conversational assistant from OpenAI that helps you write, think, code, and learn — all in one chat.",
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
        description: "Gemini is perfect for everyday productivity — I personally love how it gives answers right inside Gmail and Docs. If you’re deep in the Google ecosystem, this is the AI to try first.",
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
        description: "Anthropic's AI designed for thoughtful conversations, writing support, and logic-based tasks with a human touch.",
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
        description: "An AI search engine that gives real-time, source-backed answers — perfect for fast, accurate research.",
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
        description: "Elon Musk’s witty and bold chatbot that brings humor and intelligence into everyday questions and tasks.",
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
        description: "An AI writing co-pilot for marketers and creators — ideal for crafting ads, blogs, and brand content in minutes.",
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
        description: "A fast and free tool that helps generate marketing copy, social posts, and emails with just a few clicks.",
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
        description: "Combines AI writing with SEO guidance — great for bloggers and marketers who want to rank on Google.",
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
        description: "An AI-powered grammar checker that helps refine tone, clarity, and correctness in your writing instantly.",
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
        description: "A smart paraphraser and rewriter for improving essays, emails, and any text you want polished.",
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
        description: "An all-in-one editor for podcasts and videos — edit audio like a doc and remove filler words in one click.",
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
        description: "Turn text into natural-sounding voiceovers or AI videos — no mic or camera needed. Create AI videos with realistic human presenters and voiceovers from text. Focus on synthetic media.",
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
        description: "Create stunning AI-generated videos, image edits, and animations — perfect for creators and filmmakers.",
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
        description: "Generate professional talking avatar videos for sales, training, or YouTube — in multiple languages.",
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
        description: "Automatically convert long content like blogs or webinars into short social media videos. Automatically create short, highly shareable brand videos from long-form content, perfect for social media.",
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
        description: "Your AI pair programmer — writes code, completes functions, and helps you ship projects faster.",
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
        description: "Build and deploy apps directly in your browser — now with AI assistance for writing and debugging code.",
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
        description: "An AI assistant trained on your codebase — perfect for answering dev-specific questions inside your repo.",
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
        description: "Free AI code completion that works across dozens of IDEs — fast, accurate, and privacy-friendly.",
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
    "id": "design",
    "title": "AI Design Tools",
    "emoji": "🎨",
    "tools": [
      {
        "id": "midjourney",
        "name": "Midjourney",
        "description": "If you've ever dreamt of conjuring breathtaking visuals from a few words, Midjourney is the AI image generator that makes it a reality. Renowned for its ability to produce stunning, often artistic and evocative images from simple text prompts, it's become a favorite among artists, designers, and hobbyists alike. The results can be incredibly creative and inspiring, pushing the boundaries of what's possible with AI-driven art. While it's a paid platform, the sheer quality and unique aesthetic of its output make it a leading choice for those seeking to transform their textual ideas into compelling visual masterpieces.",
        "status": "Most Used",
        "access": "Paid",
        "category": "design",
        "working": true,
        "link": "https://www.midjourney.com/",
        "icon": "M",
        "iconBg": "bg-purple-600"
      },
      {
        "id": "dalle3",
        "name": "DALL-E 3",
        "description": "DALL-E 3, OpenAI's latest AI model, is a powerhouse for generating images from natural language descriptions. It stands out for its creative capabilities and remarkable understanding of nuanced prompts, allowing users to bring highly specific visual concepts to life. Integrated into platforms like ChatGPT, it’s a 'Most Used' and 'Paid' tool that opens up a world of artistic and practical image creation, perfect for designers, marketers, and anyone needing bespoke visuals.",
        "status": "Most Used",
        "access": "Paid",
        "category": "design",
        "working": true,
        "link": "https://openai.com/dall-e-3/",
        "icon": "D",
        "iconBg": "bg-green-600"
      },
      {
        "id": "adobe-firefly",
        "name": "Adobe Firefly",
        "description": "Adobe Firefly represents a family of innovative generative AI models seamlessly integrated with Adobe's professional creative applications. Whether you're looking for image generation, unique text effects, or other design enhancements, Firefly brings powerful AI directly into your familiar Adobe workflow. It's a 'Most Used' and 'Free' tool that empowers designers to experiment with new creative possibilities and accelerate their design processes with intelligent assistance.",
        "status": "Most Used",
        "access": "Free",
        "category": "design",
        "working": true,
        "link": "https://www.adobe.com/sensei/generative-ai/firefly.html",
        "icon": "A",
        "iconBg": "bg-red-600"
      },
      {
        "id": "canva-ai",
        "name": "Canva Text to Image",
        "description": "Canva's Text to Image feature makes AI-powered visual creation accessible to everyone, directly within its popular design platform. You can generate stunning images simply by typing text prompts, democratizing the design process. As a 'Most Used' and 'Free' tool, it's perfect for quickly creating visuals for social media, presentations, or personal projects without needing specialized design skills, making graphic design easier than ever.",
        "status": "Most Used",
        "access": "Free",
        "category": "design",
        "working": true,
        "link": "https://www.canva.com/your-design/magic-media/text-to-image/",
        "icon": "C",
        "iconBg": "bg-cyan-500"
      },
      {
        "id": "remove-bg",
        "name": "Remove.bg",
        "description": "Tired of painstakingly outlining subjects to remove backgrounds? Remove.bg is a game-changer. This AI-powered tool automatically and precisely removes backgrounds from any image, saving designers countless hours. It's especially handy for product photography, creating transparent logos, or prepping images for marketing materials. While it offers a \"Limited Free\" tier, its incredible efficiency often makes the paid options a worthwhile investment for frequent users.",
        "status": "Most Used",
        "access": "Limited Free",
        "category": "design",
        "working": true,
        "link": "https://www.remove.bg/",
        "icon": "R",
        "iconBg": "bg-pink-500"
      },
      {
        "id": "lexica",
        "name": "Lexica Aperture",
        "description": "If you're curious about AI image generation but find some platforms intimidating, Lexica Aperture is an excellent starting point. Built on stable diffusion, it's remarkably easy to use and provides a massive gallery of prompts to inspire your creations. It's a \"Free\" and underrated gem for anyone looking to experiment with AI art, offering a simpler entry point than some of its more complex counterparts, with a strong community aspect for sharing ideas.",
        "status": "Underrated",
        "access": "Free",
        "category": "design",
        "working": true,
        "link": "https://lexica.art/",
        "icon": "L",
        "iconBg": "bg-indigo-500"
      },
      {
        "id": "clipdrop",
        "name": "Clipdrop",
        "description": "Clipdrop isn't just one tool; it's a suite of intuitive AI features designed to simplify common image editing tasks. Whether you need to quickly remove a background, relight a scene to perfection, or upscale an image without losing quality, Clipdrop has a solution. It's a fantastic \"Underrated\" option with a \"Limited Free\" tier, proving that powerful image manipulation doesn't always require deep technical expertise or expensive software.",
        "status": "Underrated",
        "access": "Limited Free",
        "category": "design",
        "working": true,
        "link": "https://clipdrop.co/",
        "icon": "C",
        "iconBg": "bg-yellow-600"
      }
    ]
  },
  {
    "id": "audio-voice",
    "title": "Audio & Voice Tools",
    "emoji": "🎧",
    "tools": [
      {
        "id": "elevenlabs",
        "name": "ElevenLabs",
        "description": "For content creators aiming for incredibly realistic text-to-speech, ElevenLabs sets a high bar. This AI voice generator excels at creating lifelike narrations and even offers impressive voice cloning capabilities. It's become a \"Most Used\" tool for podcasts, video narration, and e-learning, giving creators the flexibility to produce high-quality audio without needing professional voice actors. The \"Limited Free\" access allows you to experience its impressive fidelity firsthand.",
        "status": "Most Used",
        "access": "Limited Free",
        "category": "audio-voice",
        "working": true,
        "link": "https://elevenlabs.io/",
        "icon": "E",
        "iconBg": "bg-purple-600"
      },
      {
        "id": "murf-ai",
        "name": "Murf.ai",
        "description": "Murf.ai is another standout AI voice generator, particularly favored by professionals for its wide range of lifelike voiceovers, support for various languages, and diverse styles. If you need a polished, consistent voice for corporate videos, presentations, or audiobooks, Murf.ai delivers. It’s a \"Most Used\" tool because it simplifies what used to be a complex and expensive process, offering \"Limited Free\" access to explore its capabilities.",
        "status": "Most Used",
        "access": "Limited Free",
        "category": "audio-voice",
        "working": true,
        "link": "https://murf.ai/",
        "icon": "M",
        "iconBg": "bg-blue-600"
      },
      {
        "id": "audyo",
        "name": "Audyo",
        "description": "Audyo is an \"Underrated,\" \"Paid\" AI text-to-audio platform that makes creating voiceovers and podcasts surprisingly simple. With its intuitive interface, you can transform text into natural-sounding audio quickly, making it a great option for content creators who need professional audio without a steep learning curve. It's perfect for adding a voice to your content efficiently.",
        "status": "Underrated",
        "access": "Paid",
        "category": "audio-voice",
        "working": true,
        "link": "https://audyo.ai/",
        "icon": "A",
        "iconBg": "bg-green-600"
      },
      {
        "id": "aflorithmic",
        "name": "Aflorithmic",
        "description": "Aflorithmic offers a \"Paid\" and \"Underrated\" scalable AI audio production platform, specializing in audio branding for marketing, advertising, and content creation. If you need consistent, high-quality audio for campaigns or want to establish a unique sonic identity, Aflorithmic provides powerful tools to achieve professional-grade results at scale.",
        "status": "Underrated",
        "access": "Paid",
        "category": "audio-voice",
        "working": true,
        "link": "https://www.aflorithmic.ai/",
        "icon": "A",
        "iconBg": "bg-orange-600"
      },
      {
        "id": "krisp",
        "name": "Krisp",
        "description": "In today's remote-first world, background noise can ruin important calls. Krisp is the AI solution to this common problem. This \"Most Used\" app intelligently removes distracting noise and echoes from online meetings and calls, ensuring crystal-clear audio. Whether you're working from a bustling coffee shop or a noisy home, Krisp ensures your voice is heard, not the chaos around you. It's an indispensable \"Limited Free\" tool for anyone who relies on virtual communication.",
        "status": "Most Used",
        "access": "Limited Free",
        "category": "audio-voice",
        "working": true,
        "link": "https://krisp.ai/",
        "icon": "K",
        "iconBg": "bg-indigo-600"
      },
      {
        "id": "resemble-ai",
        "name": "Resemble.ai",
        "description": "Resemble.ai is a powerful \"Paid\" and \"Underrated\" AI voice cloning and generation platform that goes beyond basic text-to-speech. It allows you to create realistic speech with custom emotions, adding a layer of authenticity and nuance that truly sets your audio apart. Ideal for nuanced voiceovers, character voices, and dynamic audio content.",
        "status": "Underrated",
        "access": "Paid",
        "category": "audio-voice",
        "working": true,
        "link": "https://www.resemble.ai/",
        "icon": "R",
        "iconBg": "bg-pink-600"
      }
    ]
  },
  {
    "id": "chatbots",
    "title": "AI Chatbots",
    "emoji": "🤖",
    "tools": [
      {
        "id": "chatgpt-bot",
        "name": "ChatGPT",
        "description": "ChatGPT, from OpenAI, is arguably the most recognized name in conversational AI. It's a versatile tool for everything from answering diverse queries and generating creative text to assisting with coding and brainstorming. As a \"Most Used\" and \"Free\" platform, it has redefined how many of us interact with AI, becoming an everyday assistant for millions seeking quick information or creative inspiration.",
        "status": "Most Used",
        "access": "Free",
        "category": "chatbots",
        "working": true,
        "link": "https://chat.openai.com",
        "icon": "C",
        "iconBg": "bg-green-500"
      },
      {
        "id": "gemini-bot",
        "name": "Gemini",
        "description": "Google's Gemini brings advanced multimodal capabilities to conversational AI, seamlessly integrating with Google Search and other Google products. This \"Most Used\" and \"Free\" chatbot excels at understanding and generating various types of content, including text, code, images, and more. It's designed to be a comprehensive assistant for a wide range of tasks, from complex research to creative writing.",
        "status": "Most Used",
        "access": "Free",
        "category": "chatbots",
        "working": true,
        "link": "https://gemini.google.com",
        "icon": "G",
        "iconBg": "bg-blue-500"
      },
      {
        "id": "claude-bot",
        "name": "Claude",
        "description": "Anthropic's Claude is an AI assistant highly regarded for its robust performance in complex reasoning, creative tasks, and handling larger context windows. If you need an AI that can dig deeper into intricate topics or maintain coherence over long conversations, Claude is an excellent \"Most Used\" and \"Free\" choice. It's often favored by users who need a more nuanced and thoughtful AI response.",
        "status": "Most Used",
        "access": "Free",
        "category": "chatbots",
        "working": true,
        "link": "https://claude.ai",
        "icon": "C",
        "iconBg": "bg-orange-500"
      },
      {
        "id": "poe-bot",
        "name": "Poe",
        "description": "Poe, a platform by Quora, is an \"Underrated\" gem that allows you to interact with a multitude of AI models, including popular ones like ChatGPT and Claude, all in one convenient place. With its \"Limited Free\" access, it's an excellent way to compare different AI outputs and find the best model for your specific needs without juggling multiple tabs.",
        "status": "Underrated",
        "access": "Limited Free",
        "category": "chatbots",
        "working": true,
        "link": "https://poe.com",
        "icon": "P",
        "iconBg": "bg-red-500"
      },
      {
        "id": "character-ai",
        "name": "Character.ai",
        "description": "Character.ai offers a uniquely engaging experience, allowing you to create and interact with AI characters ranging from famous personalities to custom creations. This \"Most Used\" and \"Free\" platform is perfect for engaging in creative conversations, role-playing, or simply exploring the possibilities of interactive AI, providing endless entertainment and creative inspiration.",
        "status": "Most Used",
        "access": "Free",
        "category": "chatbots",
        "working": true,
        "link": "https://beta.character.ai/",
        "icon": "C",
        "iconBg": "bg-purple-600"
      },
      {
        "id": "grok-bot",
        "name": "Grok",
        "description": "Grok, the AI chatbot created by xAI and integrated with X (Twitter), stands out for its unique blend of humor and access to real-time information. This \"Underrated\" and \"Paid\" AI offers a more conversational and often witty interaction, making it a distinct choice for users seeking dynamic and current insights within a social media context.",
        "status": "Underrated",
        "access": "Paid",
        "category": "chatbots",
        "working": true,
        "link": "https://twitter.com",
        "icon": "G",
        "iconBg": "bg-black"
      }
    ]
  },
  {
    "id": "pdf-documents",
    "title": "PDF & Document Tools",
    "emoji": "📄",
    "tools": [
      {
        "id": "chatpdf",
        "name": "ChatPDF",
        "description": "Imagine asking your PDF a question and getting an instant, accurate answer. That's what ChatPDF offers. This \"Most Used\" tool allows you to summarize and ask questions about your PDF documents using AI, drastically speeding up research and information retrieval. It's a lifesaver for students, researchers, or anyone dealing with lengthy reports, making large documents feel less daunting with its \"Limited Free\" access.",
        "status": "Most Used",
        "access": "Limited Free",
        "category": "pdf-documents",
        "working": true,
        "link": "https://www.chatpdf.com/",
        "icon": "C",
        "iconBg": "bg-red-600"
      },
      {
        "id": "humata-ai",
        "name": "Humata AI",
        "description": "Humata AI takes document interaction to the next level, capable of summarizing, analyzing, and answering questions about virtually any file type—from research papers to comprehensive reports. It's an \"Underrated\" gem that functions like a super-intelligent assistant for your digital library. With a \"Limited Free\" tier, it's a powerful tool for extracting key insights and accelerating your understanding of complex information.",
        "status": "Underrated",
        "access": "Limited Free",
        "category": "pdf-documents",
        "working": true,
        "link": "https://www.humata.ai/",
        "icon": "H",
        "iconBg": "bg-blue-600"
      },
      {
        "id": "pdfgear",
        "name": "PDFgear",
        "description": "Who said powerful PDF tools have to be expensive? PDFgear offers a comprehensive, \"Free\" AI PDF editor and converter. What makes it truly stand out is its integrated AI chatbot, allowing you to interact directly with your documents for quick answers and efficient management. It's an \"Underrated\" solution that brings enterprise-level functionality to everyone, making PDF editing and interaction a breeze.",
        "status": "Underrated",
        "access": "Free",
        "category": "pdf-documents",
        "working": true,
        "link": "https://www.pdfgear.com/",
        "icon": "P",
        "iconBg": "bg-green-600"
      },
      {
        "id": "docuchat",
        "name": "DocuChat",
        "description": "DocuChat is an \"Underrated,\" \"Limited Free\" tool that transforms how you interact with your documents. Simply upload your files and chat with an AI to get answers, insights, and summaries, almost like having a personalized research assistant. It's a game-changer for anyone who needs to quickly extract information from reports, legal documents, or academic papers.",
        "status": "Underrated",
        "access": "Limited Free",
        "category": "pdf-documents",
        "working": true,
        "link": "https://docuchat.io/",
        "icon": "D",
        "iconBg": "bg-purple-600"
      },
      {
        "id": "scribbr",
        "name": "Scribbr Plagiarism Checker",
        "description": "Scribbr's AI-powered Plagiarism Checker is a \"Most Used\" and \"Paid\" essential for students, academics, and content creators. It meticulously compares your document against a vast database of sources, ensuring originality and academic integrity. It's a reliable tool for confidently submitting work, knowing it's free from unintentional plagiarism.",
        "status": "Most Used",
        "access": "Paid",
        "category": "pdf-documents",
        "working": true,
        "link": "https://www.scribbr.com/plagiarism-checker/",
        "icon": "S",
        "iconBg": "bg-orange-600"
      }
    ]
  },
  {
    "id": "marketing-seo",
    "title": "Marketing & SEO Tools",
    "emoji": "📈",
    "tools": [
      {
        "id": "surfer-seo-marketing",
        "name": "Surfer SEO",
        "description": "Surfer SEO isn't just about writing; it's about writing *strategically*. This \"Most Used,\" AI-powered content optimization tool helps you craft articles and blog posts that are not only well-written but also highly optimized for search engines. It seamlessly integrates keyword research and content guidelines, making it an indispensable \"Paid\" tool for anyone serious about ranking high in search results.",
        "status": "Most Used",
        "access": "Paid",
        "category": "marketing-seo",
        "working": true,
        "link": "https://surferseo.com/",
        "icon": "S",
        "iconBg": "bg-cyan-500"
      },
      {
        "id": "semrush",
        "name": "Semrush",
        "description": "Semrush is a robust, \"Most Used\" comprehensive SEO platform that integrates AI to provide deep insights into content marketing, keyword research, and competitor analysis. It's the Swiss Army knife for digital marketers, offering everything from site audits to backlink analysis. While it has \"Limited Free\" access, its full \"Paid\" suite is essential for any serious SEO professional looking to dominate their niche.",
        "status": "Most Used",
        "access": "Limited Free",
        "category": "marketing-seo",
        "working": true,
        "link": "https://www.semrush.com/",
        "icon": "S",
        "iconBg": "bg-orange-600"
      },
      {
        "id": "ahrefs",
        "name": "Ahrefs",
        "description": "Ahrefs is another \"Most Used,\" industry-leading SEO toolkit that empowers you to uncover valuable insights for your online presence. Its AI-driven features help with detailed site audits, meticulous keyword research, content exploration, and in-depth competitive analysis. It's a \"Paid\" tool that provides the data and intelligence needed to outrank competitors and grow your organic traffic effectively.",
        "status": "Most Used",
        "access": "Paid",
        "category": "marketing-seo",
        "working": true,
        "link": "https://ahrefs.com/",
        "icon": "A",
        "iconBg": "bg-blue-600"
      },
      {
        "id": "jasper-marketing",
        "name": "Jasper (Marketing Focus)",
        "description": "Jasper, renowned as a \"Most Used,\" \"Paid\" AI content platform, is a go-to for marketers needing to quickly generate high-quality copy. It excels in crafting marketing copy that converts, engaging ad creatives, and structured blog outlines, streamlining the entire content creation process for digital campaigns and beyond.",
        "status": "Most Used",
        "access": "Paid",
        "category": "marketing-seo",
        "working": true,
        "link": "https://www.jasper.ai/",
        "icon": "J",
        "iconBg": "bg-blue-500"
      },
      {
        "id": "marketmuse",
        "name": "MarketMuse",
        "description": "MarketMuse is an \"Underrated,\" \"Paid\" AI-powered content intelligence platform that helps you strategize and optimize your content like a pro. It excels at identifying content gaps and opportunities within your niche, allowing you to create comprehensive content that resonates with your audience and outperforms competitors. It's a strategic asset for serious content marketers.",
        "status": "Underrated",
        "access": "Paid",
        "category": "marketing-seo",
        "working": true,
        "link": "https://www.marketmuse.com/",
        "icon": "M",
        "iconBg": "bg-purple-600"
      },
      {
        "id": "frase-io",
        "name": "Frase.io",
        "description": "Frase.io is an \"Underrated,\" \"Paid\" AI content optimization tool that simplifies the process of creating high-ranking content. It helps you research topics thoroughly, write compelling articles, and optimize them for search engines, ensuring your content meets user intent and ranks well. It's a powerful ally for content creators focused on SEO performance.",
        "status": "Underrated",
        "access": "Paid",
        "category": "marketing-seo",
        "working": true,
        "link": "https://www.frase.io/",
        "icon": "F",
        "iconBg": "bg-green-600"
      }
    ]
  },
  {
    "id": "social-media",
    "title": "Social Media Tools",
    "emoji": "📱",
    "tools": [
      {
        "id": "buffer-ai",
        "name": "Buffer AI Assistant",
        "description": "Managing social media can be a time drain, but Buffer's AI Assistant is here to streamline the process. This \"Most Used\" tool helps you quickly craft engaging social media posts and efficiently repurpose content across platforms, all within Buffer's popular scheduling environment. With \"Limited Free\" access, it's an excellent way to boost your social media presence without extra effort.",
        "status": "Most Used",
        "access": "Limited Free",
        "category": "social-media",
        "working": true,
        "link": "https://buffer.com/ai-assistant",
        "icon": "B",
        "iconBg": "bg-blue-600"
      },
      {
        "id": "hootsuite-ai",
        "name": "Hootsuite AI Tools",
        "description": "Hootsuite, a powerhouse in social media management, now integrates AI-powered features for smarter content generation, insightful social listening, and advanced analytics. As a \"Most Used\" and \"Paid\" platform, Hootsuite AI helps marketers understand their audience better, optimize their content strategy, and measure their impact more effectively, making social media less about guesswork and more about data-driven decisions.",
        "status": "Most Used",
        "access": "Paid",
        "category": "social-media",
        "working": true,
        "link": "https://www.hootsuite.com/",
        "icon": "H",
        "iconBg": "bg-orange-600"
      },
      {
        "id": "tailwind-ai",
        "name": "Tailwind AI",
        "description": "For those focusing on visual platforms like Pinterest and Instagram, Tailwind AI is an \"Underrated\" secret weapon. This AI-powered assistant helps you optimize your posts for maximum reach and even assists in creating eye-catching designs. With \"Limited Free\" access, it's a fantastic tool for content creators and businesses looking to significantly grow their audience and engagement on these key visual social networks.",
        "status": "Underrated",
        "access": "Limited Free",
        "category": "social-media",
        "working": true,
        "link": "https://www.tailwindapp.com/ai",
        "icon": "T",
        "iconBg": "bg-pink-600"
      },
      {
        "id": "tweethunter",
        "name": "TweetHunter",
        "description": "TweetHunter is an \"Underrated,\" \"Paid\" AI-powered tool specifically designed to help you master Twitter. It's excellent for generating viral tweets, optimizing your scheduling for maximum engagement, and strategically growing your Twitter audience. If you're serious about your Twitter presence, TweetHunter can provide the AI edge you need to stand out.",
        "status": "Underrated",
        "access": "Paid",
        "category": "social-media",
        "working": true,
        "link": "https://tweethunter.io/",
        "icon": "T",
        "iconBg": "bg-cyan-600"
      },
      {
        "id": "later-ai",
        "name": "Later AI",
        "description": "Later AI integrates intelligent features directly into the Later social media management platform, making content creation a breeze. As a \"Most Used\" tool with \"Limited Free\" access, it provides AI caption generation and smart hashtag suggestions, helping you craft engaging posts and increase your visibility on platforms like Instagram, Facebook, and TikTok efficiently.",
        "status": "Most Used",
        "access": "Limited Free",
        "category": "social-media",
        "working": true,
        "link": "https://later.com/ai-caption-writer/",
        "icon": "L",
        "iconBg": "bg-purple-600"
      }
    ]
  },
  {
    "id": "productivity",
    "title": "Productivity Tools",
    "emoji": "📌",
    "tools": [
      {
        "id": "notion-ai-prod",
        "name": "Notion AI",
        "description": "Notion AI brings the power of artificial intelligence directly into your workspace. As a \"Most Used\" feature, it helps with everything from writing and summarizing notes to managing documents and ideas within the flexible Notion environment. With \"Limited Free\" access, it's an intelligent partner that helps you overcome writer's block and keep your information organized and accessible.",
        "status": "Most Used",
        "access": "Limited Free",
        "category": "productivity",
        "working": true,
        "link": "https://notion.so",
        "icon": "N",
        "iconBg": "bg-gray-800"
      },
      {
        "id": "microsoft-365-copilot",
        "name": "Microsoft 365 Copilot",
        "description": "Microsoft 365 Copilot is set to revolutionize productivity for millions. This \"Most Used\" and \"Paid\" AI assistant integrates directly into your favorite Microsoft 365 apps like Word, Excel, PowerPoint, and Outlook. Imagine having AI help you draft emails, create presentations from scratch, or analyze data in spreadsheets—Copilot transforms these everyday tasks, freeing up your time for more strategic work.",
        "status": "Most Used",
        "access": "Paid",
        "category": "productivity",
        "working": true,
        "link": "https://www.microsoft.com/en-us/microsoft-365/microsoft-365-copilot",
        "icon": "M",
        "iconBg": "bg-blue-600"
      },
      {
        "id": "google-workspace-ai",
        "name": "Google Workspace AI",
        "description": "Google Workspace AI weaves intelligent features throughout apps like Docs, Gmail, and Sheets, making collaboration smoother and more intuitive. This \"Most Used\" AI enhances your productivity by assisting with writing, summarizing, and organizing within your Google ecosystem. With \"Limited Free\" access, it’s a smart upgrade for anyone who relies on Google’s suite for their daily work.",
        "status": "Most Used",
        "access": "Limited Free",
        "category": "productivity",
        "working": true,
        "link": "https://workspace.google.com/ai/",
        "icon": "G",
        "iconBg": "bg-green-600"
      },
      {
        "id": "mem-ai",
        "name": "Mem.ai",
        "description": "Mem.ai is an \"Underrated,\" \"Limited Free\" AI-powered workspace that fundamentally changes how you organize notes, tasks, and ideas. It automatically connects and organizes your information through \"Mems,\" building a knowledge base that grows with you. It's a smart tool for those who crave an effortlessly organized digital life and want their ideas to be intelligently linked and searchable.",
        "status": "Underrated",
        "access": "Limited Free",
        "category": "productivity",
        "working": true,
        "link": "https://mem.ai/",
        "icon": "M",
        "iconBg": "bg-purple-600"
      },
      {
        "id": "motion",
        "name": "Motion",
        "description": "Motion is an \"Underrated,\" \"Paid\" AI calendar that acts as your intelligent personal assistant, seamlessly scheduling your day and optimizing your time. It takes the burden out of manual planning, automatically arranging your tasks and meetings to maximize efficiency. It's a powerful tool for professionals seeking to regain control of their busy schedules and boost overall productivity.",
        "status": "Underrated",
        "access": "Paid",
        "category": "productivity",
        "working": true,
        "link": "https://www.usemotion.com/",
        "icon": "M",
        "iconBg": "bg-indigo-600"
      },
      {
        "id": "sanebox",
        "name": "SaneBox",
        "description": "SaneBox is an \"Underrated,\" \"Paid\" AI email organizer that brings sanity back to your inbox. It intelligently filters and prioritizes your emails, moving less important messages out of your primary view to reduce clutter and distractions. For anyone overwhelmed by email, SaneBox provides a smart, automated solution to manage your correspondence effectively.",
        "status": "Underrated",
        "access": "Paid",
        "category": "productivity",
        "working": true,
        "link": "https://www.sanebox.com/",
        "icon": "S",
        "iconBg": "bg-orange-600"
      }
    ]
  },
  {
    "id": "agents-automation",
    "title": "Agents & Automation",
    "emoji": "🛠️",
    "tools": [
      {
        "id": "zapier-ai-auto",
        "name": "Zapier AI",
        "description": "Zapier has long been a leader in connecting apps, and its AI capabilities take automation to new heights. This \"Most Used\" tool empowers you to build AI-powered workflows that integrate thousands of applications, connecting your tools and automating tasks seamlessly. With \"Free\" access for basic use, it’s an essential tool for anyone looking to eliminate repetitive work and streamline their digital processes.",
        "status": "Most Used",
        "access": "Free",
        "category": "agents-automation",
        "working": true,
        "link": "https://zapier.com",
        "icon": "Z",
        "iconBg": "bg-orange-600"
      },
      {
        "id": "make",
        "name": "Make (formerly Integromat)",
        "description": "Make, formerly Integromat, offers a powerful visual platform for automating workflows and integrating apps, now with enhanced AI capabilities for tackling even the most complex automations. It's a \"Most Used\" and \"Free\" tool that allows you to drag, drop, and connect, creating intricate sequences that automate business processes, data synchronization, and more, all with the intelligence of AI.",
        "status": "Most Used",
        "access": "Free",
        "category": "agents-automation",
        "working": true,
        "link": "https://www.make.com/",
        "icon": "M",
        "iconBg": "bg-purple-600"
      },
      {
        "id": "autogen",
        "name": "Autogen (Microsoft Research)",
        "description": "For developers and researchers, Autogen from Microsoft Research offers a groundbreaking framework for building multi-agent AI applications. This \"Underrated\" and \"Free\" tool allows different AI agents to \"converse\" with each other to collaboratively solve complex tasks. It's at the forefront of AI development, enabling the creation of sophisticated, autonomous systems.",
        "status": "Underrated",
        "access": "Free",
        "category": "agents-automation",
        "working": true,
        "link": "https://microsoft.github.io/autogen/",
        "icon": "A",
        "iconBg": "bg-blue-600"
      },
      {
        "id": "agentgpt",
        "name": "AgentGPT",
        "description": "AgentGPT is an \"Underrated,\" \"Limited Free\" tool that lets you unleash autonomous AI agents directly in your browser. You can give these agents a specific goal, and they'll generate and execute tasks independently, acting like a personalized digital assistant. It’s a fascinating glimpse into the future of AI-driven automation for individual users.",
        "status": "Underrated",
        "access": "Limited Free",
        "category": "agents-automation",
        "working": true,
        "link": "https://agentgpt.reworkd.ai/",
        "icon": "A",
        "iconBg": "bg-green-600"
      },
      {
        "id": "superagent",
        "name": "Superagent",
        "description": "Superagent is an \"Underrated,\" \"Free,\" open-source framework designed for developers to build, deploy, and manage powerful LLM-powered autonomous agents. It provides the foundational tools to create intelligent systems that can understand, reason, and act on complex instructions, pushing the boundaries of what AI can accomplish.",
        "status": "Underrated",
        "access": "Free",
        "category": "agents-automation",
        "working": true,
        "link": "https://github.com/homanp/superagent",
        "icon": "S",
        "iconBg": "bg-red-600"
      }
    ]
  },
  {
    "id": "education-learning",
    "title": "Education / Learning",
    "emoji": "🎓",
    "tools": [
      {
        "id": "khanmigo",
        "name": "Khanmigo (Khan Academy)",
        "description": "Khanmigo is Khan Academy's innovative AI-powered tutor and teaching assistant, designed to make learning more effective and personalized. As a \"Most Used\" and \"Paid\" tool, it provides students with interactive support, explains concepts, and helps them work through problems, truly transforming the learning experience by adapting to individual needs.",
        "status": "Most Used",
        "access": "Paid",
        "category": "education-learning",
        "working": true,
        "link": "https://www.khanacademy.org/khanmigo",
        "icon": "K",
        "iconBg": "bg-green-600"
      },
      {
        "id": "duolingo-max",
        "name": "Duolingo Max",
        "description": "Duolingo Max enhances the popular language learning app with advanced AI features. This \"Most Used\" and \"Paid\" offering provides personalized language practice, including AI-powered role-play scenarios and deeper explanations, helping learners achieve fluency faster and more naturally. It's like having a personal language tutor available 24/7.",
        "status": "Most Used",
        "access": "Paid",
        "category": "education-learning",
        "working": true,
        "link": "https://www.duolingo.com/duolingomax",
        "icon": "D",
        "iconBg": "bg-green-500"
      },
      {
        "id": "ello",
        "name": "Ello",
        "description": "For English language learners, Ello offers a unique and engaging approach. This \"Underrated\" AI language tutor allows you to learn by having natural conversations with an AI, providing real-time feedback on your pronunciation and grammar. With \"Limited Free\" access, it’s an innovative way to practice speaking and build confidence in English in a low-pressure environment.",
        "status": "Underrated",
        "access": "Limited Free",
        "category": "education-learning",
        "working": true,
        "link": "https://ello.com/",
        "icon": "E",
        "iconBg": "bg-blue-600"
      },
      {
        "id": "explain-everything",
        "name": "Explain Everything Whiteboard",
        "description": "Explain Everything Whiteboard is an \"Underrated,\" \"Limited Free\" interactive whiteboard with powerful AI features that makes educational content creation and collaborative learning intuitive and engaging. It's perfect for educators and students who want to create dynamic lessons, brainstorm ideas, or work together on projects in a visual, interactive space.",
        "status": "Underrated",
        "access": "Limited Free",
        "category": "education-learning",
        "working": true,
        "link": "https://explaineverything.com/",
        "icon": "E",
        "iconBg": "bg-purple-600"
      },
      {
        "id": "caktus-ai",
        "name": "Caktus AI",
        "description": "Caktus AI is an \"Underrated,\" \"Limited Free\" AI study tool designed to provide valuable support to students. It can assist with generating essays, outlining complex topics, and even solving coding problems, acting as an intelligent study companion. It's a useful resource for students looking for assistance with various academic tasks.",
        "status": "Underrated",
        "access": "Limited Free",
        "category": "education-learning",
        "working": true,
        "link": "https://caktus.ai/",
        "icon": "C",
        "iconBg": "bg-orange-600"
      }
    ]
  },
  {
    "id": "presentation-slides",
    "title": "Presentation & Slides",
    "emoji": "🗂️",
    "tools": [
      {
        "id": "tome",
        "name": "Tome",
        "description": "Tome is redefining presentations with its AI-powered storytelling format. This \"Most Used\" and \"Free\" tool allows you to create engaging presentations and documents with dynamic, visually appealing layouts quickly. It's perfect for anyone who wants to move beyond static slides and deliver a more interactive and impactful message.",
        "status": "Most Used",
        "access": "Free",
        "category": "presentation-slides",
        "working": true,
        "link": "https://tome.app/",
        "icon": "T",
        "iconBg": "bg-purple-600"
      },
      {
        "id": "gamma",
        "name": "Gamma",
        "description": "Gamma is an AI-powered tool that quickly transforms your text into beautiful and engaging presentations, documents, or even webpages. As a \"Most Used\" and \"Free\" platform, it takes the hassle out of design, ensuring your content always looks professional and visually striking without needing a graphic designer.",
        "status": "Most Used",
        "access": "Free",
        "category": "presentation-slides",
        "working": true,
        "link": "https://gamma.app/",
        "icon": "G",
        "iconBg": "bg-indigo-600"
      },
      {
        "id": "beautiful-ai",
        "name": "Beautiful.ai",
        "description": "If consistent, professional-looking slides are a priority, Beautiful.ai is your go-to. This \"Underrated\" and \"Paid\" AI presentation maker automatically designs your slides, ensuring a cohesive and polished aesthetic every time. It saves immense time and effort, allowing you to focus on your content while the AI handles the visual appeal.",
        "status": "Underrated",
        "access": "Paid",
        "category": "presentation-slides",
        "working": true,
        "link": "https://www.beautiful.ai/",
        "icon": "B",
        "iconBg": "bg-pink-600"
      },
      {
        "id": "designs-ai",
        "name": "Designs.ai",
        "description": "Designs.ai is an \"Underrated,\" \"Limited Free\" AI-powered design platform that provides a versatile toolkit for creating logos, videos, banners, and presentations with powerful generative features. It's a comprehensive solution for small businesses and marketers who need professional-grade design assets quickly and efficiently, all with the help of AI.",
        "status": "Underrated",
        "access": "Limited Free",
        "category": "presentation-slides",
        "working": true,
        "link": "https://designs.ai/",
        "icon": "D",
        "iconBg": "bg-cyan-600"
      },
      {
        "id": "plus-ai",
        "name": "Plus AI (for Google Slides)",
        "description": "Plus AI is a \"Most Used,\" \"Limited Free\" AI add-on that transforms Google Slides into a dynamic presentation powerhouse. It allows you to generate entire presentations from text prompts, effortlessly edit existing slides, and remix content for fresh layouts. It's an indispensable tool for anyone frequently creating or refining presentations within Google Workspace.",
        "status": "Most Used",
        "access": "Limited Free",
        "category": "presentation-slides",
        "working": true,
        "link": "https://www.plusdocs.com/",
        "icon": "P",
        "iconBg": "bg-green-600"
      }
    ]
  },
  {
    "id": "resume-career",
    "title": "Resume & Career Tools",
    "emoji": "💼",
    "tools": [
      {
        "id": "kickresume",
        "name": "Kickresume AI Resume Builder",
        "description": "Kickresume's AI Resume Builder is a powerful tool for job seekers. This \"Most Used\" and \"Limited Free\" platform provides intuitive templates and AI writing assistance to help you craft a resume that not only looks professional but is also optimized to pass Applicant Tracking Systems (ATS). It’s designed to give your application the best chance of success.",
        "status": "Most Used",
        "access": "Limited Free",
        "category": "resume-career",
        "working": true,
        "link": "https://www.kickresume.com/en/ai-resume-builder/",
        "icon": "K",
        "iconBg": "bg-blue-600"
      },
      {
        "id": "rezi",
        "name": "Rezi AI Resume Builder",
        "description": "Rezi AI Resume Builder is an \"Underrated,\" \"Free\" tool specifically engineered to get your resume noticed by ATS systems. With its AI writing and keyword analysis features, it helps you tailor your resume precisely to job descriptions, significantly improving your chances of getting past the initial screening and achieving a better job match.",
        "status": "Underrated",
        "access": "Free",
        "category": "resume-career",
        "working": true,
        "link": "https://rezi.ai/",
        "icon": "R",
        "iconBg": "bg-green-600"
      },
      {
        "id": "jobscan",
        "name": "JobScan",
        "description": "JobScan is an indispensable, \"Most Used\" AI-powered tool for serious job seekers. It analyzes your resume and LinkedIn profile against specific job descriptions, highlighting keywords and phrases to optimize your application for ATS systems. With \"Limited Free\" access, it’s a critical step to ensure your resume gets seen by hiring managers, significantly improving your job matching potential.",
        "status": "Most Used",
        "access": "Limited Free",
        "category": "resume-career",
        "working": true,
        "link": "https://www.jobscan.co/",
        "icon": "J",
        "iconBg": "bg-purple-600"
      },
      {
        "id": "cover-letter-ai",
        "name": "Cover Letter AI",
        "description": "Cover Letter AI is an \"Underrated,\" \"Limited Free\" tool that takes the stress out of crafting personalized cover letters. Using AI, it helps you generate compelling and tailored cover letters for each job application, ensuring your unique skills and experience resonate with specific roles and increasing your chances of making a strong first impression.",
        "status": "Underrated",
        "access": "Limited Free",
        "category": "resume-career",
        "working": true,
        "link": "https://coverletter.ai/",
        "icon": "C",
        "iconBg": "bg-orange-600"
      },
      {
        "id": "teal-hq",
        "name": "Teal HQ",
        "description": "Teal HQ is a \"Most Used\" and \"Free\" AI-powered platform that serves as a complete career management hub. It helps you optimize your resume and cover letter, track your job applications, and gain insights into your career path. It's an all-in-one solution for navigating the job market efficiently and effectively.",
        "status": "Most Used",
        "access": "Free",
        "category": "resume-career",
        "working": true,
        "link": "https://www.tealhq.com/",
        "icon": "T",
        "iconBg": "bg-teal-600"
      }
    ]
  },
  {
    "id": "research-analysis",
    "title": "Research & Analysis",
    "emoji": "🧪",
    "tools": [
      {
        "id": "elicit",
        "name": "Elicit",
        "description": "For researchers, Elicit is a game-changer. This \"Most Used\" and \"Free\" AI research assistant automates time-consuming parts of the research workflow, such as finding relevant academic papers and summarizing key arguments. It allows researchers to focus more on critical thinking and less on tedious information gathering.",
        "status": "Most Used",
        "access": "Free",
        "category": "research-analysis",
        "working": true,
        "link": "https://elicit.org/",
        "icon": "E",
        "iconBg": "bg-blue-600"
      },
      {
        "id": "consensus",
        "name": "Consensus",
        "description": "Consensus is a revolutionary \"Most Used\" AI search engine that extracts findings directly from scientific research papers, complete with citations. With \"Limited Free\" access, it's invaluable for students, academics, and professionals who need to quickly verify claims or gather evidence-based information without sifting through entire papers.",
        "status": "Most Used",
        "access": "Limited Free",
        "category": "research-analysis",
        "working": true,
        "link": "https://consensus.app/",
        "icon": "C",
        "iconBg": "bg-green-600"
      },
      {
        "id": "perplexity-research",
        "name": "Perplexity AI (Research focus)",
        "description": "Perplexity AI, particularly useful for research, is a \"Most Used\" and \"Free\" AI search engine that provides concise answers to your questions, always accompanied by source citations. It’s excellent for quick, reliable research, offering a transparent and trustworthy way to get information and understand its origin.",
        "status": "Most Used",
        "access": "Free",
        "category": "research-analysis",
        "working": true,
        "link": "https://www.perplexity.ai",
        "icon": "P",
        "iconBg": "bg-purple-500"
      },
      {
        "id": "scite-ai",
        "name": "Scite.ai",
        "description": "Scite.ai is an \"Underrated,\" \"Limited Free\" tool that provides unprecedented insights into how research papers have been cited and evaluates the claims within them. It's incredibly useful for academic integrity and for understanding the broader context and impact of scientific work, allowing you to quickly discern reliable information.",
        "status": "Underrated",
        "access": "Limited Free",
        "category": "research-analysis",
        "working": true,
        "link": "https://scite.ai/",
        "icon": "S",
        "iconBg": "bg-orange-600"
      },
      {
        "id": "research-rabbit",
        "name": "ResearchRabbit",
        "description": "ResearchRabbit is an \"Underrated,\" \"Free\" visual tool that revolutionizes how academics discover research papers and identify key authors and topics. It creates intuitive maps of scholarly literature, making literature reviews and exploring new fields far more efficient and insightful. It's like having a dynamic, visual guide through the world of academic research.",
        "status": "Underrated",
        "access": "Free",
        "category": "research-analysis",
        "working": true,
        "link": "https://www.researchrabbit.ai/",
        "icon": "R",
        "iconBg": "bg-pink-600"
      }
    ]
  },
  {
    "id": "cybersecurity-privacy",
    "title": "Cybersecurity & Privacy",
    "emoji": "🔐",
    "tools": [
      {
        "id": "darktrace",
        "name": "Darktrace",
        "description": "Darktrace stands at the forefront of AI-powered cybersecurity. This \"Most Used\" and \"Paid\" platform uses self-learning AI to autonomously detect and respond to cyber threats in real-time, even novel attacks. It provides a crucial layer of defense by understanding an organization's unique digital footprint and identifying anomalies instantly.",
        "status": "Most Used",
        "access": "Paid",
        "category": "cybersecurity-privacy",
        "working": true,
        "link": "https://www.darktrace.com/",
        "icon": "D",
        "iconBg": "bg-red-600"
      },
      {
        "id": "cylance-protect",
        "name": "CylancePROTECT (BlackBerry)",
        "description": "CylancePROTECT by BlackBerry is an \"Underrated,\" \"Paid\" AI-driven endpoint protection solution that takes a proactive approach to cybersecurity. Unlike traditional antivirus, it predicts and prevents cyberattacks without relying on signatures, offering robust defense against emerging threats. It's a powerful tool for organizations seeking cutting-edge, preventive security.",
        "status": "Underrated",
        "access": "Paid",
        "category": "cybersecurity-privacy",
        "working": true,
        "link": "https://www.blackberry.com/us/en/products/cylance-security/cylanceprotect",
        "icon": "C",
        "iconBg": "bg-black"
      },
      {
        "id": "qradar-advisor",
        "name": "IBM Security QRadar Advisor with Watson",
        "description": "Leveraging Watson's cognitive abilities, IBM Security QRadar Advisor is a \"Most Used\" and \"Paid\" AI-driven security analytics platform. It significantly enhances threat detection and investigation by analyzing vast amounts of security data, helping security teams understand and respond to incidents faster and more effectively.",
        "status": "Most Used",
        "access": "Paid",
        "category": "cybersecurity-privacy",
        "working": true,
        "link": "https://www.ibm.com/security/security-intelligence/qradar-advisor",
        "icon": "I",
        "iconBg": "bg-blue-600"
      },
      {
        "id": "snyk",
        "name": "Snyk",
        "description": "Snyk is a \"Most Used\" security platform with AI capabilities designed specifically for developers. With \"Limited Free\" access, it helps identify and fix vulnerabilities directly in code, open-source dependencies, and containers, making security an integral part of the development lifecycle rather than an afterthought.",
        "status": "Most Used",
        "access": "Limited Free",
        "category": "cybersecurity-privacy",
        "working": true,
        "link": "https://snyk.io/",
        "icon": "S",
        "iconBg": "bg-purple-600"
      },
      {
        "id": "vade",
        "name": "Vade",
        "description": "Vade is an \"Underrated,\" \"Paid\" AI-powered email security solution that provides robust protection against sophisticated cyber threats. It intelligently defends against phishing, malware, and highly targeted attacks, safeguarding inboxes and ensuring secure communication. For businesses concerned about email-borne threats, Vade offers a crucial layer of defense.",
        "status": "Underrated",
        "access": "Paid",
        "category": "cybersecurity-privacy",
        "working": true,
        "link": "https://www.vadesecure.com/",
        "icon": "V",
        "iconBg": "bg-orange-600"
      }
    ]
  },
  {
    "id": "fun-entertainment",
    "title": "Fun / Meme / Entertainment",
    "emoji": "😂",
    "tools": [
      {
        "id": "fotor-face-swap",
        "name": "Fotor AI Face Swap",
        "description": "Fotor AI Face Swap is a \"Most Used\" and \"Free\" tool that brings instant fun to your photos and videos. Easily swap faces with high precision for hilarious memes, creative content, or just a good laugh. Its user-friendly interface makes it accessible to everyone, regardless of editing experience.",
        "status": "Most Used",
        "access": "Free",
        "category": "fun-entertainment",
        "working": true,
        "link": "https://www.fotor.com/features/ai-face-swap/",
        "icon": "F",
        "iconBg": "bg-pink-600"
      },
      {
        "id": "capcut-ai",
        "name": "CapCut AI",
        "description": "CapCut is a \"Most Used\" and \"Free\" video editing app that has taken social media by storm, largely thanks to its intuitive AI features. It offers a wide range of AI-powered effects, automatic captions, and templates that make it incredibly easy to create trending videos for platforms like TikTok and Instagram.",
        "status": "Most Used",
        "access": "Free",
        "category": "fun-entertainment",
        "working": true,
        "link": "https://www.capcut.com/",
        "icon": "C",
        "iconBg": "bg-red-600"
      },
      {
        "id": "deepmotion",
        "name": "DeepMotion",
        "description": "DeepMotion is an \"Underrated,\" \"Limited Free\" tool that simplifies the creation of 3D animations. It allows you to generate lifelike character animations from ordinary videos using AI, making complex virtual content creation accessible to both beginners and seasoned professionals. It's a fantastic way to bring your characters to life with ease.",
        "status": "Underrated",
        "access": "Limited Free",
        "category": "fun-entertainment",
        "working": true,
        "link": "https://www.deepmotion.com/",
        "icon": "D",
        "iconBg": "bg-purple-600"
      },
      {
        "id": "playground-ai",
        "name": "Playground AI",
        "description": "Playground AI is a \"Free\" and \"Underrated\" online AI image creator that lets you generate art, memes, and more with ease. It's a fantastic platform for creative exploration, emphasizing community and sharing, allowing users to draw inspiration from and build upon others' creations.",
        "status": "Underrated",
        "access": "Free",
        "category": "fun-entertainment",
        "working": true,
        "link": "https://playground.ai/",
        "icon": "P",
        "iconBg": "bg-orange-600"
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
