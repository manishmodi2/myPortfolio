
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { ThemeToggle } from "./ThemeToggle"; 

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleNavLinkClick = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3" : "py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center shrink-0"
          href="#hero"
          aria-label="Home"
        >
          <img
            src="/logo1.png"
            alt="Manish Kumar Portfolio Logo"
            className="h-14 md:h-16 w-auto rounded-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/60x60/cccccc/333333?text=Logo";
            }}
          />
        </a>

        <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 text-base lg:text-lg font-medium"
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="p-2 text-foreground z-50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}{" "}
            </button>
        </div>


        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 ease-in-out md:hidden",
            isMenuOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-2xl font-semibold">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 text-center"
                onClick={handleNavLinkClick}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};