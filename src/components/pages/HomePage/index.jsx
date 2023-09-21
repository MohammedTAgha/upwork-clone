"use client";
import { Heading, MainHeading, Body } from "@/components/atoms/Typography/";
import Search from "./components/molecules/SearchBar";
import JobCard from "@/components/molecules/JopCard";
import { StyledFlex,StyledBox,StyledSidebar } from "@/styles/common";
import styled from "styled-components";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import { AntTabs, AntTab } from "@/components/molecules/Tabs";
import jobData from "@/db/jobs";
import { Avatar } from "@mui/material";
import colors from "@/constants/colors";
import SideBar from './components/organisim/SideBar';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("myFeed");
  const tabsData = [
    { label: "My Feed", value: "best-matches" },
    { label: "Most Recent", value: "most-recent" },
    { label: "Saved Jobs", value: "saved-jobs" },
  ];
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    const url = `/${activeTab}`;
    window.history.pushState(null, null, url);
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
        <Search />
        <StyledBox>
          <Heading>Jobs you might like</Heading>
          {/* taps selector (my feed , most recrnt , Saved Jops) */}
          {/* here show the jops (<Job />) */}

          <AntTabs value={activeTab} onChange={handleTabChange}>
            {tabsData.map((tab) => (
              <AntTab key={tab.value} value={tab.value} label={tab.label} />
            ))}
          </AntTabs>

          {jobData.map((job) => (
            <JobCard key={job.jobsId} {...job} />
          ))}
        </StyledBox>
      </StyledFlex>
      <SideBar/>

    </Box>
  );
};

export default HomePage;
