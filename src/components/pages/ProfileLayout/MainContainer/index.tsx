"use client";

import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Chip from '@mui/joy/Chip';
import EditButton from "@/components/atoms/EditButton";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AddIcon from '@mui/icons-material/Add';
import Pagination from '@mui/material/Pagination';
import JobItem from "./JobItem";
import PortfolioCard from "./PortfolioCard";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const MainContainer = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{
        overflow: "hidden", 
        borderLeft: "1px solid #ddd",
      }}
    >
      <Stack
        direction="column"
        spacing={2}
        sx={{
          width: "100%",
          maxWidth: '100%',
          overflow: "hidden", 
          padding: "1rem",
          borderBottom: "1px solid #ddd",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
          sx={{
            flexWrap: 'wrap'
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "28px",
              fontWeight: "600",
              color: "#001e00",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            Lorem ipsum dolor sit amet.
            <EditButton />
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={1}
          >
            <Typography
              sx={{
                fontSize: "19px",
                fontWeight: "600",
                color: "#001e00",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
              variant="body2"
            >
              $30.00/hr
              <EditButton />
            </Typography>
            <Box
              sx={{
                padding: "5px",
                borderRadius: "50%",
                border: "1px solid #ddd",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "&:hover": {
                  background: "#ddd",
                },
              }}
            >
              <InsertLinkIcon
                sx={{
                  color: "#14a800",
                }}
              />
            </Box>
          </Stack>
        </Stack>
        <Typography
          sx={{
            maxWidth: '100%',
            fontSize: "16px",
            color: "#001e00",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
          variant="body2"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quo
          harum sed, voluptatum a repudiandae quos qui inventore soluta aperiam
          corrupti officia. Sequi harum repellat enim iure labore expedita quam
          <EditButton />
        </Typography>
      </Stack>

      <Stack
        direction="column"
        spacing={2}
        sx={{
          width: "100%",
          padding: "1rem",
          borderBottom: "1px solid #ddd",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "20px",
              fontWeight: "600",
              color: "#001e00",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            Work History
            <Box
              sx={{
                padding: "5px",
                borderRadius: "50%",
                border: "1px solid #ddd",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "&:hover": {
                  background: "#ddd",
                },
              }}
            >
              <MoreHorizIcon
                sx={{
                  color: "#14a800",
                }}
              />
            </Box>
          </Typography>
        </Stack>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              sx={{
                "& .css-1p9i4sw-MuiButtonBase-root-MuiTab-root.Mui-selected": {
                  color: "#001e00",
                  fontWeight: '600',
                },
                "& .css-1aquho2-MuiTabs-indicator": {
                  backgroundColor: "#001e00",
                },
              }}
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                sx={{ textTransform: "capitalize" }}
                label="Completed Jobs"
                {...a11yProps(0)}
              />
              <Tab
                sx={{ textTransform: "capitalize" }}
                label="Item Two"
                {...a11yProps(1)}
              />
              <Tab
                sx={{ textTransform: "capitalize" }}
                label="Item Three"
                {...a11yProps(2)}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0} >
            <JobItem/>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Item Two
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Item Three
          </CustomTabPanel>
        </Box>
      </Stack>

      <Stack
        direction="column"
        spacing={2}
        sx={{
          width: "100%",
          padding: "1rem",
          borderBottom: "1px solid #ddd",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "20px",
              fontWeight: "600",
              color: "#001e00",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            Portfolio
            <Box
              sx={{
                padding: "5px",
                borderRadius: "50%",
                border: "1px solid #ddd",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "&:hover": {
                  background: "#ddd",
                },
              }}
            >
              <AddIcon
                sx={{
                  color: "#14a800",
                }}
              />
            </Box>

          </Typography>
        </Stack>

        <Stack
          direction="row"
          spacing={2}
          sx={{
            width: "100%",
            overflowX: 'scroll'
          }}
        >
          <PortfolioCard/>
          <PortfolioCard/>
          <PortfolioCard/>
          <PortfolioCard/>
          <PortfolioCard/>
        </Stack>
        <Stack
          justifyContent="flex-end"
          alignItems="end"
          spacing={1}
        >
          <Pagination count={4} />
        </Stack>
      </Stack>

      <Stack
        direction="column"
        spacing={2}
        sx={{
          width: "100%",
          maxWidth: '100%', 
          padding: "1rem",
          borderBottom: "1px solid #ddd",
        }}
      >

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "20px",
              fontWeight: "600",
              color: "#001e00",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            Skills
            <Box
              sx={{
                padding: "5px",
                borderRadius: "50%",
                border: "1px solid #ddd",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "&:hover": {
                  background: "#ddd",
                },
              }}
            >
              <AddIcon
                sx={{
                  color: "#14a800",
                }}
              />
            </Box>

          </Typography>
        </Stack>

        <Stack
          direction='row'
          sx={{ maxWidth: '100%', paddingTop: '1rem', color: '#5e6d55', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          <Chip sx={{ fontSize: '12px', color: '#5e6d55' }}>Wordpress </Chip>
          <Chip sx={{ fontSize: '12px', color: '#5e6d55' }}>
            Web Development{' '}
          </Chip>
          <Chip sx={{ fontSize: '12px', color: '#5e6d55' }}>PHP </Chip>
          <Chip sx={{ fontSize: '12px', color: '#5e6d55' }}>HTML </Chip>
          <Chip sx={{ fontSize: '12px', color: '#5e6d55' }}>Web Design </Chip>
          <Chip sx={{ fontSize: '12px', color: '#5e6d55' }}>MySql </Chip>
          <Chip sx={{ fontSize: '12px', color: '#5e6d55' }}>Wordpress </Chip>
          <Chip sx={{ fontSize: '12px', color: '#5e6d55' }}>
            Web Development{' '}
          </Chip>
          <Chip sx={{ fontSize: '12px', color: '#5e6d55' }}>PHP </Chip>
          <Chip sx={{ fontSize: '12px', color: '#5e6d55' }}>HTML </Chip>
          <Chip sx={{ fontSize: '12px', color: '#5e6d55' }}>Web Design </Chip>
          <Chip sx={{ fontSize: '12px', color: '#5e6d55' }}>MySql </Chip>
          <Chip sx={{ fontSize: '12px', color: '#5e6d55' }}>Wordpress </Chip>
          <Chip sx={{ fontSize: '12px', color: '#5e6d55' }}>
            Web Development{' '}
          </Chip>
          <Chip sx={{ fontSize: '12px', color: '#5e6d55' }}>PHP </Chip>
          <Chip sx={{ fontSize: '12px', color: '#5e6d55' }}>HTML </Chip>
          <Chip sx={{ fontSize: '12px', color: '#5e6d55' }}>Web Design </Chip>
          <Chip sx={{ fontSize: '12px', color: '#5e6d55' }}>MySql </Chip>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MainContainer;
