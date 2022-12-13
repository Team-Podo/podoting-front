import {NavWrapper} from "./Nav.style";
import logoImg from "../../../assets/images/podoting_logo.jpg"
import {logout} from "../../../apis/auth";
import {getToken} from "../../../utils/token";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useAlarm} from "../../../hooks/useAlarm";


function Nav() {
    const navigate = useNavigate()
    const [token, setToken] = useState("")
    const setAlarm = useAlarm()

    useEffect(() => {
        setToken(getToken())
    }, [localStorage.getItem("token")])

    function onClickLogout() {
        const token = localStorage.getItem("token")
        if (token) {
            logout()
        }
        setToken("")
        setAlarm("로그아웃 되었습니다.")
    }

    if (window.location.pathname === ("/res") || window.location.pathname === ("/")) return null

    return <>
        <NavWrapper>
                <div className='nav-inner'>
                    <ul className='nav-left'>
                        <img src={logoImg} alt="logo" className="logo" onClick={() => navigate("/musicals")}/>
                        <input className={"search-input"} type={"text"}/>
                    </ul>
                    <ul className='nav-right'>
                        { token ? <>
                                <li onClick={onClickLogout}>로그아웃</li>
                                |
                                <li onClick={() => navigate("/orders")}>주문내역</li>
                            </>
                            : <>
                                <li onClick={() => navigate("/login")}>로그인</li>
                                |
                                <li onClick={() => navigate("/join")}>회원가입</li>
                            </>}
                    </ul>
                </div>
        </NavWrapper>
    </>
}

export default Nav