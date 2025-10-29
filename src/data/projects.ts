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
  title: 'Knowledge Base Modernization Initiative',
  description:
    'Led a cross-department review of 40+ internal knowledge base articles, standardizing tone, accuracy, and usability. Resulted in reduced escalations, faster handle times, and improved agent confidence.',
  metrics: [
    { label: 'Documentation Improved', value: '40+ articles rewritten and verified' },
    { label: 'Impact', value: 'Repeat escalations reduced by 18%' },
    { label: 'Efficiency', value: 'Improved call flow and reduced AHT sitewide' }
  ],
  tech: ['Notion', 'Confluence', 'SharePoint', 'Power BI', 'Excel'],
  links: [
    { label: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/kristopher-roller-84775294/' },
    { label: 'Professional Profile', href: 'https://profile.indeed.com/p/kristopherr-20y8qlr' }
  ],
  image: '/kb-refresh.svg'
};

export const secondaryProjects: ProjectSummary[] = [
  {
    title: 'Supervisor Dashboard Implementation',
    description:
      'Designed and maintained performance dashboards for supervisors to track QA, AHT, and adherence metrics in real time. Used Power BI and Excel to drive daily coaching and recognition meetings.',
    metrics: [
      { label: 'Adherence Gains', value: '+10% improvement within 30 days' },
      { label: 'Team Coverage', value: '25+ agents monitored daily with real-time feedback' }
    ],
    tech: ['Power BI', 'Excel', 'SharePoint', 'Teams'],
    links: [
      { label: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/kristopher-roller-84775294/' }
    ]
  }
];
