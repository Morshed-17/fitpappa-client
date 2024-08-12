import { products } from "../../../fakeData/ProductsData";
import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  return (
    <Container>
      <div className="mt-12">
        <SectionTitle title="FEATURED PRODUCTS" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
          {products.map((item) => (
            <ProductCard key={item._id} {...item} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default FeaturedProducts;
