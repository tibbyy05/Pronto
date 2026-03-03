import ServicePageTemplate from '../../components/ServicePageTemplate';

export default function SewerScope() {
  return (
    <ServicePageTemplate
      serviceName="Sewer Scope Inspection"
      breadcrumb="Sewer Scope"
      heroSubtitle="See inside your sewer lines in real time. Detect blockages, cracks, root intrusion, and deterioration before they become emergency repairs."
      overviewHeading="What Is a Sewer Scope Inspection?"
      overviewContent={[
        "A Sewer Scope Inspection uses a specialized waterproof camera to examine the interior of your property's sewer and drain lines. This gives you a real-time, HD video view of the condition of your underground pipes — something no standard home inspection can provide.",
        "Sewer line repairs are among the most expensive and disruptive fixes a homeowner can face, often costing $5,000 to $25,000 or more. A sewer scope catches problems before you buy — or before a small issue becomes a sewage backup emergency.",
        "In South Florida, aging pipe materials like cast iron and Orangeburg are common in older homes and are prone to deterioration. Tree root intrusion is another frequent issue. Our inspection identifies the pipe material, condition, and any existing or developing problems."
      ]}
      includedItems={[
        {
          title: "HD Camera Inspection",
          description: "Professional waterproof camera inserted through the main cleanout"
        },
        {
          title: "Real-Time Video",
          description: "Live footage of the entire sewer line from your property to the street"
        },
        {
          title: "Pipe Material Identification",
          description: "Determine if you have PVC, cast iron, clay, or Orangeburg pipes"
        },
        {
          title: "Blockage Detection",
          description: "Identify grease buildup, debris, or foreign objects causing slow drains"
        },
        {
          title: "Root Intrusion Check",
          description: "Detect tree roots that have penetrated pipe joints"
        },
        {
          title: "Crack & Damage Assessment",
          description: "Identify cracks, breaks, bellies, and offset joints"
        },
        {
          title: "Condition Rating",
          description: "Overall assessment of pipe condition and remaining lifespan"
        },
        {
          title: "Video Recording",
          description: "You receive the full video recording for your records"
        }
      ]}
      benefitCards={[
        {
          title: "Avoid Catastrophic Costs",
          description: "Sewer line replacement can cost $5,000-$25,000+. A $150-300 scope inspection can reveal these problems before they become your financial responsibility."
        },
        {
          title: "Not Covered in Standard Inspections",
          description: "Regular home inspections don't examine sewer lines. This is a critical blind spot that catches many buyers off guard after closing."
        },
        {
          title: "Know Your Pipe Material",
          description: "South Florida homes built before 1980 often have cast iron or Orangeburg pipes that deteriorate over time. Knowing what's underground helps you plan ahead."
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
          question: "Why isn't this included in a regular home inspection?",
          answer: "Standard home inspections are visual and non-invasive. Sewer scoping requires specialized camera equipment and expertise. We offer it as an add-on or standalone service."
        },
        {
          question: "How long does a sewer scope take?",
          answer: "Typically 30-45 minutes. You can watch the live video feed during the inspection and ask questions in real time."
        },
        {
          question: "What if you find a problem?",
          answer: "We'll show you exactly what we found on video, explain the severity, and recommend next steps. For buyers, this information is powerful leverage in negotiations."
        },
        {
          question: "Do all homes need a sewer scope?",
          answer: "We especially recommend it for homes over 20 years old, properties with large trees near sewer lines, and any home where you've noticed slow drains or sewage odors."
        }
      ]}
      relatedServices={[
        {
          name: "Home Inspection",
          description: "Comprehensive evaluation of your property's structure and systems.",
          link: "/services/home-inspection"
        },
        {
          name: "Mold Assessment",
          description: "Professional mold detection to protect your health and property value.",
          link: "/services/mold-assessment"
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
