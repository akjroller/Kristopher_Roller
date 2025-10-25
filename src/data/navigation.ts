export interface NavigationItem {
  label: string;
  path: string;
}

export const navigation: NavigationItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects', path: '/projects' },
  { label: 'Resume', path: '/resume' },
  { label: 'Contact', path: '/contact' }
];
