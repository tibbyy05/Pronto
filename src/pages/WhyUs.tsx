import { Link } from 'react-router-dom';
import {
  Clock,
  Camera,
  Award,
  DollarSign,
  Shield,
  Users,
  FileText,
  MapPin,
  CheckCircle,
} from 'lucide-react';

export default function WhyUs() {
  const differentiators = [
    {
      icon: Clock,
      title: 'Same-Day Booking',
      description:
        'We understand your timeline matters. Book your inspection today and get it done on your schedule, often the same day.',
    },
    {
      icon: FileText,
      title: '24-Hour Report Delivery',
      description:
        'Receive your comprehensive inspection report within 24 hours, complete with HD photos and videos.',
    },
    {
      icon: Camera,
      title: 'HD Photos & Videos',
      description:
        'Every inspection includes high-definition photos and videos documenting all findings for complete transparency.',
    },
    {
      icon: DollarSign,
      title: 'Free Insurance Report',
      description:
        'Get a complimentary insurance inspection report with every home inspection at no additional cost.',
    },
    {
      icon: Award,
      title: '100% Money-Back Guarantee',
      description:
        'Your satisfaction is guaranteed. If you\'re not completely satisfied, we\'ll refund your money - no questions asked.',
    },
    {
      icon: Users,
      title: 'Bilingual Service',
      description:
        'We speak English and Spanish fluently. Hablamos Español para mejor servir a nuestra comunidad.',
    },
  ];

  const certifications = [
    'Licensed Home Inspector',
    'Certified Four-Point Inspector',
    'Wind Mitigation Specialist',
    'Mold Assessment Professional',
    'Infrared Thermography Certified',
    'InterNACHI Member',
  ];

  const browardCities = [
    'Fort Lauderdale',
    'Hollywood',
    'Pembroke Pines',
    'Coral Springs',
    'Miramar',
    'Pompano Beach',
    'Davie',
    'Plantation',
    'Sunrise',
    'Deerfield Beach',
    'Weston',
    'Coconut Creek',
  ];

  const miamiDadeCities = [
    'Miami',
    'Miami Beach',
    'Hialeah',
    'Miami Gardens',
    'Kendall',
    'Homestead',
    'North Miami Beach',
    'Aventura',
    'Cutler Bay',
    'Doral',
    'Coral Gables',
    'Pinecrest',
  ];

  const palmBeachCities = [
    'West Palm Beach',
    'Boca Raton',
    'Boynton Beach',
    'Delray Beach',
    'Wellington',
    'Jupiter',
    'Palm Beach Gardens',
    'Royal Palm Beach',
    'Lake Worth',
    'Greenacres',
  ];

  return (
    <div>
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl font-bold text-white lg:text-5xl">Why Choose Us</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-cream">
              Professional, reliable, and thorough property inspections you can trust
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold text-navy">What Sets Us Apart</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              We go above and beyond to provide exceptional service and value
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-gold hover:shadow-lg"
              >
                <div className="inline-block rounded-full bg-cream p-3">
                  <item.icon className="h-8 w-8 text-gold" />
                </div>
                <h3 className="mt-4 font-serif text-xl font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="mx-auto h-16 w-16 text-gold" />
            <h2 className="mt-6 font-serif text-3xl font-bold text-navy">
              Certified & Experienced
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Our inspectors hold multiple certifications and stay current with industry standards
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="flex items-center rounded-lg bg-white p-4 shadow-md"
              >
                <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-gold" />
                <span className="font-medium text-navy">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <MapPin className="mx-auto h-16 w-16 text-gold" />
            <h2 className="mt-6 font-serif text-3xl font-bold text-navy">Areas We Serve</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Professional property inspection services throughout South Florida
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-navy">Broward County</h3>
              <ul className="mt-4 space-y-2">
                {browardCities.map((city) => (
                  <li key={city} className="flex items-start text-gray-600">
                    <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                    {city}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-semibold text-navy">Miami-Dade County</h3>
              <ul className="mt-4 space-y-2">
                {miamiDadeCities.map((city) => (
                  <li key={city} className="flex items-start text-gray-600">
                    <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                    {city}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-semibold text-navy">Palm Beach County</h3>
              <ul className="mt-4 space-y-2">
                {palmBeachCities.map((city) => (
                  <li key={city} className="flex items-start text-gray-600">
                    <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 text-center text-gray-600">
            Don't see your city listed? Contact us - we may still be able to serve your area!
          </p>
        </div>
      </section>

      <section className="bg-navy py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-white">
            Ready to Experience the Difference?
          </h2>
          <p className="mt-4 text-cream">
            Join hundreds of satisfied customers who trust Pronto Property Inspectors
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="rounded-md bg-gold px-8 py-3 font-semibold text-white transition-all hover:bg-opacity-90"
            >
              Schedule Inspection
            </Link>
            <a
              href="tel:9549992355"
              className="rounded-md border-2 border-gold px-8 py-3 font-semibold text-gold transition-all hover:bg-gold hover:text-white"
            >
              954-999-2355
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
