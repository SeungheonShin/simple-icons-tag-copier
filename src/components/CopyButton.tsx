import * as Styles from '@/styles/CopyButton.style';
import { useCallback, useContext } from 'react';
import { ToastMessageContext } from '@/components/App';

export default function CopyButton({ hex }: { hex: string }): JSX.Element {
  const showToastMessage = useContext(ToastMessageContext);
  const onClickHandler = useCallback(async (hex: string) => {
    await navigator.clipboard.writeText(`#${hex}`);
    showToastMessage();
  }, []);
  return (
    <Styles.Button
      onClick={async (): Promise<void> => await onClickHandler(hex)}
      title="copy hex code"
    >
      <span>#{hex}</span>
    </Styles.Button>
  );
}
