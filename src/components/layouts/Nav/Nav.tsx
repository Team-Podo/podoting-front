import {NavWrapper, NavContentWrapper} from "./Nav.style";
import {useEffect, useState} from "react";
import logoImg from "../../../assets/images/podoting_logo.jpg"
import {Link} from "react-router-dom";
import {logout} from "../../../apis/auth";
import {getToken} from "../../../utils/token";


function Nav() {
    const [timer, setTimer] = useState("시간 가져오는 중...")

    useEffect(function () {
        function getClock(): void {
            const date = new Date()
            const hour = date.getHours().toString().padStart(2, "0")
            const minute = date.getMinutes().toString().padStart(2, "0")
            const second = date.getSeconds().toString().padStart(2, "0")
            const time = `${hour}:${minute}:${second}`
            setTimer(time)
        }

        setInterval(getClock, 1000)
    }, [timer])

    function onClickLogout() {
        const token = localStorage.getItem("token")
        if (token) {
            logout()
        }
    }

    if (window.location.pathname === ("/res") || window.location.pathname === ("/")) return null

    return <>
        <NavWrapper>
            <div className='nav-inner'>
                <span>{timer}</span>
                <ul className='nav-right'>
                    { getToken() ? <>
                            <li onClick={onClickLogout}>로그아웃</li>
                            <Link to={"/orders"}>주문내역</Link>
                        </>
                        : <>
                            <Link to={"/login"}>로그인</Link>
                            <li>회원가입</li>
                        </>}
                </ul>
            </div>
            <NavContentWrapper>
                <div className='nav-inner'>
                    <Link to="/">
                        <img src={logoImg} alt="logo" className="logo"/>
                    </Link>
                </div>
            </NavContentWrapper>
        </NavWrapper>
    </>
}

export default Nav