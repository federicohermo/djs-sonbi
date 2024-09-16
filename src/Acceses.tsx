import React from "react";
import {Route, Routes} from 'react-router-dom';
import Home from "./pages/Home"
import Shorts from "./pages/Shorts"
import Contact from "./pages/Contact"
import Nav from "./components/Nav"
import Foot from "./components/Footer"
import "./styles/App.css"

export function ApplicationAccessRoutes(){
    const AvailableRoutes =()=>{
        return(
                <Routes>
                    <Route path="/" element={
                            <Home />}/>
                    <Route path="/contacto" element={
                            <Contact />}/>
                    <Route path="/shorts" element={
                            <Shorts />}/>
                    
                </Routes>
        )
    }
    return(
    <>
        <header className="App-header">
            <Nav />
        </header>
        <body className="App-body">
            <AvailableRoutes />
        </body>
        <footer className="App-footer">
            <Foot />
        </footer>
    </>
    ) 
}