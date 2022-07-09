import styled from "styled-components";

export const Container = styled.nav`
background: #333;
color: white;
display: flex;
justify-content: space-between;
align-items: stretch;
gap: 2rem;
padding: 10px;
position: relative
`;
export const NavbarBrand = styled.h3`
 background: #333; 
 color: whitesmoke;
 margin-top: 10px;
`

export const Content = styled.nav`
background: #333;
color: white;
display: flex;
justify-content: space-between;
align-items: stretch;
gap: 2rem;
padding: 10px;

& > h3 {
  background: #333;
  color: whitesmoke;
  display: flex;
  align-items: center;
}
`;

export const NavLinksWrapper = styled.ul`
  background: #333;
  list-style: none;
  display: flex;
  gap: 1rem;
  
`

export const NavItem = styled.li`
color: whitesmoke;
`;

export const NavItemLink = styled.a`
  background: #333;
  text-transform: uppercase;
  height: 100%;
  display: flex;
  align-items: center;
  padding: .25rem;
  text-decoration: underlinedashed;
  

`;
