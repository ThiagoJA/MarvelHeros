import React, { useState } from 'react';
import styled from 'styled-components';
import magnifyingGlass from '../../icons/magnifying_glass.svg';


const Container = styled.div`
  display: flex;
  margin-left: -20px;
  justify-content: center;
  padding: 0px 20px;
  @media (min-width: 768px) {
    padding: 0px 40px;
  }
  @media (min-width: 1366px) {
    padding: 0px 20%;
  }
  img {
    position: relative;
    left: 50px;
  }
  input {
    background: #FDECEC;
    border: none;
    padding: 20px 20px 20px 60px;
    width: 100%;
    border-radius: 40px;
    color: #ff1510bf;
    font-size: 16px;
    ::placeholder,
    ::-webkit-input-placeholder {
      color: #ff1510bf;
    }
    :focus {
      outline: 1px solid red;
    }
  }
`

const SearchBar = ({ setSearchName }) => {
  const [searchText, setSearchText] = useState('');
  return (
    <Container>
      <img src={magnifyingGlass} alt="Search" onClick={() => setSearchName(searchText)} />
      <input type="text" placeholder="Procure por heróis" tabIndex="0" onChange={(e) => setSearchText(e.target.value)} onKeyDown={(e) => { if(e.keyCode === 13) setSearchName(searchText)}} />
    </Container>
  )
};

export default SearchBar;
