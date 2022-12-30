import { SimpleIconProps } from '@/interfaces/simpleIcon.interface';
import * as Styles from '@/styles/IconButton.style';
import { getTagStr } from '@/utils/icon.util';

const onClickHandler = ({
  title,
  hex,
}: {
  title: string;
  hex: string;
}): void => {
  navigator.clipboard.writeText(getTagStr({ title, hex }));
};

export default function IconButton({
  title,
  hex,
  svg,
}: SimpleIconProps): JSX.Element {
  return (
    <Styles.IconButton onClick={(): void => onClickHandler({ title, hex })}>
      <Styles.Icon svg={svg} />
      <Styles.Title>{title}</Styles.Title>
    </Styles.IconButton>
  );
}
