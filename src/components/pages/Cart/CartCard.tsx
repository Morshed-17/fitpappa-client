import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  TCartItem,
} from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hook";
import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function CartCard({ product, quantity }: TCartItem) {
  const { _id, images, name, price } = product;
  const dispatch = useAppDispatch();

  return (
    <Card className="flex flex-col sm:flex-row py-4 px-5 items-center">
      <img
        src={images[0]}
        alt="Dumbbell Set"
        className="w-20 h-20 object-cover mb-4 sm:mb-0 sm:mr-4 rounded"
      />
      <CardContent className="flex-1 flex flex-col sm:flex-row justify-between p-0 items-center w-full">
        <CardHeader className="flex items-center justify-between w-full sm:w-auto">
          <CardTitle className="text-sm font-medium text-center sm:text-left">
            <Link to={`/products/${_id}`}>
              {name}
              <p className="text-gray-600 text-sm">${price}</p>
            </Link>
          </CardTitle>
        </CardHeader>
        <div className="flex items-center gap-2 mt-4 sm:mt-0 sm:flex-1 justify-center">
          <Button
            onClick={() => dispatch(decreaseQuantity(_id))}
            variant="outline"
            className="w-8 h-8"
          >
            -
          </Button>
          <p className="text-sm">{quantity}</p>
          <Button
            onClick={() => dispatch(increaseQuantity(_id))}
            variant="outline"
            className="w-8 h-8"
          >
            +
          </Button>
        </div>
        <div className="mt-4 sm:mt-0">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">
                <Trash2 />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will remove the product from your cart!
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => dispatch(removeFromCart(_id))}
                >
                  Remove From Cart
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </CardContent>
    </Card>
  );
}

export default CartCard;
