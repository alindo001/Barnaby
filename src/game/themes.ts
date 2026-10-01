import { LevelTheme } from '../types/game';

export const THEMES: Record<string, LevelTheme> = {
  meadow: {
    name: 'Green Meadows',
    skyColorTop: '#38BDF8',
    skyColorBottom: '#BAE6FD',
    cloudColor: '#FFFFFF',
    mountainColor: '#6EE7B7',
    platformFill: '#4ADE80',
    platformTop: '#22C55E',
    platformBorder: '#16A34A',
    accentColor: '#F59E0B'
  },
  cavern: {
    name: 'Crystal Cavern',
    skyColorTop: '#1E1B4B',
    skyColorBottom: '#312E81',
    cloudColor: '#4338CA',
    mountainColor: '#3730A3',
    platformFill: '#6366F1',
    platformTop: '#818CF8',
    platformBorder: '#4F46E5',
    accentColor: '#A855F7'
  },
  lava: {
    name: 'Molten Core',
    skyColorTop: '#450A0A',
    skyColorBottom: '#7F1D1D',
    cloudColor: '#991B1B',
    mountainColor: '#B91C1C',
    platformFill: '#78350F',
    platformTop: '#D97706',
    platformBorder: '#92400E',
    accentColor: '#EF4444'
  },
  sky: {
    name: 'Sky Peaks',
    skyColorTop: '#701A75',
    skyColorBottom: '#EC4899',
    cloudColor: '#F472B6',
    mountainColor: '#DB2777',
    platformFill: '#38BDF8',
    platformTop: '#E0F2FE',
    platformBorder: '#0284C7',
    accentColor: '#F43F5E'
  },
  castle: {
    name: 'Midnight Citadel',
    skyColorTop: '#0F172A',
    skyColorBottom: '#1E293B',
    cloudColor: '#334155',
    mountainColor: '#1E293B',
    platformFill: '#475569',
    platformTop: '#94A3B8',
    platformBorder: '#334155',
    accentColor: '#FBBF24'
  },
  cyber: {
    name: 'Neon Cyber-Station',
    skyColorTop: '#050D1A',
    skyColorBottom: '#0F172A',
    cloudColor: '#1E293B',
    mountainColor: '#0E7490',
    platformFill: '#1E293B',
    platformTop: '#06B6D4',
    platformBorder: '#0891B2',
    accentColor: '#38BDF8'
  },
  reef: {
    name: 'Aquamarine Reef',
    skyColorTop: '#082F49',
    skyColorBottom: '#0284C7',
    cloudColor: '#BAE6FD',
    mountainColor: '#0369A1',
    platformFill: '#0D9488',
    platformTop: '#2DD4BF',
    platformBorder: '#0F766E',
    accentColor: '#38BDF8'
  },
  desert: {
    name: 'Twilight Dunes',
    skyColorTop: '#78350F',
    skyColorBottom: '#F59E0B',
    cloudColor: '#FEF3C7',
    mountainColor: '#B45309',
    platformFill: '#D97706',
    platformTop: '#FBBF24',
    platformBorder: '#B45309',
    accentColor: '#EF4444'
  },
  tundra: {
    name: 'Frostbite Tundra',
    skyColorTop: '#0C4A6E',
    skyColorBottom: '#38BDF8',
    cloudColor: '#F0F9FF',
    mountainColor: '#0284C7',
    platformFill: '#38BDF8',
    platformTop: '#E0F2FE',
    platformBorder: '#0284C7',
    accentColor: '#38BDF8'
  },
  toxic: {
    name: 'Toxic Bayou',
    skyColorTop: '#14532D',
    skyColorBottom: '#15803D',
    cloudColor: '#86EFAC',
    mountainColor: '#166534',
    platformFill: '#3F6212',
    platformTop: '#84CC16',
    platformBorder: '#365314',
    accentColor: '#A855F7'
  },
  twilight: {
    name: 'Twilight Eclipse',
    skyColorTop: '#0F172A',
    skyColorBottom: '#581C87',
    cloudColor: '#C084FC',
    mountainColor: '#3B0764',
    platformFill: '#4C1D95',
    platformTop: '#A855F7',
    platformBorder: '#3B0764',
    accentColor: '#EC4899'
  }
};
