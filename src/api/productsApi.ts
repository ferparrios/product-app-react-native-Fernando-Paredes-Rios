import axios from 'axios';
import {CreateProducts} from '../interfaces/types';

const fakeStoreApi = axios.create({
  baseURL: 'https://fakestoreapi.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getProducts = async () => {
  try {
    const response = await fakeStoreApi.get('/products');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async (data: CreateProducts) => {
  try {
    const response = await fakeStoreApi.post('/products', data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
