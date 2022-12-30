import { createContext, useState } from 'react';
import * as icons from 'simple-icons';
import type { SimpleIcon } from 'simple-icons';

import SearchBar from '@/components/SearchBar';
import IconList from '@/components/IconList';
import { SimpleIconProps } from '@/interfaces/simpleIcon.interface';
import * as Styles from '@/styles/App.style';

const IconStyleContext = createContext('');

export default function App(): JSX.Element {
  const [keyword, setKeyword] = useState<string>('');

  const handleKeywordChange = (keyword: string): void => {
    setKeyword(keyword);
  };

  const simpleIcons: SimpleIconProps[] = Object.values(icons)
    .slice(0, 100)
    .filter(({ title }: SimpleIcon) => title.toLowerCase().includes(keyword))
    .map(({ title, hex, svg }: SimpleIcon) => {
      return {
        title,
        hex,
        svg,
      };
    });

  return (
    <>
      <Styles.GlobalStyle />
      <Styles.MainContent>
        <Styles.Header>
          <SearchBar onKeywordChange={handleKeywordChange} />
        </Styles.Header>

        <Styles.Section>
          <IconStyleContext.Provider value="flat-square">
            <IconList icons={simpleIcons} />
          </IconStyleContext.Provider>
        </Styles.Section>
      </Styles.MainContent>
    </>
  );
}
