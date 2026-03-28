import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './Button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#0A1628] text-white fixed top-0 left-0 right-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold">
              mcim
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#platform" className="text-sm hover:text-[#00D9C0] transition-colors">
              Platform
            </a>
            <a href="#solutions" className="text-sm hover:text-[#00D9C0] transition-colors">
              Solutions
            </a>
            <a href="#about" className="text-sm hover:text-[#00D9C0] transition-colors">
              About
            </a>
            <a href="#resources" className="text-sm hover:text-[#00D9C0] transition-colors">
              Resources
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Support
            </Button>
            <Button variant="primary" size="sm">
              Talk to an expert
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#152238] border-t border-gray-700">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <a href="#platform" className="block text-sm hover:text-[#00D9C0] transition-colors">
              Platform
            </a>
            <a href="#solutions" className="block text-sm hover:text-[#00D9C0] transition-colors">
              Solutions
            </a>
            <a href="#about" className="block text-sm hover:text-[#00D9C0] transition-colors">
              About
            </a>
            <a href="#resources" className="block text-sm hover:text-[#00D9C0] transition-colors">
              Resources
            </a>
            <div className="pt-4 space-y-2">
              <Button variant="outline" size="sm" className="w-full">
                Support
              </Button>
              <Button variant="primary" size="sm" className="w-full">
                Talk to an expert
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
