import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavLink } from "react-router-dom";
import Container from "../Container";

import { Button } from "@/components/ui/button";

const NavbarMiddle = () => {
  return (
    <div className="pb-6">
      <Container>
        <div className="flex justify-between">
          <NavigationMenu>
            <NavigationMenuList className="gap-6">
              <NavigationMenuItem className="">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-secondary font-bold"
                      : "text-white"
                  }
                >
                  HOME
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="">
                <NavLink
                  to="/products"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-secondary font-bold"
                      : "text-white"
                  }
                >
                  PRODUCTS
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="">
                <NavLink
                  to="/about-us"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-secondary font-bold"
                      : "text-white"
                  }
                >
                  ABOUT US
                </NavLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button className="bg-white rounded-none text-black text-lg">
            <NavLink
              to="/products-management"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              PRODUCTS MANAGEMENT
            </NavLink>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default NavbarMiddle;
