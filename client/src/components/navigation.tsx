// 👇 Full code for Navigation.tsx (mobile + desktop menu working perfectly)

import { useState } from "react";
import { Link, useLocation } from "wouter";
import {
  Search,
  ChevronDown,
  Moon,
  Sun,
  Globe,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/hooks/use-theme";
import { categories } from "@/data/ai-tools";

interface NavigationProps {
  onSearch: (query: string) => void;
}

export default function Navigation({ onSearch }: NavigationProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [location] = useLocation();

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 text-xl font-bold border-2 border-primary px-3 py-1 rounded-lg hover:bg-primary/10 transition-colors"
            onClick={closeMobileMenu}
          >
            <span>🧠</span>
            <span>Get AI</span>
          </Link>

          {/* Search Bar (desktop only) */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search tools by name or category..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10 bg-card border-border text-foreground placeholder:text-muted-foreground"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/"
              className={`text-sm font-medium hover:text-primary ${
                location === "/" ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center text-sm font-medium">
                  <span>Categories</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 max-h-[300px] overflow-y-auto">
                {categories.map((category) => (
                  <DropdownMenuItem key={category.id} asChild>
                    <Link href={`/category/${category.id}`} className="w-full cursor-pointer">
                      {category.emoji} {category.title}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon" onClick={toggleTheme} title="Toggle theme">
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button variant="ghost" size="icon" title="Switch language">
              <Globe className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-muted-foreground hover:text-foreground"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-t border-border shadow-lg max-h-[80vh] overflow-y-auto z-40 px-4 pb-4 space-y-3">
          {/* Mobile Search */}
          <div className="relative mt-2">
            <Input
              type="text"
              placeholder="Search AI tools..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          </div>

          {/* Static Links */}
          <Link href="/" onClick={closeMobileMenu} className="block text-sm font-medium hover:text-primary">
            Home
          </Link>

          {/* Full Category List */}
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.id}`}
              onClick={closeMobileMenu}
              className="block text-sm text-muted-foreground hover:text-primary"
            >
              {category.emoji} {category.title}
            </Link>
          ))}

          {/* Extra Links */}
          <hr className="my-2 border-border" />
          <Link href="/about" onClick={closeMobileMenu} className="block text-sm font-medium hover:text-primary">
            About
          </Link>
          <Link href="/contact" onClick={closeMobileMenu} className="block text-sm font-medium hover:text-primary">
            Contact
          </Link>
          <Link href="/privacy-policy" onClick={closeMobileMenu} className="block text-sm font-medium hover:text-primary">
            Privacy
          </Link>
          <Link href="/blog/ai-for-students" onClick={closeMobileMenu} className="block text-sm font-medium hover:text-primary">
            Blog 1
          </Link>
          <Link href="/blog/ai-in-productivity" onClick={closeMobileMenu} className="block text-sm font-medium hover:text-primary">
            Blog 2
          </Link>

          {/* Theme Toggle */}
          <div className="flex items-center gap-3 pt-2">
            <span className="text-sm">Theme</span>
            <Button variant="ghost" size="icon" onClick={toggleTheme} title="Toggle theme">
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" title="Switch language">
              <Globe className="h-5 w-5" />
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
