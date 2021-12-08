
import styled from 'styled-components'
import React, { useState } from "react";
 import SearchBar from './Searbar';
// import College from "./College"

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

const Header = (colleges) => {
  const [isSearch, setIsSearch]= useState([])
  if (colleges.length==0)
  {
    
return(
    <>
    <p>Loading...</p>
    </>
    )
  }
  // let mySearch = colleges.filter(s => s.attributes.name.includes(isSearch))
  return(
    <Wrapper>
      
      {/* {mySearch.map(r => <College key={r.id} colleges={r}/>)} */}
    <h1>RateMyCollege</h1>
    <Subheader>Honest, unbiased College reviews. Share your experience.</Subheader>
    <SearchBar isSearch={isSearch} setIsSearch={setIsSearch}/> 
    </Wrapper>
  )
}

export default Header