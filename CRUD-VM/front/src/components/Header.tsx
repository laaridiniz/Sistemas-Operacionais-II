import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Images from "../images/logo_navbar.svg";

function Header() {
  return (
    <>
      <Navbar
        collapseOnSelect
        fixed="top"
        expand="sm"
        variant="dark"
        className="position-fixed w-100 top-0 background-header"
      >
        <Container className="mb-2">
          <Navbar.Brand to="/" as={CustomLink}>
          
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <CustomLink to="/">CADASTRAR</CustomLink>
              <CustomLink to="/listagem">LISTAGEM</CustomLink>
              {/* <CustomLink to="/perfil">PERFIL</CustomLink> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

function CustomLink({
  to,
  children,
  ...props
}: {
  to: string;
  children: string;
}) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <Nav.Link
      as={Link}
      to={to}
      className={"me-2" + (isActive ? " active" : "")}
      {...props}
    >
      {children}
    </Nav.Link>
  );
}

export default Header;
