import { IconButtonProps } from '@/interfaces/simpleIcon.interface';
import * as Styles from '@/styles/IconButton.style';
import { getColoredSvg, getTagStr } from '@/utils/icon.util';
import { useCallback, useContext } from 'react';
import { ToastMessageContext } from '@/components/App';

export default function IconButton({
  title,
  hex,
  svg,
  logoColor,
}: IconButtonProps): JSX.Element {
  const showToastMessage = useContext(ToastMessageContext);
  const onClickHandler = useCallback(
    async ({ title, hex }: { title: string; hex: string }) => {
      await navigator.clipboard.writeText(getTagStr({ title, hex, logoColor }));
      showToastMessage();
    },
    [logoColor],
  );

  return (
    <Styles.IconButton
      onClick={async (): Promise<void> => await onClickHandler({ title, hex })}
      title="copy icon tag"
      hex={hex}
    >
      <svg dangerouslySetInnerHTML={{ __html: getColoredSvg(svg, hex) }}></svg>
      <Styles.Title>{title}</Styles.Title>
    </Styles.IconButton>
  );
}
