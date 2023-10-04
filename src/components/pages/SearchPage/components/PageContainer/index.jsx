import { Box, styled } from "@mui/material";

const StyledSearchPageContainer=styled(Box)`
   display: flex;
   flex-direction:row;
   align-items:center;
   justify-content:center;

  @media (max-width: 1440px) {
    width:1140px;

  }
  @media (max-width: 1024px) {
    width:940px;
  }

  @media (max-width: 900px) {
    width: 90%;
  }

  @media (max-width: 780px) {
    width: 95%;
  }

`

const PageContainer = ({childern})=>{
    return(
       <StyledSearchPageContainer>
        {childern}  
       </StyledSearchPageContainer>
    )
}

export default PageContainer;