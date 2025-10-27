export interface JourneyItem {
  year: string;
  title: string;
  description: string;
}

export const journey: JourneyItem[] = [
  {
    year: '2013 – 2021',
    title: 'Customer Support Foundations',
    description:
      'Built empathy, communication, and troubleshooting skills supporting customers across benefits and financial programs. Became the go-to resource for quick, accurate answers and dependable service.'
  },
  {
    year: '2021 – 2022',
    title: 'Call Center Leadership',
    description:
      'Promoted to Team Leader and later Supervisor at Conduent, guiding 25+ agents remotely through hiring, QA, scheduling, and performance management. Helped agents stay engaged, confident, and accountable.'
  },
  {
    year: '2023 – 2025',
    title: 'Insurance & Benefits Support',
    description:
      'Supported NTT DATA policyholders, beneficiaries, and agents with accuracy and professionalism. Consistently handled 50–75 calls per day while maintaining strong service and compliance metrics.'
  },
  {
    year: '2025 – Present',
    title: 'Technical Support & Escalations',
    description:
      'Serving enterprise retail clients at Retail Imaging as a Technical Service Representative. Known for rapid response times, clear communication, and mentoring teammates through complex support issues.'
  }
];

export interface FunFact {
  label: string;
  value: string;
  icon: string;
}

export const funFacts: FunFact[] = [
  { label: 'Base of operations', value: 'Richmond, IN · Fully remote ready', icon: 'map-pin' },
  { label: 'Core metric', value: 'Sub-five-minute average handle time (AHT)', icon: 'timer' },
  { label: 'Team impact', value: 'Trained, coached, and supported 25+ agents through performance growth', icon: 'users' },
  { label: 'Documentation strength', value: 'Known for rewriting and improving internal knowledge base content', icon: 'file-text' }
];
