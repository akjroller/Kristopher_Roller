export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Kristopher is the calm in the storm. When a queue spikes or a customer needs a supervisor, he steps in with empathy and gives the team a clear path forward.',
    name: 'Kelli H.',
    role: 'Former Call Center Supervisor, Conduent'
  },
  {
    quote:
      'He translates complex policy updates into step-by-step guides that agents can use immediately. It cut down on repeat questions and escalations overnight.',
    name: 'Alex P.',
    role: 'Training Partner, NTT DATA'
  },
  {
    quote:
      'If a teammate is stuck, Kristopher is already documenting the solution and sharing it with the rest of us. That consistency keeps our quality scores high.',
    name: 'Jordan M.',
    role: 'Remote Technical Support Peer'
  }
];
