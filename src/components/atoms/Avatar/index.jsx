import React from 'react';
import styled from 'styled-components';

const StyledAvatar = styled.img`
  border-radius: 50%;
  object-fit: cover;
  background-color: #ccc;
`;

const Avatar = ({ size, src }) => {
  let avatarSize = '48px'; // Default size

  if (size === 'sm') {
    avatarSize = '32px';
  } else if (size === 'lg') {
    avatarSize = '64px';
  } else if (size) {
    avatarSize = size;
  }

  return <StyledAvatar src={src} style={{ width: avatarSize, height: avatarSize }} />;
};

export default Avatar;
