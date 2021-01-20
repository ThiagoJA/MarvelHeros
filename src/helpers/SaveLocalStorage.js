import _pull from 'lodash/pull';

const saveLocalStorage = (id, setCurrentFavorite, checkFavorite) => {
    let favorites = []
    if (!localStorage.getItem('favorites')) {
        localStorage.setItem('favorites', JSON.stringify([id]));
        return null;
    }
    favorites = JSON.parse(localStorage.getItem('favorites'));
    if (favorites.length === 5 && !~favorites.indexOf(id)) {
        return null;
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));

    ~favorites.indexOf(id) ? _pull(favorites, id) : favorites.push(id);

    localStorage.setItem('favorites', JSON.stringify(favorites));

    checkFavorite(setCurrentFavorite, favorites, id);
};

export default saveLocalStorage;
