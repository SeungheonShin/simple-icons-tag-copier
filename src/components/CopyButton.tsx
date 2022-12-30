import * as Styles from '@/styles/CopyButton.style';

const onClickHandler = async (hex: string): Promise<void> => {
  await navigator.clipboard.writeText(`#${hex}`);
};

export default function CopyButton({ hex }: { hex: string }): JSX.Element {
  return (
    <Styles.Button onClick={(): Promise<void> => onClickHandler(hex)}>
      <span>#{hex}</span>
    </Styles.Button>
  );
}
