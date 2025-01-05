import { useGetAllCategoriesQuery } from "@/redux/api/endpoints/categoryApi.ts";
import Container from "../../shared/Container.tsx";
import SectionTitle from "../../shared/SectionTitle.tsx";

import CategoryCard from "./CategoryCard.tsx";
import { TCategory } from "@/types/index.ts";

const CategoryContainer = () => {
  const { data: categories } = useGetAllCategoriesQuery(undefined);

  return (
    <Container>
      <div className="mt-12">
        <SectionTitle title="EQUIPMENT CATEGORY" />

        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-12 mt-6">
          {categories?.data?.slice(0, 5).map((item: TCategory) => (
            <CategoryCard key={item._id} {...item} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default CategoryContainer;
