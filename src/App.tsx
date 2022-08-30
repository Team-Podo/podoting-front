import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DetailPage from "./pages/DetailPage";

function App() {
    return (
        <div id="container">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<DetailPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
