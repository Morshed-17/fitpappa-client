import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="flex-1 flex items-center">
      <Input
        className="h-8  rounded-none placeholder:text-black placeholder:font-medium focus-visible:ring-offset-0"
        placeholder="SEARCH"
      />
      <SearchIcon className="bg-gray-600 text-white size-8 hover:bg-orange-500 cursor-pointer" />
    </div>
  );
};

export default Search;
