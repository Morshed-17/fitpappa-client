import { TProduct } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

type TProps = TProduct;
const ProductCard = ({ _id, image, category, name, price }: TProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <img src={image} alt="" />
        </CardTitle>
        <CardDescription>{category}</CardDescription>
      </CardHeader>
      <CardContent>
        <h3 className="font-bold">{price}$</h3>
        <p>{name}</p>
      </CardContent>
      <CardFooter>
        <Link to={`/product/${_id}`}>
          <Button className="text-xs">EXPLORE MORE</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
