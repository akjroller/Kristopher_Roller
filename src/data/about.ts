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
      'Built empathy, communication, and troubleshooting skills supporting customers across benefits and financial programs. Became the go-to resource for accurate answers and de-escalation, earning consistent 95%+ QA scores.'
  },
  {
    year: '2021 – 2022',
    title: 'Call Center Leadership',
    description:
      'Promoted to Team Leader and later Supervisor at Conduent, guiding 25+ agents remotely through hiring, QA, scheduling, and performance management. Implemented daily scorecards and huddles that improved adherence and reduced escalations by double digits.'
  },
  {
    year: '2023 – 2025',
    title: 'Insurance & Benefits Support',
    description:
      'Supported NTT DATA policyholders, beneficiaries, and agents with accuracy and professionalism. Consistently handled 50–75 calls per day while maintaining 95% QA and documenting trending issues for leadership reviews.'
  },
  {
    year: '2025 – Present',
    title: 'Technical Support & Escalations',
    description:
      'Serving enterprise retail clients at Retail Imaging as a Technical Service Representative. Known for rapid response times, clear communication, and mentoring teammates through complex support issues while maintaining sub-five-minute AHT.'
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
  { label: 'Documentation strength', value: '40+ knowledge base assets refreshed to cut repeat escalations by 18%', icon: 'file-text' }
];
