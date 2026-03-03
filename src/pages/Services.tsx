import { Link } from 'react-router-dom';
import {
  Home,
  Shield,
  Wind,
  Droplet,
  Wrench,
  Thermometer,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      name: 'Home Inspection',
      icon: Home,
      description:
        'Our comprehensive home inspection provides a detailed evaluation of your property from foundation to roof. We examine all major systems and components to identify potential issues before you make your investment.',
      includes: [
        'Structural components',
        'Roof and attic',
        'HVAC systems',
        'Plumbing and electrical',
        'Interior and exterior',
        'Appliances',
      ],
      href: '/services/home-inspection',
    },
    {
      name: 'Four-Point Inspection',
      icon: Shield,
      description:
        'Required by most insurance companies in Florida, our four-point inspection focuses on the four major systems: roof, HVAC, electrical, and plumbing. Essential for obtaining or renewing homeowners insurance.',
      includes: [
        'Roof condition and age',
        'HVAC system assessment',
        'Electrical panel and wiring',
        'Plumbing systems',
        'Insurance documentation',
      ],
      href: '/services/four-point',
    },
    {
      name: 'Wind Mitigation Inspection',
      icon: Wind,
      description:
        'Save money on your insurance premiums with a wind mitigation inspection. We document your home\'s wind-resistant features to qualify for significant insurance discounts in Florida.',
      includes: [
        'Roof covering type',
        'Roof deck attachment',
        'Roof-to-wall connection',
        'Roof geometry',
        'Secondary water resistance',
        'Opening protection',
      ],
      href: '/services/wind-mitigation',
    },
    {
      name: 'Mold Assessment',
      icon: Droplet,
      description:
        'Protect your health and property value with professional mold assessment. We identify visible mold growth, moisture problems, and potential mold conditions using advanced detection methods.',
      includes: [
        'Visual inspection',
        'Moisture detection',
        'Air quality testing',
        'Surface sampling',
        'Detailed report with photos',
        'Remediation recommendations',
      ],
      href: '/services/mold-assessment',
    },
    {
      name: 'Sewer Scope Inspection',
      icon: Wrench,
      description:
        'Avoid costly sewer line repairs with our camera inspection service. We thoroughly examine sewer lines to identify blockages, root intrusion, and pipe damage before they become major problems.',
      includes: [
        'Camera inspection of sewer lines',
        'Video recording',
        'Identification of blockages',
        'Root intrusion detection',
        'Pipe condition assessment',
        'Location mapping',
      ],
      href: '/services/sewer-scope',
    },
    {
      name: 'Infrared Inspection',
      icon: Thermometer,
      description:
        'Advanced thermal imaging technology reveals hidden issues invisible to the naked eye. Detect moisture intrusion, insulation gaps, electrical hotspots, and more with our infrared inspection.',
      includes: [
        'Thermal imaging scan',
        'Moisture detection',
        'Insulation assessment',
        'Electrical hotspot detection',
        'HVAC efficiency check',
        'Detailed thermal images',
      ],
      href: '/services/infrared',
    },
  ];

  return (
    <div>
      <section className="bg-navy py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight px-2">
              Our Services
            </h1>
            <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-cream px-4 leading-relaxed">
              Professional property inspection services tailored to your needs. From comprehensive
              home inspections to specialized assessments, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 sm:space-y-14 lg:space-y-16">
            {services.map((service, index) => (
              <div
                key={service.name}
                className={`services-card flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-center overflow-visible ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 relative z-10">
                  <div className="inline-block rounded-full bg-cream p-3.5 sm:p-4">
                    <service.icon className="h-10 w-10 sm:h-12 sm:w-12 text-gold" />
                  </div>
                  <h2 className="mt-4 sm:mt-6 font-serif text-2xl sm:text-3xl font-bold text-navy leading-tight">
                    {service.name}
                  </h2>
                  <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">{service.description}</p>
                  <Link
                    to={service.href}
                    className="services-learn-more mt-4 sm:mt-6 inline-flex items-center text-sm sm:text-base text-gold transition-colors hover:text-navy touch-manipulation relative z-10 border-l-0 before:content-none after:content-none"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </div>
                <div className="flex-1">
                  <div className="rounded-lg bg-cream p-6 sm:p-7 lg:p-8">
                    <h3 className="font-serif text-lg sm:text-xl font-semibold text-navy">
                      What's Included:
                    </h3>
                    <ul className="mt-3 sm:mt-4 space-y-2.5 sm:space-y-3">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-start">
                          <CheckCircle className="mr-2.5 sm:mr-3 mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-gold" />
                          <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-10 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight px-2">
              Need Help Choosing a Service?
            </h2>
            <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base text-cream px-4">
              Not sure which inspection you need? Contact us and we'll help you determine the best
              service for your property.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col items-center justify-center gap-3 sm:gap-4 px-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto rounded-md bg-gold px-6 sm:px-8 py-3.5 sm:py-3 font-semibold text-white transition-all hover:bg-opacity-90 active:scale-95 touch-manipulation text-base"
              >
                Contact Us
              </Link>
              <a
                href="tel:9549992355"
                className="w-full sm:w-auto rounded-md border-2 border-gold px-6 sm:px-8 py-3.5 sm:py-3 font-semibold text-gold transition-all hover:bg-gold hover:text-white active:scale-95 touch-manipulation text-base"
              >
                954-999-2355
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
