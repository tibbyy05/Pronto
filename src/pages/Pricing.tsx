import { Link } from 'react-router-dom';
import { Check, Phone } from 'lucide-react';

export default function Pricing() {
  const services = [
    {
      name: 'Home Inspection',
      price: '$350 - $500',
      priceNote: 'Based on square footage',
      features: [
        'Complete property evaluation',
        'All major systems & components',
        'Detailed report with HD photos',
        '24-hour report delivery',
        'Free insurance inspection report',
        'Lifetime consultation support',
      ],
      popular: true,
    },
    {
      name: 'Four-Point Inspection',
      price: '$95',
      priceNote: 'Stand-alone service',
      features: [
        'Roof assessment',
        'HVAC evaluation',
        'Electrical system check',
        'Plumbing inspection',
        'Insurance-compliant report',
        'Same-day availability',
      ],
      popular: false,
    },
    {
      name: 'Wind Mitigation',
      price: '$85',
      priceNote: 'Stand-alone service',
      features: [
        'Complete wind resistance evaluation',
        'OIR-B1-1802 form completion',
        'Detailed photo documentation',
        'Insurance discount qualification',
        'Typically saves $500+ annually',
        'Valid for multiple years',
      ],
      popular: true,
    },
    {
      name: 'Mold Assessment',
      price: '$300 - $450',
      priceNote: 'Based on property size',
      features: [
        'Visual inspection',
        'Moisture detection',
        'Air quality testing',
        'Surface sampling',
        'Lab analysis',
        'Remediation recommendations',
      ],
      popular: false,
    },
    {
      name: 'Sewer Scope',
      price: '$250',
      priceNote: 'Up to 100 feet',
      features: [
        'Camera inspection of sewer line',
        'Video recording included',
        'Identify blockages & damage',
        'Root intrusion detection',
        'Location mapping',
        'Can save $10,000+ in repairs',
      ],
      popular: false,
    },
    {
      name: 'Infrared Inspection',
      price: '$350',
      priceNote: 'Add-on: $150',
      features: [
        'Thermal imaging scan',
        'Moisture detection',
        'Insulation assessment',
        'Electrical hotspot detection',
        'HVAC efficiency check',
        'Detailed thermal images',
      ],
      popular: false,
    },
  ];

  const packages = [
    {
      name: 'Buyer\'s Complete Package',
      price: '$650',
      savings: 'Save $200',
      includes: ['Home Inspection', 'Sewer Scope', 'Free Four-Point Report'],
    },
    {
      name: 'Insurance Package',
      price: '$150',
      savings: 'Save $30',
      includes: ['Four-Point Inspection', 'Wind Mitigation'],
    },
    {
      name: 'Premium Package',
      price: '$850',
      savings: 'Save $300',
      includes: ['Home Inspection', 'Sewer Scope', 'Infrared Inspection', 'Free Four-Point Report'],
    },
  ];

  return (
    <div>
      <section className="bg-navy py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight px-2">Pricing</h1>
            <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-cream px-4 leading-relaxed">
              Transparent, competitive pricing with no hidden fees. Every inspection includes our
              100% satisfaction guarantee.
            </p>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gold px-4">
              <Phone className="mr-1.5 sm:mr-2 inline h-4 w-4 sm:h-5 sm:w-5" />
              Call for custom quotes: <a href="tel:9549992355" className="font-bold hover:underline touch-manipulation">954-999-2355</a>
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-serif text-2xl sm:text-3xl font-bold text-navy leading-tight">
            Individual Services
          </h2>
          <div className="mt-8 sm:mt-10 lg:mt-12 grid gap-6 sm:gap-7 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.name}
                className={`relative flex flex-col rounded-lg border-2 bg-white p-5 sm:p-6 shadow-md transition-all hover:shadow-lg active:scale-95 touch-manipulation ${
                  service.popular ? 'border-gold' : 'border-gray-200'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 rounded-full bg-gold px-3 sm:px-4 py-0.5 sm:py-1 text-xs sm:text-sm font-semibold text-white">
                    Popular
                  </div>
                )}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy leading-tight">{service.name}</h3>
                <div className="mt-3 sm:mt-4">
                  <span className="text-2xl sm:text-3xl font-bold text-navy">{service.price}</span>
                  <div className="text-xs sm:text-sm text-gray-600">{service.priceNote}</div>
                </div>
                <ul className="mt-5 sm:mt-6 flex-grow space-y-2.5 sm:space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="mr-2 mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-gold" />
                      <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-5 sm:mt-6 block rounded-md bg-navy px-5 sm:px-6 py-3 text-center font-semibold text-white transition-all hover:bg-gold active:scale-95 touch-manipulation text-base"
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy leading-tight">Package Deals</h2>
            <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-base sm:text-lg text-gray-600 px-4">
              Save money with our bundled inspection packages
            </p>
          </div>
          <div className="mt-8 sm:mt-10 lg:mt-12 grid gap-6 sm:gap-7 lg:gap-8 md:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="rounded-lg border-2 border-gold bg-white p-6 sm:p-7 lg:p-8 shadow-md"
              >
                <div className="inline-block rounded-full bg-gold px-2.5 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm font-semibold text-white">
                  {pkg.savings}
                </div>
                <h3 className="mt-3 sm:mt-4 font-serif text-xl sm:text-2xl font-bold text-navy leading-tight">{pkg.name}</h3>
                <div className="mt-3 sm:mt-4">
                  <span className="text-3xl sm:text-4xl font-bold text-navy">{pkg.price}</span>
                </div>
                <ul className="mt-5 sm:mt-6 space-y-2.5 sm:space-y-3">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start">
                      <Check className="mr-2 mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-gold" />
                      <span className="text-sm sm:text-base text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-5 sm:mt-6 block rounded-md bg-gold px-5 sm:px-6 py-3 text-center font-semibold text-white transition-all hover:bg-opacity-90 active:scale-95 touch-manipulation text-base"
                >
                  Get Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-navy p-6 sm:p-7 lg:p-8 text-center text-white">
            <h2 className="font-serif text-xl sm:text-2xl font-bold">Additional Services</h2>
            <div className="mt-5 sm:mt-6 space-y-3 sm:space-y-4 text-sm sm:text-base text-cream">
              <p>
                <strong className="text-white">Re-Inspection:</strong> $150 - Verify repairs have been completed
              </p>
              <p>
                <strong className="text-white">Pool/Spa Inspection:</strong> $150 - Add to any home inspection
              </p>
              <p>
                <strong className="text-white">Radon Testing:</strong> $200 - 48-hour test period required
              </p>
              <p>
                <strong className="text-white">Commercial Inspections:</strong> Custom pricing based on size and
                complexity
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-10 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy leading-tight px-2">Questions About Pricing?</h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 px-4">
            Every property is unique. Contact us for a custom quote tailored to your specific needs.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col items-center justify-center gap-3 sm:gap-4 px-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto rounded-md bg-gold px-6 sm:px-8 py-3.5 sm:py-3 font-semibold text-white transition-all hover:bg-opacity-90 active:scale-95 touch-manipulation text-base"
            >
              Request Quote
            </Link>
            <a
              href="tel:9549992355"
              className="w-full sm:w-auto rounded-md border-2 border-navy px-6 sm:px-8 py-3.5 sm:py-3 font-semibold text-navy transition-all hover:bg-navy hover:text-white active:scale-95 touch-manipulation text-base"
            >
              954-999-2355
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
