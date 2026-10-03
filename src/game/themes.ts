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
  },
  neonNight: {
    id: 'neon_night',
    name: 'Neon Night',
    skyColorTop: '#060312',
    skyColorBottom: '#240647',
    cloudColor: '#FF007F',
    mountainColor: '#0E0728',
    platformFill: '#0D1117',
    platformTop: '#00F0FF',
    platformBorder: '#FF007F',
    accentColor: '#00F0FF',
    neonCyan: '#00F0FF',
    neonMagenta: '#FF007F',
    neonPurple: '#A855F7',
    neonYellow: '#FFE600',
    gridLineColor: 'rgba(0, 240, 255, 0.35)',
    sunColor: '#FF007F'
  },
  space: {
    id: 'space_station',
    name: 'Cosmic Deep Space',
    skyColorTop: '#02000A',
    skyColorBottom: '#0A051E',
    cloudColor: '#7C3AED',
    mountainColor: '#120A2A',
    platformFill: '#0B0F19',
    platformTop: '#38BDF8',
    platformBorder: '#818CF8',
    accentColor: '#38BDF8',
    spaceVoid: '#010008',
    spaceNebula1: 'rgba(124, 58, 237, 0.28)',
    spaceNebula2: 'rgba(56, 189, 248, 0.22)',
    spaceStarColor: '#F8FAFC'
  },
  volcano: {
    id: 'volcano_inferno',
    name: 'Infernal Volcano',
    skyColorTop: '#0F0303',
    skyColorBottom: '#3D0707',
    cloudColor: '#7F1D1D',
    mountainColor: '#260606',
    platformFill: '#1C1917',   // Basalt obsidian rock
    platformTop: '#EA580C',    // Scorched magma crust
    platformBorder: '#DC2626', // Crimson molten edge
    accentColor: '#F97316',    // Blazing orange
    magmaGlow: 'rgba(239, 68, 68, 0.45)',
    emberColor: '#FDE047'
  },
  glacier: {
    id: 'glacial_aurora',
    name: 'Borealis Glacier',
    skyColorTop: '#020617',
    skyColorBottom: '#0A2540',
    cloudColor: '#38BDF8',
    mountainColor: '#0F172A',
    platformFill: '#0F2038',   // Deep permafrost bedrock
    platformTop: '#7DD3FC',    // Frosted crystalline ice cap
    platformBorder: '#0284C7', // Vivid cryo-blue border
    accentColor: '#38BDF8',    // Electric aurora cyan
    auroraGreen: 'rgba(16, 185, 129, 0.4)',
    auroraCyan: 'rgba(6, 182, 212, 0.45)',
    auroraPurple: 'rgba(168, 85, 247, 0.35)',
    frostGlow: 'rgba(56, 189, 248, 0.45)',
    iceShimmer: '#E0F2FE'
  },
  deepSea: {
    id: 'deep_sea',
    name: 'Abyssal Deep Sea',
    skyColorTop: '#020B14',      // Deep midnight abyss
    skyColorBottom: '#042A42',   // Sunken ocean trench
    cloudColor: 'rgba(34, 211, 238, 0.25)', // Ambient bioluminescent mist
    mountainColor: '#031E30',   // Sunken trench silhouettes / coral ridges
    platformFill: '#062033',    // Sunken coral bedrock
    platformTop: '#06B6D4',     // Phosphorescent turquoise sea bed
    platformBorder: '#0284C7',  // Oceanic cerulean border
    accentColor: '#22D3EE',     // Bioluminescent cyan
    waterColor: 'rgba(6, 78, 119, 0.35)', // Ambient water overlay
    bioluminescence: '#38BDF8',
    bubbleColor: 'rgba(186, 230, 253, 0.7)',
    coralGlow: 'rgba(45, 212, 191, 0.45)'
  }
};
