"use client";
import styled from "styled-components";
import Box from "@mui/material/Box";


export const StyledMainBox = styled(Box)`
width: 75%;
border: 1px solid #ccc;
border-radius : 12px 0 0 12px;
padding: ${(props) => props.padding || "20px"};
`

export const StyleSideBox = styled(Box)`
width: 25%;
border: 1px solid #ccc;
border-radius : 0px 12px 12px 0px;
padding: ${(props) => props.padding || "20px"};
`