import * as Styles from '@/styles/SearchBar.style';
import React from 'react';

export default function SearchBar({
  onKeywordChange,
}: {
  onKeywordChange: (keyword: string) => void;
}): JSX.Element {
  return (
    <Styles.TextInput
      placeholder="search"
      onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
        onKeywordChange(e.target.value.toLowerCase())
      }
    />
  );
}
