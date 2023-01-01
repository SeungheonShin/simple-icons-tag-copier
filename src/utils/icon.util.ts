export const getColoredSvg = (svg: string, hex: string): string => {
  return svg.replace(/<path/, `<path fill="#${hex}"`);
};

export const getTagStr = ({
  title,
  hex,
  logoColor,
}: {
  title: string;
  hex: string;
  logoColor: string;
}): string =>
  `<img src="https://img.shields.io/badge/${title}-${hex}?style=flat-square&logo=${title}&logoColor=${logoColor.slice(
    1,
  )}"/>`;
