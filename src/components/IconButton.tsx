import { IconButtonProps } from '@/interfaces/simpleIcon.interface';
import * as Styles from '@/styles/IconButton.style';
import { getTagStr } from '@/utils/icon.util';
import { useCallback, useContext } from 'react';
import { ToastMessageContext } from './App';

export default function IconButton({
  title,
  hex,
  svg,
}: IconButtonProps): JSX.Element {
  const showToastMessage = useContext(ToastMessageContext);
  const onClickHandler = useCallback(
    async ({ title, hex }: { title: string; hex: string }) => {
      await navigator.clipboard.writeText(getTagStr({ title, hex }));
      showToastMessage();
    },
    [],
  );

  return (
    <Styles.IconButton
      onClick={async (): Promise<void> => await onClickHandler({ title, hex })}
      title="copy icon tag"
    >
      <Styles.Icon svg={svg} />
      <Styles.Title>{title}</Styles.Title>
    </Styles.IconButton>
  );
}
