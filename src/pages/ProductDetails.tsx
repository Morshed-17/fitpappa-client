import { useNavigate, useParams } from "react-router-dom";
import {
  ShoppingCart,
  Package,
  Tag,
  ArrowLeftIcon,
  LoaderIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/shared/Container";
import { useGetSingleProductQuery } from "@/redux/api/endpoints/productApi";
import { TProduct } from "@/types";
import { addToCart, TCartItem } from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

const ProductDetails = () => {
  const dispatch = useAppDispatch();
  const cartCount = useAppSelector((state) => state.cart);
  const { cartItems } = cartCount;
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isLoading } = useGetSingleProductQuery(id);

  const product: TProduct = data?.data;

  const handleAddToCart = () => {
    const cartItem: TCartItem = {
      product,
      quantity: 1,
    };
    dispatch(addToCart(cartItem));
  };

  const productInCart = cartItems.find((item) => item?.quantity);

  const isStockLimitReached =
    productInCart && product?.stock <= productInCart?.quantity;

  if (isLoading) {
    return (
      <div className=" h-[500px] flex items-center justify-center text-center w-full">
        <LoaderIcon className="size-10" />
      </div>
    );
  }

  if (!product) {
    return <div className="text-center text-gray-800">Product not found</div>;
  }
  return (
    <Container>
      <div className="py-12 min-h-[calc(100vh-200px)]">
        <Button
          onClick={() => {
            console.log("Going back");
            navigate(-1);
            navigate(-1);
          }}
          variant="outline"
          className="mb-6"
        >
          <ArrowLeftIcon />
        </Button>
        <div>
          <div className="bg-gray-100 p-6 rounded-e-md">
            <div className="md:flex">
              <div className="md:flex-shrink-0  md:max-w-96">
                <img
                  className="rounded-md object-cover w-full"
                  src={product.images[0]}
                  alt={product.name}
                />
              </div>

              <div className="p-6">
                <h1 className="mt-2 text-3xl leading-8 font-bold text-gray-900">
                  {product.name}
                </h1>

                <p className="mt-4 text-2xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </p>

                <div className="mt-4 flex items-center text-gray-700">
                  <Package className="h-5 w-5 mr-2" />
                  <p>
                    stock:{" "}
                    <span className="font-semibold">{product?.stock}</span>
                  </p>
                </div>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {product.description}
                </p>

                <div className="mt-8 flex items-center text-gray-700">
                  <Tag className="h-5 w-5 mr-2" />
                  <p>
                    Category:{" "}
                    <span className="font-semibold">
                      {product?.category?.name}
                    </span>
                  </p>
                </div>
                <div className="mt-8">
                  {product?.stock <= 0 ? (
                    <Button variant="secondary" className="" disabled>
                      <ShoppingCart className="mr-2" />
                      Add to Cart
                    </Button>
                  ) : (
                    <>
                      {isStockLimitReached ? (
                        <Button variant="secondary" disabled>
                          <ShoppingCart className="mr-2" />
                          Add to Cart
                        </Button>
                      ) : (
                        <Button onClick={handleAddToCart} variant="secondary">
                          <ShoppingCart className="mr-2" />
                          Add to Cart
                        </Button>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
