import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import SignInDialog from "./SignInDialog";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
              TVG Houston
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors"
            >
              About TVG Houston
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("industries")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Industries
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Button>
            <Button 
              onClick={() => setIsSignInOpen(true)}
              className="ml-4 bg-gradient-to-r from-primary to-navy-light hover:opacity-90 transition-opacity"
            >
              Sign In
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("about")}
              className="w-full justify-start text-foreground hover:text-primary"
            >
              About TVG Houston
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("services")}
              className="w-full justify-start text-foreground hover:text-primary"
            >
              Services
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("industries")}
              className="w-full justify-start text-foreground hover:text-primary"
            >
              Industries
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("contact")}
              className="w-full justify-start text-foreground hover:text-primary"
            >
              Contact
            </Button>
            <Button 
              onClick={() => setIsSignInOpen(true)}
              className="w-full bg-gradient-to-r from-primary to-navy-light hover:opacity-90"
            >
              Sign In
            </Button>
          </div>
        )}
      </div>
      <SignInDialog open={isSignInOpen} onOpenChange={setIsSignInOpen} />
    </nav>
  );
};

export default Navigation;
