import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is a home inspection?',
      answer:
        'A home inspection is a comprehensive, non-invasive examination of a property\'s condition. Our certified inspectors evaluate the structure, systems, and components of the home, including the roof, foundation, HVAC, plumbing, electrical, and more. We provide a detailed report documenting the current condition and identifying any defects or safety concerns.',
    },
    {
      question: 'How long does an inspection take?',
      answer:
        'A typical home inspection takes 2-4 hours, depending on the size and age of the property. Larger homes or those with multiple systems may take longer. Four-point and wind mitigation inspections typically take 30-60 minutes. We encourage buyers to be present during the inspection so we can explain our findings and answer questions.',
    },
    {
      question: 'When will I receive my report?',
      answer:
        'We deliver all inspection reports within 24 hours of completing the inspection. Most reports are available the same day. Our reports include high-definition photos, detailed descriptions of findings, and clear recommendations. You\'ll receive the report via email in an easy-to-read digital format.',
    },
    {
      question: 'Should I be present during the inspection?',
      answer:
        'While not required, we strongly encourage you to attend, especially for home inspections. Being present allows you to see issues firsthand, ask questions, and learn about your property\'s maintenance needs. We take time to explain our findings and provide helpful tips for home maintenance.',
    },
    {
      question: 'Do you offer same-day inspections?',
      answer:
        'Yes! We understand that real estate transactions move quickly. We offer same-day inspection booking whenever possible. Call us at 954-999-2355 to check availability. We work around your schedule, including evenings and weekends, to meet your timeline.',
    },
    {
      question: 'What\'s included in a home inspection?',
      answer:
        'Our home inspection covers all major systems and components: structural elements, roof and attic, exterior and grading, HVAC, plumbing, electrical, interior spaces, insulation and ventilation, and built-in appliances. We also include a complimentary four-point inspection report at no additional charge.',
    },
    {
      question: 'Do I need a four-point inspection?',
      answer:
        'In Florida, most insurance companies require a four-point inspection for homes over 30 years old. Even for newer homes, many insurers request this inspection before issuing or renewing a policy. The four-point inspection focuses on the four systems insurers care most about: roof, HVAC, electrical, and plumbing.',
    },
    {
      question: 'What is wind mitigation and how much can I save?',
      answer:
        'Wind mitigation inspections document your home\'s wind-resistant features. These features can significantly reduce your insurance premiums - typically 10-45% annually. Common savings range from $500 to $2,000 per year. The inspection looks at roof covering, roof deck attachment, roof-to-wall connections, roof shape, secondary water resistance, and opening protection.',
    },
    {
      question: 'Do you offer sewer scope inspections?',
      answer:
        'Yes! Sewer scope inspections are one of our most valuable services. We use a specialized camera to inspect sewer lines for blockages, root intrusion, cracks, and other damage. Sewer line replacement can cost $10,000 or more, making this inspection a wise investment. We recommend it for all homes, especially those over 20 years old or with mature trees nearby.',
    },
    {
      question: 'What if the inspection finds problems?',
      answer:
        'Finding issues is actually a good thing - it means you\'re making an informed decision! You can use the inspection report to negotiate repairs with the seller, request a price reduction, or decide if the issues are deal-breakers. Minor issues are normal in any home. We help you understand which issues are serious and which are routine maintenance items.',
    },
    {
      question: 'Are you licensed and insured?',
      answer:
        'Yes! We are fully licensed, insured, and certified. Our inspectors hold multiple professional certifications including licensed home inspector, four-point specialist, wind mitigation specialist, mold assessment professional, and infrared thermography certification. We carry Errors & Omissions insurance for your protection.',
    },
    {
      question: 'How much does an inspection cost?',
      answer:
        'Home inspection costs vary based on square footage, typically $350-$500. Four-point inspections are $95, wind mitigation $85, and sewer scope $250. We offer package deals that save you money when combining services. Contact us for a custom quote based on your specific needs.',
    },
    {
      question: 'Do you speak Spanish?',
      answer:
        'Sí! Hablamos Español. We provide bilingual service in English and Spanish to better serve our South Florida community. All our inspections, reports, and consultations are available in both languages.',
    },
    {
      question: 'What areas do you serve?',
      answer:
        'We serve all of Broward County, Miami-Dade County, and Palm Beach County. This includes cities like Fort Lauderdale, Miami, Boca Raton, Hollywood, Coral Springs, Pembroke Pines, and many more throughout South Florida. Contact us to confirm service in your specific area.',
    },
    {
      question: 'What is your cancellation policy?',
      answer:
        'We understand that real estate transactions can be unpredictable. You can cancel or reschedule your inspection up to 24 hours before the scheduled time with no penalty. Cancellations with less than 24 hours notice may be subject to a cancellation fee.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl font-bold text-white lg:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-cream">
              Find answers to common questions about our inspection services
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <h3 className="font-serif text-lg font-semibold text-navy">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 flex-shrink-0 text-gold" />
                  ) : (
                    <ChevronDown className="h-5 w-5 flex-shrink-0 text-gold" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="border-t border-gray-200 px-6 pb-6 pt-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-navy">Still Have Questions?</h2>
          <p className="mt-4 text-lg text-gray-600">
            We're here to help! Contact us and we'll be happy to answer any questions you have.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="rounded-md bg-gold px-8 py-3 font-semibold text-white transition-all hover:bg-opacity-90"
            >
              Contact Us
            </Link>
            <a
              href="tel:9549992355"
              className="rounded-md border-2 border-navy px-8 py-3 font-semibold text-navy transition-all hover:bg-navy hover:text-white"
            >
              954-999-2355
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
