import { CharacterConfig, CharacterType, HatType, OutfitType, ExpressionType } from '../types/game';

export interface CharacterMeta {
  id: CharacterType;
  name: string;
  species: string;
  emoji: string;
  tagline: string;
  description: string;
  specialFeatureName: string;
  specialOptions: { id: string; label: string }[];
}

export const CHARACTERS_META: Record<CharacterType, CharacterMeta> = {
  bird: {
    id: 'bird',
    name: 'Pip the Bird',
    species: 'Bluebird',
    emoji: '🐦',
    tagline: 'Swift Aerial Explorer',
    description: 'The brave feathered protagonist. Quick on their feet with breezy wing flutters and agile jumps.',
    specialFeatureName: 'Head Crest / Plume',
    specialOptions: [
      { id: 'crest', label: 'Feather Crest' },
      { id: 'tuft', label: 'Cute Tuft' },
      { id: 'classic', label: 'Smooth Plumage' }
    ]
  },
  frog: {
    id: 'frog',
    name: 'Ribbit the Frog',
    species: 'Treefrog',
    emoji: '🐸',
    tagline: 'Boundless Marsh Hopper',
    description: 'Energetic and buoyant amphibian. Always ready for a colossal leap with a delightful smile.',
    specialFeatureName: 'Cheeks & Patterns',
    specialOptions: [
      { id: 'blush', label: 'Rosy Blushing Cheeks' },
      { id: 'dots', label: 'Dotted Spot Marks' },
      { id: 'stripes', label: 'Poison Dart Streaks' },
      { id: 'clean', label: 'Smooth Vibrant Coat' }
    ]
  },
  axolotl: {
    id: 'axolotl',
    name: 'Lottie the Axolotl',
    species: 'Axolotl',
    emoji: '🌊',
    tagline: 'Enchanted Aquatic Friend',
    description: 'The whimsical smiling water dragon featuring glorious, wavy external gill frills that sway gently.',
    specialFeatureName: 'External Gill Style',
    specialOptions: [
      { id: 'fluffy', label: 'Fluffy Feather Gills' },
      { id: 'spiky', label: 'Coral Spikes' },
      { id: 'starry', label: 'Luminescent Stars' },
      { id: 'crown', label: 'Regal Crown Frills' }
    ]
  },
  capybara: {
    id: 'capybara',
    name: 'Chilli the Capybara',
    species: 'Capybara',
    emoji: '🦫',
    tagline: 'Supreme Zen Master',
    description: 'The friendliest creature on earth. Utterly unbothered, radiates serene joy, and loves warm onsen springs.',
    specialFeatureName: 'Head Resting Item',
    specialOptions: [
      { id: 'yuzu', label: 'Onsen Yuzu Orange 🍊' },
      { id: 'sprout', label: 'Tiny Green Sprout 🌱' },
      { id: 'coffee', label: 'Mini Cozy Mug ☕' },
      { id: 'none', label: 'Clean Natural Ears' }
    ]
  }
};

export const DEFAULT_CHARACTER_CONFIGS: Record<CharacterType, CharacterConfig> = {
  bird: {
    type: 'bird',
    primaryColor: '#3B82F6',
    secondaryColor: '#F59E0B',
    accentColor: '#1D4ED8',
    hat: 'bandana',
    hatColor: '#EF4444',
    outfit: 'none',
    outfitColor: '#10B981',
    expression: 'happy',
    specialFeature: 'crest',
    specialColor: '#1E40AF'
  },
  frog: {
    type: 'frog',
    primaryColor: '#22C55E',
    secondaryColor: '#FEF08A',
    accentColor: '#15803D',
    hat: 'crown',
    hatColor: '#EAB308',
    outfit: 'bowtie',
    outfitColor: '#EF4444',
    expression: 'happy',
    specialFeature: 'blush',
    specialColor: '#FB7185'
  },
  axolotl: {
    type: 'axolotl',
    primaryColor: '#F472B6',
    secondaryColor: '#FB7185',
    accentColor: '#DB2777',
    hat: 'flower',
    hatColor: '#FBBF24',
    outfit: 'scarf',
    outfitColor: '#38BDF8',
    expression: 'sparkle',
    specialFeature: 'fluffy',
    specialColor: '#EC4899'
  },
  capybara: {
    type: 'capybara',
    primaryColor: '#92400E',
    secondaryColor: '#D97706',
    accentColor: '#78350F',
    hat: 'none',
    hatColor: '#F59E0B',
    outfit: 'scarf',
    outfitColor: '#10B981',
    expression: 'cool',
    specialFeature: 'yuzu',
    specialColor: '#F59E0B'
  }
};

