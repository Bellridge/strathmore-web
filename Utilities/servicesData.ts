export type ServiceOption = {
  title: string;
  description: string;
  bullets?: string[];
};

export type Service = {
  title: string;
  description: string;
  bullets?: string[];
  options: ServiceOption[] | null;
  closing?: string;
  result?: string;
};

export const services: Service[] = [
  {
    title: "Financial Structuring & Capital Readiness",
    description:
      "We help clients move from concept to conviction — validating opportunities before capital is committed. Our core focus:",
    options: [
      {
        title: "Feasibility studies",
        description:
          "Rigorous technical and economic assessments that determine whether a project should proceed.",
      },
      {
        title: "Business analysis",
        description:
          "Market evaluation, competitive positioning, and commercial modelling to quantify opportunity and risk.",
      },
      {
        title: "Technical surveys & due diligence",
        description:
          "Comprehensive site evaluations, environmental impact assessments, and regulatory compliance reviews to identify and mitigate critical project variables at the earliest stage.",
      },
    ],
    closing:
      "When viability is established, we leverage our established relationships with financial institution partners to structure and secure appropriate capital — whether through reserve-based lending, project finance, or bespoke funding arrangements.",
    result:
      "You gain clarity on project potential before committing resources, and a direct pathway to capital when the fundamentals are sound.",
  },
  {
    title: "Operational Assurance & Logistics Mastery",
    description:
      "We ensure capital raised translates directly into uninterrupted field performance — treating every operational challenge as a strategic risk to be managed. Our systematic approach includes:",
    options: null,
    bullets: [
      "Risk mitigation frameworks tailored to African operating environments",
      "End-to-end procurement and installation of critical assets",
      "Supply chain oversight guaranteeing project continuity, safety, and compliance",
    ],
  },
  {
    title: "Extended Service Capabilities",
    description:
      "We complement our core offerings with the administrative, supply, and technical services essential for safe, efficient field operations across the continent.",
    options: [
      {
        title: "Integrated Logistics & Marine Support",
        description:
          "Compliant, reliable, and timely delivery of materials, parts, and personnel across all terrains — from dense urban corridors to remote project sites.",
        bullets: [
          "Land haulage — heavy lift, last-mile delivery, and cross-border transport.",
          "Marine support & vessel charter — security vessels, crew boats, tugboats, and barge services for offshore and swamp logistics.",
        ],
      },
      {
        title: "Specialised Supply & Equipment",
        description:
          "Continuous field operations depend on reliable consumables and certified safety gear.",
        bullets: [
          "Production and specialty chemicals — delivered on schedule to keep operations running.",
          "Personal protective equipment (PPE) & safety gear — high-quality, certified, and compliant with international standards.",
        ],
      },
      {
        title: "Technical Consulting Services",
        description:
          "On-demand access to specialised expertise for short-term technical challenges:",
        bullets: [
          "Reservoir studies and subsurface analysis",
          "Well test interpretation",
          "Production optimisation strategies",
        ],
      },
    ],
  },
];
