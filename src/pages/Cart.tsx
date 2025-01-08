import CartCard from "@/components/pages/Cart/CartCard";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";
import { Card,CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useAppSelector } from "@/redux/hook";

const Cart = () => {
  const cartCount = useAppSelector((state) => state.cart);
  const { cartItems, totalPrice } = cartCount;
  return (
    <Container>
      <div className="py-12 min-h-[calc(100vh-200px)]">
        <SectionTitle title="YOUR CART" />

        {/* Cart Items */}
        <div className="grid grid-cols-1 mt-12 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.length <= 0 ? (
              <h2 className="text-xl">
                Your Cart Is Empty! Please Add Products.
              </h2>
            ) : (
              <>
                {" "}
                {cartItems.map((item) => (
                  <CartCard key={item.product._id} {...item} />
                ))}
              </>
            )}
          </div>

          {/* Order Summary */}
          <Card className="p-4 space-y-3">
            <CardTitle className="text-lg font-semibold">
              Order Summary
            </CardTitle>
            <Separator />
            <div className="flex justify-between text-sm">
              <p>Subtotal</p>
              <p>{totalPrice}</p>
            </div>
            <div className="flex justify-between text-sm">
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <Separator />
            <div className="flex justify-between font-semibold text-md">
              <p>Total</p>
              <p>{totalPrice}</p>
            </div>
            <Button variant="secondary" className="w-full mt-4">
              Proceed to Checkout
            </Button>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
