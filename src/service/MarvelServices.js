import axios from 'axios';
import MD5Generate from '../helpers/MD5Generate';

const timeStamp = String(Math.floor(Date.now() / 1000));
const publicKey = "462081eb170b729e3157a1fd6d73a08c";
const privateKey = "a230efdd49605ef78b182c235de5d3272a6e6a7a"
const MD5Hash = MD5Generate(timeStamp+privateKey+publicKey);

const MarvelServices = () => {
    return axios.get(`https://gateway.marvel.com:443/v1/public/characters?orderBy=name&ts=${timeStamp}&apikey=${publicKey}&hash=${MD5Hash}`,)
}

export default MarvelServices;
