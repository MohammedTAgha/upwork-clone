import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Link from 'next/link';
import { StyledJobCard } from './style.js';
import {
  StyledAlignFlex,
  StyledBetweenAlignFlex,
  StyledFlexCenter,
} from '@/style/common';
import VerifiedIcon from '@mui/icons-material/Verified';
import Rating from '@mui/material/Rating';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { useRouter } from 'next/router';
import { Heading, MainHeading, Body, SmallText } from '@/components/atoms/Typography/';
import colors from '@/constants/colors.js';

type JobCardProps = {
  title: string;
  fixedPrice: string;
  hourly: string;
  proposal: string;
  description: string;
  spent: string;
  location: string;
  jobsId: number;
 
};

const JobCard = ({
  title,
  fixedPrice,
  hourly,
  description,
  proposal,
  spent,
  location,
  jobsId,
  onClick
}: JobCardProps) => {
  // const router = useRouter();
 
  return (
    <div onClick={onClick}>
      <StyledJobCard >
        <StyledBetweenAlignFlex gap="10px">
          <Link href="#">
            <Heading hover>{title}</Heading>
          </Link>

          <StyledAlignFlex gap="5px">
            <StyledFlexCenter as="button">
              <ThumbDownOffAltIcon fontSize="small" />
            </StyledFlexCenter>
            <StyledFlexCenter as="button">
              <FavoriteBorderIcon fontSize="small" />
            </StyledFlexCenter>
          </StyledAlignFlex>
        </StyledBetweenAlignFlex>
        <SmallText color={colors.gray600Color}>
          Hourly: $15-$30 - Expert - Est. Time: Less than 1 month, Less than 30 hrs/week - Posted 27 minutes ago
        </SmallText>
        <span className="fixedprice">{fixedPrice}</span>
        <span className="hourly">{hourly}</span>
        <p>{description}</p>
        <StyledAlignFlex gap="5px" className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
        </StyledAlignFlex>
        <p className="proposal">
          Proposl: <strong>{proposal}</strong>
        </p>
        <StyledAlignFlex gap="5px" className="evaluation">
          <StyledAlignFlex gap="2px">
            <VerifiedIcon sx={{ color: 'blue', fontSize: '16px' }} />
            <p>Payment verified</p>
          </StyledAlignFlex>
          <Rating
            name="size-small"
            defaultValue={5}
            size="small"
            readOnly
            sx={{ color: 'green' }}
          />
          <p>
            <strong>{spent}</strong> spent
          </p>
          <StyledAlignFlex>
            <LocationOnIcon sx={{ color: 'gray' }} fontSize="small" />
            <p>{location}</p>
          </StyledAlignFlex>
        </StyledAlignFlex>
      </StyledJobCard>

    </div>
  );
};

export default JobCard;
