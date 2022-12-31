import React, { createContext, useEffect, useRef, useState } from 'react';
import * as icons from 'simple-icons';
import type { SimpleIcon } from 'simple-icons';

import SearchBar from '@/components/SearchBar';
import IconList from '@/components/IconList';
import { SimpleIconProps } from '@/interfaces/simpleIcon.interface';
import * as Styles from '@/styles/App.style';
import useInfiniteScroll from '@/hooks/infiniteScroll.hooks';

const IconStyleContext = createContext('');
const allIcons: SimpleIcon[] = Object.values(icons);
const pageOffset = 16 as const;

const getIcons = (page: number, keyword: string): SimpleIconProps[] => {
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
  return simpleIcons;
};

export default function App(): JSX.Element {
  const [keyword, setKeyword] = useState<string>('');
  const [iconList, setIconList] = useState<SimpleIconProps[]>([]);
  const intersectionRef = useRef<HTMLDivElement>(null);
  const { page, setPage } = useInfiniteScroll({
    target: intersectionRef,
    rootMargin: '0px',
    threshold: 1.0,
  });

  const handleKeywordChange = (keyword: string): void => {
    setKeyword(keyword);
    setPage(0);
  };

  useEffect(() => {
    if (!page) {
      setIconList([...getIcons(page, keyword)]);
      return;
    }
    setIconList((prev) => [...prev, ...getIcons(page, keyword)]);
  }, [page, keyword]);

  return (
    <>
      <Styles.GlobalStyle />
      <Styles.MainContent>
        <Styles.Header>
          <SearchBar onKeywordChange={handleKeywordChange} />
        </Styles.Header>

        <Styles.Section>
          <IconStyleContext.Provider value="flat-square">
            <IconList icons={iconList} />
          </IconStyleContext.Provider>
        </Styles.Section>
        <div ref={intersectionRef}></div>
      </Styles.MainContent>
    </>
  );
}
