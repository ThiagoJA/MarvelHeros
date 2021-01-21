import axios from 'axios';
import { publicKey, MD5Hash, timeStamp } from '../config';

export const GetHeroList = (searchName) => {
    const search = searchName ? `&name=${searchName}` : ''
    return axios.get(`https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=20&offset=0&ts=${timeStamp}&apikey=${publicKey}&hash=${MD5Hash}${search}`,)
}

export const getHero = (heroId) => {
    return axios.get(`https://gateway.marvel.com:443/v1/public/characters/${heroId}?ts=${timeStamp}&apikey=${publicKey}&hash=${MD5Hash}`,)
}

export const getComics = (heroId) => {
    return axios.get(`https://gateway.marvel.com:443/v1/public/characters/${heroId}/comics?&limit=10orderBy=onsaleDate&ts=${timeStamp}&apikey=${publicKey}&hash=${MD5Hash}`,)
}
