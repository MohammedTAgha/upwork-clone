import React from 'react'
import {StyledButton } from './style';

const Buttons = ({label,width, backgroundColor, textColor, border}) => {
  return (
    <div>
      <StyledButton variant="contained"  
       textColor={textColor} 
       backgroundColor={backgroundColor} 
       width={width}
       border={border}
       type='submit'
       >
      {label}
    </StyledButton>
    </div>
  )
}

export default Buttons
