export interface TechnicalSpecs {
  terrain: string;
  soilType: string;
  designStandard: string;
  drainageApproach: string;
  materialSpecs: string;
  cbrSubgrade: string;
  cbrGravel: string;
  camberCrossfall: string;
  compaction: string;
  carriageWidth: string;
  shoulderWidth: string;
  gravelThickness: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  slug: string;
  location: string;
  roadLength: string;
  projectType: string;
  contractValue: string;
  contractValueShort: string;
  commencement: string;
  completion: string;
  scope: string;
  scopeActivities: string[];
  monitoringNote?: string;
  websitePositioning: string;
  heroImage: string;
  description: string;
  technicalSpecs: TechnicalSpecs;
}

export const projects: Project[] = [
  {
    id: "project-01",
    number: "01",
    title: "Myanzi–Kassanda–Bukuya–Kiboga Road",
    slug: "myanzi-kassanda-bukuya-kiboga",
    location: "Kassanda – Kiboga Districts, Central Uganda",
    roadLength: "61.66 km",
    projectType: "Mechanised maintenance of unpaved national road",
    contractValue: "UGX 2,171,567,667",
    contractValueShort: "UGX 2.17 BN",
    commencement: "10 September 2024",
    completion: "10 June 2025",
    scope: "Full-length grading, spot gravelling, drainage improvement",
    scopeActivities: [
      "Site mobilisation and establishment",
      "Full-length road grading",
      "Spot gravelling of degraded sections",
      "Drainage improvement works",
      "Road surface finishing and handover",
    ],
    websitePositioning: "Maintaining a 61.66 km national road corridor",
    heroImage: "/images/projects/myanzi-road.jpg",
    description:
      "Mechanised maintenance of the 61.66 km Myanzi–Kassanda–Bukuya–Kiboga national road corridor, involving full-length grading, spot gravelling and drainage improvement to restore road connectivity in central Uganda.",
    technicalSpecs: {
      terrain: "Gently undulating to rolling terrain, central Ugandan plateau",
      soilType: "Laterite / ferralitic soils over weathered basement rock; red-brown murram subgrade",
      designStandard: "UNRA Maintenance Standards for unpaved national roads; MoWT Road Design Manual",
      drainageApproach: "Side drain reshaping and desilting, mitre drains at 50–100 m intervals on gradients, culvert clearing and headwall repair",
      materialSpecs: "Natural gravel (murram) sourced from approved borrow pits; maximum particle size 50 mm, fines content 15–30%",
      cbrSubgrade: "CBR ≥ 15% (soaked) for existing subgrade",
      cbrGravel: "CBR ≥ 30% (soaked) for gravel wearing course",
      camberCrossfall: "Camber 5–6% (crossfall each side) for unpaved surface to ensure water shedding",
      compaction: "95% MDD (Modified AASHTO) for gravel wearing course; 93% MDD for subgrade repairs",
      carriageWidth: "6.0–6.5 m carriageway",
      shoulderWidth: "1.0–1.5 m earth shoulders each side",
      gravelThickness: "150 mm compacted gravel wearing course on degraded sections",
    },
  },
  {
    id: "project-02",
    number: "02",
    title: "Mpara–Kazinga–Bwizi & Kahunge–Bisozi–Bwizi–Kihura Roads",
    slug: "mpara-kazinga-bwizi-kahunge-bisozi",
    location: "Western Uganda",
    roadLength: "106 km (combined)",
    projectType: "Mechanised maintenance of unpaved national roads",
    contractValue: "UGX 2,299,949,714",
    contractValueShort: "UGX 2.30 BN",
    commencement: "27 March 2019",
    completion: "26 November 2019",
    scope:
      "Site clearance, grading, gravelling, culvert and water-management works",
    scopeActivities: [
      "Site clearance and preparation",
      "Road grading and formation",
      "Gravelling and surface preparation",
      "Culvert and drainage structure works",
      "Stone pitching of side drains",
      "Drainage improvement works",
    ],
    monitoringNote:
      "Government report recorded 99% cumulative physical progress at the reporting point",
    websitePositioning:
      "Maintaining a combined 106 km road network across two national road corridors",
    heroImage: "/images/projects/culvert-work.jpg",
    description:
      "Mechanised maintenance of two national road corridors — Mpara–Kazinga–Bwizi (38 km) and Kahunge–Bisozi–Bwizi–Kihura (68 km) — combining to 106 km of road works including grading, gravelling, culvert and drainage improvement works in western Uganda. Government monitoring recorded 99% cumulative physical progress.",
    technicalSpecs: {
      terrain: "Hilly to mountainous terrain, western Ugandan escarpment zone with steep gradients",
      soilType: "Laterite and clay-rich residual soils; some sections with expansive black cotton soil requiring treatment",
      designStandard: "UNRA Maintenance Standards; MoWT Road Design Manual; culvert design to UNRA Drainage Manual",
      drainageApproach: "Stone-pitched side drains for erosion resistance on steep gradients, new pipe culvert works (600–900 mm Ø), headwall and wingwall construction, mitre drains",
      materialSpecs: "Gravel from approved borrow pits; stone pitching from local quarry sources; precast concrete pipe culverts to UNBS standards",
      cbrSubgrade: "CBR ≥ 15% (soaked) for subgrade; problem soil sections treated with selected fill",
      cbrGravel: "CBR ≥ 30% (soaked) for wearing course gravel",
      camberCrossfall: "Camber 5–6% on straight sections; superelevation up to 7% on tight curves in hilly terrain",
      compaction: "95% MDD (Modified AASHTO) for gravel layers; 90% MDD for fill in culvert backfill zones",
      carriageWidth: "6.0 m carriageway (reduced to 5.5 m in constrained hilly sections)",
      shoulderWidth: "1.0 m earth shoulders",
      gravelThickness: "150–200 mm compacted gravel wearing course",
    },
  },
  {
    id: "project-03",
    number: "03",
    title: "Kyegegwa–Hapuuya–Kibaale Road",
    slug: "kyegegwa-hapuuya-kibaale",
    location: "Kyegegwa – Kibaale Districts, Western Uganda",
    roadLength: "37 km",
    projectType: "Mechanised maintenance of unpaved national road",
    contractValue: "UGX 981,881,540",
    contractValueShort: "UGX 981.9 M",
    commencement: "4 June 2019",
    completion: "20 January 2020",
    scope:
      "Site clearance, grading, gravelling, culvert and drainage improvement works",
    scopeActivities: [
      "Site clearance and bush clearing",
      "Road grading and levelling",
      "Gravelling of road surface",
      "Culvert and drainage structure works",
      "Drainage improvement and water management",
    ],
    monitoringNote:
      "Government report recorded 97% cumulative physical progress at the reporting point",
    websitePositioning: "Maintaining a 37 km national road corridor",
    heroImage: "/images/projects/earthworks.jpg",
    description:
      "Mechanised maintenance of the 37 km Kyegegwa–Hapuuya–Kibaale national road, involving site clearance, grading, gravelling, culvert and drainage improvement works in western Uganda. Government monitoring recorded 97% cumulative physical progress.",
    technicalSpecs: {
      terrain: "Undulating terrain transitioning from Kyegegwa plains to Kibaale hills",
      soilType: "Red laterite (murram) soils, generally well-draining with isolated sections of poor subgrade",
      designStandard: "UNRA Maintenance Standards for unpaved national roads; MoWT specifications",
      drainageApproach: "Reshaping of existing side drains, culvert replacement and new installations where required, drainage outfall protection",
      materialSpecs: "Natural gravel (murram) from approved borrow pits; concrete pipe culverts (600 mm Ø standard, 900 mm at major crossings)",
      cbrSubgrade: "CBR ≥ 15% (soaked) for subgrade",
      cbrGravel: "CBR ≥ 30% (soaked) for gravel wearing course",
      camberCrossfall: "Camber 5–6% for unpaved carriageway",
      compaction: "95% MDD (Modified AASHTO) for wearing course",
      carriageWidth: "6.0–6.5 m carriageway",
      shoulderWidth: "1.0–1.5 m earth shoulders",
      gravelThickness: "150 mm compacted gravel wearing course",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}