export interface CharacterPreset {
  id: string;
  name: string;
  config: CharacterConfig;
}

export const CHARACTER_PRESETS: Record<CharacterType, CharacterPreset[]> = {
  bird: [
    {
      id: 'bluejay',
      name: 'Classic Bluejay',
      config: {
        type: 'bird',
        primaryColor: '#3B82F6',
        secondaryColor: '#F59E0B',
        accentColor: '#1D4ED8',
        hat: 'bandana',
        hatColor: '#EF4444',
        outfit: 'none',
        outfitColor: '#10B981',
        expression: 'happy',
        specialFeature: 'crest',
        specialColor: '#1E40AF'
      }
    },
    {
      id: 'cardinal',
      name: 'Royal Cardinal',
      config: {
        type: 'bird',
        primaryColor: '#EF4444',
        secondaryColor: '#FEF08A',
        accentColor: '#B91C1C',
        hat: 'crown',
        hatColor: '#F59E0B',
        outfit: 'cape',
        outfitColor: '#991B1B',
        expression: 'determined',
        specialFeature: 'tuft',
        specialColor: '#7F1D1D'
      }
    },
    {
      id: 'canary',
      name: 'Golden Finch',
      config: {
        type: 'bird',
        primaryColor: '#FBBF24',
        secondaryColor: '#FFFFFF',
        accentColor: '#D97706',
        hat: 'flower',
        hatColor: '#EC4899',
        outfit: 'scarf',
        outfitColor: '#10B981',
        expression: 'sparkle',
        specialFeature: 'classic',
        specialColor: '#B45309'
      }
    },
    {
      id: 'raven',
      name: 'Midnight Raven',
      config: {
        type: 'bird',
        primaryColor: '#1E293B',
        secondaryColor: '#818CF8',
        accentColor: '#0F172A',
        hat: 'sunglasses',
        hatColor: '#0F172A',
        outfit: 'bowtie',
        outfitColor: '#6366F1',
        expression: 'cool',
        specialFeature: 'crest',
        specialColor: '#334155'
      }
    }
  ],
  frog: [
    {
      id: 'treefrog',
      name: 'Treefrog Hopper',
      config: {
        type: 'frog',
        primaryColor: '#22C55E',
        secondaryColor: '#FEF08A',
        accentColor: '#15803D',
        hat: 'beanie',
        hatColor: '#3B82F6',
        outfit: 'none',
        outfitColor: '#10B981',
        expression: 'happy',
        specialFeature: 'blush',
        specialColor: '#FB7185'
      }
    },
    {
      id: 'prince',
      name: 'Frog Prince',
      config: {
        type: 'frog',
        primaryColor: '#16A34A',
        secondaryColor: '#FDE047',
        accentColor: '#15803D',
        hat: 'crown',
        hatColor: '#EAB308',
        outfit: 'cape',
        outfitColor: '#7C3AED',
        expression: 'sparkle',
        specialFeature: 'dots',
        specialColor: '#14532D'
      }
    },
    {
      id: 'poisondart',
      name: 'Poison Dart Neon',
      config: {
        type: 'frog',
        primaryColor: '#F97316',
        secondaryColor: '#06B6D4',
        accentColor: '#EA580C',
        hat: 'sunglasses',
        hatColor: '#0F172A',
        outfit: 'bowtie',
        outfitColor: '#06B6D4',
        expression: 'cool',
        specialFeature: 'stripes',
        specialColor: '#0284C7'
      }
    },
    {
      id: 'aquafrog',
      name: 'Aqua Lilypad',
      config: {
        type: 'frog',
        primaryColor: '#06B6D4',
        secondaryColor: '#E0F2FE',
        accentColor: '#0891B2',
        hat: 'flower',
        hatColor: '#F472B6',
        outfit: 'scarf',
        outfitColor: '#F59E0B',
        expression: 'winking',
        specialFeature: 'blush',
        specialColor: '#F43F5E'
      }
    }
  ],
  axolotl: [
    {
      id: 'bubblegum',
      name: 'Bubblegum Pink',
      config: {
        type: 'axolotl',
        primaryColor: '#F472B6',
        secondaryColor: '#FB7185',
        accentColor: '#DB2777',
        hat: 'flower',
        hatColor: '#FBBF24',
        outfit: 'scarf',
        outfitColor: '#38BDF8',
        expression: 'sparkle',
        specialFeature: 'fluffy',
        specialColor: '#EC4899'
      }
    },
    {
      id: 'abyssal',
      name: 'Midnight Abyssal',
      config: {
        type: 'axolotl',
        primaryColor: '#312E81',
        secondaryColor: '#A855F7',
        accentColor: '#1E1B4B',
        hat: 'wizard',
        hatColor: '#6366F1',
        outfit: 'cape',
        outfitColor: '#4F46E5',
        expression: 'cool',
        specialFeature: 'spiky',
        specialColor: '#C084FC'
      }
    },
    {
      id: 'goldenglow',
      name: 'Golden Albino',
      config: {
        type: 'axolotl',
        primaryColor: '#FDE047',
        secondaryColor: '#FB923C',
        accentColor: '#CA8A04',
        hat: 'crown',
        hatColor: '#F59E0B',
        outfit: 'bowtie',
        outfitColor: '#EC4899',
        expression: 'happy',
        specialFeature: 'starry',
        specialColor: '#F97316'
      }
    },
    {
      id: 'cottoncandy',
      name: 'Cotton Candy',
      config: {
        type: 'axolotl',
        primaryColor: '#38BDF8',
        secondaryColor: '#F472B6',
        accentColor: '#0284C7',
        hat: 'partyhat',
        hatColor: '#FBBF24',
        outfit: 'vest',
        outfitColor: '#818CF8',
        expression: 'winking',
        specialFeature: 'crown',
        specialColor: '#EC4899'
      }
    }
  ],
  capybara: [
    {
      id: 'onsen',
      name: 'Onsen Master',
      config: {
        type: 'capybara',
        primaryColor: '#92400E',
        secondaryColor: '#D97706',
        accentColor: '#78350F',
        hat: 'none',
        hatColor: '#F59E0B',
        outfit: 'scarf',
        outfitColor: '#10B981',
        expression: 'cool',
        specialFeature: 'yuzu',
        specialColor: '#F59E0B'
      }
    },
    {
      id: 'gentleman',
      name: 'Gentleman Capy',
      config: {
        type: 'capybara',
        primaryColor: '#78350F',
        secondaryColor: '#B45309',
        accentColor: '#451A03',
        hat: 'tophat',
        hatColor: '#0F172A',
        outfit: 'bowtie',
        outfitColor: '#EF4444',
        expression: 'happy',
        specialFeature: 'none',
        specialColor: '#78350F'
      }
    },
    {
      id: 'sprout',
      name: 'Sprout Wanderer',
      config: {
        type: 'capybara',
        primaryColor: '#A16207',
        secondaryColor: '#FCD34D',
        accentColor: '#713F12',
        hat: 'sunglasses',
        hatColor: '#1E293B',
        outfit: 'vest',
        outfitColor: '#0D9488',
        expression: 'sparkle',
        specialFeature: 'sprout',
        specialColor: '#22C55E'
      }
    },
    {
      id: 'cozycoffee',
      name: 'Cozy Coffee',
      config: {
        type: 'capybara',
        primaryColor: '#5C2D16',
        secondaryColor: '#D97706',
        accentColor: '#3E1C0A',
        hat: 'beanie',
        hatColor: '#F97316',
        outfit: 'scarf',
        outfitColor: '#3B82F6',
        expression: 'winking',
        specialFeature: 'coffee',
        specialColor: '#78350F'
      }
    }
  ]
};

