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
    'A high-uptime Discord bot that keeps the Diablo 4 community in sync with world bosses, Helltide rotations, and legion events.',
  metrics: [
    { label: 'Community reach', value: '413k+ users across 3,500+ servers' },
    { label: 'Latency goal', value: '<500ms event delivery with caching + workers' },
    { label: 'Team', value: 'Led a distributed 5-person development squad' }
  ],
  tech: ['Python 3', 'AWS Lambda + Aurora', 'Redis', 'Discord API', 'Docker', 'CDN'],
  links: [
    { label: 'View on GitHub', href: 'https://github.com/akjroller' },
    { label: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/kristopher-roller-84775294/' },
    { label: 'See professional profile', href: 'https://profile.indeed.com/p/kristopherr-20y8qlr' }
  ],
  image: '/d4et-dashboard.svg'
};

export const secondaryProjects: ProjectSummary[] = [
  {
    title: 'The Roller Method Knowledge Base',
    description:
      'Built a living documentation system that pairs service playbooks with analytics, reducing onboarding time for new agents by 35%.',
    metrics: [
      { label: 'Documentation', value: '40+ articles with automatic changelog' },
      { label: 'Stakeholders', value: 'Adopted by operations + QA teams' }
    ],
    tech: ['Notion API', 'Next.js', 'Vercel Cron', 'Supabase'],
    links: [
      { label: 'View architecture', href: 'https://github.com/akjroller' },
      { label: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/kristopher-roller-84775294/' }
    ]
  },
  {
    title: 'Support Insights Automation',
    description:
      'Python tooling that surfaces daily KPIs, trending issue types, and recommended documentation updates straight to Slack.',
    metrics: [
      { label: 'Time saved', value: '3 hrs per week in manual reporting' },
      { label: 'Alerts', value: 'Trending tags + backlog spikes flagged automatically' }
    ],
    tech: ['Python', 'Pandas', 'Slack API', 'AWS EventBridge'],
    links: [
      { label: 'See sample notebook', href: 'https://github.com/akjroller' },
      { label: 'Indeed profile', href: 'https://profile.indeed.com/p/kristopherr-20y8qlr' }
    ]
  }
];
