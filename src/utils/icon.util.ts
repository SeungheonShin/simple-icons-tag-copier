export const svgToDataUrl = (svg: string): string =>
  `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
