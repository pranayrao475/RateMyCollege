import React from "react"
import { Route, Routes } from "react-router-dom"
import Colleges from "./Colleges/Colleges"
import College from "./College/College"

const App = () =>{
    return (
        
        <Routes>
            <Route exact path="/" element={<Colleges/>} />
            <Route exact path="/colleges/:slug" element={<College/>} />
            
        </Routes>
    
        )
}

export default App