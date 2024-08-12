import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import Container from "../Container";
import { Menu } from "lucide-react";
import Search from "./Search";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NavBarMobile = () => {
  return (
    <Container>
      <div className="flex justify-between pb-3 gap-6">
        <Sheet>
          <SheetTrigger>
            <Menu className="size-8 text-white" />
          </SheetTrigger>
          <SheetContent className="bg-black border border-black" side="left">
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col">
                  <NavigationMenu className="">
                    <NavigationMenuList className="gap-6 flex flex-col items-start mb-6">
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
                  <Button className="bg-white rounded-none text-black ">
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
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <div className="flex-1 md:hidden">
          <Search />
        </div>
      </div>
    </Container>
  );
};

export default NavBarMobile;
