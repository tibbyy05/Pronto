import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Shield, FileText, Wind, Microscope, Clipboard, Star } from 'lucide-react';

export default function Footer() {
  const services = [
    { name: 'Home Inspection', href: '/services/home-inspection' },
    { name: 'Four-Point Inspection', href: '/services/four-point' },
    { name: 'Wind Mitigation', href: '/services/wind-mitigation' },
    { name: 'Mold Assessment', href: '/services/mold-assessment' },
    { name: 'Sewer Scope', href: '/services/sewer-scope' },
    { name: 'Infrared Inspection', href: '/services/infrared' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Why Us', href: '/why-us' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  const areasServed = [
    'Broward County',
    'Miami-Dade County',
    'Palm Beach County',
  ];

  const certBadges = [
    { icon: Shield, label: 'InterNACHI' },
    { icon: FileText, label: 'Licensed' },
    { icon: Microscope, label: 'Mold Cert' },
    { icon: Wind, label: 'Wind Cert' },
    { icon: Clipboard, label: '4-Point' },
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-10 lg:py-12 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8 border-b border-gray-700 pb-6 sm:pb-8">
          {certBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center opacity-60 transition-opacity duration-300 hover:opacity-100"
            >
              <badge.icon className="h-5 w-5 sm:h-6 sm:w-6 text-gold" />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="inline-block">
              <img
                src="/logo.png"
                alt="Pronto Property Inspectors"
                className="h-10.5 sm:h-12 lg:h-13.5 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-cream leading-relaxed">
              Professional property inspection services in South Florida. Same-day booking, 24-hour report delivery.
            </p>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base font-semibold text-gold">Hablamos Español</p>

            <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-1 text-xs sm:text-sm">
              <div className="flex items-center gap-1">
                <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-gold text-gold flex-shrink-0" />
                <span className="font-semibold text-gold">5.0 Google Rating</span>
              </div>
              <span className="hidden sm:inline mx-2 text-[#7A8FA6]">—</span>
              <a href="#" className="text-gold transition-colors duration-300 hover:text-[#E8C97A] touch-manipulation">
                Read Our Reviews
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-base sm:text-lg font-semibold text-gold">Services</h3>
            <ul className="mt-3 sm:mt-4 space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-xs sm:text-sm text-cream transition-colors duration-300 hover:text-[#E8C97A] touch-manipulation inline-block py-0.5"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base sm:text-lg font-semibold text-gold">Quick Links</h3>
            <ul className="mt-3 sm:mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-xs sm:text-sm text-cream transition-colors duration-300 hover:text-[#E8C97A] touch-manipulation inline-block py-0.5"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a href="#" className="text-xs sm:text-sm text-cream transition-colors duration-300 hover:text-[#E8C97A] touch-manipulation inline-block py-0.5">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-sm text-cream transition-colors duration-300 hover:text-[#E8C97A] touch-manipulation inline-block py-0.5">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base sm:text-lg font-semibold text-gold">Contact Info</h3>
            <ul className="mt-3 sm:mt-4 space-y-3">
              <li className="flex items-start space-x-2">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                <a
                  href="tel:9549992355"
                  className="text-xs sm:text-sm text-cream transition-colors duration-300 hover:text-gold touch-manipulation"
                >
                  954-999-2355
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                <a
                  href="mailto:prontopropertyinspectors@gmail.com"
                  className="text-xs sm:text-sm text-cream transition-colors duration-300 hover:text-gold break-all touch-manipulation"
                >
                  prontopropertyinspectors@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                <div className="text-xs sm:text-sm text-cream">
                  {areasServed.map((area, index) => (
                    <div key={area}>
                      {area}
                      {index < areasServed.length - 1 ? ',' : ''}
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 border-t border-gray-700 pt-6 sm:pt-8">
          <div className="flex flex-col items-center justify-between gap-3 sm:gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-xs sm:text-sm text-cream">
              &copy; {new Date().getFullYear()} Pronto Property Inspectors. All rights reserved.
            </p>
            <p className="text-[10px] sm:text-[11px] text-[rgba(255,255,255,0.3)]">
              Licensed & Insured | Florida State License #[LICENSE_NUMBER]
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
