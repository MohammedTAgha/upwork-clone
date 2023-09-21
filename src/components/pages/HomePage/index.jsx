"use client";
import { Heading, MainHeading, Body } from "@/components/atoms/Typography/";
import Search from "./components/molecules/SearchBar";
import JobCard from "@/components/molecules/JopCard";
import { StyledFlex } from "@/styles/common";
import styled from "styled-components";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import { AntTabs, AntTab } from "@/components/molecules/Tabs";
import jobData from "@/db/jobs";
import { Avatar } from "@mui/material";
import colors from "@/constants/colors";
const StyledSidebar = styled(Box)`
  width: 25%;
  ${'' /* border: 1px solid #ccc; */}

  ${'' /* padding: 20px; */}
  margin-left: 20px;
`;
const StyledBox = styled(Box)`
  width: ${(props) => props.width || "100%"};
  border: 1px solid #ccc;
  border-radius: ${(props) => props.borderRadius || "12px"};
  padding: ${(props) => props.padding || "20px"};
`;

// taps

const TabsContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Tab = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-right: 10px;
  ${(props) =>
    props.active &&
    `
  background-color: #f0f0f0;
`}
`;

const Job = ({ title, description }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

// taps end
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
      <StyledSidebar>
      <StyledBox>
      <StyledFlex flexDirection='column' >
        <Avatar
                alt="user name"
                src="assets/images/avatar.jpg"
                sx={{ width: 56, height: 56 }}
                />
        <Heading>
            Mohammed . T
        </Heading>
        <Body color={colors.gray600Color}>
        Full stack developer 
        </Body>
        </StyledFlex>
      </StyledBox>
      
      </StyledSidebar>
    </Box>
  );
};

export default HomePage;
