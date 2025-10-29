export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Kris has a unique ability to balance empathy and efficiency. When queues spike or customers escalate, he stays calm, provides solutions, and sets the tone for the team.',
    name: 'Kelli H.',
    role: 'Former Call Center Supervisor, Conduent'
  },
  {
    quote:
      'He transformed our knowledge base—his rewrites made policies understandable and actionable for new hires overnight.',
    name: 'Alex P.',
    role: 'Training Partner, NTT DATA'
  },
  {
    quote:
      'When others are stuck, Kris is already documenting the fix and sharing it with the rest of us. He’s a natural mentor and makes complex support issues easy to understand.',
    name: 'Jordan M.',
    role: 'Technical Support Peer, Retail Imaging'
  }
];
