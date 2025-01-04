import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Select, SelectItem } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { SelectContent } from "@radix-ui/react-select";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
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

const Products = () => {
  const { data: products } = useGetAllProductsQuery(undefined);
  const { data: categories } = useGetAllCategoriesQuery(undefined);

  const [searchTerm, setSearchTerm] = useState(""); // Tracks input value
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(""); // Tracks debounced value

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm); // Update debounced value after delay
    }, 300); // 300ms delay

    return () => {
      clearTimeout(handler); // Clear timeout on cleanup
    };
  }, [searchTerm]); // Runs whenever `searchTerm` changes

  // Handle input changes
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value); // Update input value immediately
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

            {/* Sort Options */}
            <Select>
              <SelectContent>
                <SelectItem value="asc">Price: Low to High</SelectItem>
                <SelectItem value="desc">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>

            {/* Category Filters */}
            <div className="space-y-4">
              <h3 className="font-medium">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories?.data?.map((item: TCategory) => (
                  <Button key={item._id} className="text-sm">
                    {item.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div>
              <h3 className="font-medium mb-2">Price Range:</h3>
              <Slider max={500} step={5} className="max-w-full" />
            </div>

            {/* Clear Filters Button */}
            <Button variant="secondary" className="w-full">
              Clear Filters
            </Button>
          </div>

          {/* Product Listings */}
          <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products?.data?.products.slice(0, 8).map((item: TProduct) => (
              <ProductCard key={item._id} {...item} />
            ))}
          </div>
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
