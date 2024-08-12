import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { useState } from "react";

const Cart = () => {
  // Sample data for cart items
  const cartItems = [
    {
      id: 1,
      name: "Dumbbell Set",
      image:
        "https://www.fitnessavenue.ca/cdn/shop/files/Dumbbells_abfa49a2-cef5-46c5-84f2-280124e2525e.jpg?crop=center&height=240&v=1663328311&width=240",
      price: 25.99,
      quantity: 1,
    },
    {
      id: 2,
      name: "Adjustable Bench",
      image:
        "https://shop.lifefitness.com/cdn/shop/products/HSH-MAB_POSITION_06.png?v=1677793670&width=400",
      price: 150.0,
      quantity: 1,
    },
    {
      id: 2,
      name: "Adjustable Bench",
      image:
        "https://shop.lifefitness.com/cdn/shop/products/HSH-MAB_POSITION_06.png?v=1677793670&width=400",
      price: 150.0,
      quantity: 1,
    },
  ];

  const [quantities, setQuantities] = useState(
    cartItems.map((item) => item.quantity)
  );

  const handleQuantityChange = (index: number, newQuantity: number) => {
    const newQuantities = [...quantities];
    newQuantities[index] = newQuantity;
    setQuantities(newQuantities);
  };

  const totalAmount = cartItems.reduce(
    (total, item, index) => total + item.price * quantities[index],
    0
  );

  return (
    <Container>
      <div className="py-12 min-h-[calc(100vh-200px)]" >
        <SectionTitle title="YOUR CART"/>

        {/* Cart Items */}
        <div className="grid grid-cols-1 mt-12 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item, index) => (
              <Card key={item.id} className="flex items-center p-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover mr-4 rounded"
                />
                <CardContent className="flex-1">
                  <CardHeader className="flex items-center justify-between p-0 mb-2">
                    <CardTitle className="text-sm font-medium">
                      {item.name}
                    </CardTitle>
                    <p className="text-gray-600 text-sm">
                      ${item.price.toFixed(2)}
                    </p>
                  </CardHeader>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        handleQuantityChange(
                          index,
                          Math.max(1, quantities[index] - 1)
                        )
                      }
                    >
                      -
                    </Button>
                    <Input
                      value={quantities[index]}
                      onChange={(e) =>
                        handleQuantityChange(index, parseInt(e.target.value))
                      }
                      type="number"
                      min="1"
                      className="w-12 text-center"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        handleQuantityChange(index, quantities[index] + 1)
                      }
                    >
                      +
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <Card className="p-4 space-y-3">
            <CardTitle className="text-lg font-semibold">
              Order Summary
            </CardTitle>
            <Separator />
            <div className="flex justify-between text-sm">
              <p>Subtotal</p>
              <p>${totalAmount.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-sm">
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <Separator />
            <div className="flex justify-between font-semibold text-md">
              <p>Total</p>
              <p>${totalAmount.toFixed(2)}</p>
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
