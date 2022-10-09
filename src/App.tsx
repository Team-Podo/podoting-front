import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import MainPage from "./pages/MainPage";
import ReservationPage from "./pages/reservationPage/ReservationPage";
import LoginPage from "./pages/loginPage/LoginPage";
import OrderPage from "./pages/orderPage/OrderPage";
import Nav from "./components/layouts/Nav/Nav";
import Footer from "./components/layouts/Footer/Footer";

function App() {
    return (
        <div id="container">
            <BrowserRouter>
                <Nav/>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/musical/:id" element={<DetailPage/>}/>
                    <Route path="/res" element={<ReservationPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/orders" element={<OrderPage/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
