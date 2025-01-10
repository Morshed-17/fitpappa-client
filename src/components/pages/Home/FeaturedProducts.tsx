import { useGetAllProductsQuery } from "@/redux/api/endpoints/productApi";
import Container from "../../shared/Container";
import SectionTitle from "../../shared/SectionTitle";
import ProductCard from "../../ui/ProductCard";
import { TProduct } from "@/types";

const FeaturedProducts = () => {
  const { data: products, isLoading } = useGetAllProductsQuery({});

  return (
    <Container>
      <div className="mt-12">
        <SectionTitle title="FEATURED PRODUCTS" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
          {isLoading ? (
            <>loading</>
          ) : (
            <>
              {products?.data?.products?.map((item: TProduct) => (
                <ProductCard key={item._id} {...item} />
              ))}
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default FeaturedProducts;
