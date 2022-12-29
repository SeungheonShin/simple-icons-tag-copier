import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  height: 30px;

  text-align: center;

  cursor: pointer;
`;

const onClickHandler = async (hex: string): Promise<void> => {
  await navigator.clipboard.writeText(`#${hex}`);
};

export default function CopyButton({ hex }: { hex: string }): JSX.Element {
  return (
    <Button onClick={(): Promise<void> => onClickHandler(hex)}>
      <span>#{hex}</span>
    </Button>
  );
}
