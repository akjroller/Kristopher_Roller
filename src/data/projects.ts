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
  title: 'Knowledge Base Refresh',
  description:
    'Audited and updated 40+ internal articles and macros to improve accuracy, reduce handle times, and clarify complex procedures for agents and customers.',
  metrics: [
    { label: 'Articles updated', value: '40+ resources rewritten or audited' },
    { label: 'Handle time focus', value: 'Reduced confusion during 50–75 daily calls' },
    { label: 'Team alignment', value: 'Coaching, QA, and change logs synced across channels' }
  ],
  tech: ['Notion', 'Confluence', 'Zendesk', 'SharePoint', 'Excel', 'Power BI'],
  links: [
    { label: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/kristopher-roller-84775294/' },
    { label: 'See professional profile', href: 'https://profile.indeed.com/p/kristopherr-20y8qlr' }
  ],
  image: '/d4et-dashboard.svg'
};

export const secondaryProjects: ProjectSummary[] = [
  {
    title: 'Supervisor Dashboard Implementation',
    description:
      'Created and maintained Excel and Power BI reporting dashboards to track AHT, QA, and adherence for daily coaching and performance meetings.',
    metrics: [
      { label: 'Visibility', value: 'Live dashboards for supervisors and agents' },
      { label: 'Coaching support', value: 'Daily huddles guided by actionable metrics' }
    ],
    tech: ['Power BI', 'Excel', 'SharePoint', 'Teams'],
    links: [
      { label: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/kristopher-roller-84775294/' },
      { label: 'See professional profile', href: 'https://profile.indeed.com/p/kristopherr-20y8qlr' }
    ]
  }
];
