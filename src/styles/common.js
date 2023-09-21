import styled from "styled-components";
export const StyledGrid = styled.div`
  display: grid;
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
`;
