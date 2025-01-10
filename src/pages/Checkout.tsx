"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppSelector } from "@/redux/hook";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Loader2Icon } from "lucide-react";
import { TErrorResponse, TOrder, TOrderResponse } from "@/types";
import { useCreateOrderMutation } from "@/redux/api/endpoints/orderApi";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." }),
  address: z
    .string()
    .min(5, { message: "Address must be at least 5 characters." }),
  paymentMethod: z.enum(["Cash on Delivery", "card"], {
    required_error: "Please select a payment method.",
  }),
});

type FormData = z.infer<typeof formSchema>;

export default function Checkout() {
  const cart = useAppSelector((state) => state.cart);
  const [createOrder, { isLoading }] = useCreateOrderMutation();
  const navigate = useNavigate();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      paymentMethod: "Cash on Delivery",
    },
  });

  //* products
  const products: {
    productId: string;
    quantity: number;
  }[] = cart?.cartItems.map((item) => {
    return {
      productId: item.product._id,
      quantity: item.quantity,
    };
  });

  const onSubmit = async (data: FormData) => {
    const { address, email, name, paymentMethod, phone } = data;

    const newOrder: TOrder = {
      user: {
        name,
        address,
        email,
        phone,
      },
      products: products,
      paymentMethod,
      totalAmount: cart.totalPrice,
    };
    const result = await createOrder(newOrder);
    if (result.error) {
      const backendError = result.error as TErrorResponse;
      toast.error(backendError.data.error);
    }
    if (result.data) {
      const backendData = result.data as TOrderResponse;

      console.log(backendData);
      navigate("/success", { state: { orderDetails: backendData } });
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <Link
            to="/cart"
            className="text-sm flex items-center text-blue-500 pb-3"
          >
            <ArrowLeft /> Cart{" "}
          </Link>
          <div className="flex flex-col md:flex-row justify-between items-baseline">
            <div>
              <CardTitle>Checkout</CardTitle>
            </div>
            <div>
              <h3 className="pt-4 font-semibold">
                Total Price:{" "}
                <span className="font-bold">${cart?.totalPrice}</span>
              </h3>
              <h3 className="pt-4 font-semibold">
                Total Items:{" "}
                <span className="font-bold">{cart?.cartItems?.length}</span>
              </h3>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="1234567890" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Delivery Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="123 Main St, City, Country"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="paymentMethod"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Payment Method</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="Cash on Delivery" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Cash on Delivery
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                {isLoading ? <Loader2Icon /> : "Place Order"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
