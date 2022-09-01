import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import MainPage from "./pages/MainPage";
import ReservationPage from "./pages/reservationPage/ReservationPage";

function App() {
    return (
        <div id="container">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/musical/:id" element={<DetailPage/>}/>
                    <Route path="/res" element={<ReservationPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
