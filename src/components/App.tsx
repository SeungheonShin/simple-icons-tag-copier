import { createContext, useState } from 'react';
import styled from 'styled-components';
import * as icons from 'simple-icons';
import type { SimpleIcon } from 'simple-icons';

import SearchBar from '@/components/SearchBar';
import IconList from '@/components/IconList';
import { SimpleIconProps } from '@/interfaces/simpleIconProps.interface';

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;
  padding: 10px;
`;

const Header = styled.header`
  height: 10vh;
`;

const Section = styled.section`
  width: 400px;
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
  );
}
