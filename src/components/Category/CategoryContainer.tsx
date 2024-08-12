import { categories } from "../../../fakeData/CategoryData.ts";
import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";

import CategoryCard from "./CategoryCard.tsx";

const CategoryContainer = () => {
  return (
    <Container>
      <div className="mt-12">
        <SectionTitle title="EQUIPMENT CATEGORY" />
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mt-6">
          {categories.map((item) => (
            <CategoryCard key={item._id} {...item} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default CategoryContainer;
