import styled from 'styled-components';

const StyledSecion = styled.div`
    width:100%;
    padding:20px 0px;
    border-bottom: 1px solid #ccc;
    
`

import React from 'react'

export default function SectionContainer({children}) {
  return (
    <StyledSecion>
        {children}
    </StyledSecion>
  )
}
