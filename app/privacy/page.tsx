import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | CGH Establishments Ltd",
  description: "Privacy information for the CGH Establishments Ltd website.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-cgh-charcoal px-4 pb-20 pt-32 text-cgh-light md:px-8 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center text-sm font-medium text-cgh-muted">
            <Link href="/" className="transition-colors hover:text-cgh-yellow">Home</Link>
            <ChevronRight className="mx-2 h-4 w-4" />
            <span className="text-cgh-yellow">Privacy Policy</span>
          </div>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold text-white md:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-cgh-muted">
            Information about how enquiries submitted through this website should be handled.
          </p>
        </div>
      </section>

      <main className="bg-white px-4 py-20 md:px-8 md:py-28">
        <article className="mx-auto max-w-3xl space-y-10 text-base leading-8 text-cgh-muted">
          <p className="border-l-2 border-cgh-red pl-5 text-cgh-charcoal">
            This privacy policy is prototype content prepared for CGH Establishments Ltd and must be reviewed and confirmed by the company before publication.
          </p>
          <section>
            <h2 className="font-display text-2xl font-bold text-cgh-charcoal">Information submitted</h2>
            <p className="mt-3">The contact form may collect your name, email address, phone number, company, project or site location, equipment requirement, required duration and message details when you choose to submit an enquiry.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-cgh-charcoal">Use of information</h2>
            <p className="mt-3">Submitted information should be used only to review and respond to the enquiry, prepare a quotation where appropriate, or discuss a potential project, tender, partnership or machine-hire request.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-cgh-charcoal">Confirmation before publication</h2>
            <p className="mt-3">The final data controller, storage arrangements, retention period, contact process and any third-party services must be confirmed by CGH Establishments Ltd before this notice is treated as its official privacy policy.</p>
          </section>
        </article>
      </main>
    </>
  );
}
