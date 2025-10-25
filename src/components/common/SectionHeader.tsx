import { ReactNode } from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: 'left' | 'center';
}

const SectionHeader = ({ eyebrow, title, description, align = 'left' }: SectionHeaderProps) => (
  <div className={`space-y-4 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
    <h2 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">{title}</h2>
    {description ? <p className={`max-w-3xl text-base text-slate-300 md:text-lg ${align === 'center' ? 'mx-auto' : ''}`}>{description}</p> : null}
  </div>
);

export default SectionHeader;