export const COLOR_SWATCHES = {
  primary: [
    '#3B82F6', // Blue
    '#22C55E', // Green
    '#EF4444', // Red
    '#F97316', // Orange
    '#FBBF24', // Amber/Yellow
    '#F472B6', // Pink
    '#A855F7', // Purple
    '#06B6D4', // Cyan
    '#92400E', // Chestnut Brown
    '#78350F', // Dark Brown
    '#64748B', // Slate
    '#1E293B'  // Dark Navy
  ],
  secondary: [
    '#FEF08A', // Cream Yellow
    '#F59E0B', // Golden Amber
    '#FB7185', // Coral Pink
    '#38BDF8', // Sky Blue
    '#4ADE80', // Soft Green
    '#E0F2FE', // Ice White
    '#FFFFFF', // Pure White
    '#FDE047', // Lemon
    '#D97706', // Warm Amber
    '#CBD5E1', // Silver
    '#C084FC', // Light Violet
    '#1E293B'  // Midnight
  ],
  accessories: [
    '#EF4444', // Crimson Red
    '#F59E0B', // Gold
    '#10B981', // Emerald
    '#3B82F6', // Royal Blue
    '#8B5CF6', // Purple
    '#EC4899', // Hot Pink
    '#06B6D4', // Cyan
    '#1E293B', // Charcoal
    '#FFFFFF', // White
    '#EAB308'  // Golden Yellow
  ]
};

