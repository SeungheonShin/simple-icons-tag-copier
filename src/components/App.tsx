import { createContext, useState } from 'react';
import * as icons from 'simple-icons';
import type { SimpleIcon } from 'simple-icons';

import SearchBar from '@/components/SearchBar';
import IconList from '@/components/IconList';
import { SimpleIconProps } from '@/interfaces/simpleIcon.interface';
import * as Styles from '@/styles/App.style';

const IconStyleContext = createContext('');
const allIcons: SimpleIcon[] = Object.values(icons);
const pageOffset = 16 as const;

export default function App(): JSX.Element {
  const [keyword, setKeyword] = useState<string>('');
  const [page, setPage] = useState<number>(0);

  const handleKeywordChange = (keyword: string): void => {
    setKeyword(keyword);
  };

  console.log(
    allIcons.filter(({ title }: SimpleIcon) =>
      title.toLowerCase().includes('spring'),
    ),
  );

  const simpleIcons: SimpleIconProps[] = allIcons
    .filter(({ title }: SimpleIcon) => title.toLowerCase().includes(keyword))
    .slice(page * pageOffset, page * pageOffset + pageOffset)
    .map(({ title, slug, hex, svg }: SimpleIcon) => {
      return {
        title,
        slug,
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
