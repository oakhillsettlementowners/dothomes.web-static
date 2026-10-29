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
    porrasCase: {
      citation: "Porras v. Vial Fotheringham LLP, No. 3:13-cv-00699-BR (D. Or. May 2015)",
      court: "U.S. District Court, District of Oregon",
      parties: "Oak Hill homeowner vs. VF Law (Vial Fotheringham)",
      background:
        "VF Law sued the homeowner for the HOA in Washington County Circuit Court in December 2010; default judgment in May 2011, with attorney fees cut from $1,281.48 to $750",
      rulings: [
        "HOA assessments and the fees and costs VF Law adds to them are 'debts' under the FDCPA",
        "No evidence in the record that owners were given notice of the 2009 Collection Resolution",
      ],
      notRuled: [
        "Did not rule that Oak Hill's CC&Rs lack a fining mechanism",
        "Did not find that VF Law violated the FDCPA",
        "Did not address fines for rule or architectural violations",
      ],
      aftermath:
        "Board adopted the 2012 Collection Resolution and Resolution #2012-001 under Bylaws §4.15(f); fines must be based on a resolution delivered to each lot (ORS 94.630(1)(n))",
      significance:
        "VF Law still represents the HOA, and federal debt-collection law applies to what it collects",
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
        statute: "ORS 94.640(6); Bylaws §§3.4, 3.6, 4.6",
        petitionThreshold: "30% of owners (59 lots)",
        quorumRequired: "20% of votes (39 lots)",
        removalVote: "Majority of all votes (98 of 194)",
        effect: "Removed director serves until owners elect a successor",
      },
      arcTimeline: {
        statute: "CC&R §6.5",
        writtenDecision: "20 working days",
        autoApproval: "60 days if no decision",
        routineMaintenance:
          "Like-for-like repairs and repainting in the current or a pre-approved color do NOT require ARC approval (CC&R §4.2; 2014 Architectural Standard, items 9-10); other color changes do (§4.3(e))",
      },
      appealRights: {
        statute: "ORS 94.630(1)(n), Bylaws §4.15, CC&R §6.8",
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
        "The CC&Rs, Bylaws, and rules properly adopted under them",
        "Must follow procedural timelines",
        "Must provide appeal rights",
      ],
      cannotEnforce: [
        "Board preferences or guidelines as CC&Rs",
        "Fines without written notice and a hearing, or under a schedule not delivered to each lot (ORS 94.630(1)(n))",
        "Requirements not in governing documents",
        "Hypothetical future concerns",
      ],
    },
  },

  boardLimitations: [
    "Cannot fine without written notice and a chance to be heard, or under a fine schedule not delivered to each lot (ORS 94.630(1)(n); CC&R §4.25)",
    "Cannot fine without a hearing (Bylaws §4.15) or refuse a Board appeal of an ARC decision (CC&R §6.8)",
    "Cannot require ARC approval for like-for-like repairs, or repainting in the current or a pre-approved color (CC&R §4.2; 2014 Architectural Standard, items 9-10); other color changes do need approval (§4.3(e))",
    "Cannot treat advisory guidelines as mandatory",
    "Cannot use its discretion arbitrarily or in bad faith (Santoro v. Eagle Crest, 2022); treating similar projects differently can be evidence of that",
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