export const HATS_LIST: { id: HatType; label: string; icon: string }[] = [
  { id: 'none', label: 'No Hat', icon: '❌' },
  { id: 'bandana', label: 'Bandana', icon: '🧣' },
  { id: 'beanie', label: 'Winter Beanie', icon: '🧶' },
  { id: 'crown', label: 'Royal Crown', icon: '👑' },
  { id: 'tophat', label: 'Gentleman Top Hat', icon: '🎩' },
  { id: 'flower', label: 'Tropical Flower', icon: '🌸' },
  { id: 'sunglasses', label: 'Cool Shades', icon: '🕶️' },
  { id: 'headband', label: 'Ninja Headband', icon: '🥋' },
  { id: 'partyhat', label: 'Party Cone', icon: '🎉' },
  { id: 'wizard', label: 'Sorcerer Hat', icon: '🧙' }
];

export const OUTFITS_LIST: { id: OutfitType; label: string; icon: string }[] = [
  { id: 'none', label: 'Natural / None', icon: '❌' },
  { id: 'scarf', label: 'Fluffy Scarf', icon: '🧣' },
  { id: 'cape', label: 'Heroic Cape', icon: '🦸' },
  { id: 'bowtie', label: 'Classy Bowtie', icon: '🎀' },
  { id: 'vest', label: 'Adventurer Vest', icon: '🦺' }
];

export const EXPRESSIONS_LIST: { id: ExpressionType; label: string; emoji: string }[] = [
  { id: 'happy', label: 'Joyful & Bright', emoji: '😊' },
  { id: 'sparkle', label: 'Anime Sparkle Eyes', emoji: '✨' },
  { id: 'cool', label: 'Super Chill', emoji: '😎' },
  { id: 'determined', label: 'Brave Adventurer', emoji: '🔥' },
  { id: 'winking', label: 'Cheeky Wink', emoji: '😉' }
];

const STORAGE_KEY = 'platformer_character_config_v2';

export function loadCharacterConfig(): CharacterConfig {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.type && CHARACTERS_META[parsed.type as CharacterType]) {
        return parsed as CharacterConfig;
      }
    }
  } catch (err) {
    console.warn('Failed to load character config, using default', err);
  }
  return { ...DEFAULT_CHARACTER_CONFIGS.bird };
}

export function saveCharacterConfig(config: CharacterConfig): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch (err) {
    console.warn('Failed to save character config', err);
  }
}
