import { CopyButtonProps } from '@/interfaces/simpleIconProps.interface';

export const convertSvgToDataUrl = (svg: string): string =>
  `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

export const getTagStr = ({ title, hex }: CopyButtonProps): string =>
  `<img src="https://img.shields.io/badge/${title}-${hex}?style=flat-square&logo=${title}&logoColor=white"/>`;
