import {
  Route,
  Droplets,
  CircleDot,
  Mountain,
  Building2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: LucideIcon;
  details: string[];
  relatedProjectSlugs: string[];
}

export const services: Service[] = [
  {
    id: "road-construction",
    title: "Road Construction & Maintenance",
    shortTitle: "Roads",
    description:
      "Construction and mechanised maintenance of national and district road networks, including grading, gravelling and surface preparation works.",
    icon: Route,
    details: [
      "Mechanised road maintenance",
      "Full-length grading operations",
      "Spot and full gravelling",
      "Road surface preparation",
      "National road corridor works",
    ],
    relatedProjectSlugs: [
      "myanzi-kassanda-bukuya-kiboga",
      "mpara-kazinga-bwizi-kahunge-bisozi",
      "kyegegwa-hapuuya-kibaale",
    ],
  },
  {
    id: "drainage-works",
    title: "Drainage Works",
    shortTitle: "Drainage",
    description:
      "Drainage improvement and water management infrastructure to protect road surfaces and surrounding areas from water damage.",
    icon: Droplets,
    details: [
      "Side drain construction",
      "Stone pitching of drainage channels",
      "Mitre drains and turnouts",
      "Drainage improvement works",
      "Water management infrastructure",
    ],
    relatedProjectSlugs: [
      "myanzi-kassanda-bukuya-kiboga",
      "mpara-kazinga-bwizi-kahunge-bisozi",
    ],
  },
  {
    id: "culvert-installation",
    title: "Culvert Installation",
    shortTitle: "Culverts",
    description:
      "Installation and replacement of culverts to maintain water flow across road corridors and prevent structural damage to road infrastructure.",
    icon: CircleDot,
    details: [
      "Culvert installation",
      "Culvert replacement",
      "Cross-drainage structures",
      "Headwall construction",
      "Pipe culvert works",
    ],
    relatedProjectSlugs: [
      "mpara-kazinga-bwizi-kahunge-bisozi",
      "kyegegwa-hapuuya-kibaale",
    ],
  },
  {
    id: "earthworks",
    title: "Earthworks & Site Preparation",
    shortTitle: "Earthworks",
    description:
      "Site clearance, earth moving and ground preparation for road construction and civil infrastructure projects.",
    icon: Mountain,
    details: [
      "Site clearance and bush clearing",
      "Earth moving operations",
      "Ground levelling and formation",
      "Cut and fill operations",
      "Site preparation works",
    ],
    relatedProjectSlugs: [
      "mpara-kazinga-bwizi-kahunge-bisozi",
      "kyegegwa-hapuuya-kibaale",
    ],
  },
  {
    id: "bridge-civil",
    title: "Bridge & Civil Infrastructure",
    shortTitle: "Civil Works",
    description:
      "Civil infrastructure works supporting road networks and connectivity, including structural and ancillary construction.",
    icon: Building2,
    details: [
      "Civil infrastructure works",
      "Structural construction",
      "Road-supporting infrastructure",
      "Ancillary civil works",
    ],
    relatedProjectSlugs: [],
  },
];
