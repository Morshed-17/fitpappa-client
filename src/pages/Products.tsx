import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useGetAllProductsQuery } from "@/redux/api/endpoints/productApi";
import ProductCard from "@/components/ui/ProductCard";
import { TCategory, TProduct } from "@/types";
import { useGetAllCategoriesQuery } from "@/redux/api/endpoints/categoryApi";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader, Search } from "lucide-react";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Tracks input value
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(""); // Tracks debounced value
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sort, setSort] = useState("");
  const [minPrice, setMinPrice] = useState<number | undefined>();
  const [maxPrice, setMaxPrice] = useState<number | undefined>();

  const { data: categories } = useGetAllCategoriesQuery(undefined);
  const { data: products, isLoading } = useGetAllProductsQuery({
    searchQuery: debouncedSearchTerm,
    categoryIds: selectedCategories,
    sort,
    minPrice,
    maxPrice,
  });

  //* Search
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm); // Update debounced value after delay
    }, 500); // 300ms delay

    return () => {
      clearTimeout(handler); // Clear timeout on cleanup
    };
  }, [searchTerm]); // Runs whenever `searchTerm` changes

  // Handle input changes
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value); // Update input value immediately
  };

  //* Handle Price range

  const handlePriceSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const min = formData.get("min");
    const max = formData.get("max");

    setMinPrice(min ? parseFloat(min.toString()) : undefined);
    setMaxPrice(max ? parseFloat(max.toString()) : undefined);
  };

  //* Categories select
  // Handle checkbox changes
  const handleCheckboxChange = (categoryId: string) => {
    setSelectedCategories(
      (prev) =>
        prev.includes(categoryId)
          ? prev.filter((id) => id !== categoryId) // Remove if already selected
          : [...prev, categoryId] // Add if not selected
    );
  };

  return (
    <Container>
      <div className="min-h-screen">
        <div className="py-12 flex flex-col md:flex-row gap-10 ">
          {/* Sidebar for Search and Filters */}
          <div className="w-full md:w-1/4 space-y-8 bg-gray-50 p-5">
            {/* Search */}
            <Input
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search for products..."
              className="w-full focus-visible:ring-offset-0 focus-visible:ring-0 "
            />

            {/* Category Filters */}
            <div className="space-y-4">
              <div className="space-y-4">
                <h3 className="font-medium">Categories</h3>
                <div className="space-y-2">
                  {categories?.data?.map((item: TCategory) => (
                    <div key={item._id} className="flex items-center space-x-2">
                      {/* Checkbox for each category */}
                      <Checkbox
                        id={item._id}
                        checked={selectedCategories.includes(item._id)}
                        onCheckedChange={() => handleCheckboxChange(item._id)}
                      />
                      <label htmlFor={item._id} className="text-sm">
                        {item.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sorting */}

            <div>
              <h3 className="font-medium ">Sort By Price:</h3>
              {sort === "asc" ? (
                <Button
                  onClick={() => setSort("desc")}
                  className="mt-2"
                  size={"sm"}
                  variant={"outline"}
                >
                  High To Low
                </Button>
              ) : (
                <Button
                  onClick={() => setSort("asc")}
                  className="mt-2"
                  size={"sm"}
                  variant={"outline"}
                >
                  Low To High
                </Button>
              )}
            </div>

            {/* Price Range Filter */}
            <div>
              <h3 className="font-medium mb-2">Price Range:</h3>

              <form
                onSubmit={handlePriceSubmit}
                className="flex gap-2 items-center"
              >
                <Input
                  placeholder="min"
                  type="number"
                  name="min"
                  className="focus-visible:ring-offset-0 focus-visible:ring-0"
                />
                <Input
                  placeholder="max"
                  name="max"
                  type="number"
                  className="focus-visible:ring-offset-0 focus-visible:ring-0"
                />
                <Button className="">
                  <Search />
                </Button>
              </form>
            </div>

            {/* Clear Filters Button */}
            <Button variant="default" className="w-full bg-orange-500">
              Clear Filters
            </Button>
          </div>

          {/* Product Listings */}
          {products?.data?.products.length > 0 ? (
            <>
              <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {products?.data?.products.map((item: TProduct) => (
                  <ProductCard key={item._id} {...item} />
                ))}
              </div>
            </>
          ) : (
            <>
              {" "}
              {isLoading ? (
                <div className="w-full h-[calc(100vh-336px)] flex items-center justify-center">
                  <Loader />
                </div>
              ) : (
                <div className="w-full h-[calc(100vh-336px)] flex items-center justify-center">
                  <h1 className="text-3xl">No Product Found 🥲</h1>
                </div>
              )}
            </>
          )}
        </div>

        {/* pagination */}

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </Container>
  );
};

export default Products;
