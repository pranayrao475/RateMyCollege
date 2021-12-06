import React from "react"
import { Route, Routes } from "react-router-dom"
import Colleges from "./Colleges/Colleges"
import College from "./College/College"
import Login from './Auth/Login'
import Navbar from './Navbar'


const App = () =>{
    return (
        <>
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<Colleges/>} />
            <Route exact path="/colleges/:slug" element={<College/>} />
            <Route path="/login" component={Login}/>
            
        </Routes>
    </>
        )
}

export default App