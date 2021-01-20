import styled from 'styled-components';
import heroIcon from '../../icons/hero.svg';
import smallFilledHeart from '../../icons/hearts/small_filled_heart.svg';
import Toogle from '../Toogle/Toogle';

const Container = styled.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    margin: 20px 10px;
    color: #404040;
    @media (min-width: 768px) {
        flex-direction: row;
        margin: 30px 10px;
    }
    div {
        &:first-child {
            margin-top: 20px;
            @media (min-width: 768px) {
                margin-top: 0px;
            }
        }
        &:last-child {
            color: #FF1510;
            display: flex;
            align-items: center;
            font-size: 14px;
        }
        img {
            width: 18px;
            height: 18px;
            margin-right: 8px;
        }
        span {
            display: none;
            @media (min-width: 768px) {
                display: inline;
            }
        }
    }
`

const filterBar = ({ herosQuantity, setFilterType }) => {
    return (
        <Container>
            <div>
                {herosQuantity ? (
                    `Encontrados ${herosQuantity} herói(s)`
                ) : 'Não foi encontrado nenhum herói'}
            </div>
            <div>
                <img src={heroIcon} alt="orderByName" />
                <span>Ordenar por nome - A/Z</span>
                <Toogle setFilterType={setFilterType} />
                <img src={smallFilledHeart} alt="orderByFavorites" />
                <span>Somente favoritos</span>
            </div>
        </Container>
    );
}

export default filterBar;
