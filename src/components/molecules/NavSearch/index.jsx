import React from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
const StyledNavSearch = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  border: 2px solid rgb(228, 235, 228);
  ${"" /* background-color: #f5f5f5; */}
  padding: 10px;
  padding-right: 0;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 0 10px;
  background: transparent;
  &:hover {
    ${'' /* background-color:#f2f7f2; */}
  }
`;

// const SearchIcon = styled.i`
//   ${"" /*    */}
// `;

const SearchTypeSelect = styled.select`
  background-color: #fff0;
  font-size:12px;
  border: none;
  border-radius: 20px;
  padding: 0 8px;
  outline: none;
  height: 40px;
  margin: 0;
`;

const NavSearch = () => {
  return (
    <StyledNavSearch>
      <SearchIcon />
      <SearchInput type="text" placeholder="Search..." />
      <SearchTypeSelect>
        <option value="jobs">Jobs</option>
        <option value="talents">Talents</option>
        <option value="projects">Projects</option>
      </SearchTypeSelect>
    </StyledNavSearch>
  );
};

export default NavSearch;
