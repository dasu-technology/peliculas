import { apiUrl } from './api';
import { fetchWrapper } from '@/helpers/fetchData';

export const movieService = {
    getPopular,
    getDetalles,
};

const baseUrl = `${apiUrl}/3/movie/popular?api_key=ed77000fe1d336b36f9667ef9da09807&language=en-US&page=1`;

async function getPopular() {
    console.log(baseUrl)
    return await fetchWrapper.get(baseUrl);
}

async function getDetalles(id: string | string[] | undefined) {
    return await fetchWrapper.get(`${baseUrl}/${id}`);
}

