import styled from "styled-components";

export const SearchContainer = styled.div`
  direction: rtl;
  width: 150px;
  margin: auto;
  padding-left: 1rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const ResultsList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-top: 10px;
`;

export const ResultItem = styled.li`
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`;
