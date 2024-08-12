import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectItem } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { SelectContent } from "@radix-ui/react-select";
import { useState } from "react";
import { products } from "../../fakeData/ProductsData";
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

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [sortOption, setSortOption] = useState("asc");

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategories([]);
    setPriceRange([0, 500]);
    setSortOption("asc");
  };

  return (
    <Container>
      <div className="min-h-screen">
        <div className="py-12 flex flex-col md:flex-row gap-10 ">
          {/* Sidebar for Search and Filters */}
          <div className="w-full md:w-1/4 space-y-8 bg-gray-50 p-5">
            {/* Search */}
            <Input
              placeholder="Search for products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />

            {/* Sort Options */}
            <Select onValueChange={setSortOption} value={sortOption}>
              <SelectContent>
                <SelectItem value="asc">Price: Low to High</SelectItem>
                <SelectItem value="desc">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>

            {/* Category Filters */}
            <div className="space-y-4">
              <h3 className="font-medium">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {["Weights", "Benches", "Barbells", "Strength"].map(
                  (category) => (
                    <Button
                      key={category}
                      variant={
                        selectedCategories.includes(category)
                          ? "outline"
                          : "destructive"
                      }
                      onClick={() => handleCategoryChange(category)}
                      className="text-sm"
                    >
                      {category}
                    </Button>
                  )
                )}
              </div>
            </div>

            {/* Price Range Filter */}
            <div>
              <h3 className="font-medium mb-2">
                Price Range: ${priceRange[0]} - ${priceRange[1]}
              </h3>
              <Slider
                value={priceRange}
                max={500}
                step={5}
                className="max-w-full"
                onValueChange={(newValue) =>
                  setPriceRange(newValue as [number, number])
                }
              />
            </div>

            {/* Clear Filters Button */}
            <Button
              variant="secondary"
              onClick={clearFilters}
              className="w-full"
            >
              Clear Filters
            </Button>
          </div>

          {/* Product Listings */}
          <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Example Product Cards */}
            {/* Replace with dynamic data */}
            {products?.slice(0, 8).map((item) => (
              <Card className="shadow-sm rounded-none" key={item._id}>
                <CardHeader>
                  <img
                    src={item.image}
                    alt="Product Name"
                    className=" object-cover "
                  />
                  <CardTitle>{item.name}</CardTitle>
                  <p className="text-gray-600 font-bold">${item.price}</p>
                </CardHeader>
                <CardContent>
                  <Link to={`/product/${item._id}`}>
                    <Button variant="secondary" className="w-full">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
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
