// components/atoms/Navigation.js
"use client";
import React from 'react';
import styled from 'styled-components';
import {StyledFlex} from '@/styles/common/'
import Avatar from'@/components/atoms/Avatar'
import Logo from '@/components/atoms/Logo';
import NavSearch from '@/components/molecules/NavSearch';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import NavigationIcon from '@mui/icons-material/Navigation';
import WidgetsIcon from '@mui/icons-material/Widgets';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Link from 'next/link'
// import logopng from 'upwork.png'
const StyledNavigation = styled.nav`
  height:64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  color: #000;
  padding: 4px 24px;
`;

const NavLink = styled.div`
  color: inherit;
  font-size:0.875rem;
  color: #000;
  text-decoration: none;
  padding: 10px;
  font-waight:500;
  &:hover {
    color: #108a00;
  }
`;

``


const Navigation = () => {
  return (
    <StyledNavigation>
      <img  src='assets/images/upwork.png' width= '120px'  />
      
      <StyledFlex justifyContent='flex-start'  >
      <Link href='/Home'>
      <NavLink >Find work</NavLink>
      </Link>
      <NavLink >My Jobs</NavLink>
      <NavLink >Reborts</NavLink>
      <NavLink >Messages</NavLink>
      </StyledFlex>
      <StyledFlex justifyContent='flex-end'>
      <NavSearch/>
     <QuestionMarkIcon/>
     <NotificationsIcon/>
     <WidgetsIcon/>
     <NavigationIcon/>
     <Link href='/Profile'>
     <Avatar size={'sm'}/>
     </Link>
      </StyledFlex>
    </StyledNavigation>
  );
};

export default Navigation;
