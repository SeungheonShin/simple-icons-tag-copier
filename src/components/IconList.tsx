import IconItem from '@/components/IconItem';
import { SimpleIconProps } from '@/interfaces/simpleIcon.interface';
import * as Styles from '@/styles/IconList.style';

export default function IconList({
  icons,
}: {
  icons: SimpleIconProps[];
}): JSX.Element {
  return (
    <Styles.IconListGrid>
      {icons.map((props: SimpleIconProps) => (
        <IconItem {...props} key={props.title} />
      ))}
    </Styles.IconListGrid>
  );
}
