import axios from 'axios';

const watson = axios.create({
    baseURL: 'http://localhost:5000',
})
const en_to_fr = async(text) => {
    const res = await watson.get(`/english-to-french?text=${text}`);
    if(res.data.hasOwnProperty('translation')){
        return res.data.translation;
    } else {
        return res.data.error;
    }
}

const fr_to_en = async(text) => {
    const res = await watson.get(`/french-to-english?text=${text}`);
    if(res.data.hasOwnProperty('translation')){
        return res.data.translation;
    } else {
        return res.data.error;
    }
}

export {
    en_to_fr,
    fr_to_en
}