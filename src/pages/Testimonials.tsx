import { Link } from 'react-router-dom';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Martinez',
      location: 'Fort Lauderdale, FL',
      rating: 5,
      date: 'February 2024',
      text: 'Pronto was incredibly thorough and professional. They found issues that could have cost us thousands down the road. The report was detailed and delivered within 24 hours as promised! We felt confident moving forward with our purchase knowing exactly what we were getting into.',
      service: 'Home Inspection',
    },
    {
      name: 'John Peterson',
      location: 'Miami, FL',
      rating: 5,
      date: 'January 2024',
      text: 'Best home inspection service in South Florida! The inspector was punctual, knowledgeable, and took the time to explain everything. I learned so much about the property. Highly recommend for anyone buying a home. Worth every penny!',
      service: 'Home Inspection',
    },
    {
      name: 'Maria Rodriguez',
      location: 'Boca Raton, FL',
      rating: 5,
      date: 'January 2024',
      text: 'Excelente servicio! They speak Spanish which made the whole process much easier for my family. Very professional and detailed inspection. The photos and videos in the report were extremely helpful. I would not buy a house without calling them first!',
      service: 'Home Inspection & Four-Point',
    },
    {
      name: 'David Chen',
      location: 'Coral Springs, FL',
      rating: 5,
      date: 'December 2023',
      text: 'The wind mitigation inspection saved us over $800 per year on insurance! The process was quick, professional, and the report was accepted immediately by our insurance company. Paid for itself in the first year. Highly recommended!',
      service: 'Wind Mitigation',
    },
    {
      name: 'Jennifer Williams',
      location: 'Pembroke Pines, FL',
      rating: 5,
      date: 'December 2023',
      text: 'We suspected mold in our new home and Pronto came out the same day. They were thorough, professional, and provided clear recommendations. The thermal imaging found moisture we didn\'t even know about. Great service!',
      service: 'Mold Assessment',
    },
    {
      name: 'Robert Thompson',
      location: 'Hollywood, FL',
      rating: 5,
      date: 'November 2023',
      text: 'The sewer scope inspection revealed major issues with the sewer line before we closed on the house. Saved us at least $12,000 in repairs! The seller agreed to fix it. This inspection is absolutely essential - don\'t skip it!',
      service: 'Sewer Scope',
    },
    {
      name: 'Lisa Garcia',
      location: 'Weston, FL',
      rating: 5,
      date: 'November 2023',
      text: 'My insurance company required a four-point inspection for our older home. Pronto made the process easy and stress-free. The report was detailed, professional, and accepted immediately by the insurance company. Great communication throughout!',
      service: 'Four-Point Inspection',
    },
    {
      name: 'Michael Brown',
      location: 'Plantation, FL',
      rating: 5,
      date: 'October 2023',
      text: 'As a real estate agent, I\'ve worked with many inspectors. Pronto is by far the best. They\'re thorough, professional, and their reports are incredibly detailed. My clients always thank me for the recommendation. I won\'t use anyone else!',
      service: 'Multiple Services',
    },
    {
      name: 'Carmen Diaz',
      location: 'Hialeah, FL',
      rating: 5,
      date: 'October 2023',
      text: 'Muy profesional y detallado! The inspector explained everything in Spanish and answered all our questions. The report with photos and videos helped us understand the condition of the home. Very satisfied with the service!',
      service: 'Home Inspection',
    },
  ];

  return (
    <div>
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl font-bold text-white lg:text-5xl">
              Client Testimonials
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-cream">
              See what our satisfied clients have to say about our services
            </p>
            <div className="mt-8 flex items-center justify-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-2xl font-bold text-gold">5.0</span>
              <span className="text-cream">Google Rating</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-all hover:shadow-lg"
              >
                <Quote className="h-8 w-8 text-gold opacity-50" />
                <div className="mt-4 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="mt-4 flex-grow text-gray-700">{testimonial.text}</p>
                <div className="mt-6 border-t border-gray-200 pt-4">
                  <div className="font-semibold text-navy">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                  <div className="mt-2 text-sm text-gold">{testimonial.service}</div>
                  <div className="text-xs text-gray-500">{testimonial.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-navy">Join Our Happy Clients</h2>
          <p className="mt-4 text-lg text-gray-600">
            Experience the same professional service and peace of mind that our clients rave about
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="rounded-md bg-gold px-8 py-3 font-semibold text-white transition-all hover:bg-opacity-90"
            >
              Schedule Your Inspection
            </Link>
            <Link
              to="/services"
              className="rounded-md border-2 border-navy px-8 py-3 font-semibold text-navy transition-all hover:bg-navy hover:text-white"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
