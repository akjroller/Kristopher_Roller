export interface JourneyItem {
  year: string;
  title: string;
  description: string;
}

export const journey: JourneyItem[] = [
  {
    year: '2013 – 2020',
    title: 'Customer-first foundations',
    description:
      'Grew from frontline advocate to informal floor support, mastering empathy, compliance, and clear documentation while serving national customer programs.'
  },
  {
    year: '2021',
    title: 'Stepping into team leadership',
    description:
      'Moved from top-performing agent to team lead, coordinating updates, coaching sessions, and queue coverage that kept KPIs healthy during seasonal surges.'
  },
  {
    year: '2021 – 2022',
    title: 'Call center supervisor leadership',
    description:
      'Owned performance management for 25+ agents — hiring, scheduling, quality calibration, and daily operations — while stabilizing service for a national benefits program.'
  },
  {
    year: '2023 – Present',
    title: 'Remote technical support leadership',
    description:
      'Direct complex escalations, mentor peers, and modernize knowledge bases while piloting automation that keeps remote call center teams confident, informed, and ready for the next customer.'
  }
];

export interface FunFact {
  label: string;
  value: string;
  icon: string;
}

export const funFacts: FunFact[] = [
  { label: 'Remote HQ', value: 'Richmond, Indiana', icon: 'map-pin' },
  { label: 'Team size led', value: '25+ agents across three queues', icon: 'badge-check' },
  { label: 'Enablement toolkit', value: 'Knowledge ops, LMS content, QA rituals', icon: 'cpu' },
  { label: 'Automation win', value: 'D4ET bot powering 3,500+ servers', icon: 'bot' }
];
