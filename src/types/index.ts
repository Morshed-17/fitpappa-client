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


export type TOrder = {
  user: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  products: {
    productId: string;
    quantity: number;
  }[];
  paymentMethod: "Cash on Delivery" | "card";
  totalAmount: number;
};
