import styled from 'styled-components';
import Box from '@mui/material/Box';

export const StyledGrid = styled.div`
  display: grid;
`;

export const StyledBox = styled(Box)`
  width: ${(props) => props.width || '100%'};
  border: 1px solid #ccc;
  border-radius: ${(props) => props.borderRadius || '12px'};
  padding: ${(props) => props.padding || '20px'};
  ${(props) => props.sx}; /* Add sx props */
`;

export const StyledSidebar = styled(Box)`
  width: 25%;
  margin-left: 20px;
  ${(props) => props.sx}; /* Add sx props */
`;

export const StyledFlex = styled.div`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || 'auto'};
  display: flex;
  justify-content: ${(props) => props.justifyContent || 'center'};
  flex-direction: ${(props) => props.flexDirection || 'row'};
  align-items: ${(props) => props.alignItems || 'center'};
  flex-wrap: ${(props) => (props.flexWrap ? 'wrap' : 'nowrap')};
  row-gap: ${(props) => props.rowGap || '0px'};
  column-gap: ${(props) => props.columnGap || '0px'};
  ${(props) => props.sx}; /* Add sx props */
`;

export const StyledPage = styled.div`
  padding-top: 40px;
  margin: auto;
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || 'auto'};
  display: flex;
  justify-content: ${(props) => props.justifyContent || 'center'};
  flex-direction: ${(props) => (props.col ? 'column' : 'row')};
  align-items: ${(props) => props.alignItems || 'center'};
  flex-wrap: ${(props) => (props.flexWrap ? 'wrap' : 'nowrap')};
  row-gap: ${(props) => props.rowGap || '0px'};
  column-gap: ${(props) => props.columnGap || '0px'};
  padding: ${(props) => `${props.paddingY || '0px'} ${props.paddingX || '0px'}`};
  ${(props) => props.sx}; /* Add sx props */
`;

export const Container = styled.div`
  width: 82%;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 85%;
  }

  @media (max-width: 900px) {
    width: 90%;
  }

  @media (max-width: 780px) {
    width: 95%;
  }

  ${(props) => props.sx}; /* Add sx props */
`;
