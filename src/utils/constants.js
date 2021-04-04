export const BASE_API_URL = 'https://salarizare-angajati.herokuapp.com';
export const ELEVI_API = '/elevi';
export const CLASA_API = '/clasa';
export const CLASA_API_DELETE = '/clasa/:id/';
export const ELEVI_API_DELETE = '/elevi/:id/';
export const NOTA_API = '/nota';


export const REFRESH_KEY = 'refreshKey';

export const sortResults = (array, prop) =>  {
    array.sort((a, b) => (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0))
    };

