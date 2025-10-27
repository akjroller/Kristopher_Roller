export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectHighlight {
  label: string;
  value: string;
}

export interface ProjectSummary {
  title: string;
  description: string;
  metrics: ProjectHighlight[];
  tech: string[];
  links: ProjectLink[];
  image?: string;
}

export const featuredProject: ProjectSummary = {
  title: 'Diablo 4 Events Tracker (D4ET)',
  description:
    'A high-uptime Discord bot delivering real-time Diablo 4 event alerts — built with the same rigor I apply to call center automation, documentation, and reliability.',
  metrics: [
    { label: 'Community reach', value: '413K+ users across 3,500+ servers' },
    { label: 'Delivery speed', value: '<500ms alert dispatch with redundancy' },
    { label: 'Team leadership', value: '5-person volunteer crew coordinated remotely' }
  ],
  tech: ['Python 3', 'AWS', 'PostgreSQL Aurora', 'Redis', 'Discord API', 'CDN tooling'],
  links: [
    { label: 'View GitHub profile', href: 'https://github.com/akjroller' },
    { label: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/kristopher-roller-84775294/' },
    { label: 'See professional profile', href: 'https://profile.indeed.com/p/kristopherr-20y8qlr' }
  ],
  image: '/d4et-dashboard.svg'
};

export const secondaryProjects: ProjectSummary[] = [
  {
    title: 'Technical Support Knowledge Refresh',
    description:
      'Documentation rewrites, macro updates, and clarity checks that reduced handle time friction for TurboTax and insurance queues.',
    metrics: [
      { label: 'Articles improved', value: '40+ knowledge assets rewritten or audited' },
      { label: 'Accuracy gains', value: 'Escalation clarity improved through updated branching logic' }
    ],
    tech: ['Notion', 'Confluence', 'Zendesk', 'SharePoint', 'Process mapping'],
    links: [
      { label: 'See professional profile', href: 'https://profile.indeed.com/p/kristopherr-20y8qlr' },
      { label: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/kristopher-roller-84775294/' }
    ]
  },
  {
    title: 'Supervisor Command Center',
    description:
      'Power BI, Excel, and automation workflows that consolidate AHT, QA, adherence, and sentiment for daily huddles and escalation reviews.',
    metrics: [
      { label: 'Visibility', value: 'Real-time dashboards for leaders and agents' },
      { label: 'Decisions accelerated', value: 'Daily standups informed by live metrics' }
    ],
    tech: ['Power BI', 'Excel', 'Python', 'SharePoint', 'Power Automate'],
    links: [
      { label: 'View reporting approach', href: 'https://github.com/akjroller' },
      { label: 'Indeed profile', href: 'https://profile.indeed.com/p/kristopherr-20y8qlr' }
    ]
  }
];
