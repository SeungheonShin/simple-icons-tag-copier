import { useState } from 'react';

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
  const [logoColor, setlogoColor] = useState<string>('#fff');
  const handleLogoColorChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setlogoColor(e.target.value);
  };

  return (
    <Styles.ItemCard>
      <IconButton title={title} hex={hex} svg={svg} logoColor={logoColor} />
      <Styles.MenuBar>
        <CopyButton hex={hex} />
        <ColorSelectButton
          logoColor={logoColor}
          onLogoColorChange={handleLogoColorChange}
        />
      </Styles.MenuBar>
    </Styles.ItemCard>
  );
}
