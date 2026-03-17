import type { CalculatorServiceConfig } from './calculatorRangesPestControl';

export const CALCULATOR_CONFIG: Record<string, CalculatorServiceConfig> = {
  'roof-repair': {
    kind: 'single',
    label: 'Type of repair needed',
    options: [
      { label: 'Shingle replacement (few shingles)', value: 'shingle-minor', min: 150, max: 400 },
      { label: 'Flashing repair', value: 'flashing', min: 200, max: 500 },
      { label: 'Leak diagnosis & repair', value: 'leak', min: 300, max: 900 },
      { label: 'Multiple areas / storm damage', value: 'multi', min: 600, max: 1500 },
    ],
  },
  'roof-replacement': {
    kind: 'single',
    label: 'Roofing material',
    options: [
      { label: 'Asphalt shingles (standard)', value: 'asphalt', min: 8000, max: 15000 },
      { label: 'Architectural shingles (premium)', value: 'architectural', min: 10000, max: 18000 },
      { label: 'Metal roofing', value: 'metal', min: 15000, max: 30000 },
      { label: 'Tile roofing', value: 'tile', min: 18000, max: 40000 },
    ],
  },
  'storm-damage-repair': {
    kind: 'single',
    label: 'Damage severity',
    options: [
      { label: 'Minor (granule loss, few shingles)', value: 'minor', min: 500, max: 2000 },
      { label: 'Moderate (partial replacement needed)', value: 'moderate', min: 2000, max: 8000 },
      { label: 'Severe (full replacement likely)', value: 'severe', min: 8000, max: 20000 },
      { label: 'Emergency tarping only', value: 'tarp', min: 200, max: 500 },
    ],
  },
  'roof-inspection': {
    kind: 'single',
    label: 'Inspection type',
    options: [
      { label: 'Free inspection (no obligation)', value: 'free', min: 0, max: 0 },
      { label: 'Independent third-party report', value: 'independent', min: 150, max: 350 },
    ],
  },
  'metal-roofing': {
    kind: 'single',
    label: 'Metal roofing system',
    options: [
      { label: 'Exposed fastener panels (budget)', value: 'panels', min: 10000, max: 16000 },
      { label: 'Metal shingles', value: 'shingles', min: 12000, max: 22000 },
      { label: 'Standing seam (premium)', value: 'standing-seam', min: 15000, max: 30000 },
    ],
  },
  'flat-roof-repair': {
    kind: 'single',
    label: 'Repair scope',
    options: [
      { label: 'Minor patch / seam repair', value: 'minor', min: 400, max: 1500 },
      { label: 'Ponding water correction', value: 'ponding', min: 1500, max: 4000 },
      { label: 'Full membrane replacement', value: 'full', min: 4000, max: 12000 },
    ],
  },
  'gutter-installation': {
    kind: 'single',
    label: 'Gutter type',
    options: [
      { label: 'Seamless aluminum (5-inch)', value: 'aluminum-5', min: 600, max: 1400 },
      { label: 'Seamless aluminum (6-inch)', value: 'aluminum-6', min: 800, max: 1800 },
      { label: 'With gutter guards added', value: 'with-guards', min: 1200, max: 2800 },
      { label: 'Copper gutters (premium)', value: 'copper', min: 2000, max: 5000 },
    ],
  },
  'emergency-roof-repair': {
    kind: 'single',
    label: 'Emergency service needed',
    options: [
      { label: 'Emergency tarping only', value: 'tarp', min: 200, max: 500 },
      { label: 'Tarp + same-day repair', value: 'tarp-repair', min: 500, max: 1500 },
      { label: 'Fallen tree removal + repair', value: 'tree', min: 800, max: 5000 },
    ],
  },
};
