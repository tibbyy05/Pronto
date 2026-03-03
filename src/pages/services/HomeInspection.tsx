import ServicePageTemplate from '../../components/ServicePageTemplate';

export default function HomeInspection() {
  return (
    <ServicePageTemplate
      serviceName="Home Inspection"
      breadcrumb="Home Inspection"
      heroSubtitle="A comprehensive evaluation of your property's major systems and components — giving you the full picture before you buy."
      overviewHeading="What Is a Home Inspection?"
      overviewContent={[
        "A home inspection is a thorough, non-invasive visual examination of a residential property's condition. Our certified inspectors evaluate everything from the roof to the foundation, identifying existing issues, potential problems, and safety concerns that could affect your investment.",
        "Whether you're a first-time homebuyer or a seasoned investor, a professional home inspection gives you the knowledge you need to make a confident purchase decision. We go beyond the surface to uncover issues that aren't visible during a typical walkthrough.",
        "In South Florida's competitive real estate market, knowing exactly what you're buying isn't optional — it's essential. A home inspection can save you tens of thousands of dollars in unexpected repairs."
      ]}
      includedItems={[
        {
          title: "Roof System",
          description: "Shingles, tiles, flashing, gutters, downspouts, and overall condition"
        },
        {
          title: "Attic & Insulation",
          description: "Ventilation, insulation levels, structural framing, signs of leaks or pests"
        },
        {
          title: "Exterior",
          description: "Siding, trim, windows, doors, porches, decks, driveways, and grading"
        },
        {
          title: "HVAC Systems",
          description: "Heating and cooling equipment, ductwork, thermostats, and filters"
        },
        {
          title: "Plumbing",
          description: "Visible pipes, fixtures, water heater, water pressure, and drainage"
        },
        {
          title: "Electrical",
          description: "Service panel, wiring, outlets, GFCI protection, and safety compliance"
        },
        {
          title: "Interior",
          description: "Walls, ceilings, floors, doors, windows, stairs, and railings"
        },
        {
          title: "Kitchen & Appliances",
          description: "Built-in appliances, counters, cabinets, and ventilation"
        },
        {
          title: "Bathrooms",
          description: "Fixtures, ventilation, caulking, and moisture issues"
        },
        {
          title: "Foundation & Structure",
          description: "Visible foundation, structural components, and signs of settlement"
        },
        {
          title: "Garage",
          description: "Door operation, fire separation, and electrical"
        },
        {
          title: "Pool/Spa (if present)",
          description: "Equipment, surfaces, barriers, and safety features"
        }
      ]}
      benefitCards={[
        {
          title: "Uncover Hidden Problems",
          description: "Properties can look perfect during a showing but hide serious issues. Our inspectors find problems that cost buyers an average of $14,000 in unexpected repairs."
        },
        {
          title: "Negotiation Power",
          description: "Your inspection report gives you leverage to negotiate repairs or a lower purchase price. Many buyers save more than the cost of the inspection itself."
        },
        {
          title: "Peace of Mind",
          description: "Know exactly what you're buying — no surprises, no regrets. Walk into your closing with complete confidence about your investment."
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
          question: "How long does a home inspection take?",
          answer: "A typical home inspection takes 2-4 hours depending on the property's size and condition. We never rush — every component gets the attention it deserves."
        },
        {
          question: "Should I attend the inspection?",
          answer: "We strongly encourage it! Walking the property with your inspector is the best way to understand the findings firsthand. We'll explain everything as we go."
        },
        {
          question: "What if the inspection finds major issues?",
          answer: "Finding issues is exactly why you get an inspection. Your report gives you options — negotiate repairs, request a price reduction, or walk away. Knowledge is power."
        },
        {
          question: "Do you inspect new construction homes?",
          answer: "Absolutely. New homes can have defects from construction. A pre-delivery inspection catches issues before you close, while the builder is still responsible for corrections."
        }
      ]}
      relatedServices={[
        {
          name: "Four-Point Inspection",
          description: "Focused insurance inspection of your property's four critical systems.",
          link: "/services/four-point-inspection"
        },
        {
          name: "Wind Mitigation",
          description: "Identify wind-resistant features that can reduce your insurance premiums.",
          link: "/services/wind-mitigation"
        },
        {
          name: "Mold Assessment",
          description: "Professional mold detection to protect your health and property value.",
          link: "/services/mold-assessment"
        }
      ]}
    />
  );
}
