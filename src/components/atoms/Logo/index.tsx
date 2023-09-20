import React from 'react';
import styled from 'styled-components';

interface LogoProps {
  src?: string;
  alt?: string;
  text?: string;
  width?: string;
  height?: string;
}

const StyledLogo = styled.div<{ width?: string; height?: string }>`
  display: flex;
  align-items: center;
  img {
    width: ${(props) => (props.width ? props.width : 'auto')};
    height: ${(props) => (props.height ? props.height : 'auto')};
  }
`;

const Logo: React.FC<LogoProps> = ({ src, alt, text, width, height }) => {
  return (
    <StyledLogo width={width} height={height}>
      {src ? (
        <img src={src} alt={alt} />
      ) : (
        <span className="text-logo">{text}</span>
      )}
    </StyledLogo>
  );
};

export default Logo;
