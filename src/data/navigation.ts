export interface NavigationItem {
  label: string;
  path: string;
}

export const navigation: NavigationItem[] = [
  { label: 'Overview', path: '/' },
  { label: 'My Story', path: '/about' },
  { label: 'Experience', path: '/experience' },
  { label: 'Proof & Initiatives', path: '/projects' },
  { label: 'Résumé & Downloads', path: '/resume' },
  { label: 'Connect', path: '/contact' }
];
