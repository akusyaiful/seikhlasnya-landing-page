import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

import { buttonRecipe } from './recipes/button';
import { inputRecipe } from './recipes/input';
import { colorSemanticTokens } from './semantic-tokens/colors';
import { colorTokens } from './tokens/colors';
import { shadowTokens } from './tokens/shadows';

const customConfig = defineConfig({
  cssVarsPrefix: 'se',
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
    cssVarPrefix: 'se',
  },
  theme: {
    recipes: {
      button: buttonRecipe,
      input: inputRecipe,
    },
    semanticTokens: {
      // Color pallete
      colors: colorSemanticTokens,
    },
    tokens: {
      // Color value
      colors: colorTokens,
      shadows: shadowTokens,
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
