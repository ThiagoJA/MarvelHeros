import React, { useState, useEffect } from 'react';
import _get from 'lodash/get';
import _map from 'lodash/map';
import styled from 'styled-components';
import { GetHeroList } from '../../service/MarvelServices';
import Card from '../Card/Card';
import FilterBar from '../FilterBar/FilterBar';
import SearchBar from '../SearchBar/SearchBar';

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
    const [pageHeros, setPageHeros] = useState([]);
    const [filterType, setFilterType] = useState(false);
    const [searchName, setSearchName] = useState('');
    useEffect(() => {
        GetHeroList(searchName).then((res) => {
            const allHeros = _get(res, 'data.data.results', {});
            setHeros(allHeros);
            setPageHeros(allHeros);
        })
    }, [searchName]);

    useEffect(() => {
        if (filterType) {
            const favoriteHeros = _map(heros, (hero) => {
                const favorites = JSON.parse(localStorage.getItem('favorites'));
                return ~favorites.indexOf(hero.id) && hero;
            })
            const filteredHeros = favoriteHeros.filter((hero) => hero);
            setHeros(filteredHeros);
        } else {
            setHeros(pageHeros);
        }
    }, [filterType]);
    
    return (
        <Container>
            <SearchBar setSearchName={setSearchName} />
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
