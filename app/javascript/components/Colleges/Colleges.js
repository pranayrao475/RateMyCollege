import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import College from "./College"
import styled from 'styled-components'

const Home = styled.div`
text-align: center;
max-width: 1200px;
margin-left: auto;
margin-right: auto;
`
const Header = styled.div`
padding: 100px 100px 10px 100px;

h1
{
    font-size: 42px;
}
`
const Subheader = styled.div`
font-weight: 300;
font-size: 26px;
`
const Grid = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 20px;
width: 100%;
padding: 20px;
`

const Colleges = () => {
    const [colleges, setColleges] = useState([])

        useEffect(() =>{
            axios.get('/api/v1/colleges.json')
            .then( resp => {setColleges(resp.data.data)})
            .catch( resp => console.log(resp))
        }, [colleges.length])

        const grid = colleges.map( item => {
            return(
            <College 
            key={item.attributes.name}
            attributes = {item.attributes}
            />)
        })
    return  (
        <Home>
                <Header>
                    <h1>RateMyCollege</h1>
                    <Subheader>Honest, unbaised college reviews.</Subheader>
                </Header>
                <Grid>
                {grid}
                </Grid>
    
    </Home>
    )
}

export default Colleges