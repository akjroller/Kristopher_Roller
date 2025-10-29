export type ExperienceCategory =
  | 'Supervisor Leadership'
  | 'Technical Support'
  | 'Customer Support Foundations';

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
    company: 'Retail Imaging Management Group · Remote',
    period: 'Sep 2025 – Present',
    category: 'Technical Support',
    aht: '<5 min AHT',
    highlights: [
      'Provide inbound and outbound support for enterprise retail clients across phone, chat, and email.',
      'Troubleshoot complex hardware, software, and administrative issues with accuracy and speed.',
      'Collaborate with leadership to identify documentation gaps and improve internal KB resources.',
      'Mentor peers through direct chat coaching and escalation assistance during live operations.',
      'Maintain sub-five-minute AHT, minimal ACW, and consistent 95%+ QA scores.'
    ]
  },
  {
    id: 'concentrix-resolution',
    role: 'Resolution Specialist',
    company: 'Concentrix · Remote',
    period: 'Feb 2025 – Mar 2025',
    category: 'Technical Support',
    highlights: [
      'Handled advanced TurboTax customer escalations requiring expert-level troubleshooting.',
      'Partnered with IT and product teams to identify and fix recurring web and desktop issues.',
      'Created detailed documentation of software bugs and root causes for engineering teams.',
      'Maintained transparency and satisfaction by delivering proactive communication to users.'
    ]
  },
  {
    id: 'concentrix-security',
    role: 'Security Services Expert',
    company: 'Concentrix · Remote',
    period: 'Feb 2025',
    category: 'Technical Support',
    highlights: [
      'Assisted users with enhanced verification, fraud protection, and account recovery steps.',
      'Applied security protocols and best practices to protect sensitive customer data.',
      'Updated knowledge base entries for improved verification accuracy across the team.'
    ]
  },
  {
    id: 'ntt-support',
    role: 'Support Specialist',
    company: 'NTT DATA · Remote',
    period: 'Sep 2023 – Jan 2025',
    category: 'Customer Support Foundations',
    highlights: [
      'Delivered high-quality phone-based support to policyholders, agents, and internal partners.',
      'Handled 50–75 calls per day while maintaining 95% QA and compliance standards.',
      'Contributed to weekly trend reports and documentation updates to improve service delivery.',
      'Recognized by leadership for reliability, attendance, and mentorship of newer agents.'
    ]
  },
  {
    id: 'conduent-supervisor',
    role: 'Call Center Supervisor',
    company: 'Conduent · Remote',
    period: 'Oct 2021 – Mar 2022',
    category: 'Supervisor Leadership',
    highlights: [
      'Led 25+ remote agents, driving adherence, quality, and performance improvements across programs.',
      'Delivered consistent coaching, QA sessions, and calibration reviews to ensure client satisfaction.',
      'Oversaw scheduling, payroll, and performance metrics to align operations with contractual KPIs.',
      'Initiated recognition programs and contests that increased morale and reduced attrition by 12%.'
    ]
  },
  {
    id: 'conduent-lead',
    role: 'Call Center Team Leader',
    company: 'Conduent · Remote',
    period: 'Sep 2021 – Oct 2021',
    category: 'Supervisor Leadership',
    highlights: [
      'Supported supervisors in managing a 25+ agent team and monitoring KPIs such as QA and adherence.',
      'Delivered targeted coaching and improvement plans during seasonal volume spikes.',
      'Facilitated performance discussions and prepared agents for future leadership opportunities.'
    ]
  },
  {
    id: 'conduent-advocate',
    role: 'Customer Service Advocate',
    company: 'Conduent · Richmond, IN',
    period: 'Jun 2021 – Sep 2021',
    category: 'Customer Support Foundations',
    highlights: [
      'Provided first-contact resolution for customer inquiries across multiple service lines.',
      'Handled complex escalations and technical issues with empathy and accuracy.',
      'Maintained top-tier QA and reliability scores during program transitions.'
    ]
  }
];
