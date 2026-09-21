import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions | CGH Establishments Ltd",
  description: "Terms and conditions for use of the CGH Establishments Ltd website.",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-cgh-charcoal px-4 pb-20 pt-32 text-cgh-light md:px-8 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center text-sm font-medium text-cgh-muted">
            <Link href="/" className="transition-colors hover:text-cgh-yellow">Home</Link>
            <ChevronRight className="mx-2 h-4 w-4" />
            <span className="text-cgh-yellow">Terms and Conditions</span>
          </div>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold text-white md:text-6xl">
            Terms and Conditions
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-cgh-muted">
            Conditions for using this prototype website and submitting an enquiry.
          </p>
        </div>
      </section>

      <main className="bg-white px-4 py-20 md:px-8 md:py-28">
        <article className="mx-auto max-w-3xl space-y-10 text-base leading-8 text-cgh-muted">
          <p className="border-l-2 border-cgh-red pl-5 text-cgh-charcoal">
            These terms are prototype content prepared for CGH Establishments Ltd and must be reviewed and confirmed by the company before publication.
          </p>
          <section>
            <h2 className="font-display text-2xl font-bold text-cgh-charcoal">Website information</h2>
            <p className="mt-3">The website presents company, service, project and equipment information as a concept for review. Information identified as illustrative or pending confirmation should not be treated as a final commercial offer.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-cgh-charcoal">Enquiries and quotations</h2>
            <p className="mt-3">Submitting an enquiry does not create a contract, reserve equipment, confirm availability or constitute acceptance of a project. Any quotation, availability statement or engagement must be confirmed directly by CGH Establishments Ltd through its approved process.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-cgh-charcoal">Final approval</h2>
            <p className="mt-3">The company should confirm its official terms, contact details, intellectual property position, governing law and any applicable procurement conditions before this page is published as a final legal notice.</p>
          </section>
        </article>
      </main>
    </>
  );
}
