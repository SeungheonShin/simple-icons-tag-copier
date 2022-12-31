import { SimpleIconProps } from '@/interfaces/simpleIcon.interface';
import IconButton from '@/components/IconButton';
import CopyButton from '@/components/CopyButton';
import ColorSelectButton from '@/components/ColorSelectButton';
import * as Styles from '@/styles/IconItem.style';
import { useState } from 'react';

export default function IconItem({
  title,
  hex,
  svg,
}: SimpleIconProps): JSX.Element {
  const [textColor, setTextColor] = useState<string>('white');

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
