import HeaderMobile from "./headerMobile";
import Search from "./searchMenu";
import MenuMobile from "./menuMobile";
import HeaderDesktop from "./headerDesktop";
import MenuDesk from "./menuDesktop";

const Header = () => {
  return (
    <>
      <HeaderMobile />
      <HeaderDesktop />
      <MenuMobile />
      <MenuDesk />
      <Search />
    </>
  );
};

export default Header;
