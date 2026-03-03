import ServicePageTemplate from '../../components/ServicePageTemplate';

export default function MoldAssessment() {
  return (
    <ServicePageTemplate
      serviceName="Mold Assessment"
      breadcrumb="Mold Assessment"
      heroSubtitle="Professional mold detection and assessment to protect your family's health and your property's structural integrity — before a small problem becomes a major one."
      overviewHeading="What Is a Mold Assessment?"
      overviewContent={[
        "A Mold Assessment is a professional evaluation to detect the presence of mold in your property. South Florida's warm, humid climate creates ideal conditions for mold growth — making regular assessment critical for any property owner or buyer.",
        "Mold can hide behind walls, under flooring, and in HVAC systems where you'd never notice it during a normal walkthrough. Left unchecked, mold causes respiratory problems, allergic reactions, and can severely damage your property's structure and value.",
        "Our certified mold inspectors use professional-grade equipment including moisture meters, thermal imaging, and air quality sampling to identify mold presence, determine the type and extent, and recommend next steps."
      ]}
      includedItems={[
        {
          title: "Visual Inspection",
          description: "Thorough examination of all accessible areas for visible mold growth"
        },
        {
          title: "Moisture Mapping",
          description: "Professional moisture meters to identify hidden water intrusion"
        },
        {
          title: "Thermal Imaging",
          description: "Infrared scanning to detect moisture behind walls and ceilings"
        },
        {
          title: "Air Quality Sampling",
          description: "Collection of air samples for laboratory analysis"
        },
        {
          title: "Surface Sampling",
          description: "Swab or tape samples of suspicious areas when needed"
        },
        {
          title: "HVAC Assessment",
          description: "Inspection of ductwork and air handling systems for mold"
        },
        {
          title: "Humidity Evaluation",
          description: "Measurement of indoor humidity levels throughout the property"
        },
        {
          title: "Lab Results",
          description: "Professional laboratory analysis with certified results"
        },
        {
          title: "Detailed Report",
          description: "Findings, identified mold types, severity levels, and remediation recommendations"
        }
      ]}
      benefitCards={[
        {
          title: "Protect Your Health",
          description: "Mold exposure causes respiratory issues, allergies, headaches, and more. Children, elderly, and immunocompromised individuals are especially vulnerable."
        },
        {
          title: "Prevent Property Damage",
          description: "Mold breaks down organic materials over time. Unchecked mold can compromise drywall, wood framing, and insulation — leading to costly structural repairs."
        },
        {
          title: "South Florida Risk",
          description: "Our warm, humid climate makes mold growth almost inevitable without proper ventilation and moisture control. If you see it — or smell it — get it assessed immediately."
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
          question: "What are signs I might have a mold problem?",
          answer: "Musty odors, visible discoloration on walls or ceilings, recent water damage, persistent allergy symptoms, or condensation on windows are all warning signs."
        },
        {
          question: "Is mold dangerous?",
          answer: "Some mold types are more harmful than others, but all mold should be taken seriously. Our assessment identifies the specific type and severity so you know exactly what you're dealing with."
        },
        {
          question: "Do you do mold removal/remediation?",
          answer: "We provide assessment and testing only. This ensures our findings are unbiased and independent. If remediation is needed, we'll recommend qualified professionals."
        },
        {
          question: "How long until I get lab results?",
          answer: "Air and surface sample results typically come back from the lab within 2-3 business days. We'll walk you through the findings as soon as they're available."
        }
      ]}
      relatedServices={[
        {
          name: "Home Inspection",
          description: "Comprehensive evaluation of your property's structure and systems.",
          link: "/services/home-inspection"
        },
        {
          name: "Infrared Inspection",
          description: "Thermal imaging to reveal hidden moisture and energy loss.",
          link: "/services/infrared-inspection"
        },
        {
          name: "Sewer Scope",
          description: "Camera inspection of your sewer lines to detect problems underground.",
          link: "/services/sewer-scope"
        }
      ]}
    />
  );
}
