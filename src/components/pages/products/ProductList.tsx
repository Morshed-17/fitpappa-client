import { TProduct } from "@/types";
import ProductCard from "@/components/ui/ProductCard";
import { Loader } from "lucide-react";

interface ProductListProps {
  products: TProduct[];
  isLoading: boolean;
}

const ProductList: React.FC<ProductListProps> = ({ products, isLoading }) => {
  
  if (isLoading) {
    return (
      <div className="h-[600px] w-full flex items-center  justify-center">
        <Loader className="size-10" />
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="h-[calc(100vh-336px)] flex items-center justify-center">
        <h1 className="text-3xl">No Product Found 🥲</h1>
      </div>
    );
  }

  return (
    <div className="md:w-3/4 grid grid-cols-1 grid-flow-row lg:grid-rows-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.map((item: TProduct) => (
        <ProductCard key={item._id} {...item} />
      ))}
    </div>
  );
};

export default ProductList;
