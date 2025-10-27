export interface JourneyItem {
  year: string;
  title: string;
  description: string;
}

export const journey: JourneyItem[] = [
  {
    year: '2013 – 2021',
    title: 'Customer support foundations',
    description:
      'Built deep empathy and troubleshooting instincts while serving customers across benefits and financial programs, often becoming the go-to resource for peers needing quick answers.'
  },
  {
    year: '2021 – 2022',
    title: 'Call center leadership',
    description:
      'Advanced to team leader and supervisor at Conduent, guiding 25+ remote agents through hiring, coaching, QA, payroll, and performance delivery during high-volume seasons.'
  },
  {
    year: '2023 – 2025',
    title: 'Insurance & benefits expertise',
    description:
      'Supported NTT DATA policyholders, beneficiaries, and agents while handling 50–75 calls per day, mapping processes, and coordinating improvements with leadership.'
  },
  {
    year: '2025 – Present',
    title: 'Technical support & escalations',
    description:
      'Serve enterprise clients as a technical service representative and resolution specialist, keeping AHT under five minutes, rewriting knowledge articles, and mentoring teammates through complex security and software issues.'
  }
];

export interface FunFact {
  label: string;
  value: string;
  icon: string;
}

export const funFacts: FunFact[] = [
  { label: 'Base of operations', value: 'Richmond, IN · Remote ready', icon: 'map-pin' },
  { label: 'Support metrics', value: 'Average handle time consistently under 5 minutes', icon: 'badge-check' },
  { label: 'Documentation impact', value: 'Dozens of knowledge base and process updates shipped', icon: 'cpu' },
  { label: 'Automation proof', value: 'D4ET bot serving 413K+ users across 3,500+ servers', icon: 'bot' }
];
