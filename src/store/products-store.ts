import {create} from 'zustand';
import {Products} from '../interfaces/types';

interface ProductsState {
  products: Products[];
  addProduct: (product: Products) => void;
  setProducts: (products: Products[]) => void;
}

export const useProductsStore = create<ProductsState>()(set => ({
  products: [],
  addProduct: (product: Products) =>
    set(state => ({products: [...state.products, product]})),
  setProducts: (products: Products[]) => set({products}),
}));
