import { createContext, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import * as icons from 'simple-icons';
import type { SimpleIcon } from 'simple-icons';

import SearchBar from '@/components/SearchBar';
import IconList from '@/components/IconList';
import { SimpleIconProps } from '@/interfaces/simpleIcon.interface';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(255, 255, 255);
  }

  button {
    border: none;
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
    &:active {
      background-color: rgba(0, 0, 0, 0.1);
    }
    background-color: rgb(255, 255, 255);
  }
`;

const MainContent = styled.div`
  width: 300px;
  height: 450px;
  overflow-x: hidden;
  overflow-y: scroll;

  padding: 10px;
  margin: 0;
`;

const Header = styled.header`
  height: 10vh;
  width: 50%;

  padding: 15px 0;
  margin: 0 auto;
`;

const Section = styled.section`
  margin: 0 auto;
  width: 80%;
`;

const IconStyleContext = createContext('');

export default function App(): JSX.Element {
  const [keyword, setKeyword] = useState<string>('');

  const simpleIcons: SimpleIconProps[] = Object.values(icons)
    .map(({ title, hex, svg }: SimpleIcon) => {
      return {
        title,
        hex,
        svg,
      };
    })
    .slice(0, 10);

  return (
    <>
      <GlobalStyle />
      <MainContent>
        <Header>
          <SearchBar />
        </Header>

        <Section>
          <IconStyleContext.Provider value="flat-square">
            <IconList icons={simpleIcons} />
          </IconStyleContext.Provider>
        </Section>
      </MainContent>
    </>
  );
}
