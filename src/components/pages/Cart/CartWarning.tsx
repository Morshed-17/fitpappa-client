import { useAppSelector } from "@/redux/hook";
import { useEffect } from "react";

const CartWarning = () => {
  const cart = useAppSelector((state) => state.cart); // Access the cart from Redux

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (cart.cartItems.length > 0) {
        event.preventDefault();
        event.returnValue = ""; // Show the default warning dialog
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [cart]);

  return null; // This component only handles the warning logic
};

export default CartWarning;
