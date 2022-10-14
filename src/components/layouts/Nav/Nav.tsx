import {NavWrapper, NavContentWrapper} from "./Nav.style";
import logoImg from "../../../assets/images/podoting_logo.jpg"
import {logout} from "../../../apis/auth";
import {getToken} from "../../../utils/token";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";


function Nav() {
    const navigate = useNavigate()
    const [token, setToken] = useState("")

    useEffect(() => {
        setToken(getToken())
    }, [])

    function onClickLogout() {
        const token = localStorage.getItem("token")
        if (token) {
            logout()
        }
        setToken("")
    }

    if (window.location.pathname === ("/res") || window.location.pathname === ("/")) return null

    return <>
        <NavWrapper>
            <div className='nav-inner'>
                <div></div>
                <ul className='nav-right'>
                    { token ? <>
                            <li onClick={onClickLogout}>로그아웃</li>
                            <li onClick={() => navigate("/orders")}>주문내역</li>
                        </>
                        : <>
                            <li onClick={() => navigate("/login")}>로그인</li>
                            <li>회원가입</li>
                        </>}
                </ul>
            </div>
            <NavContentWrapper>
                <div className='nav-inner'>
                        <img src={logoImg} alt="logo" className="logo" onClick={() => navigate("/musicals")}/>
                </div>
            </NavContentWrapper>
        </NavWrapper>
    </>
}

export default Nav