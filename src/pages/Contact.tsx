import type { SyntheticEvent } from 'react';
import { Helmet } from 'react-helmet';
import { Github, Linkedin, Mail, Send, BriefcaseBusiness, Phone, MapPin } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import PageBridge from '../components/common/PageBridge';
import { resumeUrl } from '../data/resume';

const formEndpoint = 'https://formspree.io/f/xqaejwzq';
const fallbackResumeHost = 'https://kristopherroller.com';

const Contact = () => {
  const resumeShareUrl =
    typeof window !== 'undefined' && window.location?.origin
      ? `${window.location.origin}${resumeUrl}`
      : `${fallbackResumeHost}${resumeUrl}`;

  const qrCodeSource = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=0&data=${encodeURIComponent(
    resumeShareUrl
  )}`;

  const handleQrLoadError = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = '/resume-qr.svg';
    event.currentTarget.alt = "Fallback graphic showing Kristopher Roller's resume link";
  };

    return (
      <div className="space-y-16">
        <Helmet>
          <title>Contact</title>
          <meta
            name="description"
            content="Connect with Kristopher Roller to strengthen customer support operations, remote teams, and documentation."
          />
        </Helmet>
        <section className="section-container space-y-12">
          <SectionHeader
            eyebrow="Let’s connect"
            title="Ready to improve your customer support operation?"
            description="Whether you’re building a remote support team, refining workflows, or looking for a reliable leader to strengthen consistency — I’d love to help. Let’s connect to discuss your goals and how my experience aligns with your needs."
          />
          <div className="grid gap-10 lg:grid-cols-[1.05fr,0.95fr]">
            <form action={formEndpoint} method="POST" className="card glass space-y-5 border-slate-800/70 bg-slate-900/70 p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm text-slate-300">
                  Name
                  <input
                    type="text"
                    name="name"
                    required
                    className="input"
                    placeholder="How should I address you?"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-slate-300">
                  Email
                  <input type="email" name="email" required className="input" placeholder="you@example.com" />
                </label>
              </div>
              <label className="flex flex-col gap-2 text-sm text-slate-300">
                Organization
                <input type="text" name="company" className="input" placeholder="Company or team name" />
              </label>
              <label className="flex flex-col gap-2 text-sm text-slate-300">
                How can I help?
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="input min-h-[140px]"
                  placeholder="Share details about your goals or the problem you’re solving."
                />
              </label>
              <button type="submit" className="btn-primary inline-flex items-center gap-2">
                <Send className="h-4 w-4" aria-hidden />
                Send message
              </button>
            </form>
            <aside className="card glass space-y-6 border-slate-800/70 bg-slate-900/70 p-8">
              <p className="text-sm text-slate-300">
                Prefer a direct note? Reach out through any of the channels below or scan the QR code to share my resume with your team.
              </p>
              <div className="flex flex-col gap-4 text-sm text-slate-200">
                <a href="mailto:akjroller@gmail.com" className="contact-link">
                  <Mail className="h-4 w-4" aria-hidden />
                  akjroller@gmail.com
                </a>
                <a href="tel:17655805549" className="contact-link">
                  <Phone className="h-4 w-4" aria-hidden />
                  (765) 580-5549
                </a>
                <a
                  href="https://www.linkedin.com/in/kristopher-roller-84775294/"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  <Linkedin className="h-4 w-4" aria-hidden />
                  linkedin.com/in/kristopher-roller-84775294
                </a>
                <a href="https://github.com/akjroller" target="_blank" rel="noreferrer" className="contact-link">
                  <Github className="h-4 w-4" aria-hidden />
                  github.com/akjroller
                </a>
                <a
                  href="https://profile.indeed.com/p/kristopherr-20y8qlr"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  <BriefcaseBusiness className="h-4 w-4" aria-hidden />
                  Indeed profile
                </a>
                <div className="contact-link cursor-default">
                  <MapPin className="h-4 w-4" aria-hidden />
                  Richmond, IN · Fully Remote · Authorized to work in the U.S.
                </div>
              </div>
              <div className="flex flex-col items-center gap-3 rounded-2xl border border-slate-800/70 bg-slate-950/70 p-6">
                <img
                  src={qrCodeSource}
                  alt="QR code linking to Kristopher Roller’s resume"
                  className="h-40 w-40"
                  loading="lazy"
                  onError={handleQrLoadError}
                />
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Scan to view resume</p>
                <a href={resumeUrl} className="text-xs text-primary underline">
                  Open the resume directly
                </a>
              </div>
            </aside>
          </div>
        </section>
        <PageBridge
          eyebrow="Prefer to explore first?"
          title="See my work in action before we chat"
          description="These pages highlight the leadership experience, initiatives, and resources that back up everything in this contact form."
          links={[
            {
              label: 'Experience timeline',
              to: '/experience',
              description: 'Review how I keep teams steady, resolve escalations, and coach for excellence.'
            },
            {
              label: 'Initiatives & achievements',
              to: '/projects',
              description: 'Explore the documentation and reporting improvements that support consistent service.'
            },
            {
              label: 'Resume & downloads',
              to: '/resume',
              description: 'Download the PDF or share quick highlights with your hiring team.'
            }
          ]}
        />
      </div>
    );
  };

export default Contact;
