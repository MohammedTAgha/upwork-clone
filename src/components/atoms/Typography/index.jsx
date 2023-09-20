import styled from "styled-components";
 // Import the font name from your Fonts.js file
const mainFont = "Helvetica Neue"
const BigHeading = styled.h1`
  font-family: ${mainFont};
  font-size: 2rem;
  font-style: normal;
  font-weight: ${props => props.fontWeight || 700};
  color: ${props => props.color || '#001e00'};
`;
const MainHeading = styled.h1`
  font-family: ${mainFont};
  font-size: 1.75rem;
  font-style: normal;
  font-weight: ${props => props.fontWeight || 400};
  color: ${props => props.color || '#001e00'};
`;
const Heading = styled.h2`
  font-family: ${mainFont};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: ${props => props.fontWeight || 600};
  color: ${props => props.color || '#001e00'};
`;

const Body = styled.p`
  font-family: ${mainFont};
  font-size: 1rem;
  font-style: normal;
  font-weight: ${props => props.fontWeight || 500};
  color: ${props => props.color || '#001e00'};
  line-height: normal;
`;

const SmallText = styled.span`
  font-family: ${mainFont};
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: ${props => props.fontWeight || 400};
  color: ${props => props.color || '#001e00'};
  line-height: normal;
`;
const TitleH4 = styled.h4`
  font-family: ${mainFont};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: ${props => props.fontWeight || 600};
  color: ${props => props.color || '#001e00'};
  line-height: 1.75rem;
  letter-spacing: -0.0125rem;
`;
export {
  BigHeading,
  MainHeading,
  Heading,
  Body,
  SmallText,
  TitleH4,
};
