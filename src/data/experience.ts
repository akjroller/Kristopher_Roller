export type ExperienceCategory =
  | 'Supervisor Leadership'
  | 'Technical Support'
  | 'Coding & Automation'
  | 'Call Center Foundations';

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  highlights: string[];
  category: ExperienceCategory;
  aht?: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: 'rimg-tsr',
    role: 'Technical Service Representative',
    company: 'Retail Imaging Management Group',
    period: 'Sep 2025 – Present · Remote',
    category: 'Technical Support',
    aht: '< 5 min AHT',
    highlights: [
      'Provide enterprise technical support across phone, chat, and email while maintaining sub-five-minute average handle time.',
      'Diagnose hardware, software, and administrative defects for retail clients and translate fixes into clear next steps.',
      'Rewrite knowledge base assets and macros to remove ambiguity and speed up first-contact resolution.',
      'Mentor agents via DMs, call barges, and channel support so the entire queue benefits from escalated learnings.'
    ]
  },
  {
    id: 'concentrix-resolution',
    role: 'Resolution Specialist',
    company: 'Concentrix',
    period: 'Feb 2025 – Mar 2025 · Remote',
    category: 'Technical Support',
    highlights: [
      'Owned the toughest escalations when customers demanded supervisory assistance, even without the formal title.',
      'Coordinated across IT, product, and engineering teams to resolve cross-platform software issues.',
      'Authored detailed defect tickets, tracked fixes, and closed the loop with customers to restore confidence.'
    ]
  },
  {
    id: 'concentrix-security',
    role: 'Security Services Expert',
    company: 'Concentrix',
    period: 'Feb 2025 – Feb 2025 · Remote',
    category: 'Technical Support',
    highlights: [
      'Applied heightened verification, fraud prevention, and privacy protocols for TurboTax users.',
      'Triaged security-related account issues with urgency while preserving empathy and compliance.',
      'Partnered with the security team to document repeat threats and recommend process updates.'
    ]
  },
  {
    id: 'concentrix-tsr',
    role: 'Technical Support Representative',
    company: 'Concentrix',
    period: 'Jan 2025 – Feb 2025 · Remote',
    category: 'Technical Support',
    highlights: [
      'Guided TurboTax customers through complex return scenarios via phone, chat, and video support.',
      'Escalated critical defects quickly while preserving CSAT through calm communication and thorough notes.',
      'Balanced simultaneous system navigation, knowledge searches, and documentation with precision.'
    ]
  },
  {
    id: 'ntt-support',
    role: 'Support Specialist',
    company: 'NTT DATA',
    period: 'Sep 2023 – Jan 2025 · Remote',
    category: 'Call Center Foundations',
    highlights: [
      'Handled 50–75 daily calls for policyholders, agents, and internal stakeholders with accuracy and empathy.',
      'Mapped intricate insurance processes so agents had clear scripts, tip sheets, and decision trees.',
      'Partnered with leaders to flag service risks early and coordinate training refreshers.'
    ]
  },
  {
    id: 'conduent-supervisor',
    role: 'Call Center Supervisor',
    company: 'Conduent',
    period: 'Oct 2021 – Mar 2022 · Remote (USA)',
    category: 'Supervisor Leadership',
    highlights: [
      'Led 25+ remote agents through contractual KPIs with daily huddles, scorecards, and 1:1 coaching plans.',
      'Implemented contests, peer mentoring, and QA calibrations that lifted both quality and productivity.',
      'Managed hiring decisions, scheduling, payroll approvals, and stakeholder updates for a national program.'
    ]
  },
  {
    id: 'conduent-lead',
    role: 'Call Center Team Leader',
    company: 'Conduent',
    period: 'Sep 2021 – Oct 2021 · Remote',
    category: 'Supervisor Leadership',
    highlights: [
      'Served as right hand to supervisors, providing live call feedback and distributing urgent process updates.',
      'Tracked agent productivity, attendance, and adherence to keep the floor balanced during spikes.',
      'Identified skill gaps and coordinated refresher trainings to maintain compliance.'
    ]
  },
  {
    id: 'conduent-advocate',
    role: 'Customer Service Advocate',
    company: 'Conduent',
    period: 'Jun 2021 – Sep 2021 · Richmond, IN',
    category: 'Call Center Foundations',
    highlights: [
      'Acted as primary contact for customer account issues, consistently hitting quality and satisfaction goals.',
      'Balanced independent remote work with proactive communication to leaders and peers.',
      'Documented product fixes and alternative solutions that fed into future training content.'
    ]
  },
  {
    id: 'roller-automation',
    role: 'Creator & Lead Developer, D4ET Discord Bot',
    company: 'The Roller Method',
    period: 'Jun 2023 – Present · Remote',
    category: 'Coding & Automation',
    highlights: [
      'Manage a five-person volunteer team to deliver dependable event alerts for 413,000+ users across 3,500+ servers.',
      'Translate community requests into product roadmaps, release notes, and uptime metrics that mirror call center rigor.',
      'Optimize infrastructure with Python, AWS, PostgreSQL, and Redis to maintain sub-500ms notification delivery.'
    ]
  }
];
