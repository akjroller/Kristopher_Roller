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
      'Resolve hardware, software, and administrative issues for enterprise retail clients across phone, chat, and email.',
      'Coordinate with field partners and update playbooks, cutting repeat escalations by 18%.',
      'Mentor teammates on complex cases with live coaching, quick-reference guides, and shadow sessions.',
      'Deliver proactive status updates and post-call summaries for leadership visibility.',
      'Maintain sub-five-minute AHT, low ACW, and 95%+ QA scores across high-pressure queues.'
    ]
  },
  {
    id: 'concentrix-resolution',
    role: 'Resolution Specialist',
    company: 'Concentrix · Remote',
    period: 'Feb 2025 – Mar 2025',
    category: 'Technical Support',
    highlights: [
      'Served as the escalation point for complex TurboTax customer issues requiring advanced troubleshooting.',
      'Partnered with engineering and product teams to resolve web and desktop application challenges quickly.',
      'Documented root causes and next steps in detailed tickets so front-line agents could prevent repeat contacts.',
      'Maintained proactive communication with customers to safeguard satisfaction and compliance.'
    ]
  },
  {
    id: 'concentrix-security',
    role: 'Security Services Expert',
    company: 'Concentrix · Remote',
    period: 'Feb 2025',
    category: 'Technical Support',
    highlights: [
      'Guided TurboTax users through enhanced verification and identity protection steps.',
      'Investigated account security and privacy concerns while protecting sensitive data.',
      'Strengthened team accuracy by updating verification scripts and knowledge base content.'
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
      'Guided users through troubleshooting, navigation, and error resolution steps with empathy.',
      'Escalated unresolved issues while preserving customer satisfaction and compliance.',
      'Maintained first-contact resolution and quality targets in a surge environment.'
    ]
  },
  {
    id: 'ntt-support',
    role: 'Support Specialist',
    company: 'NTT DATA · Remote',
    period: 'Sep 2023 – Jan 2025',
    category: 'Customer Support Foundations',
    highlights: [
      'Provided professional phone support to policyholders, beneficiaries, and internal teams with 95% QA scores.',
      'Managed 50–75 calls per day while balancing compliance, empathy, and documentation accuracy.',
      'Collaborated with leadership to identify process improvements and share weekly trend reports.',
      'Recognized for reliability, attendance, and mentoring peers through tough cases.'
    ]
  },
  {
    id: 'conduent-supervisor',
    role: 'Call Center Supervisor',
    company: 'Conduent · Remote',
    period: 'Oct 2021 – Mar 2022',
    category: 'Supervisor Leadership',
    highlights: [
      'Led a team of 25+ remote call center agents to exceed client performance goals and maintain >95% QA.',
      'Oversaw hiring, training, payroll, scheduling, and coaching initiatives tailored to each agent.',
      'Conducted QA reviews, calibration sessions, and recognition programs that increased adherence by 10%.',
      'Partnered with management to implement process improvements, reduce escalations, and uphold compliance.'
    ]
  },
  {
    id: 'conduent-lead',
    role: 'Call Center Team Leader',
    company: 'Conduent · Remote',
    period: 'Sep 2021 – Oct 2021',
    category: 'Supervisor Leadership',
    highlights: [
      'Assisted supervisors in guiding a 25+ agent team toward quality and productivity targets during peak season.',
      'Delivered coaching, performance reviews, and process updates with clear next steps.',
      'Helped manage scheduling, adherence, and development planning that prepared agents for promotion.'
    ]
  },
  {
    id: 'conduent-advocate',
    role: 'Customer Service Advocate',
    company: 'Conduent · Richmond, IN',
    period: 'Jun 2021 – Sep 2021',
    category: 'Customer Support Foundations',
    highlights: [
      'Acted as the primary point of contact for customers with technical and account issues across multiple programs.',
      'Resolved inquiries promptly and professionally, often handling escalations that required supervisor approval.',
      'Demonstrated clear communication, accurate documentation, and reliable follow-through in every interaction.'
    ]
  }
];
