import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

import { Container, Content, NavItem, NavLinksWrapper, NavbarBrand } from "./styles";

export default function Header() {
  return (
    <>
    <Container>
      <Link to="/"><NavbarBrand>Book search</NavbarBrand></Link>
      <Content>
          <NavLinksWrapper>
            <NavItem>
              <CustomLink to="/About">About the app</CustomLink>
            </NavItem>
          </NavLinksWrapper>
      </Content>
    </Container>
    </>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
