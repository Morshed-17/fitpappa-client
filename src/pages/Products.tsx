import { useState } from "react";
import Container from "@/components/shared/Container";
import { useGetAllProductsQuery } from "@/redux/api/endpoints/productApi";
import { useGetAllCategoriesQuery } from "@/redux/api/endpoints/categoryApi";
import Sidebar from "@/components/pages/products/Sidebar";
import ProductList from "@/components/pages/products/ProductList";
import ProductPagination from "@/components/pages/products/ProductPagination";
import { useLocation } from "react-router-dom";

const Products = () => {
  const categoryId: string[] = [];
  const location = useLocation();
  const category = location.state?.categoryId;
  const navSearch = location.state?.navSearch;
  if(category){
    categoryId.push(category);
  }
  
  const [searchTerm, setSearchTerm] = useState(navSearch);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] =
    useState<string[]>(categoryId);
  const [sort, setSort] = useState("");
  const [minPrice, setMinPrice] = useState<number | undefined>();
  const [maxPrice, setMaxPrice] = useState<number | undefined>();
  const [page, setPage] = useState(1);
  const limit = 8;

  const { data: categories } = useGetAllCategoriesQuery(undefined);
  const { data: products, isLoading } = useGetAllProductsQuery({
    searchQuery: debouncedSearchTerm,
    categoryIds: selectedCategories,
    sort,
    minPrice,
    maxPrice,
    page,
    limit,
  });

  const totalPages = products?.data?.totalPages;
  const currentPage = products?.data?.currentPage;

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  //* --Reset filters
  const resetFilters = () => {
    setSearchTerm("");
    setDebouncedSearchTerm("");
    setSelectedCategories([]);
    setSort("");
    setMinPrice(undefined);
    setMaxPrice(undefined);
    setPage(1);
  };

  return (
    <Container>
      <div className="min-h-screen">
        <div className="py-12 flex flex-col md:flex-row gap-10">
          <Sidebar
            categories={categories?.data}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            setDebouncedSearchTerm={setDebouncedSearchTerm}
            sort={sort}
            setSort={setSort}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
            page={page}
            resetFilters={resetFilters}
          />
          <ProductList
            products={products?.data?.products}
            isLoading={isLoading}
          />
        </div>
        <ProductPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </Container>
  );
};

export default Products;
