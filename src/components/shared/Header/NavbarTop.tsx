import { Link } from "react-router-dom";
import Container from "../Container";
import { Button } from "@/components/ui/button";
import { ShoppingCart, UserRound } from "lucide-react";
import Search from "./Search";

const NavbarTop = () => {
  return (
    <Container>
      <div className="flex items-center py-6">
        <Link to="/" className="flex-1 text-4xl">
          <span className="font-bold text-secondary">Fit</span>
          <span className="font-bold text-white">Pappa</span>
        </Link>

        <div className="hidden flex-1 md:block">
          <Search />
        </div>
        <div className="flex-1 flex justify-end items-center gap-3">
          <UserRound className="text-white" />
          <Button
            variant="secondary"
            className="text-white rounded-none space-x-3"
          >
            <ShoppingCart />
            <span>0.0$</span>
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default NavbarTop;
