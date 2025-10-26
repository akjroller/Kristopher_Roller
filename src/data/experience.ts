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
    period: 'Oct 2021 – Mar 2022 · Remote',
    category: 'Supervisor Leadership',
    highlights: [
      'Led a 25+ person team, coaching for quality, productivity, and compliance.',
      'Launched contests and targeted training that elevated KPIs across the program.',
      'Owned hiring, performance reviews, payroll, and stakeholder communications.'
    ]
  },
  {
    id: 'conduent-lead',
    role: 'Call Center Team Leader',
    company: 'Conduent',
    period: 'Sep 2021 – Oct 2021 · Remote',
    category: 'Supervisor Leadership',
    highlights: [
      'Partnered with supervisors to deliver KPIs through collaborative coaching.',
      'Streamlined process updates and ensured real-time knowledge transfer to agents.',
      'Monitored productivity to identify trends and close skill gaps quickly.'
    ]
  },
  {
    id: 'rimg-tsr',
    role: 'Technical Service Representative',
    company: 'Retail Imaging Management Group',
    period: 'Sep 2025 – Present · Remote',
    category: 'Technical Support',
    aht: '< 5 min AHT',
    highlights: [
      'Deliver inbound and outbound support across phone, chat, and email with enterprise-grade professionalism.',
      'Troubleshoot complex hardware, software, and administrative issues while maintaining sub-5 minute handle times.',
      'Rewrite knowledge base content to sharpen clarity and empower faster resolutions across the organization.',
      'Mentor teammates and partner with leadership on continuous service improvements.'
    ]
  },
  {
    id: 'concentrix-sec',
    role: 'Resolution Specialist & Security Services Expert',
    company: 'Concentrix',
    period: 'Feb 2025 – Mar 2025 · Remote',
    category: 'Technical Support',
    highlights: [
      'Handled escalations requiring deep product knowledge and calm, empathetic communication.',
      'Collaborated with IT partners to isolate and resolve multi-platform software defects.',
      'Supported the Security Services team to safeguard TurboTax users and uphold privacy best practices.'
    ]
  },
  {
    id: 'concentrix-tsr',
    role: 'Technical Support Representative',
    company: 'Concentrix',
    period: 'Jan 2025 – Feb 2025 · Remote',
    category: 'Technical Support',
    highlights: [
      'Guided TurboTax customers through software navigation, filings, and amendments via phone and video.',
      'Escalated complex issues while preserving high customer satisfaction scores and clarity of communication.',
      'Balanced multiple systems and channels simultaneously to deliver timely, accurate resolutions.'
    ]
  },
  {
    id: 'roller-automation',
    role: 'Automation Architect & Community Builder',
    company: 'The Roller Method',
    period: 'Jun 2023 – Present · Remote',
    category: 'Coding & Automation',
    highlights: [
      'Designed and shipped the D4ET Discord bot powering 3,500+ servers with sub-500ms event notifications.',
      'Built analytics and alerting that surface community health, service uptime, and content refresh priorities.',
      'Coordinated a distributed 5-person development squad, pairing agile ceremonies with community listening.'
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
      'Maintained top-tier service standards across productivity and quality benchmarks.'
    ]
  }
];
