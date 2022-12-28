import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  width: 75px;
  height: 36px;
  p {
    margin: 0;
  }
`;

interface CopyButtonProps {
  title: string;
  hex: string;
}

const onClickHandler = async ({
  title,
  hex,
}: CopyButtonProps): Promise<void> => {
  const tagStr = `<img src="https://img.shields.io/badge/${title}-${hex}?style=flat-square&logo=${title}&logoColor=white"/>`;
  await navigator.clipboard.writeText(tagStr);
};

export default function CopyButton({
  title,
  hex,
}: CopyButtonProps): JSX.Element {
  return (
    <Button onClick={(): Promise<void> => onClickHandler({ title, hex })}>
      <p>#{hex}</p>
    </Button>
  );
}
