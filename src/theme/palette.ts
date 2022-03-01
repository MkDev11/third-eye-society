import { PaletteMode } from '@mui/material';

export const light = {
  alternate: {
    main: '#f7faff',
    dark: '#edf1f7',
  },
  cardShadow: 'rgba(23, 70, 161, .11)',
  mode: 'light' as PaletteMode,
  primary: {
    main: '#377dff',
    light: '#467de3',
    dark: '#2f6ad9',
    contrastText: '#fff',
  },
  secondary: {
    light: '#f9b934',
    main: '#f9b934',
    dark: '#f9b934',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  text: {
    primary: '#1e2022',
    secondary: '#ffff99',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  background: {
    paper: '#FFFFE0',
    default: '#EEE8AA',
    level2: '#EEE8AA',
    level1: '#EEE8AA',
  },
};

export const dark = {
  alternate: {
    main: '#1a2138',
    dark: '#151a30',
  },
  cardShadow: 'rgba(0, 0, 0, .11)',
  common: {
    black: '#000',
    white: '#fff',
  },
  mode: 'dark' as PaletteMode,
  primary: {
    main: '#1976d2',
    light: '#2196f3',
    dark: '#0d47a1',
    contrastText: '#fff',
  },
  secondary: {
    light: '#FFEA41',
    main: '#FFE102',
    dark: '#DBBE01',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  text: {
    primary: '#EEEEEF',
    secondary: '#AEB0B4',
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: '#0f051a',
    default: '#222B45',
    level2: '#333',
    level1: '#2D3748',
  },
};
