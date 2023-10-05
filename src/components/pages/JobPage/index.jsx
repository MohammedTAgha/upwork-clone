import React from "react";
import styled from "styled-components";
import { Avatar, Box, Stack, Divider, Slider } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import {
  Heading,
  MainHeading,
  Body,
  SmallText,
} from "@/components/atoms/Typography/";
import colors from "@/constants/colors";
import IconWithText from "./Components/Atoms/TextWithIcon";
import WhereToVoteIcon from "@mui/icons-material/WhereToVote";
import TourIcon from '@mui/icons-material/Tour';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import SellIcon from "@mui/icons-material/Sell";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SectionContainer from "./Components/Atoms/SectionContainer";
import Typography from "@mui/material/Typography";
import ChipsGrupe from "@/components/molecules/ChipsGrupe";
import Button from "@mui/material-next/Button";
import { ApplyButtonStyle ,SaveJobButtonStyle } from "./style.js";
// import Button from '@mui/material/Button';

const Container = styled(Box)`
  border: 1px solid #ccc;
  width: 100%;
  border-radius: 10px;
  display: flex;
  row-gap: 30pd;
`;
3;
const LeftBox = styled(Box)`
  width: 70%;
  border-right: 1px solid #ccc;
  padding: 20px;
`;

const RightBox = styled(Box)`
  width: 30%;
  padding: 20px;
`;

const JobPage = ({ job }) => {
  // Destructure job data
  const {
    title,
    fixedPrice,
    hourly,
    description,
    proposal,
    spent,
    location,
    tags,
    jobsId,
    isVerified
  } = job;
  return (
    <Container>
      <LeftBox>
        <Heading>{title}</Heading>
        <Body hover>Full Stack Development</Body>
        <SmallText color={colors.gray600Color}>Posted 11 hours ago</SmallText>
        <IconWithText text={"Worldwide"} icon={<WhereToVoteIcon />} />
        <Divider width="100%" />
        <SectionContainer>
          <Body>
           {description}
          </Body>
        </SectionContainer>
        <SectionContainer>
          <Body fontWeight={"300"}>
            Expensify is a team of generalists developing today's leading
            expense management tool. Maintaining our reputation as an innovative
            leader in the world of finance requires an incredibly reliable and
            secure system for processing financial transactions. Accordingly, we
            primarily leverage time-tested languages, but we're looking to unify
            our front-end across platforms. For this, we're leveraging React
            Native and are looking toward the community on Upwork to help solve
            a variety of problems, both big and small, related to this
            migration.
          </Body>
        </SectionContainer>

        <SectionContainer>
          <Stack direction="row" spacing={1}>
            <ListItem sx={{ maxWidth: "220px" }}>
              <SellIcon fontSize="small" sx={{ marginRight: "8px" }} />
              <ListItemText primary={fixedPrice} secondary="Fixed-price" />
            </ListItem>

            <ListItem sx={{ maxWidth: "220px" }}>
              <PsychologyIcon fontSize="small" sx={{ marginRight: "8px" }} />
              <ListItemText
                primary="Intermediate"
                secondary="I am looking for a mix of experience and value"
              />
            </ListItem>
          </Stack>
        </SectionContainer>

        <SectionContainer>
          <Typography variant="body2" gutterBottom>
            Project Type: One-time project
          </Typography>
        </SectionContainer>

        <SectionContainer>
          <Typography variant="h6">Skills and Expertise</Typography>
          <ChipsGrupe list={tags} />
        </SectionContainer>

        <SectionContainer>
          <Typography variant="h6">Activity on this job</Typography>
          <Typography variant="caption" display="block" gutterBottom>
            {proposal}
          </Typography>
        </SectionContainer>
      </LeftBox>
      <RightBox>
      <SectionContainer>
        <Button style={ApplyButtonStyle}>Apply now</Button>
        <Button style={SaveJobButtonStyle} variant="outlined" >
        <FavoriteBorderOutlinedIcon />
          Save Job
        </Button>
        <Body hover>
        <TourIcon />
        Flag as inappator 
        </Body>
        <Typography variant="caption">
        Send a proposal for: 16 Connects 
        </Typography>
        <br></br>
        <Typography variant="caption">
        Available Connects: 160
        </Typography>
        </SectionContainer>
        <SectionContainer>
        <Typography variant="p">
        About the client <br></br>
        </Typography>
        <Typography variant="caption">
        About the client
        </Typography>
        <ListItemText primary="Turkey" secondary="Izmir 2:34 pm" />
        <ListItemText  primary="70 jobs posted" secondary="69% hire rate, 2 open jobs" />
        <ListItemText  primary="$19K total spent  " secondary="97 hires, 29 active" />
        <ListItemText  primary="Sales & Marketing  " secondary="Member since Jun 12, 2020" />
        </SectionContainer>
      </RightBox>
    </Container>
  );
};

export default JobPage;
