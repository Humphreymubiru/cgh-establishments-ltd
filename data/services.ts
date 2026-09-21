import {
  Route,
  Droplets,
  Mountain,
  Building2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { publishedStatus, type ContentStatus } from "@/lib/content";

export interface Service {
  id: string;
  status: ContentStatus;
  title: string;
  shortTitle: string;
  description: string;
  icon: LucideIcon;
  details: string[];
  relatedProjectSlugs: string[];
}

const serviceRecords: Service[] = [
  {
    id: "road-construction",
    status: publishedStatus,
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
    id: "drainage-culvert",
    status: publishedStatus,
    title: "Drainage & Culvert Works",
    shortTitle: "Drainage & Culverts",
    description:
      "Construction and improvement of drainage systems, culverts and associated water-management infrastructure to control runoff, maintain water flow and protect road corridors from water-related damage.",
    icon: Droplets,
    details: [
      "Side drain construction",
      "Stone pitching of drainage channels",
      "Mitre drains and turnouts",
      "Culvert and cross-drainage structure works",
      "Headwalls and water-flow structures",
    ],
    relatedProjectSlugs: [
      "myanzi-kassanda-bukuya-kiboga",
      "mpara-kazinga-bwizi-kahunge-bisozi",
      "kyegegwa-hapuuya-kibaale",
    ],
  },
  {
    id: "earthworks",
    status: publishedStatus,
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
    status: publishedStatus,
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

export const services = serviceRecords.filter((service) => service.status === "published");
