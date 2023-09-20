// components/atoms/Navigation.js
import React from 'react';
import styled from 'styled-components';

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 10px;
`;

const NavLink = styled.a`
  color: inherit;
  text-decoration: none;
  padding: 10px;
  &:hover {
    text-decoration: underline;
  }
`;

const Navigation = () => {
  return (
    <StyledNavigation>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/contact">Contact</NavLink>
    </StyledNavigation>
  );
};

export default Navigation;
