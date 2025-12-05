export enum ProjectCategory {
  ALL = 'All',
  YOUTUBE = 'YouTube',
  REELS = 'Reels',
  SHORTS = 'Shorts'
}

export interface Project {
  id: string;
  title: string;
  client: string;
  category: ProjectCategory;
  thumbnail: string;
  description: string;
  stats?: string; // e.g., "1M+ Views"
}

export interface NavItem {
  label: string;
  href: string;
}