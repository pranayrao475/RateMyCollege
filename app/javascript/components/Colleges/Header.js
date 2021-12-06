import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding:80px 100px 10px 100px;
  
  
  h1 {
    font-size:42px;
  }
`

const Subheader = styled.p`
  font-weight:300;
  font-size:26px;
`

const Header = () => {
  return(
    <Wrapper>
    <h1>RateMyCollege</h1>
    <Subheader>Honest, unbiased College reviews. Share your experience.</Subheader>
    </Wrapper>
  )
}

export default Header