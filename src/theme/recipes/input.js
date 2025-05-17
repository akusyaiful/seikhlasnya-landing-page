import { defineRecipe } from '@chakra-ui/react';

export const inputRecipe = defineRecipe({
  base: {
    _focusVisible: {
      focusRingColor: 'var(--se-colors-border)',
      focusRingWidth: 0,
    },
    borderRadius: 8,
    outline: 'none',
  },
});
