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

export const ApplyButtonStyle = {
    backgroundColor: '#108a00',
    color: 'white',       
    textAlign: 'center',
    margin : '4px 0',
    fontFamily:'NeueMontreal-Regular',
    height:'40px',
    width:'100%',
    padding : ' 0 15px'
  };

  export const SaveJobButtonStyle = {
    
    color: '#108a00',       
    textAlign: 'center',
    margin : '4px 0',
    fontFamily:'NeueMontreal-Regular',
    height:'40px',
    width:'100%',
    padding : ' 0 15px',
    marginBottom:'24px'
  
  };