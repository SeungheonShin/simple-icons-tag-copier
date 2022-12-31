import styled from 'styled-components';

export const TextInput = styled.input.attrs({ type: 'search' })`
  width: 100%;
  height: 40px;

  font-size: large;
  padding-left: 10px;

  &::-webkit-search-cancel-button {
    position: relative;
    right: 10px;
  }
`;
