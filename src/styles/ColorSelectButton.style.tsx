import styled from 'styled-components';

export const ButtonBar = styled.div`
  flex: 1;
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  border-top: 1px solid rgba(0, 0, 0, 0.2);

  cursor: pointer;
`;

export const ColorInput = styled.input.attrs({ type: 'color' })`
  position: absolute;

  width: 30px;
  height: 30px;

  border: none;
  opacity: 0;

  cursor: pointer;
`;

export const Circle = styled.div`
  width: 12px;
  height: 12px;

  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
`;
