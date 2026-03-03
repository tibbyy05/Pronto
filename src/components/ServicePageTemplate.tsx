import { Link } from 'react-router-dom';
import { CheckCircle, Phone, Camera, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import FadeIn from './FadeIn';

interface IncludedItem {
  title: string;
  description: string;
}

interface BenefitCard {
  title: string;
  description: string;
}

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface RelatedService {
  name: string;
  description: string;
  link: string;
}

interface ServicePageTemplateProps {
  serviceName: string;
  breadcrumb: string;
  heroSubtitle: string;
  overviewHeading: string;
  overviewContent: string[];
  includedItems: IncludedItem[];
  benefitCards: BenefitCard[];
  processSteps: ProcessStep[];
  pricingPlaceholder: string;
  faqs: FAQ[];
  relatedServices: RelatedService[];
}

export default function ServicePageTemplate({
  serviceName,
  breadcrumb,
  heroSubtitle,
  overviewHeading,
  overviewContent,
  includedItems,
  benefitCards,
  processSteps,
  pricingPlaceholder,
  faqs,
  relatedServices,
}: ServicePageTemplateProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <div>
      {/* SECTION A - HERO BANNER */}
      <section className="relative bg-navy py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, rgb(212, 168, 83) 1px, transparent 1px),
                             linear-gradient(to bottom, rgb(212, 168, 83) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <nav className="text-xs text-slate-400 mb-6 sm:mb-8">
              <Link to="/" className="hover:text-gold transition-colors">Home</Link>
              <span className="mx-1.5 sm:mx-2">&gt;</span>
              <Link to="/services" className="hover:text-gold transition-colors">Services</Link>
              <span className="mx-1.5 sm:mx-2">&gt;</span>
              <span className="text-slate-300">{breadcrumb}</span>
            </nav>

            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                {serviceName}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-cream mb-6 sm:mb-8 leading-relaxed px-2">
                {heroSubtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 px-2">
                <Link
                  to="/contact"
                  className="rounded-md bg-gold px-6 sm:px-8 py-3.5 sm:py-3 text-center font-semibold text-white transition-all hover:bg-opacity-90 active:scale-95 touch-manipulation text-base sm:text-base"
                >
                  Schedule This Inspection
                </Link>
                <a
                  href="tel:9549992355"
                  className="flex items-center justify-center gap-2 rounded-md border-2 border-white px-6 sm:px-8 py-3.5 sm:py-3 font-semibold text-white transition-all hover:bg-white hover:text-navy active:scale-95 touch-manipulation text-base sm:text-base"
                >
                  <Phone className="h-5 w-5" />
                  Call 954-999-2355
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-cream px-2">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold flex-shrink-0" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="hidden sm:block text-gold">|</div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold flex-shrink-0" />
                  <span>InterNACHI Certified</span>
                </div>
                <div className="hidden sm:block text-gold">|</div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold flex-shrink-0" />
                  <span>24-Hour Reports</span>
                </div>
                <div className="hidden sm:block text-gold">|</div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold flex-shrink-0" />
                  <span>Money-Back Guarantee</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION B - WHAT IS [SERVICE NAME]? */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <div className="text-xs font-bold text-gold tracking-wider mb-3 sm:mb-4">OVERVIEW</div>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-4 sm:mb-6 leading-tight">
                  {overviewHeading}
                </h2>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                  {overviewContent.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="aspect-[4/3] bg-navy border-4 border-dashed border-gold rounded-lg flex flex-col items-center justify-center text-gold">
                  <Camera className="h-12 w-12 sm:h-16 sm:w-16 mb-3 sm:mb-4" />
                  <p className="font-semibold text-sm sm:text-base px-4 text-center">{serviceName} Photo</p>
                </div>
                {/* REPLACE: Add real photo for this service */}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION C - WHAT'S INCLUDED */}
      <section className="bg-cream py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-xs font-bold text-gold tracking-wider mb-3 sm:mb-4">WHAT'S INCLUDED</div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-8 sm:mb-10 lg:mb-12 leading-tight">
              What We Inspect
            </h2>

            <div className="grid gap-4 sm:gap-5 lg:gap-6 md:grid-cols-2">
              {includedItems.map((item, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 text-gold mt-0.5 sm:mt-1" />
                    <div>
                      <h3 className="font-semibold text-navy mb-1 text-sm sm:text-base">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION D - WHY YOU NEED THIS */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-xs font-bold text-gold tracking-wider mb-3 sm:mb-4">WHY IT MATTERS</div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-8 sm:mb-10 lg:mb-12 leading-tight">
              Why You Need a {serviceName}
            </h2>

            <div className="grid gap-6 sm:gap-7 lg:gap-8 md:grid-cols-3">
              {benefitCards.map((card, index) => (
                <FadeIn key={index} delay={index * 0.15}>
                  <div className="group border border-gray-200 rounded-lg p-6 sm:p-7 lg:p-8 transition-all hover:-translate-y-1 hover:shadow-lg active:scale-95 relative overflow-hidden touch-manipulation">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gold transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-navy mb-3 sm:mb-4 leading-tight">{card.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{card.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION E - WHAT TO EXPECT */}
      <section className="bg-navy py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-xs font-bold text-gold tracking-wider mb-3 sm:mb-4">THE PROCESS</div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-10 lg:mb-12 leading-tight">
              What to Expect
            </h2>

            <div className="relative">
              <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-0.5 bg-gold opacity-30" />

              {processSteps.map((step, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="relative flex gap-4 sm:gap-6 mb-10 sm:mb-12 last:mb-0">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold flex items-center justify-center font-bold text-sm sm:text-base text-navy z-10">
                      {step.number}
                    </div>
                    <div className="pb-6 sm:pb-8">
                      <h3 className="font-semibold text-lg sm:text-xl text-white mb-2 leading-tight">{step.title}</h3>
                      <p className="text-sm sm:text-base text-cream leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION F - PRICING CALLOUT */}
      <section className="bg-cream py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-6 sm:mb-8 leading-tight">
              Pricing
            </h2>
            <div className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-gold mb-3 sm:mb-4">
              {pricingPlaceholder}
            </div>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 px-4">
              Starting price — final cost depends on property size and location
            </p>
            {/* REPLACE: Insert actual pricing for this service */}
            <Link
              to="/contact"
              className="inline-block rounded-md bg-gold px-6 sm:px-8 py-3.5 sm:py-3 font-semibold text-white transition-all hover:bg-opacity-90 active:scale-95 touch-manipulation mb-3 sm:mb-4 text-base"
            >
              Get an Exact Quote
            </Link>
            <p className="text-xs sm:text-sm text-gray-500 px-4">
              or call <a href="tel:9549992355" className="text-gold hover:underline font-semibold touch-manipulation">954-999-2355</a> for immediate pricing
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SECTION G - FAQ */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-xs font-bold text-gold tracking-wider mb-3 sm:mb-4">COMMON QUESTIONS</div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-8 sm:mb-10 lg:mb-12 leading-tight">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className={`w-full flex items-center justify-between p-4 sm:p-5 lg:p-6 text-left transition-colors touch-manipulation ${
                      openFAQ === index ? 'bg-cream' : 'bg-white hover:bg-gray-50 active:bg-gray-100'
                    }`}
                  >
                    <span className={`font-semibold text-sm sm:text-base text-navy pr-6 sm:pr-8 leading-tight ${openFAQ === index ? 'text-gold' : ''}`}>
                      {faq.question}
                    </span>
                    {openFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-gold flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                  >
                    <div className="p-4 sm:p-5 lg:p-6 pt-0 text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION H - CTA BANNER */}
      <section className="bg-gold py-12 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-3 sm:mb-4 leading-tight px-2">
              Ready to Schedule Your {serviceName}?
            </h2>
            <p className="text-navy text-base sm:text-lg mb-6 sm:mb-8 px-4">
              Same-day booking available. Protect your investment with a professional inspection.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
              <Link
                to="/contact"
                className="rounded-md bg-navy px-6 sm:px-8 py-3.5 sm:py-3 font-semibold text-white transition-all hover:bg-opacity-90 active:scale-95 touch-manipulation text-base"
              >
                Book Now
              </Link>
              <a
                href="tel:9549992355"
                className="flex items-center justify-center gap-2 rounded-md border-2 border-navy px-6 sm:px-8 py-3.5 sm:py-3 font-semibold text-navy transition-all hover:bg-navy hover:text-white active:scale-95 touch-manipulation text-base"
              >
                <Phone className="h-5 w-5" />
                Call 954-999-2355
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION I - RELATED SERVICES */}
      <section className="bg-navy py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-xs font-bold text-gold tracking-wider mb-3 sm:mb-4">YOU MAY ALSO NEED</div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-10 lg:mb-12 leading-tight">
              Related Services
            </h2>

            <div className="grid gap-6 sm:gap-7 lg:gap-8 md:grid-cols-3">
              {relatedServices.map((service, index) => (
                <FadeIn key={index} delay={index * 0.15}>
                  <div className="group border border-gold border-opacity-30 rounded-lg p-6 sm:p-7 lg:p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-opacity-100 active:scale-95 relative overflow-hidden touch-manipulation">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gold transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 leading-tight">{service.name}</h3>
                    <p className="text-sm sm:text-base text-cream mb-3 sm:mb-4 leading-relaxed">{service.description}</p>
                    <Link
                      to={service.link}
                      className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-3 transition-all text-sm sm:text-base"
                    >
                      Learn More <span>→</span>
                    </Link>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
