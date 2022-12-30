export const convertSvgToDataUrl = (svg: string): string =>
  `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

export const getTagStr = ({
  title,
  hex,
}: {
  title: string;
  hex: string;
}): string =>
  `<img src="https://img.shields.io/badge/${title}-${hex}?style=flat-square&logo=${title}&logoColor=white"/>`;
