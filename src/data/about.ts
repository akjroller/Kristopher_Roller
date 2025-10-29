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
      'Developed exceptional communication, empathy, and troubleshooting skills supporting diverse customer bases across benefits and financial programs. Consistently achieved top QA scores and became a trusted go-to resource for peers and leadership.'
  },
  {
    year: '2021 – 2022',
    title: 'Team Leadership & Coaching',
    description:
      'Advanced to Team Leader and Call Center Supervisor at Conduent, leading over 25 remote agents. Delivered ongoing coaching, QA reviews, and performance huddles that raised adherence and quality metrics by more than 10%.'
  },
  {
    year: '2023 – 2025',
    title: 'Insurance & Benefits Support',
    description:
      'Supported policyholders and agents at NTT DATA with professionalism and accuracy. Managed high call volumes (50–75 per day) while maintaining 95% QA. Partnered with management to document process gaps and enhance training materials.'
  },
  {
    year: '2025 – Present',
    title: 'Technical Service & Team Mentorship',
    description:
      'Provide enterprise-level technical support at Retail Imaging Management Group. Recognized for rapid response, clarity in communication, and mentoring peers through advanced troubleshooting and escalation handling while maintaining <5 min AHT.'
  }
];

export interface FunFact {
  label: string;
  value: string;
  icon: string;
}

export const funFacts: FunFact[] = [
  { label: 'Base of Operations', value: 'Richmond, IN · Fully Remote', icon: 'map-pin' },
  { label: 'Leadership Impact', value: 'Led and coached 25+ remote agents across multiple clients', icon: 'users' },
  { label: 'Efficiency Record', value: 'Sub-five-minute average handle time (AHT) with 95% QA', icon: 'timer' },
  { label: 'Documentation Strength', value: '40+ KB articles rewritten or audited for clarity and accuracy', icon: 'file-text' }
];
