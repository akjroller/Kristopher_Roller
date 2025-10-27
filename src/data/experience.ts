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
      'Provide professional inbound and outbound support across phone, chat, and email with rapid response expectations.',
      'Troubleshoot complex hardware, software, and administrative issues for enterprise retail clients.',
      'Rewrite and clarify knowledge base articles and macros to improve accuracy across support content.',
      'Mentor teammates in DMs and main chat channels so escalated learnings spread quickly.',
      'Consistently maintain sub-five-minute AHT with minimal ACW while closing loops with customers.',
      'Partner with leadership to surface documentation gaps and suggest operational improvements.'
    ]
  },
  {
    id: 'concentrix-resolution',
    role: 'Resolution Specialist',
    company: 'Concentrix',
    period: 'Feb 2025 – Mar 2025 · Remote',
    category: 'Technical Support',
    highlights: [
      'Acted as the escalation point for complex customer inquiries requesting supervisory attention.',
      'Collaborated with IT and cross-functional teams to troubleshoot web, desktop, and mobile software issues.',
      'Created detailed software issue tickets to drive timely fixes for user-reported bugs.',
      'Applied advanced problem-solving skills to resolve unique customer issues standard support could not handle.',
      'Maintained proactive communication with users to provide resolution updates and protect satisfaction.'
    ]
  },
  {
    id: 'concentrix-security',
    role: 'Security Services Expert',
    company: 'Concentrix',
    period: 'Feb 2025 – Feb 2025 · Remote',
    category: 'Technical Support',
    highlights: [
      'Supported TurboTax users with heightened verification and security protocols to protect accounts.',
      'Assisted the security services team with troubleshooting account and data privacy issues.',
      'Strengthened security troubleshooting by applying best practices that safeguarded customer data.'
    ]
  },
  {
    id: 'concentrix-tsr',
    role: 'Technical Support Representative',
    company: 'Concentrix',
    period: 'Jan 2025 – Feb 2025 · Remote',
    category: 'Technical Support',
    highlights: [
      'Guided TurboTax customers through software navigation, troubleshooting, and complex return scenarios.',
      'Resolved issues via phone with video chat and chat channels while keeping communication clear.',
      'Escalated complex cases to specialized teams without sacrificing customer satisfaction.',
      'Leveraged multiple systems simultaneously to diagnose and resolve technical challenges in real time.',
      'Demonstrated flexibility by supporting customers during peak and off-peak hours.',
      'Documented interactions thoroughly to inform future support and engineering updates.'
    ]
  },
  {
    id: 'ntt-support',
    role: 'Support Specialist',
    company: 'NTT DATA',
    period: 'Sep 2023 – Jan 2025 · Remote',
    category: 'Call Center Foundations',
    highlights: [
      'Delivered high-quality phone-based support to policyholders, beneficiaries, agents, and internal stakeholders.',
      'Consistently handled 50–75 calls per day while meeting or exceeding service standards.',
      'Resolved inquiries using deep knowledge of insurance products, policies, and processes.',
      'Collaborated with management and peers to address service-related concerns proactively.'
    ]
  },
  {
    id: 'conduent-supervisor',
    role: 'Call Center Supervisor',
    company: 'Conduent',
    period: 'Oct 2021 – Mar 2022 · Remote (USA)',
    category: 'Supervisor Leadership',
    highlights: [
      'Led and managed a remote team of 25+ agents to meet and exceed client contractual obligations.',
      'Delivered regular coaching and feedback while monitoring performance trends and productivity.',
      'Oversaw hiring decisions, scheduling, payroll approvals, and policy enforcement for the program.',
      'Coordinated contests and team activities to drive engagement and results.',
      'Resolved operational issues by applying technical knowledge and continuous improvement practices.'
    ]
  },
  {
    id: 'conduent-lead',
    role: 'Call Center Team Leader',
    company: 'Conduent',
    period: 'Sep 2021 – Oct 2021 · Remote',
    category: 'Supervisor Leadership',
    highlights: [
      'Assisted with managing a 25+ person team to meet contractual KPIs across quality, productivity, and compliance.',
      'Delivered coaching, feedback, and developmental support to agents navigating complex updates.',
      'Ensured timely dissemination of process changes while monitoring productivity, adherence, and scheduling.',
      'Helped coordinate contests, training refreshers, and performance reviews alongside supervisors.'
    ]
  },
  {
    id: 'conduent-advocate',
    role: 'Customer Service Advocate',
    company: 'Conduent',
    period: 'Jun 2021 – Sep 2021 · Richmond, IN',
    category: 'Call Center Foundations',
    highlights: [
      'Acted as the primary point of contact for customers, resolving technical and account issues promptly.',
      'Demonstrated exceptional verbal and written communication while supporting remote collaboration.',
      'Maintained high-quality call resolution standards to protect customer satisfaction.',
      'Offered product solutions and shared best practices that contributed to team success.'
    ]
  },
  {
    id: 'roller-automation',
    role: 'Creator & Lead Developer, D4ET Discord Bot',
    company: 'The Roller Method',
    period: 'Jun 2023 – Present · Remote',
    category: 'Coding & Automation',
    highlights: [
      'Manage a five-member team maintaining a Discord bot that supports 413,000+ users across 3,500+ servers.',
      'Provide real-time Diablo 4 event alerts with improvements that boosted speed and reliability over competitors.',
      'Utilize Python 3, AWS, PostgreSQL Aurora, Redis, and CDN tooling to ensure uptime and efficient delivery.'
    ]
  }
];
