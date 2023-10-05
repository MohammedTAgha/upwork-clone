"use client";
import { Heading, MainHeading, Body } from "@/components/atoms/Typography/";
import Search from "./components/molecules/SearchBar";
import JobCard from "@/components/molecules/JopCard";
import { StyledFlex,StyledBox,StyledSidebar } from "@/styles/common";
import styled from "styled-components";
import React, { useState ,useContext  } from "react";
import Box from "@mui/material/Box";
import Drawer from '@mui/material/Drawer';
import { AntTabs, AntTab } from "@/components/molecules/Tabs";
// import jobData from "@/db/jobs";
import { Avatar } from "@mui/material";
import colors from "@/constants/colors";
import SideBar from './components/organisim/SideBar';
import JobDetailsDrower from '@/components/pages/JobDetailsDrower'
import useJobData from '@/hooks/useApi';
import JobList from 'src/components/common/JobList/index';
import { useRouter } from 'next/navigation';
import {SavedJobsContext } from '@/context/SavedJobsContext';


const HomePage = () => {
  const { savedJobs, addSavedJob, removeSavedJob } = useContext(SavedJobsContext);
  const [searchQuery, setSearchQuery] = useState('');
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
   const router = useRouter(); 
  const handleSearch = () => {
   
    router.push(`/Search?query=${searchQuery}`);  // Change 'query' to 'searchQuery'
    // Handle the search logic here, e.g., navigate to a search page with the query
    console.log('Search query:', searchQuery);
  };

  const { jobData, loading, error } = useJobData();
 
  console.log(jobData)
  const [activeTab, setActiveTab] = useState("My Feed");
  const tabsData = [
    { label: "My Feed", value: "My Feed" },
    { label: "Saved Jobs", value: "Saved Jobs" },
  ];
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleDrawerOpen = (job) => {
    console.log("open")
    setSelectedJob(job);
    setDrawerOpen(true);
   
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
 
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    console.log(activeTab)
    // const url = `/${activeTab}`;
    // window.history.pushState(null, null, url);
  };

  const getTabContent = (tabValue) => {

    // Return content based on the selected tab
    switch (tabValue) {
      case 'My Feed':
        return <JobList jobData={jobData} handleDrawerOpen={handleDrawerOpen} />;
      case 'Saved Jobs':
        // Add your saved jobs content component here
        return <JobList jobData={savedJobs} handleDrawerOpen={handleDrawerOpen} />;
      default:
        return null;
    }
  };

  return (
    <Box display="flex" width="77%" margin="0 auto">
      <StyledFlex
        flexDirection="column"
        rowGap="12px"
        alignItems="normal"
        width="75%"
      >
        {/* Main content goes here */}
        <Search   handleInputChange={handleInputChange}
          handleSearch={handleSearch}/>
        <StyledBox>
          <Heading>Jobs you might like</Heading>
          {/* taps selector (my feed , most recrnt , Saved Jops) */}
          {/* here show the jops (<Job />) */}

          <AntTabs value={activeTab} onChange={handleTabChange}>
            {tabsData.map((tab) => (
              <AntTab key={tab.value} value={tab.value} label={tab.label} />
            ))}
          </AntTabs>
          {/* Render content based on the selected tab */}
          {getTabContent(activeTab)}
         
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerClose}
        PaperProps={{
            sx: { width: "77%",borderRadius: '16px',padding:'24px' }
          }}
       
      >
        <div>
          {selectedJob && (
            <JobDetailsDrower job={selectedJob}/>
          )}
        </div>
      </Drawer>
        </StyledBox>
      </StyledFlex>
      <SideBar/>

    </Box>
  );
};

export default HomePage;
