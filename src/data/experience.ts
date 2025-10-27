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
    id: 'conduent-supervisor',
    role: 'Call Center Supervisor',
    company: 'Conduent',
    period: 'Oct 2021 – Mar 2022 · Remote (USA)',
    category: 'Supervisor Leadership',
    highlights: [
      'Led a 25+ person remote team through peak seasons with clear coaching plans and weekly performance reviews.',
      'Rolled out contests, learning paths, and QA calibrations that lifted quality and productivity KPIs.',
      'Owned hiring, scheduling, payroll sign-off, and stakeholder communications for a rapidly growing program.'
    ]
  },
  {
    id: 'conduent-lead',
    role: 'Call Center Team Leader',
    company: 'Conduent',
    period: 'Sep 2021 – Oct 2021 · Remote',
    category: 'Supervisor Leadership',
    highlights: [
      'Partnered with supervisors to deliver KPIs through collaborative coaching and live call monitoring.',
      'Streamlined process updates and ensured real-time knowledge transfer to agents across multiple queues.',
      'Tracked productivity trends daily and closed skill gaps with targeted refreshers.'
    ]
  },
  {
    id: 'rimg-tsr',
    role: 'Technical Service Representative',
    company: 'Retail Imaging Management Group',
    period: 'Jul 2024 – Present · Remote',
    category: 'Technical Support',
    aht: '< 5 min AHT',
    highlights: [
      'Deliver inbound and outbound support across phone, chat, and email for national retail partners.',
      'Troubleshoot complex hardware, software, and administrative issues while maintaining sub-five-minute handle times.',
      'Refresh knowledge base content, macros, and runbooks to sharpen clarity and accelerate resolution speed.',
      'Mentor teammates, share trend analysis with leadership, and pilot automation ideas to reduce repeat contacts.'
    ]
  },
  {
    id: 'concentrix-sec',
    role: 'Resolution Specialist & Security Services Expert',
    company: 'Concentrix',
    period: 'Feb 2024 – Apr 2024 · Remote',
    category: 'Technical Support',
    highlights: [
      'Handled high-risk escalations requiring deep product knowledge and calm, empathetic communication.',
      'Collaborated with engineering and security partners to isolate and resolve multi-platform software defects.',
      'Supported the Security Services pod to safeguard TurboTax users and uphold privacy best practices.'
    ]
  },
  {
    id: 'concentrix-tsr',
    role: 'Technical Support Representative',
    company: 'Concentrix',
    period: 'Dec 2023 – Feb 2024 · Remote',
    category: 'Technical Support',
    highlights: [
      'Guided TurboTax customers through software navigation, filings, and amendments via phone and screen share.',
      'Escalated complex issues while preserving high customer satisfaction scores and clear documentation.',
      'Balanced multiple systems and channels simultaneously to deliver timely, accurate resolutions during peak season.'
    ]
  },
  {
    id: 'roller-automation',
    role: 'Automation Architect & Community Builder',
    company: 'The Roller Method',
    period: 'Jun 2023 – Present · Remote',
    category: 'Coding & Automation',
    highlights: [
      'Designed and shipped the D4ET Discord bot powering thousands of community servers with sub-500ms event notifications.',
      'Built analytics and alerting that surface community health, service uptime, and content refresh priorities.',
      'Coordinated a distributed development squad, pairing agile ceremonies with community listening loops.'
    ]
  },
  {
    id: 'ntt-support',
    role: 'Support Specialist',
    company: 'NTT DATA',
    period: 'Sep 2023 – Jan 2025 · Remote',
    category: 'Call Center Foundations',
    highlights: [
      'Fielded 50–75 daily calls assisting policyholders, agents, and internal teams with nuanced insurance inquiries.',
      'Resolved issues through deep product knowledge and proactive collaboration with leadership.',
      'Maintained top-tier service standards across productivity, quality, and compliance benchmarks.'
    ]
  }
];
