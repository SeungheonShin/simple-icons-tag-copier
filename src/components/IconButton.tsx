import { IconButtonProps } from '@/interfaces/simpleIcon.interface';
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
}: IconButtonProps): JSX.Element {
  return (
    <Styles.IconButton
      onClick={(): void => onClickHandler({ title, hex })}
      title="copy icon tag"
    >
      <Styles.Icon svg={svg} />
      <Styles.Title>{title}</Styles.Title>
    </Styles.IconButton>
  );
}
