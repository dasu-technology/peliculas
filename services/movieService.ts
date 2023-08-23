import { apiUrl } from './api';
import { fetchWrapper } from '@/helpers/fetchData';

export const movieService = {
    getPopular,
    getDetalles,
};

const baseUrl = `${apiUrl}/3/movie/popular?api_key=ed77000fe1d336b36f9667ef9da09807&language=en-US&page=1`;

function getPopular() {
    console.log(baseUrl)
    return fetchWrapper.get(baseUrl);
}

function getDetalles(id:number) {
    return fetchWrapper.get(`${baseUrl}/${id}`);
}

