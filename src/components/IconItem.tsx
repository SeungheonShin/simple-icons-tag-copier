import { SimpleIconProps } from '@/interfaces/simpleIcon.interface';
import IconButton from '@/components/IconButton';
import CopyButton from '@/components/CopyButton';
import ColorSelectButton from '@/components/ColorSelectButton';
import * as Styles from '@/styles/IconItem.style';

export default function IconItem({
  title,
  hex,
  svg,
}: SimpleIconProps): JSX.Element {
  return (
    <Styles.ItemCard>
      <IconButton title={title} hex={hex} svg={svg} />
      <Styles.MenuBar>
        <CopyButton hex={hex} />
        <ColorSelectButton />
      </Styles.MenuBar>
    </Styles.ItemCard>
  );
}
