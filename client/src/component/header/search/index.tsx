// src/SearchComponent.tsx
import React, { Dispatch, useState } from "react";
import styles from "./styles.module.css"; // Import CSS module
import {
  ResultItem,
  ResultsList,
  SearchContainer,
  SearchInput,
} from "./style.index";
import { ArrayComponentProps } from "../../Cards";
export interface ArrayComponent<T> {
  items: T[];
  // options:FormInputs[]
  state?: Dispatch<React.SetStateAction<T[]>>;
  image?: File;
}
export const genericSearch = <T extends Record<string, any>>(
  array: T[],
  event: React.ChangeEvent<HTMLInputElement>
): T[] => {
  const query = event.target.value;
  if (!query) return array;

  const searchString = query.toLowerCase();

  return array.filter((item) => {
    const itemValues = Object.values(item).filter((value) => value != null);
    const itemString = itemValues.join(" ").toLowerCase();

    return itemString.includes(searchString);
  });
};

const SearchComponent = <T extends Record<string, any>>({
  items,
  state,
}: ArrayComponent<T>) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const results = genericSearch(items, event);

    state?.(results);
  };
  return (
    <SearchContainer>
      <SearchInput
        type="text"
        // value={searchTerm}
        onChange={handleSearch}
        placeholder="Search..."
      />
    </SearchContainer>
  );
};

export default SearchComponent;
