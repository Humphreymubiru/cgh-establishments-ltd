export interface EquipmentCategory {
  id: string;
  name: string;
  description: string;
  note: string;
  image: string;
  specs: string[];
}

export const equipmentCategories: EquipmentCategory[] = [
  {
    id: "excavators",
    name: "Excavators",
    description:
      "Heavy-duty hydraulic excavators for earthmoving, site clearance, drainage channel construction, culvert trench excavation and general excavation works on road projects.",
    note: "Equipment details pending CGH confirmation",
    image: "/images/equipment/excavator.jpg",
    specs: [
      "Hydraulic track-mounted excavators",
      "Site clearance and bush clearing",
      "Drainage channel excavation",
      "Culvert trench preparation",
      "Loading of spoil material",
    ],
  },
  {
    id: "graders",
    name: "Motor Graders",
    description:
      "Motor graders for road surface formation, precision levelling, grading operations, camber establishment and regular road maintenance activities across project corridors.",
    note: "Equipment details pending CGH confirmation",
    image: "/images/equipment/grader.jpg",
    specs: [
      "Full-length road grading",
      "Surface formation and levelling",
      "Camber and crossfall establishment",
      "Side drain shaping",
      "Gravel spreading and finishing",
    ],
  },
  {
    id: "rollers",
    name: "Compaction Rollers",
    description:
      "Vibratory and static rollers for compaction of road subgrade, gravel wearing course layers and earthworks to achieve specified density requirements.",
    note: "Equipment details pending CGH confirmation",
    image: "/images/equipment/roller.jpg",
    specs: [
      "Vibratory compaction of gravel layers",
      "95% MDD achievement",
      "Subgrade compaction",
      "Multi-pass rolling operations",
      "Surface finishing",
    ],
  },
  {
    id: "tipper-trucks",
    name: "Tipper Trucks",
    description:
      "Tipper trucks for transportation of gravel, murram, earth, and aggregate materials from approved borrow pits to project sites across road corridors.",
    note: "Equipment details pending CGH confirmation",
    image: "/images/equipment/tipper.jpg",
    specs: [
      "Gravel and murram haulage",
      "Borrow pit to site transport",
      "Spoil and waste removal",
      "Material delivery scheduling",
      "Multi-axle heavy capacity",
    ],
  },
];
