export const createColorPallete = (color, options) => ({
  contrast: {
    value: options?.contrast
      ? `{colors.${options?.contrast}}`
      : `{colors.${color}}`,
  },
  emphasized: {
    value: options?.emphasized
      ? `{colors.${options?.emphasized}}`
      : `{colors.${color}}`,
  },
  fg: {
    value: options?.fg ? `{colors.${options?.fg}}` : `{colors.${color}}`,
  },
  focusRing: {
    value: options?.focusRing
      ? `{colors.${options?.focusRing}}`
      : `{colors.${color}}`,
  },
  muted: {
    value: options?.muted ? `{colors.${options?.muted}}` : `{colors.${color}}`,
  },
  solid: {
    value: options?.solid ? `{colors.${options?.solid}}` : `{colors.${color}}`,
  },
  subtle: {
    value: options?.subtle
      ? `{colors.${options?.subtle}}`
      : `{colors.${color}}`,
  },
});
