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
  hex: string;
  name: string;
}

export default function CopyButton({
  hex,
  name,
}: CopyButtonProps): JSX.Element {
  return (
    <Button>
      <p>{name}</p>
      <p>#{hex}</p>
    </Button>
  );
}
