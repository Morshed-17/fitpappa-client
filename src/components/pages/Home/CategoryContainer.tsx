import { useGetAllCategoriesQuery } from "@/redux/api/endpoints/categoryApi";
import Container from "../../shared/Container";
import SectionTitle from "../../shared/SectionTitle";
import CategoryCard from "./CategoryCard";
import { TCategory } from "@/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CategoryContainer = () => {
  const { data: categories } = useGetAllCategoriesQuery(undefined);

  return (
    <Container>
      <div className="mt-12 ">
        <SectionTitle title="EQUIPMENT CATEGORY" />

        <div className="mt-6 relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full px-2 sm:px-0"
          >
            <CarouselContent className="-ml-2 sm:-ml-4">
              {categories?.data?.map((item: TCategory) => (
                <CarouselItem
                  key={item._id}
                  className="pl-2 sm:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <CategoryCard {...item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute left-0 top-1/2 -translate-y-1/2  sm:block z-10">
              <CarouselPrevious className="relative left-0" />
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2  sm:block z-10">
              <CarouselNext className="relative right-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </Container>
  );
};

export default CategoryContainer;
