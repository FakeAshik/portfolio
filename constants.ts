import { Project, ProjectCategory } from './types';
import { Layers, Video, Zap, TrendingUp } from 'lucide-react';

export const HERO_TAGLINE = "EDITING THAT GROWS BRANDS.";
export const HERO_SUBTEXT = "I turn raw footage into retention-focused content for creators and brands.";

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Neon City Nightlife',
    client: 'Travel Vlogs Co.',
    category: ProjectCategory.YOUTUBE,
    thumbnail: 'https://picsum.photos/id/15/800/450',
    description: 'A cinematic travel vlog focusing on the nightlife of Tokyo using dynamic transitions.',
    stats: '1.2M Views'
  },
  {
    id: '2',
    title: 'High Performance Gym',
    client: 'FitLife Brand',
    category: ProjectCategory.REELS,
    thumbnail: 'https://picsum.photos/id/96/400/700', // Portrait aspect
    description: 'Fast-paced fitness motivation reel designed for maximum retention on Instagram.',
    stats: '500k Likes'
  },
  {
    id: '3',
    title: 'Tech Review: The Future',
    client: 'TechDaily',
    category: ProjectCategory.YOUTUBE,
    thumbnail: 'https://picsum.photos/id/3/800/450',
    description: 'Clean, Apple-style editing for a gadget review channel.',
    stats: '89% Retention'
  },
  {
    id: '4',
    title: 'Streetwear Drop',
    client: 'Urban Wear',
    category: ProjectCategory.SHORTS,
    thumbnail: 'https://picsum.photos/id/103/400/700',
    description: 'Hype-building short for a new clothing line launch.',
    stats: 'Viral Hit'
  },
  {
    id: '5',
    title: 'Minimalist Workspace',
    client: 'Setup Wars',
    category: ProjectCategory.REELS,
    thumbnail: 'https://picsum.photos/id/60/400/700',
    description: 'Aesthetic desk setup tour with smooth speed ramps.',
    stats: '250k Views'
  },
  {
    id: '6',
    title: 'Nature Documentary',
    client: 'Earth Files',
    category: ProjectCategory.YOUTUBE,
    thumbnail: 'https://picsum.photos/id/28/800/450',
    description: 'Color grading mastery showcased in this mini-documentary about forests.',
    stats: 'Award Winner'
  }
];

export const SKILLS = [
  { name: 'Premiere Pro', icon: Layers },
  { name: 'After Effects', icon: Video },
  { name: 'Sound Design', icon: Zap },
  { name: 'Retention Strategy', icon: TrendingUp },
];