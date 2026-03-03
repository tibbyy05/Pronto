import ServicePageTemplate from '../../components/ServicePageTemplate';

export default function Infrared() {
  return (
    <ServicePageTemplate
      serviceName="Infrared Inspection"
      breadcrumb="Infrared Inspection"
      heroSubtitle="Thermal imaging technology that reveals what the naked eye can't see — hidden moisture, insulation deficiencies, electrical hotspots, and energy loss."
      overviewHeading="What Is an Infrared Inspection?"
      overviewContent={[
        "An Infrared Inspection uses thermal imaging cameras to detect temperature variations across surfaces in your property. These temperature differences reveal hidden problems that are completely invisible during a standard visual inspection.",
        "Moisture trapped behind walls, missing or damaged insulation, overheating electrical components, and air leaks all create thermal signatures that our infrared cameras can detect. This non-invasive technology allows us to identify problems without opening walls or causing any damage.",
        "In South Florida's climate, moisture intrusion is especially common and can lead to mold growth, wood rot, and structural damage if not caught early. Infrared inspection is the most effective way to find these hidden issues before they become visible — and expensive."
      ]}
      includedItems={[
        {
          title: "Thermal Scanning",
          description: "Complete infrared scan of interior walls, ceilings, and floors"
        },
        {
          title: "Moisture Detection",
          description: "Identify hidden water intrusion and leaks behind surfaces"
        },
        {
          title: "Insulation Assessment",
          description: "Locate missing, damaged, or insufficient insulation"
        },
        {
          title: "Electrical Scanning",
          description: "Detect overheating circuits, loose connections, and potential fire hazards"
        },
        {
          title: "HVAC Efficiency",
          description: "Identify ductwork leaks and inefficient air distribution"
        },
        {
          title: "Energy Loss Mapping",
          description: "Find air infiltration points around windows, doors, and penetrations"
        },
        {
          title: "Roof Scan",
          description: "Detect trapped moisture in flat or low-slope roofing systems"
        },
        {
          title: "Thermal Images",
          description: "Full set of annotated thermal images included in your report"
        }
      ]}
      benefitCards={[
        {
          title: "See the Invisible",
          description: "Up to 90% of moisture problems are hidden behind finished surfaces. Infrared detects them without any demolition or invasive testing."
        },
        {
          title: "Prevent Mold Before It Starts",
          description: "Hidden moisture is the #1 cause of mold in South Florida homes. Catching it early with infrared can prevent thousands in mold remediation costs."
        },
        {
          title: "Lower Energy Bills",
          description: "Insulation gaps and air leaks waste energy and money. An infrared scan shows you exactly where your home is losing efficiency."
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
          question: "How does infrared/thermal imaging work?",
          answer: "Everything emits infrared radiation based on its temperature. Our cameras translate these temperature patterns into visual images, revealing anomalies that indicate moisture, insulation problems, or electrical issues."
        },
        {
          question: "Can infrared see through walls?",
          answer: "Not exactly — it detects surface temperature differences caused by conditions behind the surface. For example, a wet area behind drywall will appear cooler than the surrounding dry area."
        },
        {
          question: "Should I get this with my home inspection?",
          answer: "We highly recommend it, especially in South Florida where moisture intrusion is common. It adds relatively little cost but can uncover issues worth thousands in repairs."
        },
        {
          question: "Is infrared inspection accurate?",
          answer: "Thermal imaging is extremely reliable for detecting temperature anomalies. Our certified thermographers know how to interpret the results accurately and distinguish real issues from false readings."
        }
      ]}
      relatedServices={[
        {
          name: "Mold Assessment",
          description: "Professional mold detection to protect your health and property value.",
          link: "/services/mold-assessment"
        },
        {
          name: "Home Inspection",
          description: "Comprehensive evaluation of your property's structure and systems.",
          link: "/services/home-inspection"
        },
        {
          name: "Four-Point Inspection",
          description: "Insurance inspection of your property's four critical systems.",
          link: "/services/four-point-inspection"
        }
      ]}
    />
  );
}
