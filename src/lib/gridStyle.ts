type ColSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type GridSpan = {
  default?: ColSpan;
  sm?: ColSpan;
  md?: ColSpan;
  lg?: ColSpan;
  xl?: ColSpan;
};

export const gridStyle = (g?: GridSpan): React.CSSProperties =>
  ({
    "--span": g?.default ?? 12,
    "--sm": g?.sm,
    "--md": g?.md,
    "--lg": g?.lg,
    "--xl": g?.xl,
  }) as React.CSSProperties;
