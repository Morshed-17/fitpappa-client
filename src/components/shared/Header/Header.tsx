import NavbarBottom from "./NavbarBottom";
import NavbarMiddle from "./NavbarMiddle";
import NavBarMobile from "./NavBarMobile";
import NavbarTop from "./NavbarTop";

const Header = () => {
  return (
    <div className="bg-primary">
      <NavbarTop />
      <div className="hidden md:block">
        <NavbarMiddle />
      </div>
      <div className="md:hidden">
        <NavBarMobile />
      </div>
      <div className="hidden md:block">
        <NavbarBottom />
      </div>
    </div>
  );
};

export default Header;
