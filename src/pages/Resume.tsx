import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Download, Copy } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import PageBridge from '../components/common/PageBridge';
import { resumeHighlights, resumeUrl } from '../data/resume';

const Resume = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.origin + resumeUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      setCopied(false);
    }
  };

  return (
    <div className="space-y-16">
      <Helmet>
        <title>Resume &amp; Highlights</title>
        <meta
          name="description"
          content="Browse Kristopher Roller’s resume highlights, download the PDF, and review key strengths."
        />
      </Helmet>
      <section className="section-container space-y-10">
        <SectionHeader
          eyebrow="Resume &amp; Highlights"
          title="Overview of my experience"
          description="A quick look at my core strengths and professional focus areas. For full details, download the PDF version below."
        />
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-6">
            <div className="grid gap-4">
              {resumeHighlights.map((highlight) => (
                <div key={highlight} className="rounded-xl border border-slate-800/70 bg-slate-900/60 p-5 text-sm text-slate-300">
                  • {highlight}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a href={resumeUrl} className="btn-primary inline-flex items-center gap-2" download>
                <Download className="h-4 w-4" aria-hidden />
                Download PDF
              </a>
              <button type="button" onClick={handleCopyLink} className="btn-ghost inline-flex items-center gap-2">
                <Copy className="h-4 w-4" aria-hidden />
                {copied ? 'Link copied!' : 'Copy link'}
              </button>
            </div>
          </div>
          <div className="card glass overflow-hidden border-slate-800/70 bg-slate-900/80">
            <object data={resumeUrl} type="application/pdf" className="h-[70vh] w-full">
              <p className="p-6 text-sm text-slate-300">
                PDF preview unavailable.{' '}
                <a href={resumeUrl} className="text-primary underline">
                  Download the resume instead.
                </a>
              </p>
            </object>
          </div>
        </div>
      </section>
      <PageBridge
        eyebrow="Want more context?"
        title="Match the resume to detailed stories"
        description="Use these pages to explore the experience, initiatives, and next steps behind every bullet on the resume."
        links={[
          {
            label: 'Experience timeline',
            to: '/experience',
            description: 'Read how I lead teams, maintain top-tier support metrics, and build trust with stakeholders.'
          },
          {
            label: 'Initiatives & achievements',
            to: '/projects',
            description: 'See the documentation and reporting work that keeps teams informed and confident.'
          },
          {
            label: 'Contact Kristopher',
            to: '/contact',
            description: 'Reach out directly if you’d like a tailored walkthrough or have a role in mind.'
          }
        ]}
      />
    </div>
  );
};

export default Resume;
