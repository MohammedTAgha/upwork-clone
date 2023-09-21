"use client";
import {Heading} from '@/components/atoms/Typography/';
import Search from './components/molecules/SearchBar'
import {StyledFlex} from '@/styles/common'
import styled from "styled-components";
import React from 'react';
import Box from '@mui/material/Box';


const StyledSidebar = styled(Box)`
  width: 25%;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 20px;
  margin-left: 20px;
`;
const StyledBox = styled(Box)`
  width: ${(props) => props.width || '100%'};
  border: 1px solid #ccc;
  border-radius: ${(props) => props.borderRadius || '12px'};
  padding: ${(props) => props.padding || '20px'};
`;
const HomePage = () => {
  return (
    <Box display="flex" width="77%" margin="0 auto">
      <StyledFlex flexDirection="column" rowGap='12px' alignItems="normal"  width="75%" >
        {/* Main content goes here */}
        Welcome Back
        <Search/>
        <StyledBox>
        Main Section
      </StyledBox>
      </StyledFlex>
      <StyledSidebar>
        Sidebar
      </StyledSidebar>
    </Box>
  );
};

export default HomePage;


