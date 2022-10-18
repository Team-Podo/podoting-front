import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DetailPage from "./pages/detailPage/DetailPage";
import MainPage from "./pages/MainPage";
import ReservationPage from "./pages/reservationPage/ReservationPage";
import LoginPage from "./pages/loginPage/LoginPage";
import OrderPage from "./pages/orderPage/OrderPage";
import Nav from "./components/layouts/Nav/Nav";
import Footer from "./components/layouts/Footer/Footer";
import NotFound from "./pages/notFound/NotFound";
import PerformancePage from "./pages/performancePage/PerformancePage";
import JoinPage from "./pages/joinPage/JoinPage";
import AlarmContainer from "./components/alarm/AlarmContainer";

function App() {
    return (
        <BrowserRouter>
            <div id={"modal-root"}></div>
            <AlarmContainer/>
            <Nav/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/musicals" element={<PerformancePage/>}/>
                <Route path="/musical/:id" element={<DetailPage/>}/>
                <Route path="/res" element={<ReservationPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/join" element={<JoinPage/>}/>
                <Route path="/orders" element={<OrderPage/>}/>
                <Route path={"*"} element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
