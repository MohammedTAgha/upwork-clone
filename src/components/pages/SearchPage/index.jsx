"use client";
import SideBar from './components/SideBar';
import PageContainer from './components/PageContainer'
import { Box, styled } from "@mui/material";
import { StyledFlex,StyledBox,StyledSidebar } from "@/styles/common";
import { AntTabs, AntTab } from "@/components/molecules/Tabs";
import React, { useState } from "react";

const StyledSearchPageContainer=styled(Box)`
   display: flex;
   margin:0 auto;
   padding:16px 30px;
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
const SearchComponent = () => <div>This is the Search component content</div>;
const SavedJobsComponent = () => <div>This is the Saved Jobs component content</div>;

const SearchPage = () => {
  const tabsData = [
    { label: "Search", value: "Search", component: SearchComponent },
    { label: "Saved Jobs", value: "saved-jobs", component: SavedJobsComponent },
  ];
  const [activeTab, setActiveTab] = useState("Search");

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    // const url = `/${activeTab}`;
    // window.history.pushState(null, null, url);
  };

  const getComponentForTab = (tabValue) => {
    const selectedTab = tabsData.find((tab) => tab.value === tabValue);
    return selectedTab ? selectedTab.component : null;
  };

  const SelectedComponent = getComponentForTab(activeTab);

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
              <AntTab key={tab.value} value={tab.value} label={tab.label}  />
            ))}
          </AntTabs>
          {SelectedComponent && <SelectedComponent />}     

        </StyledBox>
        </StyledSearchContainer>
        </StyledSearchPageContainer>
      </>
    );
  }
  
  export default SearchPage;
  

