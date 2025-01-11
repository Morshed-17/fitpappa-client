import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./button";
import { Link, useNavigate } from "react-router-dom";
import { TProduct } from "@/types";

const ProductCard = (product: TProduct) => {
  const navigate = useNavigate();
  const { _id, images, category, name, price } = product;
  return (
    <Card
      onClick={() => navigate(``)}
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
        <Link to={`/products/${_id}`}>
          <Button
            variant="secondary"
            className="rounded-full border-[1px] border-gray-300"
          >
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
