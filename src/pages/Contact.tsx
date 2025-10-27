import { Helmet } from 'react-helmet';
import { Github, Linkedin, Mail, Send, BriefcaseBusiness } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import PageBridge from '../components/common/PageBridge';

const formEndpoint = 'https://formspree.io/f/xqaejwzq';

const Contact = () => (
  <div className="space-y-16">
    <Helmet>
      <title>Contact</title>
      <meta
        name="description"
        content="Reach out to Kristopher Roller for technical support leadership, automation projects, or collaboration."
      />
    </Helmet>
    <section className="section-container space-y-12">
      <SectionHeader
        eyebrow="Let’s connect"
        title="Tell me about your next challenge"
        description="Need a supervisor who can steady the floor, a technical expert to calm escalations, or a builder to automate the follow-up? I’d love to hear what you’re tackling."
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
            Prefer a direct note? Reach out through any of the channels below or scan the QR code to jump straight to my resume.
          </p>
          <div className="flex flex-col gap-4 text-sm text-slate-200">
            <a href="mailto:akjroller@gmail.com" className="contact-link">
              <Mail className="h-4 w-4" aria-hidden />
              akjroller@gmail.com
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
          </div>
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-slate-800/70 bg-slate-950/70 p-6">
            <img
              src="/resume-qr.svg"
              alt="QR code linking to Kristopher Roller’s resume"
              className="h-40 w-40"
              loading="lazy"
            />
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Scan to view resume</p>
          </div>
        </aside>
      </div>
    </section>
    <PageBridge
      eyebrow="Prefer to explore first?"
      title="See my work in action before we chat"
      description="These pages highlight the leadership experience, automation projects, and resources that back up everything in this contact form."
      links={[
        {
          label: 'Experience timeline',
          to: '/experience',
          description: 'Review how I keep teams steady, resolve escalations, and coach for excellence.'
        },
        {
          label: 'Projects & automation',
          to: '/projects',
          description: 'Look at the bots and analytics that help teams stay ahead of issues.'
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

export default Contact;
