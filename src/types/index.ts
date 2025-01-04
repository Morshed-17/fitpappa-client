export type TCategory = {
  _id: string;
  name: string;
  description: string;
  image: string;
};

export type TProduct = {
  _id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: TCategory;
  images: string[];
};
