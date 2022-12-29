import styled from 'styled-components';

const ButtonBar = styled.div``;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 50%;
  height: 24px;

  cursor: pointer;
`;

const Circle = styled.div`
  width: 12px;
  height: 12px;

  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default function ColorSelectButton(): JSX.Element {
  return (
    <ButtonBar>
      <Button>
        <Circle />
      </Button>
      <Button>
        <Circle />
      </Button>
    </ButtonBar>
  );
}
