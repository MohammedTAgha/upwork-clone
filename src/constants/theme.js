"use client";
// import { ThemeProvider, createTheme } from '@mui/material/styles';
const { createTheme } = require("@mui/material");
import { fontSizes, fonts, lightColors, media } from "./style";
// Define your custom color variables
export const customColors = {
  primary: "#108a00",
  secondary: "#f7fafc",
  // ... add other colors here
};

// Create a custom theme using the provided font family and color variables
export const theme = createTheme({
  typography: {
    fontFamily: "NeueMontreal-Regular", // Use your desired font family
  },
  fontsize: fontSizes,
  palette: {
    primary: {
      main: customColors.primary,
    },
    secondary: {
      main: customColors.secondary,
    },
    // ... add other color mappings
  },
});

// const { createTheme } = require("@mui/material");

// export const theme = createTheme({
//   typography: fonts,
//   colors: lightColors,
//   fontsize: fontSizes,
//   media: media,
// });
