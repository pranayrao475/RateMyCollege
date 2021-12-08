import React from "react"
import { Route, Routes } from "react-router-dom"
import Colleges from "./Colleges/Colleges"
import College from "./College/College"
import Login from './Auth/Login'
import Navbar from './Navbar'
import styled from 'styled-components'


const App = () =>{
    return (
        <Wrapper>
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<Colleges/>} />
            <Route exact path="/colleges/:slug" element={<College/>} />
            <Route path="/login" component={Login}/>
            
        </Routes>
    </Wrapper>
        )
}

export default App


const Wrapper = styled.div`
// background-color:red;
margin:0;
padding:0;


`