import React from 'react';
import styled from 'styled-components';

const SearchBoxInput = styled.input`
margin: 1rem;
padding: 1.5rem;
border: 1px solid #eaeaea;
border-radius: 10px;
  :focus,
  :active {
    color: #0070f3;
    border-color: #0070f3;
  }
  ::placeholder {
    color: black;
  }
`;

export default function SearchBox ({ searchfield, searchChange}) {
  return (
    <SearchBoxInput placeholder="search cat" onChange={searchChange}>
    </SearchBoxInput>
  );
}
