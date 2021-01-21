import MD5Generate from './helpers/MD5Generate';

export const timeStamp = String(Math.floor(Date.now() / 1000));
export const publicKey = "462081eb170b729e3157a1fd6d73a08c";
export const privateKey = "a230efdd49605ef78b182c235de5d3272a6e6a7a"
export const MD5Hash = MD5Generate(timeStamp+privateKey+publicKey);