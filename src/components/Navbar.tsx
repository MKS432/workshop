
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Overview", href: "#overview" },
    { name: "Schedule", href: "#schedule" },
    { name: "Who Can Attend", href: "#who-can-attend" },
    { name: "Deliverables", href: "#deliverables" },
    { name: "Experts", href: "#experts" },
    { name: "Register", href: "#register" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20"> {/* Increased height for larger logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/2b907a5d-5771-4292-8441-186bb43510a8.png" 
              alt="SBMS Logo" 
              className="h-16 w-auto mr-3" /* Increased logo size */
            />
            <span className="text-primary font-bold text-xl">One Week Student Development Program (SDP)</span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary transition-colors text-sm"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
