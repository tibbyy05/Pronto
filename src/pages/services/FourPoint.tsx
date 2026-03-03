import ServicePageTemplate from '../../components/ServicePageTemplate';

export default function FourPoint() {
  return (
    <ServicePageTemplate
      serviceName="Four-Point Inspection"
      breadcrumb="Four-Point Inspection"
      heroSubtitle="The focused insurance inspection that evaluates your property's four critical systems — required by most Florida insurers for homes 20+ years old."
      overviewHeading="What Is a Four-Point Inspection?"
      overviewContent={[
        "A Four-Point Inspection is a targeted evaluation of the four major systems that insurance companies care about most: roofing, electrical, plumbing, and HVAC. Florida insurers require this inspection to assess risk before issuing or renewing a homeowner's policy.",
        "If your home is 20 years old or older, chances are your insurance company will require a Four-Point Inspection. Even newer homes may need one when switching providers. The good news? This inspection is faster and more affordable than a full home inspection.",
        "Our certified inspectors document the age, condition, and remaining lifespan of each system, giving your insurer the information they need to provide coverage — and giving you insight into your home's critical infrastructure."
      ]}
      includedItems={[
        {
          title: "Roof",
          description: "Age, material, condition, remaining useful life, evidence of leaks or damage"
        },
        {
          title: "Electrical System",
          description: "Panel type and age, wiring material, amperage, safety concerns"
        },
        {
          title: "Plumbing System",
          description: "Pipe material, water heater age and condition, visible leaks, supply line type"
        },
        {
          title: "HVAC System",
          description: "Unit age, type, condition, functionality, last service date"
        }
      ]}
      benefitCards={[
        {
          title: "Insurance Requirement",
          description: "Most Florida insurance companies require a Four-Point Inspection for homes 20+ years old. Without it, you may not be able to get or renew your homeowner's policy."
        },
        {
          title: "Save on Premiums",
          description: "A clean Four-Point report can help you qualify for better insurance rates. Well-maintained systems signal lower risk to insurers."
        },
        {
          title: "Know Your Systems",
          description: "Beyond insurance, a Four-Point Inspection gives you a clear picture of your home's critical systems and how much life they have left."
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
          question: "Is a Four-Point Inspection the same as a home inspection?",
          answer: "No. A Four-Point Inspection only covers roofing, electrical, plumbing, and HVAC. A full home inspection is much more comprehensive. We often recommend getting both."
        },
        {
          question: "When do I need a Four-Point Inspection?",
          answer: "When buying, selling, or renewing insurance on a home that's 20+ years old — or whenever your insurance company requests one."
        },
        {
          question: "How long does it take?",
          answer: "A Four-Point Inspection typically takes 30-60 minutes. It's one of our quickest inspections."
        },
        {
          question: "What happens if a system fails?",
          answer: "We document the condition honestly. If a system needs attention, your insurer may require repairs or replacement before issuing a policy. We'll explain your options."
        }
      ]}
      relatedServices={[
        {
          name: "Home Inspection",
          description: "Comprehensive evaluation of your property's structure and systems.",
          link: "/services/home-inspection"
        },
        {
          name: "Wind Mitigation",
          description: "Identify wind-resistant features that can reduce your insurance premiums.",
          link: "/services/wind-mitigation"
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
