// components/atoms/Navigation.js
import React from 'react';
import styled from 'styled-components';

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  color: #000;
  padding: 24px;
`;

const NavLink = styled.a`
  color: inherit;
  text-decoration: none;
  padding: 10px;
  &:hover {
    
  }
`;

``


const Navigation = () => {
  return (
    <StyledNavigation>
      <NavLink href="/">LOGO</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/contact">Contact</NavLink>
    </StyledNavigation>
  );
};

export default Navigation;
