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

export type TOrderResponse = {
  data: {
    user: {
      name: string;
      email: string;
      phone: string;
      address: string;
    };
    products: {
      productId: TProduct[];
      quantity: number;
    }[];
    paymentMethod: "Cash on Delivery" | "card";
    totalAmount: number;
  };
  message: string;
  success: boolean;
};

export type TErrorResponse = {
  status: number; // HTTP status code
  data: {
    error: string; // Error message
    statusCode: number; // Specific status code from the backend
  };
};
