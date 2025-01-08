import { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Search } from "lucide-react";
import { TCategory } from "@/types";

interface SidebarProps {
  categories: TCategory[];
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setDebouncedSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
  setMinPrice: React.Dispatch<React.SetStateAction<number | undefined>>;
  setMaxPrice: React.Dispatch<React.SetStateAction<number | undefined>>;
  page: number;
  resetFilters: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  categories,
  selectedCategories,
  setSelectedCategories,
  searchTerm,
  setSearchTerm,
  setDebouncedSearchTerm,
  sort,
  setSort,
  setMinPrice,
  setMaxPrice,
  resetFilters,
}) => {
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, setDebouncedSearchTerm]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCheckboxChange = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handlePriceSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const min = formData.get("min");
    const max = formData.get("max");

    setMinPrice(min ? parseFloat(min.toString()) : undefined);
    setMaxPrice(max ? parseFloat(max.toString()) : undefined);
  };

  return (
    <div className="w-full md:w-1/4 space-y-8 bg-gray-50 p-5">
      <Input
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search for products..."
        className="w-full focus-visible:ring-offset-0 focus-visible:ring-0"
      />

      <div className="space-y-4">
        <h3 className="font-medium">Categories</h3>
        <div className="space-y-2">
          {categories?.map((item: TCategory) => (
            <div key={item._id} className="flex items-center space-x-2">
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

      <div>
        <h3 className="font-medium">Sort By Price:</h3>
        <Button
          onClick={() => setSort(sort === "asc" ? "desc" : "asc")}
          className="mt-2"
          size="sm"
          variant="outline"
        >
          {sort === "asc" ? "High To Low" : "Low To High"}
        </Button>
      </div>

      <div>
        <h3 className="font-medium mb-2">Price Range:</h3>
        <form onSubmit={handlePriceSubmit} className="flex gap-2 items-center">
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
          <Button type="submit">
            <Search />
          </Button>
        </form>
      </div>

      <Button
        onClick={resetFilters}
        variant="default"
        className="w-full bg-orange-500"
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Sidebar;
