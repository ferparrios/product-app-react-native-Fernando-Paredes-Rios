export interface CreateProducts {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export interface Products extends CreateProducts {
  id: number;
  rating: Rating;
}

export enum Category {
  Electronics = 'electronics',
  Jewelery = 'jewelery',
  MenSClothing = "men's clothing",
  WomenSClothing = "women's clothing",
}

export interface Rating {
  rate: number;
  count: number;
}

export interface StarRatingProps {
  rating: Rating;
}
