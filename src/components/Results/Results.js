import React, { useState, useEffect } from 'react';
import _get from 'lodash/get';
import _map from 'lodash/map';
import styled from 'styled-components';
import MarvelServices from '../../service/MarvelServices';
import Card from '../Card/Card';


const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0px 20px;
    @media (min-width: 768px) {
        padding: 0px 40px;
        justify-content: space-between;
    }
    @media (min-width: 1366px) {
        padding: 0px 10%;
    }
`

const Results = () => {
    const [heros, setHeros] = useState();

    useEffect(() => {
        MarvelServices().then((res) => {
            const allHeros = _get(res, 'data.data.results', {});
            setHeros(allHeros);
        })
    }, []);
    return (
        <Container>
            {_map(heros, (hero, idx) => (
                <Card
                    heroData={hero}
                    key={idx}
                />
            ))}
        </Container>
    );
};

export default Results;
