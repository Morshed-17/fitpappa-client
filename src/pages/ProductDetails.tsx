import { useNavigate, useParams } from "react-router-dom";
import { products } from "../../fakeData/ProductsData";
import { ShoppingCart, Package, Tag, Star, ArrowLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/shared/Container";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = products.find((item) => item._id === id);

  if (!product) {
    return <div className="text-center text-gray-800">Product not found</div>;
  }

  return (
    <Container>
      <div className="py-12 min-h-[calc(100vh-200px)]">
        <Button onClick={() => navigate(-1)} variant="outline" className="mb-6">
          <ArrowLeftIcon />
        </Button>
        <div>
          <div className="bg-gray-100 p-6 rounded-e-md">
            <div className="md:flex">
              <div className="md:flex-shrink-0  md:max-w-96">
                <img
                  className="rounded-md object-cover w-full"
                  src={product.image}
                  alt={product.name}
                />
              </div>

              <div className="p-6">
                <div className="uppercase tracking-wide text-sm text-gray-500 font-semibold">
                  {product.category}
                </div>
                <h1 className="mt-2 text-3xl leading-8 font-bold text-gray-900">
                  {product.name}
                </h1>

                <div className="mt-4 flex items-center">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400"
                        fill={i < 4 ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">(4.0)</span>
                </div>

                <p className="mt-4 text-2xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </p>

                <div className="mt-4 flex items-center text-gray-700">
                  <Package className="h-5 w-5 mr-2" />
                  <p>
                    In stock: <span className="font-semibold">Available</span>
                  </p>
                </div>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {product.description}
                </p>

                <div className="mt-8">
                  <Button variant="secondary">
                    <ShoppingCart className="mr-2" />
                    Add to Cart
                  </Button>
                </div>

                <div className="mt-8 flex items-center text-gray-700">
                  <Tag className="h-5 w-5 mr-2" />
                  <p>
                    Category:{" "}
                    <span className="font-semibold">{product.category}</span>
                  </p>
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
