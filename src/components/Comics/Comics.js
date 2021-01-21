import styled from 'styled-components';
import _get from 'lodash/get';
import _map from 'lodash/map';

const ComicCard = ({ comic }) => {
    const comicImage = `${_get(comic ,'thumbnail.path', '')}.${_get(comic ,'thumbnail.extension', '')}`
    const comicTitle = _get(comic, 'title', '');
    
    return (
        <div>
            <img src={comicImage} />
            <p>{comicTitle}</p>
        </div>
    )
}

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
    h2 {
        color: #404040;
        font-size: 20px;
        margin: 30px 0px;
    }
`

const ComicsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    div {
        margin: 10px;
        width: 18%;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
            width: 70px;
            margin-bottom: 8px;
        }
        p {
            font-size: 12px;
            font-weight: bold;
            text-align: center;
        }
    }
`

const Comics = ({ comics }) => {
    return (
        <Container>
            <h2>
                Últimos lançamentos 
            </h2>
            <ComicsContainer>
                {_map(comics, (comic, idx) => (<ComicCard comic={comic} key={idx} />))}
            </ComicsContainer>
        </Container>
    )
};

export default Comics;
