import { Link } from 'react-router-dom';
import { CheckCircle, Phone, LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface ServicePageProps {
  title: string;
  icon: LucideIcon;
  description: string;
  detailedDescription: ReactNode;
  includes: string[];
  whyItMatters: string[];
}

export default function ServicePage({
  title,
  icon: Icon,
  description,
  detailedDescription,
  includes,
  whyItMatters,
}: ServicePageProps) {
  return (
    <div>
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center lg:flex-row lg:text-left">
            <div className="flex-1">
              <div className="inline-block rounded-full bg-gold bg-opacity-20 p-4">
                <Icon className="h-16 w-16 text-gold" />
              </div>
              <h1 className="mt-6 font-serif text-4xl font-bold text-white lg:text-5xl">
                {title}
              </h1>
              <p className="mt-6 text-lg text-cream">{description}</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:justify-start">
                <Link
                  to="/contact"
                  className="rounded-md bg-gold px-8 py-3 text-center font-semibold text-white transition-all hover:bg-opacity-90"
                >
                  Schedule Now
                </Link>
                <a
                  href="tel:9549992355"
                  className="flex items-center justify-center gap-2 rounded-md border-2 border-gold px-8 py-3 font-semibold text-gold transition-all hover:bg-gold hover:text-white"
                >
                  <Phone className="h-5 w-5" />
                  954-999-2355
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl font-bold text-navy">About This Service</h2>
              <div className="mt-6 space-y-4 text-gray-600">{detailedDescription}</div>
            </div>
            <div>
              <div className="rounded-lg bg-cream p-8">
                <h3 className="font-serif text-2xl font-semibold text-navy">What's Included</h3>
                <ul className="mt-6 space-y-4">
                  {includes.map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircle className="mr-3 mt-0.5 h-6 w-6 flex-shrink-0 text-gold" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-serif text-3xl font-bold text-navy">Why It Matters</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyItMatters.map((reason, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold text-white">
                  {index + 1}
                </div>
                <p className="text-gray-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-white">Ready to Get Started?</h2>
          <p className="mt-4 text-cream">
            Same-day booking available. Get your detailed report within 24 hours.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="rounded-md bg-gold px-8 py-3 font-semibold text-white transition-all hover:bg-opacity-90"
            >
              Book Inspection
            </Link>
            <Link
              to="/services"
              className="rounded-md border-2 border-gold px-8 py-3 font-semibold text-gold transition-all hover:bg-gold hover:text-white"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
