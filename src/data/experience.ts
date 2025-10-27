export type ExperienceCategory = 'Supervisor Leadership' | 'Technical Support' | 'Customer Support Foundations';

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
    aht: '< 5 min AHT',
    highlights: [
      'Deliver professional inbound and outbound technical support via phone, chat, and email.',
      'Troubleshoot hardware, software, and administrative issues for enterprise retail clients.',
      'Rewrite and clarify documentation to improve support consistency.',
      'Mentor teammates and assist with complex cases to maintain service quality.',
      'Maintain sub-five-minute AHT and low ACW while meeting all SLA requirements.'
    ]
  },
  {
    id: 'concentrix-resolution',
    role: 'Resolution Specialist',
    company: 'Concentrix · Remote',
    period: 'Feb 2025 – Mar 2025',
    category: 'Technical Support',
    highlights: [
      'Served as escalation point for complex customer issues requiring advanced problem-solving.',
      'Partnered with cross-functional teams to resolve web and desktop application challenges.',
      'Created detailed issue tickets to support accurate and timely resolutions.',
      'Maintained clear, proactive communication with users to ensure satisfaction.'
    ]
  },
  {
    id: 'concentrix-security',
    role: 'Security Services Expert',
    company: 'Concentrix · Remote',
    period: 'Feb 2025',
    category: 'Technical Support',
    highlights: [
      'Supported TurboTax users through enhanced account verification and security procedures.',
      'Helped identify and resolve account security and privacy concerns.',
      'Strengthened team response accuracy through consistent documentation practices.'
    ]
  },
  {
    id: 'concentrix-tsr',
    role: 'Technical Support Representative',
    company: 'Concentrix · Remote',
    period: 'Jan 2025 – Feb 2025',
    category: 'Technical Support',
    highlights: [
      'Provided software and account support for TurboTax customers across phone and chat channels.',
      'Guided users through troubleshooting, navigation, and error resolution steps.',
      'Escalated unresolved issues while preserving customer satisfaction.',
      'Balanced speed and thoroughness while maintaining top-quality metrics.'
    ]
  },
  {
    id: 'ntt-support',
    role: 'Support Specialist',
    company: 'NTT DATA · Remote',
    period: 'Sep 2023 – Jan 2025',
    category: 'Customer Support Foundations',
    highlights: [
      'Provided professional phone support to policyholders, beneficiaries, and internal teams.',
      'Managed 50–75 calls per day while maintaining accuracy and empathy.',
      'Collaborated with leadership to identify process improvements.',
      'Recognized for reliability and consistent adherence to service standards.'
    ]
  },
  {
    id: 'conduent-supervisor',
    role: 'Call Center Supervisor',
    company: 'Conduent · Remote',
    period: 'Oct 2021 – Mar 2022',
    category: 'Supervisor Leadership',
    highlights: [
      'Led a team of 25+ remote call center agents to exceed client performance goals.',
      'Oversaw hiring, training, payroll, scheduling, and coaching initiatives.',
      'Conducted QA reviews and team contests to improve engagement and results.',
      'Partnered with management to implement process improvements and uphold compliance.'
    ]
  },
  {
    id: 'conduent-lead',
    role: 'Call Center Team Leader',
    company: 'Conduent · Remote',
    period: 'Sep 2021 – Oct 2021',
    category: 'Supervisor Leadership',
    highlights: [
      'Assisted supervisors in guiding a 25+ agent team toward quality and productivity targets.',
      'Delivered coaching, performance reviews, and process updates.',
      'Helped manage scheduling, adherence, and development planning for team members.'
    ]
  },
  {
    id: 'conduent-advocate',
    role: 'Customer Service Advocate',
    company: 'Conduent · Richmond, IN',
    period: 'Jun 2021 – Sep 2021',
    category: 'Customer Support Foundations',
    highlights: [
      'Acted as the primary point of contact for customers with technical and account issues.',
      'Resolved inquiries promptly and professionally.',
      'Demonstrated clear communication and reliable follow-through in every interaction.'
    ]
  }
];
