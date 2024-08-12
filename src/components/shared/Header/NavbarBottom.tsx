import { CircleDollarSign, Star, Truck } from "lucide-react";
import Container from "../Container";

const NavbarBottom = () => {
  return (
    <div className="bg-[#C3C3C4] py-3">
      <Container>
        <div className="flex items-center ">
          <div className="flex-1">
            <div className="flex gap-1 items-center">
              <Star className="bg-primary text-white size-4" />
              <Star className="bg-primary text-white size-4" />
              <Star className="bg-primary text-white size-4" />
              <Star className="bg-primary text-white size-4" />
              <Star className="bg-primary text-white size-4" />
              <p className="text-sm">4.8/5 ON TRUSTPILOT</p>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="flex gap-1 items-center">
              <Truck className=" text-primary size-6" />
              <p className="text-sm">4.8/5 ON TRUSTPILOT</p>
            </div>
          </div>
          <div className="flex-1 flex justify-end">
            <div className="flex gap-1 items-center">
              <CircleDollarSign className=" text-primary size-6" />

              <p className="text-sm">Affordable Prices</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavbarBottom;
