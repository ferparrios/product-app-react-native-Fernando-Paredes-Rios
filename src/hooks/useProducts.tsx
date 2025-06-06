import React, {useEffect, useState} from 'react';
import {createProduct, getProducts} from '../api/productsApi';
import {CreateProducts, Products} from '../interfaces/types';

export const useProducts = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    const getAllProducts = async () => {
      setLoading(true);
      try {
        const resp = await getProducts();

        setProducts(resp);
      } catch (error) {
        console.log('Error: ', error);
      } finally {
        setLoading(false);
      }
    };
    getAllProducts();
  }, []);

  const createProducts = async (data: CreateProducts) => {
    try {
      const resp = await createProduct(data);
      console.log('Resp create: ', resp);
    } catch (error) {
      console.error('Error: ', error);
    }
  };

  return {
    products,
    createProducts,
    loading,
  };
};
