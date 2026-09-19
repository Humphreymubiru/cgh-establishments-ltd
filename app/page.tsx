import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import AnimatedExcavator from "@/components/home/AnimatedExcavator";
import ServiceGrid from "@/components/home/ServiceGrid";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ProjectStats from "@/components/home/ProjectStats";
import MotionProcess from "@/components/home/MotionProcess";
import EquipmentPreview from "@/components/home/EquipmentPreview";
import ContactCTA from "@/components/ui/ContactCTA";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutPreview />
      <AnimatedExcavator />
      <ServiceGrid />
      <FeaturedProjects />
      <ProjectStats />
      <MotionProcess />
      <EquipmentPreview />
      <ContactCTA />
    </main>
  );
}
