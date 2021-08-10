import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Kl5AQMNY_CygTUK923U6R_PSF4ls3-ocPgVawg_1pPE'
    }
});