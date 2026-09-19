import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";

const footerLinks = {
  navigation: [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/equipment", label: "Equipment" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services#road-construction", label: "Road Construction" },
    { href: "/services#drainage-works", label: "Drainage Works" },
    { href: "/services#culvert-installation", label: "Culvert Installation" },
    { href: "/services#earthworks", label: "Earthworks" },
    { href: "/services#bridge-civil", label: "Civil Infrastructure" },
  ],
};

export default function SiteFooter() {
  return (
    <footer className="bg-cgh-dark text-gray-400">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold text-cgh-red tracking-tight">
                  CGH
                </span>
                <span className="font-display text-xs font-semibold text-cgh-yellow tracking-[0.15em] uppercase -mt-1">
                  Establishments Ltd
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Building the infrastructure that moves Uganda. Road construction,
              road maintenance and civil infrastructure works.
            </p>
            <p className="text-xs text-gray-500">
              UNABCEC Classified: A-3
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display text-sm font-semibold text-white tracking-wider uppercase mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-sm font-semibold text-white tracking-wider uppercase mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold text-white tracking-wider uppercase mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-cgh-red flex-shrink-0" />
                <span className="text-sm">0772 687683</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-cgh-red flex-shrink-0" />
                <span className="text-sm">
                  Ring Road, Kinuye/Kibuye Area
                  <br />
                  P.O. Box 301, Mityana, Uganda
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} CGH Establishments Ltd. All rights
            reserved.
          </p>
          <p className="text-xs text-gray-600">
            Prototype — Content pending CGH approval
          </p>
        </div>
      </div>
    </footer>
  );
}
