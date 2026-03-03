import ServicePageTemplate from '../../components/ServicePageTemplate';

export default function WindMitigation() {
  return (
    <ServicePageTemplate
      serviceName="Wind Mitigation Inspection"
      breadcrumb="Wind Mitigation"
      heroSubtitle="Discover wind-resistant features in your property that can dramatically reduce your insurance premiums — savings that pay for this inspection many times over."
      overviewHeading="What Is a Wind Mitigation Inspection?"
      overviewContent={[
        "A Wind Mitigation Inspection identifies the structural features of your home that protect it against hurricane and high-wind damage. In Florida, insurance companies are required by law to offer premium discounts for homes with verified wind-resistant features.",
        "This means the right wind mitigation report can save you hundreds — even thousands — of dollars per year on your homeowner's insurance. Most homeowners find that the inspection pays for itself within the first policy period.",
        "Our certified inspectors evaluate your roof, walls, openings, and attachments to document every feature that qualifies for insurance credits. We know exactly what Florida insurers are looking for."
      ]}
      includedItems={[
        {
          title: "Roof Covering",
          description: "Type, material, age, and compliance with Florida Building Code"
        },
        {
          title: "Roof Deck Attachment",
          description: "How the roof sheathing is fastened to the trusses or rafters"
        },
        {
          title: "Roof-to-Wall Connection",
          description: "Type of attachment (clips, single wraps, double wraps)"
        },
        {
          title: "Roof Geometry",
          description: "Hip roof vs. gable vs. flat — hip roofs get the best discounts"
        },
        {
          title: "Secondary Water Resistance",
          description: "Sealed roof deck that prevents water intrusion if shingles blow off"
        },
        {
          title: "Opening Protection",
          description: "Impact-rated windows, shutters, and doors that resist wind-borne debris"
        },
        {
          title: "Wall Construction",
          description: "Reinforced concrete block, poured concrete, or frame construction type"
        }
      ]}
      benefitCards={[
        {
          title: "Major Insurance Savings",
          description: "Florida law requires insurers to give discounts for wind-resistant features. Homeowners commonly save $500-$2,500+ per year with a qualifying report."
        },
        {
          title: "Pays for Itself Fast",
          description: "The cost of a Wind Mitigation Inspection is typically recovered within the first few months of your reduced insurance premium."
        },
        {
          title: "Hurricane Preparedness",
          description: "Beyond savings, understanding your home's wind resistance helps you know how protected you are — and what upgrades would make the biggest difference."
        }
      ]}
      processSteps={[
        {
          number: 1,
          title: "Book Your Inspection",
          description: "Schedule online or call us. Same-day appointments available throughout South Florida."
        },
        {
          number: 2,
          title: "On-Site Inspection",
          description: "Our certified inspector arrives on time and conducts a thorough evaluation using professional-grade equipment."
        },
        {
          number: 3,
          title: "Detailed Documentation",
          description: "Every finding is documented with HD photos and video so you can see exactly what we see."
        },
        {
          number: 4,
          title: "Report Delivery",
          description: "Receive your comprehensive, easy-to-read report within 24 hours — often the same day."
        },
        {
          number: 5,
          title: "Follow-Up Support",
          description: "Have questions about your report? We're available to walk you through every finding."
        }
      ]}
      pricingPlaceholder="$XXX"
      faqs={[
        {
          question: "How much can I actually save on insurance?",
          answer: "Savings vary, but most South Florida homeowners save between $500 and $2,500 per year. Homes with impact windows and hip roofs see the largest discounts."
        },
        {
          question: "Is this different from a Four-Point Inspection?",
          answer: "Yes. A Four-Point focuses on roof, HVAC, electrical, and plumbing for general insurability. Wind Mitigation specifically evaluates wind-resistance features for premium discounts. We recommend getting both."
        },
        {
          question: "How often do I need a new Wind Mitigation report?",
          answer: "Wind Mitigation reports are valid for 5 years in Florida. You'll need a new one when you renew or switch insurance after that period."
        },
        {
          question: "What if my home doesn't have wind-resistant features?",
          answer: "We'll document what you have honestly. Even basic features like a newer roof can qualify for some discounts. We can also advise on upgrades that would provide the best ROI."
        }
      ]}
      relatedServices={[
        {
          name: "Four-Point Inspection",
          description: "Insurance inspection of your property's four critical systems.",
          link: "/services/four-point-inspection"
        },
        {
          name: "Home Inspection",
          description: "Comprehensive evaluation of your property's structure and systems.",
          link: "/services/home-inspection"
        },
        {
          name: "Infrared Inspection",
          description: "Thermal imaging to reveal hidden moisture and energy loss.",
          link: "/services/infrared-inspection"
        }
      ]}
    />
  );
}
