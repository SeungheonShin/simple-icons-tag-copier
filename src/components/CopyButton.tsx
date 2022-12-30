import * as Styles from '@/styles/CopyButton.style';

const onClickHandler = (hex: string): void => {
  navigator.clipboard.writeText(`#${hex}`);
};

export default function CopyButton({ hex }: { hex: string }): JSX.Element {
  return (
    <Styles.Button onClick={(): void => onClickHandler(hex)}>
      <span>#{hex}</span>
    </Styles.Button>
  );
}
