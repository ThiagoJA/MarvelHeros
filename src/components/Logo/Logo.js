import React from 'react';
import marvelLogo from '../../icons/marvel_logo.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoImage = styled.img`
    width: 70%;
    margin: auto;
    margin-top: 30px;
    display: flex;
    @media (min-width: 768px) {
        width: 250px;
    }
    @media (min-width: 1650px) {
        width: 550px;
    }
`

const Logo = () => {
    return (
        <Link to="/">
            <LogoImage src={marvelLogo} alt="Marvel - Search heros" />
        </Link>
    )
};

export default Logo;
