import Axios from 'axios';

const api = Axios.create({ baseURL: 'https://dadosabertos.camara.leg.br' });

export default api;