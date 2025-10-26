export interface JourneyItem {
  year: string;
  title: string;
  description: string;
}

export const journey: JourneyItem[] = [
  {
    year: '2012 – 2018',
    title: 'Call center foundations',
    description:
      'Learned the craft on the phones — practicing active listening, de-escalation, and documentation hygiene while supporting national programs.'
  },
  {
    year: '2019 – 2021',
    title: 'Leaning into technical troubleshooting',
    description:
      'Bridged hardware, software, and SaaS environments, translating engineering language into confident next steps for customers and teammates.'
  },
  {
    year: '2021 – 2022',
    title: 'Supervisor leadership in fast-moving centers',
    description:
      'Led 25+ person remote teams, launching skill accelerators and feedback loops that lifted KPIs while protecting morale and retention.'
  },
  {
    year: '2023 – Present',
    title: 'The Roller Method',
    description:
      'Pairing Agile practices with developer curiosity — architecting the D4ET bot, rebuilding knowledge bases, and proving that clarity plus consistency drives loyalty.'
  }
];

export interface FunFact {
  label: string;
  value: string;
  icon: string;
}

export const funFacts: FunFact[] = [
  { label: 'Home base', value: 'Richmond, Indiana', icon: 'map-pin' },
  { label: 'Leadership focus', value: 'Supervisor & coach for 25+ agents', icon: 'badge-check' },
  { label: 'Tech passions', value: 'Python, TypeScript & automation', icon: 'cpu' },
  { label: 'Community build', value: 'Creator of the D4ET bot', icon: 'bot' }
];
