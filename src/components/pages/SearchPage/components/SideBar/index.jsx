"use client";
import React from "react";
import { Typography } from "@mui/material";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion, { accordionClasses } from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import Checkbox from "@mui/joy/Checkbox";
import { SmallSearch } from "../SmallSearch";
import Box from "@mui/joy/Box";
import Slider, { sliderClasses } from "@mui/joy/Slider";
function valueText(value) {
  return `${value}°$`;
}

const optionsForPrices = [
  
  'Less than $100 (405)',
  '$100 to $500 (547)',
  '$500 - $1K (984)',
  '$1K - $5K (514)',
  '$5K+ (115)'
];

const optionForNumOfProbosals = [
  'Less than 5 (1241)',
  '5 to 10 (316)',
  '10 to 15 (253)',
  '15 to 20 (179)',
  '20 to 50 (383)'
]

const SideBar = () => {
  const [index, setIndex] = React.useState(0);
  return (
    <div>
      <Typography variant="h6" inline>
        Filter By
      </Typography>
      <AccordionGroup
        transition="0.2s ease"
        sx={{
          width: 230,
          [`& .${accordionClasses.root}`]: {
            marginTop: "0.5rem",
            transition: "0.2s ease",
            '& button:not([aria-expanded="true"])': {
              transition: "0.2s ease",
              paddingBottom: "0.625rem",
            },
            "& button:hover": {
              background: "transparent",
            },
          },
          [`& .${accordionClasses.root}.${accordionClasses.expanded}`]: {
            borderBottom: "1px solid",
            borderColor: "background.level2",
          },
        }}
      >
        <Accordion
          expanded={index === 0}
          onChange={(event, expanded) => {
            setIndex(expanded ? 0 : null);
          }}
        >
          <AccordionSummary>Category</AccordionSummary>
          <AccordionDetails>
            <SmallSearch />
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={index === 1}
          onChange={(event, expanded) => {
            setIndex(expanded ? 1 : null);
          }}
        >
          <AccordionSummary>Experience level</AccordionSummary>
          <AccordionDetails>
            <Checkbox
              color="success"
              disabled={false}
              label="Entry Level 20053)"
              size="md"
              sx={{ margin: "2px 2px" }}
            />
            <Checkbox
              color="success"
              disabled={false}
              label="Intermediate (20053)"
              size="md"
              sx={{ margin: "2px 2px" }}
            />
            <Checkbox
              color="success"
              disabled={false}
              label="Expert (10414)"
              size="md"
              sx={{ margin: "2px 2px" }}
            />
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={index === 2}
          onChange={(event, expanded) => {
            setIndex(expanded ? 2 : null);
          }}
        >
          <AccordionSummary>Job type</AccordionSummary>
          <AccordionDetails>
            <Checkbox
              color="success"
              disabled={false}
              label="Hourly (19384)"
              size="md"
              sx={{ margin: "2px 2px" }}
            />

            <Slider
              track={false}
              defaultValue={[100, 3000]}
              getAriaLabel={() => "Amount"}
              getAriaValueText={valueText}
              marks={[
                {
                  value: 0,
                  label: "",
                },
                {
                  value: 100,
                  label: "",
                },
              ]}
              valueLabelDisplay="on"
              sx={{
                marginTop: "26px",
                // Need both of the selectors to make it works on the server-side and client-side
                [`& [style*="left:0%"], & [style*="left: 0%"]`]: {
                  [`&.${sliderClasses.markLabel}`]: {
                    transform: "none",
                  },
                  [`& .${sliderClasses.valueLabel}`]: {
                    left: "calc(var(--Slider-thumbSize) / 2)",
                    borderBottomLeftRadius: 0,
                    "&::before": {
                      left: 0,
                      transform: "translateY(100%)",
                      borderLeftColor: "currentColor",
                    },
                  },
                },
                [`& [style*="left:100%"], & [style*="left: 100%"]`]: {
                  [`&.${sliderClasses.markLabel}`]: {
                    transform: "translateX(-100%)",
                  },
                  [`& .${sliderClasses.valueLabel}`]: {
                    right: "calc(var(--Slider-thumbSize) / 2)",
                    borderBottomRightRadius: 0,
                    "&::before": {
                      left: "initial",
                      right: 0,
                      transform: "translateY(100%)",
                      borderRightColor: "currentColor",
                    },
                  },
                },
              }}
            />

            <Checkbox
              color="success"
              disabled={false}
              label="Fixed-Price (2565)"
              size="md"
              sx={{ margin: "2px 2px" }}
            />
             {optionsForPrices.map((option, index) => (
        <Checkbox
          key={index}
          color="success"
          disabled={false}
          size="md"
          sx={{ margin: '2px 12px' }}
          label={option}
 />
      ))}
            
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary>Number of proposals</AccordionSummary>
          <AccordionDetails>
          {optionForNumOfProbosals.map((option, index) => (
        <Checkbox
          key={index}
          color="success"
          disabled={false}
          size="md"
          sx={{ margin: '2px 12px' }}
          label={option}
 />
      ))}
          </AccordionDetails>
        </Accordion>
      </AccordionGroup>
    </div>
  );
};

export default SideBar;
