import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/products", { state: { navSearch: search } });
  };
  return (
    <form onSubmit={handleSubmit} className="flex-1 flex items-center">
      <Input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        className="h-8  rounded-none placeholder:text-black placeholder:font-medium focus-visible:ring-offset-0"
        placeholder="SEARCH"
      />
      <Button>
        <SearchIcon className="bg-gray-600 text-white size-8 hover:bg-orange-500 cursor-pointer" />
      </Button>
    </form>
  );
};

export default Search;
