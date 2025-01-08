import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./button";
import { useNavigate } from "react-router-dom";
import { TProduct } from "@/types";
import { ShoppingCart } from "lucide-react";
import { useAppDispatch } from "@/redux/hook";
import { addToCart } from "@/redux/features/cartSlice";

const ProductCard = (product: TProduct) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { _id, images, category, name, price, stock } = product;
  return (
    <Card
      onClick={() => navigate(`/products/${_id}`)}
      className="cursor-pointer hover:shadow-md transition-all"
    >
      <CardHeader>
        <CardTitle className="h-40 rounded-lg overflow-hidden">
          <img
            src={images[0]}
            alt={name}
            className="w-full h-full object-cover"
          />
        </CardTitle>
        <CardDescription>{category.name}</CardDescription>
      </CardHeader>
      <CardContent>
        <h3 className="font-bold">{price}$</h3>
        <p>{name}</p>
      </CardContent>
      <CardFooter className="flex justify-center">
        {stock <= 0 ? (
          <Button
            variant="secondary"
            className="rounded-full border-[1px] border-gray-300"
            disabled
          >
            <ShoppingCart className="mr-2" />
            Add to Cart
          </Button>
        ) : (
          <Button
            onClick={(e) => {
              e.stopPropagation(); // Prevent the click from reaching the parent
              dispatch(addToCart({ product, quantity: 1 }));
            }}
            variant="secondary"
            className="rounded-full border-[1px] border-gray-300"
          >
            <ShoppingCart className="mr-2" />
            Add to Cart
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
