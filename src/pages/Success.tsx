/* eslint-disable @typescript-eslint/no-explicit-any */
import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { TOrderResponse } from "@/types";

export default function SuccessPage() {
  const location = useLocation();
  const orderDetails = location.state?.orderDetails as TOrderResponse;

  if (!orderDetails) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-lg font-bold text-red-500">
          No order details available.
        </p>
        <Link to="/">
          <Button>Return to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-6 w-6 text-green-500" />
            <CardTitle className="text-2xl font-bold text-green-700">
              Order Successful
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg">
            Thank you for your purchase, <b>{orderDetails.data.user.name}</b>!
            Your order has been successfully placed.
          </p>
          <div>
            <h3 className="text-xl font-semibold">Order Details:</h3>
            <ul className="list-disc pl-6">
              {orderDetails.data.products.map((product: any, index: number) => (
                
                <li key={index}>
                  Product Name: <b>{product.productId.name}</b>, Quantity:{" "}
                  <b>{product.quantity}</b>
                </li>
              ))}
            </ul>
          </div>
          <p>
            <b>Payment Method:</b> {orderDetails.data.paymentMethod}
          </p>
          <p>
            <b>Total Amount:</b> ${orderDetails.data.totalAmount}
          </p>
          <p>
            <b>Shipping Address:</b> {orderDetails.data.user.address}
          </p>
          <div className="flex justify-center mt-6">
            <Link to="/">
              <Button>Return to Home</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
