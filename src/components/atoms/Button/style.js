'use client'
import { Button,  styled } from "@mui/material";
export const StyledButton=styled(Button)(({theme,width,backgroundcolor,textcolor,border})=>({
    width: width, 
    backgroundColor: backgroundcolor, 
    color: textcolor, 
    borderRadius:'30px',
    border:border,
    '&:hover': {
      backgroundColor: '#03d01d', 
    },  
}))
