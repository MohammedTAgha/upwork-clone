import SideBar from './components/SideBar';
import PageContainer from './components/PageContainer'
import { Box, styled } from "@mui/material";
import { StyledFlex,StyledBox,StyledSidebar } from "@/styles/common";
import { AntTabs, AntTab } from "@/components/molecules/Tabs";
const StyledSearchPageContainer=styled(Box)`
   display: flex;
   margin:0 auto;
   padding:40px 30px;
   /* align-items:center; */
   /* justify-content:center; */

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

const StyledSideBarContainer=styled(Box)`
  width:25%;
  padding :15px;
`

const StyledSearchContainer=styled(Box)`
  width:75%;
  padding :15px;
`
const SearchPage = () => {
    return (
      <>
      <StyledSearchPageContainer>
        <StyledSideBarContainer>
        <SideBar/>
        </StyledSideBarContainer>
        <StyledSearchContainer>
        <StyledBox >
        <AntTabs value={activeTab} onChange={handleTabChange}>
            {tabsData.map((tab) => (
              <AntTab key={tab.value} value={tab.value} label={tab.label} />
            ))}
          </AntTabs>


        </StyledBox>
        </StyledSearchContainer>
        </StyledSearchPageContainer>
      </>
    );
  }
  
  export default SearchPage;
  

