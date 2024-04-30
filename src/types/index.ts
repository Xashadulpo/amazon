export interface ProductType {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  price: number;
}

export interface Itemsobject {
  id: number;
  title: string;
  category: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  hasPrime: boolean;
}
export interface Itemprops {
  item: Itemsobject[];
}
