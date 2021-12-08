import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import College from "./College"
import styled from 'styled-components'
import Header from './Header'

const Colleges = () => {
    const [colleges, setColleges] = useState([])
    
        useEffect(() =>{
            axios.get('/api/v1/colleges.json')
            .then( resp => {setColleges(resp.data.data)})
            .catch( resp => console.log(resp))
        }, [])
       
        const grid = colleges.map( item => {
            return(
            <College 
            key={item.attributes.name}
            attributes = {item.attributes}
            />)
        })
     
       
    return  (
        <Home>
                {/* {!colleges.length==0 ? <Header colleges={colleges} />:null} */}
                <Header/>
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