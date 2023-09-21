"use client";
import styled from "styled-components";

const mainFont = "NeueMontreal-Regular";
const defaultColor = '#001e00';
const hoverColor = '#14a800';

const baseTypographyStyles = `
  font-weight: normal;
  transition: color 0.2s ease-in-out;
`;

const BigHeading = styled.h1`
  font-family: ${mainFont};
  font-size: 2rem;
  font-style: normal;
  font-weight: ${props => props.fontWeight || 700};
  color: ${({ color }) => color || defaultColor};
  ${({ hover }) => hover && `&:hover { color: ${hoverColor}; text-decoration: underline; }`}
  ${baseTypographyStyles}
`;

const MainHeading = styled.h1`
  font-family: ${mainFont};
  font-size: 1.75rem;
  font-style: normal;
  font-weight: ${props => props.fontWeight || 400};
  color: ${({ color }) => color || defaultColor};
  ${({ hover }) => hover && `&:hover { color: ${hoverColor}; text-decoration: underline; }`}
  ${baseTypographyStyles}
`;

const Heading = styled.h2`
  font-family: ${mainFont};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: ${props => props.fontWeight || 500};
  color: ${({ color }) => color || defaultColor};
  ${({ hover }) => hover && `&:hover { color: ${hoverColor}; text-decoration: underline; }`}
  ${baseTypographyStyles}
`;

const Body = styled.p`
  font-family: ${mainFont};
  font-size: 1rem;
  font-style: normal;
  font-weight: ${props => props.fontWeight || 500};
  color: ${({ color }) => color || defaultColor};
  ${({ hover }) => hover && `&:hover { color: ${hoverColor}; text-decoration: underline; }`}
  ${baseTypographyStyles}
`;

const SmallText = styled.span`
  font-family: ${mainFont};
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: ${props => props.fontWeight || 400};
  color: ${({ color }) => color || defaultColor};
  ${({ hover }) => hover && `&:hover { color: ${hoverColor}; text-decoration: underline; }`}
  ${baseTypographyStyles}
`;

const TitleH4 = styled.h4`
  font-family: ${mainFont};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: ${props => props.fontWeight || 600};
  color: ${({ color }) => color || defaultColor};
  ${({ hover }) => hover && `&:hover { color: ${hoverColor}; text-decoration: underline; }`}
  ${baseTypographyStyles}
`;

export {
  BigHeading,
  MainHeading,
  Heading,
  Body,
  SmallText,
  TitleH4,
};
