/**
 * Shared HOA Context for Oak Hill Settlement
 * 
 * This context is shared between all apps and informs AI assistants,
 * user interfaces, and documentation.
 * 
 * Source: /docs/ai-context.md
 */

export const hoaContext = {
  location: {
    city: "Forest Grove",
    state: "Oregon",
    county: "Washington County",
  },

  governance: {
    hierarchy: [
      "CC&Rs Declaration (highest authority)",
      "Bylaws",
      "Board-created Declarations/Resolutions (only if authorized by CC&Rs and ORS 94)",
      "Architectural Standards (guidelines, not necessarily binding)",
    ],
    legalRepresentation: "VF Law",
  },

  criticalHistory: {
    federalCase2011: {
      year: 2011,
      court: "Federal District Court (D. Oregon)",
      parties: "VF Law (for HOA) vs. Homeowner",
      rulings: [
        "Oak Hill CC&Rs contained NO VALID FINING MECHANISM",
        "HOA had NO AUTHORITY to assess fines, interest, or penalty charges",
        "VF Law's collection actions violated Fair Debt Collection Practices Act (FDCPA)",
      ],
      aftermath: "2012 Fine & Enforcement Declaration posted by Board WITHOUT homeowner vote",
      significance:
        "VF Law continues representing HOA; CC&Rs never amended by membership vote to authorize fines",
    },
  },

  documentedPatterns: {
    proceduralDefects: [
      "Missing or incorrect CC&R citations",
      "Failure to mention mandatory appeal rights (Bylaws §4.15(a)(iii))",
      "ARC decisions outside required 20-day timeline (CC&R §6.5)",
      "Ignoring 60-day auto-approval rule",
      "Inaccurate property condition descriptions",
      "Treating guidelines as binding CC&Rs",
      "Expansion of ARC authority beyond CC&R scope",
    ],
    paint2025Example: [
      "No CC&R citations provided",
      "False claim ARC approval needed for routine maintenance",
      "Required 'licensed and insured painters' (not in governing documents)",
      "No appeal rights mentioned",
    ],
  },

  homeownerRights: {
    ors94Protections: {
      boardRecall: {
        statute: "ORS 94.640(7)",
        petitionThreshold: "10% of owners",
        quorumRequired: false,
        effect: "Removed director's seat becomes immediately vacant",
      },
      arcTimeline: {
        statute: "CC&R §6.5",
        writtenDecision: "20 working days",
        autoApproval: "60 days if no decision",
        routineMaintenance: "Does NOT require ARC approval",
      },
      appealRights: {
        statute: "ORS 94.630, Bylaws §4.15(a)(iii)",
        requirement: "Must be mentioned in all enforcement notices",
        consequence: "Missing appeal rights = procedurally defective notice",
      },
      meetings: {
        statute: "ORS 94.640",
        rights: ["Attend board meetings", "Properly noticed meetings", "Proper voting for special assessments"],
      },
    },
    enforcement: {
      canEnforce: [
        "Specific, objective CC&R requirements only",
        "Must follow procedural timelines",
        "Must provide appeal rights",
      ],
      cannotEnforce: [
        "Board preferences or guidelines as CC&Rs",
        "Fines not authorized by CC&Rs",
        "Requirements not in governing documents",
        "Hypothetical future concerns",
      ],
    },
  },

  boardLimitations: [
    "Cannot invent new fines or penalties",
    "Cannot withhold appeal rights",
    "Cannot require ARC approval for routine maintenance",
    "Cannot treat advisory guidelines as mandatory",
    "Cannot apply rules inconsistently",
    "Cannot enforce based on personal opinions",
  ],

  resources: {
    mainHub: "https://owners.oakhillsettlement.homes",
    documents: "https://owners.oakhillsettlement.homes/documents",
    rightsGuide: "https://owners.oakhillsettlement.homes/rights",
    aiAssistant: "https://owners.oakhillsettlement.homes/chat",
    organizing: "https://recall.oakhillsettlement.homes",
    nextdoor: "https://nextdoor.com/neighborhood/oakhillfg--forest-grove--or/",
  },
  
  community: {
    name: "Oak Hill Settlement",
    location: "Forest Grove, Oregon",
    lots: 194,
    nextdoorMembers: 1344,
    description: "A peaceful, family-friendly neighborhood known for its lush greenery and quiet streets",
  },
};

export type HOAContext = typeof hoaContext;

