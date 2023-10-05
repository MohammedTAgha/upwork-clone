"use client";
import SideBar from './components/SideBar';
import PageContainer from './components/PageContainer'
import { Box, Stack, styled } from "@mui/material";
import { StyledFlex,StyledBox,StyledSidebar } from "@/styles/common";
import { AntTabs, AntTab } from "@/components/molecules/Tabs";
import React, { useState } from "react";
import Search from '../HomePage/components/molecules/SearchBar';
import Button from "@mui/material-next/Button";
import FolderIcon from '@mui/icons-material/Folder';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import Typography from "@mui/material/Typography";
// import jobData from "@/db/jobs";
import JobCard from "@/components/molecules/JopCard";
import { useRouter } from 'next/router'
import useJobData from '@/hooks/useApi';
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
import {SaveJobButtonStyle} from '@/components/pages/JobPage/style';
const StyledSideBarContainer=styled(Box)`
  width:25%;
  padding :15px;
`

const StyledSearchContainer=styled(Box)`
  width:75%;
  padding :15px;
`
const SearchComponent = () => (
  
  <Stack sx={{padding:'18px 8px'}}>
    <Box style={{display: 'flex',flexDirection:'row'}}>    
    <Search width={'76%'} />
    <Button  style={{...SaveJobButtonStyle , width:'130px' }} variant="outlined" >
    <FolderIcon/>
      Saved Jobs
    </Button>
    </Box>
    <Box style={{display: 'flex',flexDirection:'row' , marginBottom:'14px'}}>
    <RssFeedIcon/>
    <Typography color='primary'>1500 found jobs </Typography>
    </Box>
    {/* {jobData.map((job) => (
        <JobCard key={job.jobsId} {...job} onClick={() => router.push('/about')} />
      ))} */}
  </Stack>
  
)
const SavedJobsComponent = () =>{
  return(
    <>
       {/* {jobData.map((job) => (
        <JobCard key={job.jobsId} {...job} />
      ))} */}
    </>
  )
}

const SearchPage = () => {
  
  const router = useRouter()
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
        <StyledBox padding ='14px'>
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
  

