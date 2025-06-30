import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Mission", href: "#mission-section" },
    { name: "Tech", href: "#tech-showcase-section" },
    { name: "Team", href: "#team-section" },
  ];

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navbarHeight = 80; // Account for navbar height + some padding
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const handleContactClick = () => {
    window.location.href = "mailto:getinfo@4-xtra.com";
    setIsMenuOpen(false);
  };

  return (
    <nav className="relative backdrop-blur-md border-b border-purple-100/50 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <img src="/logo.png" alt="4-Xtra" className="h-12 xl:h-14" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="flex items-center space-x-1 text-gray-700 hover:text-purple-700 transition-colors duration-200 font-medium"
                >
                  <span>{item.name}</span>
                </a>
                {/* Dropdown indicator */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-purple-800 transition-all duration-300 group-hover:w-full"></div>
              </div>
            ))}
            {/* Contact button */}
            <div className="relative group">
              <button
                onClick={handleContactClick}
                className="flex items-center space-x-1 text-gray-700 hover:text-purple-700 transition-colors duration-200 font-medium"
              >
                <span>Contact</span>
              </button>
              {/* Dropdown indicator */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-purple-800 transition-all duration-300 group-hover:w-full"></div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <a
              href="https://4-xtra-demo.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 text-base text-center"
            >
              Demo
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-purple-700 hover:bg-purple-50 transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden backdrop-blur-md border-t border-purple-100/50`}
      >
        <div className="px-4 py-4 space-y-4">
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className="flex items-center justify-between py-2 text-gray-700 hover:text-purple-700 transition-colors duration-200 font-medium"
            >
              <span>{item.name}</span>
            </a>
          ))}
          {/* Mobile Contact button */}
          <button
            onClick={handleContactClick}
            className="flex items-center justify-between py-2 text-gray-700 hover:text-purple-700 transition-colors duration-200 font-medium w-full text-left"
          >
            <span>Contact</span>
          </button>
          <div className="pt-4 border-t border-purple-100">
            <a
              href="https://4-xtra-demo.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 text-center"
            >
              Demo
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
