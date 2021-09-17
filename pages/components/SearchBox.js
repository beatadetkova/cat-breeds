import React, { useCallback } from 'react';
import styled from 'styled-components';
import debounce from 'lodash.debounce';

const SearchBoxInput = styled.input`
  margin: 1rem;
  padding: 1.5rem;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  font-size: 20px;
    &:focus,
    &:active {
      color: black;
    }
    &::placeholder {
      color: #0000008A;
    }
`;

export default function SearchBox ({ onQuery }) {

  const debouncedQuery = useCallback(() =>
		debounce(nextValue => onQuery(nextValue), 200),
		[onQuery]
	);

  const onChange = useCallback((event) => {
      const query = event.target.value;
      debouncedQuery(query)
    },[debouncedQuery])

  return (
    <SearchBoxInput 
      placeholder="search cat" 
      onChange={onChange}>
    </SearchBoxInput>
  );
}
