
import styled from 'styled-components'
import React, { useState } from "react";
 import SearchBar from './Searbar';
 import Addcollege from './Addcollege';
// import College from "./College"

const Wrapper = styled.div`
  padding:80px 100px 10px 100px;
  
  h1 {
    font-size:42px;
  }
  a{
    color: red;
        //background: #000;
        border-radius: 4px;
        padding: 10px 50px;
       // border: 1px solid #000;
        width: 100%;
        text-decoration: none;
  }
`

const Subheader = styled.p`
  font-weight:300;
  font-size:26px;
`

const Header = (colleges) => {
  const [isSearch, setIsSearch]= useState([])
  const [isvisible, setisvisible] = useState(false)
  if (colleges.length==0)
  {
    
return(
    <>
    <p>Loading...</p>
    </>
    )
  }
  function click(e){
    e.preventDefault()
   setisvisible(isvisible => !isvisible)
}
  // let mySearch = colleges.filter(s => s.attributes.name.includes(isSearch))
  return(
    <Wrapper>
      
      {/* {mySearch.map(r => <College key={r.id} colleges={r}/>)} */}
    <h1>RateMyCollege</h1>
    <Subheader>Honest, unbiased College reviews. Share your experience.</Subheader>
    <SearchBar isSearch={isSearch} setIsSearch={setIsSearch}/> 
    <a onClick={click} > Add New College {isvisible ?  <Addcollege />: null}</a>
    
    </Wrapper>
  )
}

export default Header