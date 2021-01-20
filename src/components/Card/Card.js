import { useEffect, useState } from 'react';
import _get from 'lodash/get';
import saveLocalStorage from '../../helpers/SaveLocalStorage';
import darkFilledHeart from '../../icons/hearts/dark_filled_heart.svg';
import clearHeart from '../../icons/hearts/clear_heart.svg';
import styled from 'styled-components';

const SingleCard = styled.div`
   width: 90%;
   @media (min-width: 768px){
        width: 30%;
    }
    @media (min-width: 1024px){
        width: 22%;
    }
   margin: 10px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   div {
       display: flex;
       justify-content: space-between;
       align-items: center;
       margin: 20px 0px 40px 0px;
       span {
           font-size: 20px;
           color: #404040;
           white-space: nowrap;
           overflow: hidden;
           text-overflow: ellipsis;
       }
   }
   img {
        width: 100%;
        height: 250px;
        cursor: pointer;
        &:last-child {
            width: 20px;
            height: 20px;
        }
        @media (min-width: 550px) and (max-width: 767px){
            height: 380px;
        }
        @media (min-width: 1650px){
            height: 300px;
        }
   }
   hr {
        height: 4px;
        width: 100%;
        background-color: #FF1510;
        border: none;
   }
`

const checkFavorite = (setCurrentFavorite, favorites, id) => {
    ~favorites.indexOf(id) ? setCurrentFavorite(true) : setCurrentFavorite(false);
};

const checkFavoriteStorage = (setCurrentFavorite, heroId) => {
    if (!localStorage.getItem('favorites')) {
        localStorage.setItem('favorites', JSON.stringify([]));
    }
    if (localStorage.getItem('favorites')) {
        let favorites = JSON.parse(localStorage.getItem('favorites'));
        checkFavorite(setCurrentFavorite, favorites, heroId);
    }
}

const Card = ({ heroData }) => {
    const [currentFavorite, setCurrentFavorite] = useState(false);
    const heroId = _get(heroData, 'id', 0);
    const heroImage = `${heroData.thumbnail.path}.${heroData.thumbnail.extension}`
    useEffect(() => {
        checkFavoriteStorage(setCurrentFavorite, heroId)
    }, [currentFavorite]);


    return (
        <SingleCard>
            <img src={heroImage} alt={heroData.name}/>
            <hr />
            <div>
                <span>{heroData.name}</span>
                <img src={currentFavorite ? darkFilledHeart : clearHeart} onClick={() => saveLocalStorage(heroId, setCurrentFavorite, checkFavorite)} aria-hidden tabIndex="0" alt="Favorite" />
            </div>
        </SingleCard>
    )
}

export default Card;