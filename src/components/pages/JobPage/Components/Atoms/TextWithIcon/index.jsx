
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  margin-right: 8px;
`;

const IconWithText = ({ icon, text }) => {
  return (
    <Container>
      <IconWrapper>
        <IconButton>
          {icon}
        </IconButton>
      </IconWrapper>
      <Typography variant="body1">
        {text}
      </Typography>
    </Container>
  );
};

export default IconWithText;
