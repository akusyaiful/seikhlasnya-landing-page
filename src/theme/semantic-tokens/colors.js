import { createColorPallete } from '@/utils/theme';

export const colorSemanticTokens = {
  brand: {
    green: createColorPallete('brand.green', {
      contrast: 'brand.white',
      subtle: 'brand.grayLight',
    }),
    blue: createColorPallete('brand.blue', {
      contrast: 'brand.white',
      subtle: 'brand.grayLight',
    }),
    white: createColorPallete('brand.white', {
      contrast: 'brand.blue',
      subtle: 'brand.grayLight',
    }),
    red: createColorPallete('brand.red', {
      contrast: 'brand.white',
      subtle: 'brand.grayLight',
    }),
    grayDark: createColorPallete('brand.grayDark', {
      contrast: 'brand.white',
      subtle: 'brand.grayLight',
    }),
  },
  status: {
    gray: createColorPallete('status.gray', {
      muted: 'status.grayBg',
      subtle: 'status.grayBg',
    }),
    green: createColorPallete('status.green', {
      muted: 'status.greenBg',
      subtle: 'status.greenBg',
    }),
    red: createColorPallete('status.red', {
      muted: 'status.redBg',
      subtle: 'status.redBg',
    }),
    yellow: createColorPallete('status.yellow', {
      muted: 'status.yellowBg',
      subtle: 'status.yellowBg',
    }),
  },
};
