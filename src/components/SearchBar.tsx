import styled from 'styled-components';

const TextInput = styled.input.attrs({ type: 'search' })`
  width: 100%;
  height: 40px;

  font-size: large;
`;

export default function SearchBar(): JSX.Element {
  return <TextInput placeholder="search" />;
}
