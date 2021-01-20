import React from 'react';
import marvelLogo from '../../icons/marvel_logo.svg';
import styled from 'styled-components';

const LogoImage = styled.img`
    width: 70%;
    margin: auto;
    @media (min-width: 768px) {
        width: auto;
    }
    @media (min-width: 1650px) {
        width: 550px;
    }
`

const Logo = ({ action }) => {
    return (
        <LogoImage src={marvelLogo} alt="Marvel - Search heros" />
    )
};

export default Logo;
