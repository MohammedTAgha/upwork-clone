"use client";
import { styled } from "styled-components";

export const StyledPage = styled.div`
  min-height: 100vh;
`;

export const StyledFlex = styled.div`
  display: flex;
  gap: ${(props) => props.gap};
  padding: ${(props) => props.padding};
`;

export const StyledAlignFlex = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.gap};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;

export const StyledFlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.gap};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;

export const StyledFlexColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const StyledBetweenFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledBetweenAlignFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => props.padding};
`;

export const StyledGrid150 = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: ${(props) => props.gap};
  width: 100%;
`;

export const StyledGrid180 = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: ${(props) => props.gap};
  width: 100%;
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${(props) => props.gap};
  width: 100%;
`;

export const StyledGrid250 = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${(props) => props.gap};
  width: 100%;
`;

export const StyledGridProducts = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 25px;
`;

export const StyledSection = styled.div`
  box-shadow: 0 0 10px #efefef;
  background-color: var(--white-color);
  border: 1px solid var(--gray-300-color);
  border-radius: 8px;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  position: relative;
  @media (max-width: 426px) {
    border: none;
    border-radius: 0;
  }
  overflow: hidden;
`;

export const StyledReExSupp = styled.div`
  margin-top: 20px;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 15px;
  }

  h2 {
    color: var(--dark-color);
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
    letter-spacing: -0.2px;
    margin-bottom: 20px;
  }

  @media (max-width: 426px) {
    h2 {
      font-size: 18px;
    }
  }
`;