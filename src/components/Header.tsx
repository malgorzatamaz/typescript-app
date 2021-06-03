import { Navbar, NavbarBrand } from "reactstrap";

const Header = () => {
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">Movie Catalog</NavbarBrand>
    </Navbar>
  );
};

export default Header;
