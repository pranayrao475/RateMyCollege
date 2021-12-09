import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import College from "./College"
import styled from 'styled-components'
import Header from './Header'

const Colleges = () => {
    const [colleges, setColleges] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    function updateSearchTerm(e) {
        const term = e.target.value
        setSearchTerm(term)
    }

    function addNewCollegeToState(newCollege){
      const newCollegeList = [...colleges, newCollege.data]

      setColleges(newCollegeList)
    }
    
        useEffect(() =>{
            axios.get('/api/v1/colleges.json')
            .then( resp => {setColleges(resp.data.data)})
            .catch( resp => console.log(resp))
        }, [])

        const filteredColleges = colleges.filter(college => college.attributes.name.toLowerCase().includes(searchTerm.toLowerCase()))
       
        const grid = filteredColleges.map( item => {
            return(
            <College 
            key={item.attributes.id}
            attributes = {item.attributes}
            />)
        })
     
       
    return  (
        <Home>
              
                <Header updateSearchTerm={updateSearchTerm} searchTerm={searchTerm} addNewCollegeToState={addNewCollegeToState} />
                <Grid>
                {grid}
                </Grid>
    
    </Home>
    )
}

export default Colleges


const Home = styled.div`
text-align: center;
max-width: 1300px;
margin-left: auto;
margin-right: auto;

`


const Grid = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 20px;
width: 100%;
padding: 20px;
`