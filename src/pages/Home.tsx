import { Link } from 'react-router-dom';
import {
  Shield,
  Star,
  Clock,
  Award,
  Home as HomeIcon,
  Zap,
  Droplet,
  Wind,
  Thermometer,
  Building,
  Box,
  Wrench,
  Camera,
  FileText,
  DollarSign,
  CheckCircle,
  Phone,
  ArrowRight,
  Microscope,
  Clipboard,
} from 'lucide-react';
import { useState } from 'react';
import FadeIn from '../components/FadeIn';

export default function Home() {
  const services = [
    {
      name: 'Home Inspection',
      icon: HomeIcon,
      description: 'Comprehensive evaluation of property structure, systems, and components',
      href: '/services/home-inspection',
    },
    {
      name: 'Four-Point Inspection',
      icon: Shield,
      description: 'Insurance-focused assessment of roof, HVAC, electrical, and plumbing',
      href: '/services/four-point',
    },
    {
      name: 'Wind Mitigation',
      icon: Wind,
      description: 'Identify wind-resistant features to reduce insurance premiums',
      href: '/services/wind-mitigation',
    },
    {
      name: 'Mold Assessment',
      icon: Droplet,
      description: 'Professional mold detection and air quality testing',
      href: '/services/mold-assessment',
    },
    {
      name: 'Sewer Scope',
      icon: Wrench,
      description: 'Camera inspection of sewer lines for blockages and damage',
      href: '/services/sewer-scope',
    },
    {
      name: 'Infrared Inspection',
      icon: Thermometer,
      description: 'Thermal imaging to detect hidden moisture and electrical issues',
      href: '/services/infrared',
    },
  ];

  const inspectionAreas = [
    { name: 'Roof', icon: HomeIcon },
    { name: 'Attic', icon: Building },
    { name: 'Exterior', icon: Box },
    { name: 'HVAC', icon: Wind },
    { name: 'Plumbing', icon: Droplet },
    { name: 'Electrical', icon: Zap },
    { name: 'Interior', icon: HomeIcon },
    { name: 'Appliances', icon: Box },
  ];

  const guarantees = [
    {
      icon: Camera,
      title: 'HD Photos & Video',
      description: 'Detailed visual documentation of every inspection',
    },
    {
      icon: Clock,
      title: 'Report in 24 Hours',
      description: 'Fast turnaround without compromising quality',
    },
    {
      icon: FileText,
      title: 'Free Insurance Report',
      description: 'Complimentary insurance inspection included',
    },
    {
      icon: DollarSign,
      title: 'Money-Back Guarantee',
      description: '100% satisfaction guaranteed or your money back',
    },
  ];

  const certifications = [
    { icon: Shield, label: 'InterNACHI Certified Professional Inspector' },
    { icon: FileText, label: 'Licensed & Insured' },
    { icon: Microscope, label: 'Certified Mold Inspector' },
    { icon: Wind, label: 'Wind Mitigation Certified' },
    { icon: Clipboard, label: '4-Point Certified' },
  ];

  const reviews = [
    {
      name: 'Marcus H.',
      rating: 5,
      text: 'Getting the inspection booked was a breeze. They showed up right on time, friendly and professional. The report was detailed but easy to understand.',
    },
    {
      name: 'Omar K.',
      rating: 5,
      text: 'Best inspector in South Florida hands down! I had a lot of questions and they always responded in a timely manner. Very punctual and thorough.',
    },
    {
      name: 'Jean D.',
      rating: 5,
      text: 'I would recommend them to anyone looking for a fast and professional inspector. Their detailed approach made the inspection process easy and stress-free.',
    },
    {
      name: 'Rosario E.',
      rating: 5,
      text: 'Great service — fast, efficient, and thorough. The report arrived the same day and covered everything we needed. Couldn\'t be happier.',
    },
  ];

  return (
    <div>
      <section className="relative bg-navy py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="hero-title font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight px-2">
              Inspect Before You Invest
            </h1>
            <p className="hero-subtitle mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-cream px-4 leading-relaxed">
              Professional property inspections in South Florida. Protect your investment with
              detailed, same-day inspections and 24-hour report delivery.
            </p>
            <div className="hero-buttons mt-8 sm:mt-10 flex flex-col items-center justify-center gap-3 sm:gap-4 px-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-gold px-6 sm:px-8 py-3.5 sm:py-3 text-base font-semibold text-white transition-all duration-[350ms] ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-0.5 hover:bg-[#E8C97A] hover:shadow-[0_8px_30px_rgba(212,168,83,0.3)] active:scale-95 touch-manipulation"
              >
                Schedule Inspection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:9549992355"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-md border-2 border-gold px-6 sm:px-8 py-3.5 sm:py-3 text-base font-semibold text-gold transition-all duration-[350ms] ease-[cubic-bezier(.22,1,.36,1)] hover:border-gold hover:bg-gold hover:text-white active:scale-95 touch-manipulation"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </div>
            <p className="hero-phone mt-5 sm:mt-6 text-cream">
              <a href="tel:9549992355" className="text-lg sm:text-xl font-bold transition-colors duration-300 ease-out hover:text-gold touch-manipulation">
                954-999-2355
              </a>
            </p>

            <div className="hero-trust-strip mt-6 sm:mt-8 inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6 xl:gap-8 rounded-lg border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.03)] px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold flex-shrink-0" />
                <span className="text-[11px] sm:text-[13px] tracking-wide text-[rgba(255,255,255,0.7)]">Licensed & Insured</span>
              </div>
              <div className="hidden sm:block h-5 w-px bg-[rgba(255,255,255,0.1)]" />
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold flex-shrink-0" />
                <span className="text-[11px] sm:text-[13px] tracking-wide text-[rgba(255,255,255,0.7)]">InterNACHI Certified</span>
              </div>
              <div className="hidden sm:block h-5 w-px bg-[rgba(255,255,255,0.1)]" />
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold flex-shrink-0" />
                <span className="text-[11px] sm:text-[13px] tracking-wide text-[rgba(255,255,255,0.7)]">Same Day Availability</span>
              </div>
              <div className="hidden lg:block h-5 w-px bg-[rgba(255,255,255,0.1)]" />
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold flex-shrink-0" />
                <span className="text-[11px] sm:text-[13px] tracking-wide text-[rgba(255,255,255,0.7)]">100% Money-Back Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="hero-stats grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            <FadeIn delay={0}>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy">500+</div>
                <div className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-navy">Inspections</div>
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="text-center">
                <div className="flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl font-bold text-navy">
                  5.0 <Star className="ml-1 h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 fill-gold text-gold" />
                </div>
                <div className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-navy">Google Rating</div>
              </div>
            </FadeIn>
            <FadeIn delay={0.16}>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy">24hr</div>
                <div className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-navy">Reports</div>
              </div>
            </FadeIn>
            <FadeIn delay={0.24}>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy">100%</div>
                <div className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-navy">Satisfaction</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-cream py-10 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <div className="mb-3 sm:mb-4 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[2.5px] sm:tracking-[3px] text-gold">
                CERTIFIED & TRUSTED
              </div>
            </div>
          </FadeIn>
          <div className="mt-6 sm:mt-8 flex flex-wrap items-start justify-center gap-8 sm:gap-10 lg:gap-12">
            {certifications.map((cert, index) => (
              <FadeIn key={cert.label} delay={index * 0.1}>
                <div className="group flex flex-col items-center">
                  <div className="flex h-16 w-16 sm:h-18 sm:w-18 lg:h-20 lg:w-20 items-center justify-center rounded-full border border-[rgba(212,168,83,0.3)] transition-all duration-300 hover:-translate-y-1 hover:border-gold active:scale-95 touch-manipulation">
                    <cert.icon className="h-6 w-6 sm:h-6.5 sm:w-6.5 lg:h-7 lg:w-7 text-gold" />
                  </div>
                  <p className="mt-2.5 sm:mt-3 max-w-[100px] sm:max-w-[120px] text-center text-[10px] sm:text-xs font-medium text-navy leading-tight">
                    {cert.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.5}>
            <div className="mt-8 sm:mt-10 text-center text-[11px] sm:text-[13px] tracking-wide text-[#7A8FA6] px-4">
              Florida State License #[LICENSE_NUMBER] | Fully Insured & Bonded
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-navy leading-tight">Our Services</h2>
              <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-base sm:text-lg text-gray-600 px-4">
                Comprehensive inspection services to protect your property investment
              </p>
            </div>
          </FadeIn>
          <div className="mt-8 sm:mt-10 lg:mt-12 grid gap-6 sm:gap-7 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <FadeIn key={service.name} delay={index * 0.08}>
                <Link
                  to={service.href}
                  className="group relative rounded-lg border border-gray-200 bg-white p-5 sm:p-6 transition-all duration-[400ms] ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1 hover:border-gold hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] active:scale-95 touch-manipulation before:absolute before:left-0 before:top-0 before:h-1 before:w-full before:origin-left before:scale-x-0 before:bg-gold before:transition-transform before:duration-[400ms] before:ease-[cubic-bezier(.22,1,.36,1)] hover:before:scale-x-100"
                >
                  <service.icon className="h-10 w-10 sm:h-12 sm:w-12 text-gold transition-transform duration-300 group-hover:scale-105" />
                  <h3 className="mt-3 sm:mt-4 font-serif text-lg sm:text-xl font-semibold text-navy leading-tight">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</p>
                  <div className="mt-3 sm:mt-4 flex items-center text-gold text-sm sm:text-base">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-navy leading-tight">
                What's in a Home Inspection
              </h2>
              <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-base sm:text-lg text-gray-600 px-4">
                We thoroughly inspect 8 major areas of your property
              </p>
            </div>
          </FadeIn>
          <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-4 lg:gap-8">
            {inspectionAreas.map((area, index) => (
              <FadeIn key={area.name} delay={index * 0.08}>
                <div className="flex flex-col items-center rounded-lg bg-white p-4 sm:p-5 lg:p-6 shadow-md transition-all duration-300 hover:scale-102 hover:shadow-lg active:scale-95 touch-manipulation">
                  <area.icon className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-gold" />
                  <div className="mt-3 sm:mt-4 font-semibold text-sm sm:text-base text-navy text-center">{area.name}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-navy leading-tight">
                Why Choose Pronto
              </h2>
              <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-base sm:text-lg text-gray-600 px-4">
                Our commitment to quality and customer satisfaction
              </p>
            </div>
          </FadeIn>
          <div className="mt-8 sm:mt-10 lg:mt-12 grid gap-6 sm:gap-7 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {guarantees.map((guarantee, index) => (
              <FadeIn key={guarantee.title} delay={index * 0.08}>
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-cream p-3.5 sm:p-4">
                    <guarantee.icon className="h-7 w-7 sm:h-8 sm:w-8 text-gold" />
                  </div>
                  <h3 className="mt-3 sm:mt-4 font-serif text-base sm:text-lg font-semibold text-navy leading-tight px-2">
                    {guarantee.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-gray-600 px-2">{guarantee.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <div className="mb-3 sm:mb-4 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[2.5px] sm:tracking-[3px] text-gold">
                WHAT CLIENTS SAY
              </div>
              <div className="mx-auto mb-2.5 sm:mb-3 h-0.5 w-10 sm:w-12 bg-gold" />
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-navy leading-tight px-2">
                Trusted by South Florida Homeowners
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-8 sm:mt-10 lg:mt-12 flex flex-col items-center justify-center">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-navy">5.0</span>
                <div className="flex flex-col gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 sm:h-6 sm:w-6 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm text-[#7A8FA6]">Based on 100+ Reviews</span>
                </div>
              </div>
              <div className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-[#7A8FA6]">
                <span className="font-semibold" style={{ color: '#4285F4' }}>G</span>
                <span className="font-semibold" style={{ color: '#EA4335' }}>o</span>
                <span className="font-semibold" style={{ color: '#FBBC04' }}>o</span>
                <span className="font-semibold" style={{ color: '#4285F4' }}>g</span>
                <span className="font-semibold" style={{ color: '#34A853' }}>l</span>
                <span className="font-semibold" style={{ color: '#EA4335' }}>e</span>
              </div>
            </div>
          </FadeIn>

          <div className="mt-10 sm:mt-12 lg:mt-16 grid gap-6 sm:gap-7 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {reviews.slice(0, 3).map((review, index) => (
              <FadeIn key={review.name} delay={0.3 + index * 0.1}>
                <div className="group relative rounded-lg border border-[rgba(0,0,0,0.05)] bg-white p-6 sm:p-7 lg:p-8 transition-all duration-[400ms] ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] active:scale-95 touch-manipulation before:absolute before:left-0 before:top-0 before:h-1 before:w-full before:origin-left before:scale-x-0 before:bg-gold before:transition-transform before:duration-[400ms] before:ease-[cubic-bezier(.22,1,.36,1)] hover:before:scale-x-100">
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">{review.text}</p>
                  <div className="mt-5 sm:mt-6">
                    <div className="font-semibold text-sm sm:text-base text-navy">{review.name}</div>
                    <div className="text-[10px] sm:text-xs text-[#7A8FA6]">Verified Google Review</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.7}>
            <div className="mt-8 sm:mt-10 lg:mt-12 rounded-xl border border-[rgba(0,0,0,0.05)] bg-white p-6 sm:p-7 lg:p-8">
              <div className="flex flex-col items-center text-center lg:flex-row lg:text-left">
                <div className="flex-1">
                  <div className="flex justify-center lg:justify-start">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">{reviews[3].text}</p>
                  <div className="mt-3 sm:mt-4">
                    <div className="font-semibold text-sm sm:text-base text-navy">{reviews[3].name}</div>
                    <div className="text-[10px] sm:text-xs text-[#7A8FA6]">Verified Google Review</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.8}>
            <div className="mt-6 sm:mt-8 text-center">
              <a
                href="#"
                className="inline-flex items-center text-sm sm:text-base text-gold transition-colors duration-300 hover:text-navy touch-manipulation"
              >
                Read All Reviews on Google
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-navy py-10 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col items-center justify-between gap-5 sm:gap-6 lg:flex-row">
              <div className="text-center lg:text-left">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight px-2">
                  Same Day Booking Available
                </h2>
                <p className="mt-2 text-sm sm:text-base text-cream px-2">
                  Don't wait - schedule your inspection today and get your report within 24 hours
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:gap-4 w-full sm:w-auto lg:flex-row">
                <Link
                  to="/contact"
                  className="rounded-md bg-gold px-6 sm:px-8 py-3.5 sm:py-3 text-center font-semibold text-white transition-all duration-[350ms] ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-0.5 hover:bg-[#E8C97A] hover:shadow-[0_8px_30px_rgba(212,168,83,0.3)] active:scale-95 touch-manipulation text-base"
                >
                  Book Inspection
                </Link>
                <a
                  href="tel:9549992355"
                  className="rounded-md border-2 border-gold px-6 sm:px-8 py-3.5 sm:py-3 text-center font-semibold text-gold transition-all duration-[350ms] ease-[cubic-bezier(.22,1,.36,1)] hover:bg-gold hover:text-white active:scale-95 touch-manipulation text-base"
                >
                  954-999-2355
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-navy leading-tight px-2">
                Get Your Free Quote
              </h2>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 px-4">
                Fill out the form and we'll get back to you within 24 hours
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <form className="mt-8 sm:mt-10 lg:mt-12 space-y-4 sm:space-y-6">
              <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="rounded-md border border-gray-300 px-4 py-3.5 sm:py-3 text-base transition-all duration-300 focus:border-gold focus:shadow-[0_0_0_2px_rgba(212,168,83,0.1)] focus:outline-none touch-manipulation"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="rounded-md border border-gray-300 px-4 py-3.5 sm:py-3 text-base transition-all duration-300 focus:border-gold focus:shadow-[0_0_0_2px_rgba(212,168,83,0.1)] focus:outline-none touch-manipulation"
                />
              </div>
              <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="rounded-md border border-gray-300 px-4 py-3.5 sm:py-3 text-base transition-all duration-300 focus:border-gold focus:shadow-[0_0_0_2px_rgba(212,168,83,0.1)] focus:outline-none touch-manipulation"
                />
                <select className="rounded-md border border-gray-300 px-4 py-3.5 sm:py-3 text-base transition-all duration-300 focus:border-gold focus:shadow-[0_0_0_2px_rgba(212,168,83,0.1)] focus:outline-none touch-manipulation">
                  <option value="">Select Service</option>
                  <option value="home-inspection">Home Inspection</option>
                  <option value="four-point">Four-Point Inspection</option>
                  <option value="wind-mitigation">Wind Mitigation</option>
                  <option value="mold-assessment">Mold Assessment</option>
                  <option value="sewer-scope">Sewer Scope</option>
                  <option value="infrared">Infrared Inspection</option>
                </select>
              </div>
              <input
                type="text"
                placeholder="Property Address"
                className="w-full rounded-md border border-gray-300 px-4 py-3.5 sm:py-3 text-base transition-all duration-300 focus:border-gold focus:shadow-[0_0_0_2px_rgba(212,168,83,0.1)] focus:outline-none touch-manipulation"
              />
              <textarea
                rows={4}
                placeholder="Additional Details"
                className="w-full rounded-md border border-gray-300 px-4 py-3.5 sm:py-3 text-base transition-all duration-300 focus:border-gold focus:shadow-[0_0_0_2px_rgba(212,168,83,0.1)] focus:outline-none touch-manipulation"
              />
              <button
                type="submit"
                className="w-full rounded-md bg-gold px-6 sm:px-8 py-3.5 sm:py-3 font-semibold text-white transition-all duration-[350ms] ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-0.5 hover:bg-[#E8C97A] hover:shadow-[0_8px_30px_rgba(212,168,83,0.3)] active:scale-95 touch-manipulation text-base"
              >
                Submit Request
              </button>
            </form>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
