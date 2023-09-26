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
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import SellIcon from "@mui/icons-material/Sell";
import PsychologyIcon from '@mui/icons-material/Psychology';
import SectionContainer from './Components/Atoms/SectionContainer'
import Typography  from '@mui/material/Typography';
import ChipsGrupe from '@/components/molecules/ChipsGrupe'
import Button from '@mui/material-next/Button';

const Container = styled(Box)`
  border: 1px solid #ccc;
  width: 100%;
  border-radius: 10px;
  display: flex;
  row-gap: 30pd;
`;
3;
const LeftBox = styled(Box)`
  width: 75%;
  border-right: 1px solid #ccc;
  padding: 20px;
`;

const RightBox = styled(Box)`
  width: 25%;
  padding: 20px;
`;
const buttonStyle = {
  backgroundColor: '#108a00',
  color: 'white',       // Set text color to white
  textAlign: 'center',
  margin : '6px auto'  // Center align the text
};


const JobPage = () => {
  return (
    <Container>
      <LeftBox>
     
        <Heading>Configure NodeJS app with Google Auth</Heading>
        <Body hover>Full Stack Development</Body>
        <SmallText color={colors.gray600Color}>Posted 11 hours ago</SmallText>
        <IconWithText text={"Worldwide"} icon={<WhereToVoteIcon />} />
        <Divider width="100%" />
        <SectionContainer>
        <Body>
          I need someone to help me configure an existing webapp using ReactJS
          (frontend), NodeJS (backend), GoogleAPI (authentication) and MongoDB
          (database). I'm trying to have it running in a VM (Azure) and to use a
          domain name.
        </Body>
        </SectionContainer>
        <SectionContainer>
        <Body fontWeight={"300"}>
          Expensify is a team of generalists developing today's leading expense
          management tool. Maintaining our reputation as an innovative leader in
          the world of finance requires an incredibly reliable and secure system
          for processing financial transactions. Accordingly, we primarily
          leverage time-tested languages, but we're looking to unify our
          front-end across platforms. For this, we're leveraging React Native
          and are looking toward the community on Upwork to help solve a variety
          of problems, both big and small, related to this migration.
        </Body>
        </SectionContainer>

        <SectionContainer>
        <Stack direction="row" spacing={1}>
          <ListItem sx={{maxWidth:'220px'}} >
            <SellIcon fontSize="small" sx={{ marginRight: "8px" }} />
            <ListItemText primary="$100.00" secondary="Fixed-price" />
          </ListItem>

          <ListItem sx={{maxWidth:'220px'}}>
            <PsychologyIcon fontSize="small" sx={{ marginRight: "8px" }} />
            <ListItemText primary="Intermediate" secondary="I am looking for a mix of experience and value" />
          </ListItem>
        </Stack>
        </SectionContainer>
        
        <SectionContainer>
        <Typography variant="body2" gutterBottom>
         Project Type:  One-time project  
        </Typography>
        </SectionContainer>

        <SectionContainer>
        <Typography variant="h6" >
        Skills and Expertise
        </Typography>
        <ChipsGrupe list={['react' ,'node js']}/>
        </SectionContainer>

        <SectionContainer>
        <Typography variant="h6" >
        Activity on this job
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
        Proposals:  15 to 20
        </Typography>   
        </SectionContainer>

      </LeftBox>
      <RightBox>

      <Button
  color="primary"
  disabled={false}
  size="large"
  style={buttonStyle}
  
>
  Apply now 
</Button>
   <Button
  color="primary"
  disabled={false}
  size="large"
  style={buttonStyle}
  
>
  Save Job
</Button>
      </RightBox>
    </Container>
  );
};

export default JobPage;
