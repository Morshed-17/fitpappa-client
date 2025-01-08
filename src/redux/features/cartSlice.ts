import { TProduct } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { toast } from "sonner";

export type TCartItem = {
  product: TProduct;
  quantity: number;
};

type TInitialState = {
  cartItems: TCartItem[];
  totalPrice: number;
};

const initialState: TInitialState = {
  cartItems: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",

  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TCartItem>) => {
      const { product, quantity } = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.product._id === product._id
      );
      const currentQuantity = existingItem?.quantity || 0;
      const isStockAvailable = product.stock >= currentQuantity + quantity;

      if (!isStockAvailable) {
        toast.error("Stock Out");
        return;
      }

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cartItems.push(action.payload);
      }

      state.totalPrice += product.price * quantity;
      toast.success("Product Added To Cart");
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.product._id === productId
      );

      if (existingItem) {
        if (existingItem.quantity < existingItem.product.stock) {
          existingItem.quantity += 1;
          state.totalPrice += existingItem.product.price;
          toast.success("Quantity Increased");
        } else {
          toast.error("Stock Out");
        }
      } else {
        toast.error("Product not found in the cart");
      }
    },

    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.product._id === productId
      );

      if (existingItemIndex !== -1) {
        const existingItem = state.cartItems[existingItemIndex];

        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          state.totalPrice -= existingItem.product.price;
          toast.success("Quantity Decreased");
        } else {
          state.cartItems.splice(existingItemIndex, 1);
          state.totalPrice -= existingItem.product.price;
          toast.success("Product Removed from Cart");
        }
      } else {
        toast.error("Product not found in the cart");
      }
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.product._id === productId
      );

      if (existingItemIndex !== -1) {
        const existingItem = state.cartItems[existingItemIndex];
        state.totalPrice -= existingItem.product.price * existingItem.quantity;
        state.cartItems.splice(existingItemIndex, 1);
        toast.success("Product Removed from Cart");
      } else {
        toast.error("Product not found in the cart");
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
