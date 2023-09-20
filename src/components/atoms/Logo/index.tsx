"use client";
import React from 'react';
import styled from 'styled-components';

interface LogoProps {
    src?: string;
    alt?: string;
    text?: string;
  }
  
  const StyledLogo = styled.div`
    display: flex;
    align-items: center;
  `;
  
  const Logo: React.FC<LogoProps> = ({ src, alt, text }) => {
    return (
      <StyledLogo>
        {src ? (
          <img src={src} alt={alt} />
        ) : (
          <span className="text-logo">{text}</span>
        )}
      </StyledLogo>
    );
  };

export default Logo;
