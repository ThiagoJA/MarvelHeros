import React, { useState, useEffect } from 'react';
import _get from 'lodash/get';
import _map from 'lodash/map';
import styled from 'styled-components';
import MarvelServices from '../../service/MarvelServices';
import Card from '../Card/Card';
import FilterBar from '../FilterBar/FilterBar';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 20px;
    @media (min-width: 768px) {
        padding: 0px 40px;
    }
    @media (min-width: 1366px) {
        padding: 0px 10%;
    }
`

const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const Results = () => {
    const [heros, setHeros] = useState([]);
    const [filterType, setFilterType] = useState(false);

    useEffect(() => {
        MarvelServices().then((res) => {
            const allHeros = _get(res, 'data.data.results', {});
            setHeros(allHeros);
        })
    }, []);

    useEffect(() => {
        if (filterType) {
            const favoriteHeros = _map(heros, (hero) => {
                const favorites = JSON.parse(localStorage.getItem('favorites'));
                return ~favorites.indexOf(hero.id) && hero;
            })
            const filteredHeros = favoriteHeros.filter((hero) => hero);
            setHeros(filteredHeros);
            console.log(filteredHeros);
        } else {
            MarvelServices().then((res) => {
                const allHeros = _get(res, 'data.data.results', {});
                setHeros(allHeros);
            })
        }
    }, [filterType]);
    
    return (
        <Container>
            <FilterBar
                herosQuantity={heros.length}
                setFilterType={setFilterType}
            />
            {heros.length >= 1 && (
                <HeroContainer>
                    {_map(heros, (hero, idx) => (
                        <Card
                            heroData={hero}
                            key={idx}
                        />
                    ))}
                </HeroContainer>
            )}
        </Container>
    );
};

export default Results;
