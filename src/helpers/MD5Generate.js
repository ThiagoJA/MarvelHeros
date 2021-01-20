import CryptoJS from 'crypto-js';

const MD5Generate = (id) => {
    return String(CryptoJS.MD5(id));
};

export default MD5Generate;
