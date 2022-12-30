import {
  CopyButtonProps,
  SimpleIconProps,
} from '@/interfaces/simpleIcon.interface';
import { getTagStr } from '@/utils/icon.util';
import CopyButton from '@/components/CopyButton';
import ColorSelectButton from '@/components/ColorSelectButton';
import * as Styles from '@/styles/IconItem.style';

const onClickHandler = async ({
  ...copyButtonProps
}: CopyButtonProps): Promise<void> => {
  await navigator.clipboard.writeText(getTagStr({ ...copyButtonProps }));
};

export default function IconItem({
  title,
  hex,
  svg,
}: SimpleIconProps): JSX.Element {
  return (
    <Styles.ItemCard>
      <Styles.IconButton
        onClick={(): Promise<void> => onClickHandler({ title, hex })}
      >
        <Styles.Icon svg={svg} />
        <Styles.Title>{title}</Styles.Title>
      </Styles.IconButton>

      <Styles.MenuBar>
        <CopyButton hex={hex} />
        <ColorSelectButton />
      </Styles.MenuBar>
    </Styles.ItemCard>
  );
}
