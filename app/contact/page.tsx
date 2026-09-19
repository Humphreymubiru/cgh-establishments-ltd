import { Metadata } from 'next';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { ContactForm } from '@/components/contact/ContactForm';
import { ChevronRight, MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us | CGH Establishments Ltd',
  description: 'Get in touch with CGH Establishments Ltd for enquiries regarding road and civil infrastructure projects.',
};

export default function ContactPage() {
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
                <span className="text-cgh-yellow">Contact</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                Contact <span className="text-cgh-red">CGH</span>
              </h1>
              <p className="text-xl md:text-2xl text-cgh-muted font-light max-w-2xl">
                Get in touch with our team for project enquiries, partnerships, or general information.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cgh-light relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-32">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-16">
            
            {/* Contact Info (Left Column) */}
            <div className="lg:col-span-2 space-y-8 mt-12 lg:mt-32">
              <ScrollReveal>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-display font-bold text-cgh-charcoal mb-8">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-xl bg-cgh-red/10 flex items-center justify-center shrink-0 mr-4">
                        <Phone className="w-6 h-6 text-cgh-red" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-cgh-muted uppercase tracking-wider mb-1">Phone</div>
                        <a href="tel:0772687683" className="text-lg font-medium text-cgh-charcoal hover:text-cgh-red transition-colors">0772 687683</a>
                        <p className="text-xs text-gray-500 mt-1">As listed in UNABCEC directory</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-xl bg-cgh-red/10 flex items-center justify-center shrink-0 mr-4">
                        <MapPin className="w-6 h-6 text-cgh-red" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-cgh-muted uppercase tracking-wider mb-1">Postal Address</div>
                        <p className="text-lg font-medium text-cgh-charcoal">P.O. Box 301</p>
                        <p className="text-cgh-charcoal">Mityana, Uganda</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-xl bg-cgh-red/10 flex items-center justify-center shrink-0 mr-4">
                        <MapPin className="w-6 h-6 text-cgh-red" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-cgh-muted uppercase tracking-wider mb-1">Physical Location</div>
                        <p className="text-lg font-medium text-cgh-charcoal">Ring Road</p>
                        <p className="text-cgh-charcoal">Kinuye/Kibuye area</p>
                      </div>
                    </div>

                    <div className="flex items-start pt-6 border-t border-gray-100">
                      <div className="w-12 h-12 rounded-xl bg-cgh-yellow/20 flex items-center justify-center shrink-0 mr-4">
                        <ShieldCheck className="w-6 h-6 text-yellow-700" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-cgh-muted uppercase tracking-wider mb-1">Classification</div>
                        <p className="text-lg font-display font-bold text-cgh-charcoal">UNABCEC Class A-3</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form (Right Column) */}
            <div className="lg:col-span-3">
              <ScrollReveal delay={0.2}>
                <ContactForm />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-cgh-light pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="w-full h-[400px] rounded-2xl bg-gradient-to-br from-gray-800 to-cgh-charcoal relative overflow-hidden flex flex-col items-center justify-center shadow-xl border border-gray-200">
              {/* Map grid simulation */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
              
              <MapPin className="w-12 h-12 text-cgh-red/50 mb-4 animate-pulse" />
              <h3 className="text-2xl font-display font-bold text-white mb-2">Location Map</h3>
              <p className="text-gray-400">Coming Soon</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
