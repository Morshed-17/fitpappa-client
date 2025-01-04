import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../../ui/button";
import { Link } from "react-router-dom";
import { TProduct } from "@/types";
import { ShoppingCart } from "lucide-react";

const ProductCard = ({ _id, images, category, name, price }: TProduct) => {
  return (
    <Card className="cursor-pointer hover:shadow-md transition-all">
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
        <Link to={`/product/${_id}`} className="w-full">
          <Button
            className=" rounded-full border-[1px] border-gray-300 w-full flex items-center gap-2 "
            variant={"outline"}
          >
            Add To Cart <ShoppingCart className="size-4 font-bold" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
