export interface JourneyItem {
  year: string;
  title: string;
  description: string;
}

export const journey: JourneyItem[] = [
  {
    year: '2012 – 2018',
    title: 'Customer care roots',
    description:
      'Cut my teeth in customer support, discovering the power of empathy, clear expectations, and documentation that meets people where they are.'
  },
  {
    year: '2019 – 2021',
    title: 'Leaning into technical troubleshooting',
    description:
      'Began bridging hardware, software, and SaaS environments. Developed a reputation for translating engineering jargon into actionable steps for customers.'
  },
  {
    year: '2021 – 2022',
    title: 'Leadership in fast-moving contact centers',
    description:
      'Led 25+ person remote teams, launching skill accelerators and feedback loops that lifted program KPIs while keeping retention high.'
  },
  {
    year: '2023 – Present',
    title: 'The Roller Method',
    description:
      'Pairing Agile practices with developer curiosity — architecting the D4ET bot, rewriting knowledge bases, and proving that clarity plus consistency drives loyalty.'
  }
];

export interface FunFact {
  label: string;
  value: string;
  icon: string;
}

export const funFacts: FunFact[] = [
  { label: 'Home base', value: 'Richmond, Indiana', icon: 'map-pin' },
  { label: 'Certifications', value: 'Agile & Scrum Certified', icon: 'badge-check' },
  { label: 'Tech passions', value: 'Python, Docker & automation', icon: 'cpu' },
  { label: 'Community build', value: 'Creator of the D4ET bot', icon: 'bot' }
];
