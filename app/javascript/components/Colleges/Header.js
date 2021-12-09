
import styled from 'styled-components'
import React, { useState } from "react";
 import SearchBar from './Searchbar';
 import Addcollege from './Addcollege';
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

const Header = ({searchTerm, updateSearchTerm, addNewCollegeToState}) => {
 
  const [isvisible, setisvisible] = useState(false)

  function click(e){
   setisvisible(isvisible => !isvisible)
}

  return(
    <Wrapper>
      
     
    <h1>RateMyCollege</h1>
    <Subheader>Honest, unbiased College reviews. Share your experience.</Subheader>
    <SearchBar updateSearchTerm={updateSearchTerm} searchTerm={searchTerm}/> 
  
    <button onClick={click}> {isvisible ? "Hide Form" : "Add New College"} </button>

    {isvisible ?  <Addcollege addNewCollegeToState={addNewCollegeToState} />: null}
    
    
    </Wrapper>
  )
}

export default Header