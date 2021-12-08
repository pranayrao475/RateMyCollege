import React from 'react';
import styled from 'styled-components'

function SearchBar({isSearch, setIsSearch}){
    
    function searchCollege(e){
        console.log(e.target.value)
        setIsSearch(e.target.value)
    }
return (
<Searchwrapper>
    <h3></h3>
    <input 
            type="text" 
            placeholder="    Search for your college to get started                                                          🔍" 
            name="search"
            onChange={searchCollege}
            value={isSearch}
    />
   
    </Searchwrapper>
    
)
}

export default SearchBar

const Searchwrapper= styled.div`

border-radius: 4px;
  input {
    width: 66%;
    min-height:35px;
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    margin: 12px 10px;
    padding: 12px;
    font-size: 20px;
    cursor: pointer;
   
  }
  
  textarea {
    width: 100%;
    min-height:80px;
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    margin: 12px 0;
    padding: 12px;      
  }

`