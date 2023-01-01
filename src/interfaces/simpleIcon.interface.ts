export interface IconButtonProps {
  title: string;
  hex: string;
  svg: string;
  logoColor: string;
}

export interface SimpleIconProps extends Omit<IconButtonProps, 'logoColor'> {
  slug: string;
}
