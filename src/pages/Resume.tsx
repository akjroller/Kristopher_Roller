import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Download, Copy } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
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
        <title>Resume</title>
        <meta name="description" content="Download or preview Kristopher Roller’s resume." />
      </Helmet>
      <section className="section-container space-y-10">
        <SectionHeader
          eyebrow="Resume"
          title="Download &amp; preview"
          description="A quick snapshot of my impact across technical support, leadership, and automation initiatives."
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
    </div>
  );
};

export default Resume;
