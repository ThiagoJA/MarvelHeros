import { useEffect, useState } from 'react';
import _get from 'lodash/get';
import _orderBy from 'lodash/orderBy';
import styled from 'styled-components';
import saveLocalStorage from '../helpers/SaveLocalStorage';
import Logo from '../components/Logo/Logo';
import Comics from '../components/Comics/Comics';
import { getHero, getComics } from '../service/MarvelServices';
import darkFilledHeart from '../icons/hearts/dark_filled_heart.svg';
import clearHeart from '../icons/hearts/clear_heart.svg';
import bookIcon from '../icons/book.svg';
import videoIcon from '../icons/video.svg';
import fiveStarsIcon from '../icons/stars/five_stars.svg';


const Page = styled.div`
    background-color: #E7F6E7;
    min-height: 100vh;
    color: #8C8C8C;
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        padding: 0px 40px;
      }
    @media (min-width: 1366px) {
    padding: 0px 10%;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px 0px;
    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
    }
    @media (min-width: 1366px) {
        padding: 30px 10%;
    }
    img {
        width: 90%;
        margin: auto;
        padding-top: 20px;
        @media (min-width: 768px) {
            padding-top: 0px;
            width: 65%;
        }
    }
    p {
        line-height: 2;
        font-size: 14px;
    }
`

const NameBox = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
    h3 {
        font-size: 30px;
    }
    img {
        width: 20px;
        padding: 0px;
        cursor: pointer;
    }
`

const InformationContainer = styled.div`
    display: flex;
    p {
        margin-right: auto;
    }
    div {
        display: flex;
        align-items: center;
    }
`

const InformationBox = styled.div`
    color: #404040;
    display: flex;
    flex-direction: column;
    margin: 40px 40px 0px 0px;
    img {
        margin: 0px 10px 0px 0px;
        width: 30px;
        height: 30px;
        padding: 0px;
    }
    p {
        font-size: 12px;
        margin-bottom: 5px;
        font-weight: bold;
    }
`

const RatingBox = styled.div`
    display: flex;
    align-items:center;
    color: #404040;
    font-size: 12px;
    span {
        font-weight: bold;
        font-size: 12px;
    }
    img {
        width: 100px;
        padding: 0px;
    }
`
const LastComicBox = styled.div`
    display: flex;
    align-items:center;
    color: #404040;
    font-size: 12px;
    span {
        font-weight: bold;
        margin-right: 10px;
    }
`

const checkFavorite = (setIsFavorite, favorites, id) => {
    ~favorites.indexOf(id) ? setIsFavorite(true) : setIsFavorite(false);
};

const Hero = () => {
    const [heroData, setHeroData] = useState({});
    const [comics, setComics] = useState([]);
    const [isFavorite, setIsFavorite] = useState(false);
    const lastComicDate = new Date(_get(comics[0], 'dates[0].date', ''))
    const heroImage = `${_get(heroData ,'thumbnail.path', '')}.${_get(heroData ,'thumbnail.extension', '')}`
    useEffect(() => {
        const selectedHeroId = JSON.parse(localStorage.getItem('selectedHeroId'));
        const favorites = JSON.parse(localStorage.getItem('favorites'));
        checkFavorite(setIsFavorite, favorites, selectedHeroId)
        getHero(selectedHeroId).then((res) => {
            const data = _get(res, 'data.data.results[0]', {})
            setHeroData(data);
        })
        getComics(selectedHeroId).then((res) => {
            const data = _get(res, 'data.data.results', {})
            const ordenedComics = _orderBy(data, ['id'], ['desc'])
            setComics(ordenedComics);
        })
    }, []);
    
    return (
        <Page>
            <Logo />
            <Container>
                <div>
                    <NameBox>
                        <h3>{heroData.name}</h3>
                        <img src={isFavorite ? darkFilledHeart : clearHeart} alt="favorite" onClick={() => saveLocalStorage(heroData.id, setIsFavorite, checkFavorite)} />
                    </NameBox>
                    <p>
                        {heroData.description}
                    </p>
                    <InformationContainer>
                        <InformationBox>
                            <p>Quadrinhos</p>
                            <div>
                                <img src={bookIcon} alt="comics" />
                                <span>{_get(heroData, 'comics.available', '')}</span>
                            </div>
                        </InformationBox>
                        <InformationBox>
                        <p>Filmes</p>
                            <div>
                                <img src={videoIcon} alt="series" />
                                <span>{_get(heroData, 'series.available', '')}</span>
                            </div>
                        </InformationBox>
                    </InformationContainer>
                    <RatingBox>
                        <span>Rating:</span>
                        <img src={fiveStarsIcon} alt="rating" />
                    </RatingBox>
                    <LastComicBox>
                        <span>Último quadrinho:</span>
                        <p>{lastComicDate.toLocaleDateString('en-GB')}</p> 
                    </LastComicBox>
                </div>
                <img src={heroImage} alt="hero" />
            </Container>
            <Comics comics={comics} />
        </Page>
    )
};

export default Hero;
