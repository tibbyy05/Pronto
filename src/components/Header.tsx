import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Shield } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Why Us', href: '/why-us' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-[400ms] ease-[cubic-bezier(.22,1,.36,1)] ${
        isScrolled
          ? 'bg-[rgba(11,29,51,0.97)] shadow-[0_4px_30px_rgba(0,0,0,0.15)] backdrop-blur-[12px]'
          : 'bg-white shadow-md'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-[400ms] ease-[cubic-bezier(.22,1,.36,1)] ${
            isScrolled ? 'h-14 sm:h-16' : 'h-16 sm:h-20'
          }`}
        >
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Pronto Property Inspectors"
              className={`transition-all duration-[400ms] w-auto ${
                isScrolled
                  ? 'h-[4.348377rem] sm:h-[5.0731065rem] brightness-0 invert'
                  : 'h-[5.0731065rem] sm:h-[6.0394125rem]'
              }`}
            />
          </Link>

          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-gold ${
                  isActive(item.href)
                    ? 'text-gold'
                    : isScrolled
                      ? 'text-white'
                      : 'text-navy'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <a
              href="tel:9549992355"
              className={`flex items-center space-x-2 text-sm font-medium transition-colors duration-300 hover:text-gold ${
                isScrolled ? 'text-white' : 'text-navy'
              }`}
            >
              <Phone className="h-4 w-4" />
              <span>954-999-2355</span>
            </a>
            <Link
              to="/contact"
              className="rounded-md bg-gold px-6 py-2.5 text-sm font-semibold text-white transition-all duration-[350ms] ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-0.5 hover:bg-[#E8C97A] hover:shadow-[0_8px_30px_rgba(212,168,83,0.3)]"
            >
              Book Now
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 -mr-2 touch-manipulation"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-white' : 'text-navy'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-white' : 'text-navy'}`} />
            )}
          </button>
        </div>

        {isOpen && (
          <div className={`border-t pb-4 lg:hidden ${isScrolled ? 'border-white/20' : 'border-gray-200'}`}>
            <div className="space-y-1 pt-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-base font-medium transition-colors touch-manipulation ${
                    isActive(item.href)
                      ? 'bg-cream text-gold'
                      : isScrolled
                        ? 'text-white hover:bg-[rgba(250,246,238,0.1)] hover:text-gold active:bg-[rgba(250,246,238,0.15)]'
                        : 'text-navy hover:bg-cream hover:text-gold active:bg-cream/80'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:9549992355"
                className={`flex items-center space-x-2 px-4 py-3 text-base font-medium touch-manipulation ${
                  isScrolled
                    ? 'text-white hover:bg-[rgba(250,246,238,0.1)] active:bg-[rgba(250,246,238,0.15)]'
                    : 'text-navy hover:bg-cream active:bg-cream/80'
                }`}
              >
                <Phone className="h-5 w-5" />
                <span>954-999-2355</span>
              </a>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mx-4 mt-2 block rounded-md bg-gold px-6 py-3 text-center text-base font-semibold text-white touch-manipulation active:scale-95 transition-transform"
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
