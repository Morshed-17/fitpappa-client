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

        <div className="flex gap-6 mt-6 overflow-x-auto  scrollbar-hide lg:justify-between">
          {categories?.data?.map((item: TCategory) => (
            <CategoryCard key={item._id} {...item} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default CategoryContainer;
