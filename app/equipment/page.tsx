import { Metadata } from 'next';
import ScrollReveal from '@/components/ui/ScrollReveal';
import ContactCTA from '@/components/ui/ContactCTA';
import { equipmentCategories } from '@/data/equipment';
import { EquipmentShowcase } from '@/components/equipment/EquipmentShowcase';
import { ChevronRight, Info } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Equipment & Fleet | CGH Establishments Ltd',
  description: 'Our mechanized road maintenance and civil infrastructure equipment capabilities.',
};

export default function EquipmentPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-cgh-charcoal text-cgh-light pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <ScrollReveal>
              <div className="flex items-center text-sm font-medium text-cgh-muted mb-6">
                <Link href="/" className="hover:text-cgh-yellow transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                <span className="text-cgh-yellow">Equipment</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                Equipment & <span className="text-cgh-red">Fleet</span>
              </h1>
              <p className="text-xl md:text-2xl text-cgh-muted font-light max-w-2xl">
                Mechanized capabilities supporting our road maintenance and civil infrastructure projects.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-20 bg-cgh-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <EquipmentShowcase categories={equipmentCategories} />

          <ScrollReveal delay={0.4}>
            <div className="mt-16 bg-white p-8 rounded-2xl border border-gray-200 flex items-start shadow-sm">
              <Info className="w-8 h-8 text-cgh-red mr-5 shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-bold text-cgh-charcoal mb-2">Important Notice</h4>
                <p className="text-cgh-muted text-base md:text-lg">
                  Equipment fleet details presented here are illustrative of capabilities required for our documented projects and are pending official confirmation by CGH Establishments Ltd management.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ContactCTA
        title="Need equipment for a project?"
        subtitle="Send an equipment or machine-hire enquiry and the CGH team can review the requirement."
        buttonText="REQUEST EQUIPMENT QUOTATION"
        buttonHref="/contact?subject=machine-hire"
      />
    </>
  );
}
