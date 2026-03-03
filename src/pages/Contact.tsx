import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div>
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl font-bold text-white lg:text-5xl">Contact Us</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-cream">
              Get in touch to schedule your inspection or ask us any questions
            </p>
            <p className="mt-4 text-xl font-semibold text-gold">Hablamos Español</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl font-bold text-navy">Get in Touch</h2>
              <p className="mt-4 text-lg text-gray-600">
                Ready to schedule your inspection? Fill out the form and we'll get back to you
                within 24 hours, or call us for immediate assistance.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream">
                      <Phone className="h-6 w-6 text-gold" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-navy">Phone</h3>
                    <a
                      href="tel:9549992355"
                      className="mt-1 text-lg text-gray-600 transition-colors hover:text-gold"
                    >
                      954-999-2355
                    </a>
                    <p className="text-sm text-gray-500">Call or text for quick responses</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream">
                      <Mail className="h-6 w-6 text-gold" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-navy">Email</h3>
                    <a
                      href="mailto:prontopropertyinspectors@gmail.com"
                      className="mt-1 break-all text-lg text-gray-600 transition-colors hover:text-gold"
                    >
                      prontopropertyinspectors@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream">
                      <MapPin className="h-6 w-6 text-gold" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-navy">Service Area</h3>
                    <p className="mt-1 text-gray-600">
                      Broward County
                      <br />
                      Miami-Dade County
                      <br />
                      Palm Beach County
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream">
                      <Clock className="h-6 w-6 text-gold" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-navy">Hours</h3>
                    <p className="mt-1 text-gray-600">
                      Monday - Saturday: 8:00 AM - 7:00 PM
                      <br />
                      Sunday: 9:00 AM - 5:00 PM
                    </p>
                    <p className="mt-2 text-sm font-semibold text-gold">
                      Same-day appointments available!
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream">
                      <MessageCircle className="h-6 w-6 text-gold" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-navy">Bilingual Service</h3>
                    <p className="mt-1 text-gray-600">
                      English & Spanish
                      <br />
                      <span className="font-semibold text-gold">¡Hablamos Español!</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-lg bg-cream p-8">
                <h3 className="font-serif text-2xl font-semibold text-navy">
                  Schedule Your Inspection
                </h3>
                <form className="mt-6 space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-navy">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-navy">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-navy">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-navy">
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold"
                    >
                      <option value="">Select a service</option>
                      <option value="home-inspection">Home Inspection</option>
                      <option value="four-point">Four-Point Inspection</option>
                      <option value="wind-mitigation">Wind Mitigation</option>
                      <option value="mold-assessment">Mold Assessment</option>
                      <option value="sewer-scope">Sewer Scope</option>
                      <option value="infrared">Infrared Inspection</option>
                      <option value="package">Package Deal</option>
                      <option value="other">Other / Multiple Services</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-navy">
                      Property Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required
                      className="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>

                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-medium text-navy">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      className="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy">
                      Additional Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold"
                      placeholder="Tell us about your property, any specific concerns, or questions you have..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-md bg-gold px-8 py-3 font-semibold text-white transition-all hover:bg-opacity-90 hover:shadow-lg"
                  >
                    Submit Request
                  </button>

                  <p className="text-center text-sm text-gray-600">
                    We'll respond within 24 hours. For immediate assistance, call{' '}
                    <a href="tel:9549992355" className="font-semibold text-gold hover:underline">
                      954-999-2355
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-white">
            Need Help Choosing a Service?
          </h2>
          <p className="mt-4 text-cream">
            Not sure which inspection you need? Give us a call and we'll help you determine the
            best option for your property.
          </p>
          <a
            href="tel:9549992355"
            className="mt-8 inline-block rounded-md border-2 border-gold px-8 py-3 font-semibold text-gold transition-all hover:bg-gold hover:text-white"
          >
            Call Now: 954-999-2355
          </a>
        </div>
      </section>
    </div>
  );
}
