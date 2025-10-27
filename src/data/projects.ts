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
  title: 'Operations Playbook & Knowledge Refresh',
  description:
    'A supervision-led enablement overhaul featuring new call flows, LMS content, and automated change management that kept remote agents aligned.',
  metrics: [
    { label: 'Articles refreshed', value: '40+ knowledge assets rewritten' },
    { label: 'Handle time impact', value: 'Sub-5 minute AHT maintained during rollout' },
    { label: 'Stakeholder coverage', value: 'Ops, QA, and product teams aligned weekly' }
  ],
  tech: ['Notion', 'Confluence', 'Zendesk', 'Power BI', 'Slack workflows', 'Python automation'],
  links: [
    { label: 'View enablement notes', href: 'https://github.com/akjroller' },
    { label: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/kristopher-roller-84775294/' },
    { label: 'See professional profile', href: 'https://profile.indeed.com/p/kristopherr-20y8qlr' }
  ],
  image: '/d4et-dashboard.svg'
};

export const secondaryProjects: ProjectSummary[] = [
  {
    title: 'Supervisor Command Center',
    description:
      'A Power BI and Excel reporting suite that aggregates AHT, QA, adherence, and sentiment to guide daily huddles and escalation reviews.',
    metrics: [
      { label: 'Visibility', value: 'Real-time dashboards for leaders and agents' },
      { label: 'Decisions accelerated', value: 'Daily standups informed by live metrics' }
    ],
    tech: ['Power BI', 'Excel', 'Python', 'SharePoint', 'Power Automate'],
    links: [
      { label: 'View reporting approach', href: 'https://github.com/akjroller' },
      { label: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/kristopher-roller-84775294/' }
    ]
  },
  {
    title: 'D4ET Automation Program',
    description:
      'Led a 5-person volunteer team delivering high-uptime event alerts — a proof point for how I run distributed support tooling with call center rigor.',
    metrics: [
      { label: 'Community served', value: '413K+ users across 3,500+ servers' },
      { label: 'Reliability', value: '<500ms alert delivery with redundancy' }
    ],
    tech: ['Python', 'AWS', 'PostgreSQL', 'Redis', 'Discord API', 'CDN'],
    links: [
      { label: 'View on GitHub', href: 'https://github.com/akjroller' },
      { label: 'Indeed profile', href: 'https://profile.indeed.com/p/kristopherr-20y8qlr' }
    ]
  }
];
