export type TCategory = {
  _id: string;
  name: string;
  thumbnail: string;
};

export type TProduct = {
  _id: string;
  name: string;
  image: string;
  price: number;
  category: string;
  description: string
};
