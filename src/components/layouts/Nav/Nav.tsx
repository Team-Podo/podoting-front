import {NavWrapper} from "./Nav.style";
import logoImg from "../../../assets/images/Frame.svg"
import {logout} from "../../../apis/auth";
import {getToken} from "../../../utils/token";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useAlarm} from "../../../hooks/useAlarm";
import searchImg from "../../../assets/images/search.png"
import homeImg from "../../../assets/images/home.svg"
import memberImg from "../../../assets/images/member.svg"

function Nav() {
    const navigate = useNavigate()
    const [token, setToken] = useState("")
    const [searchValue, setSearchValue] = useState("")
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
            <div className={"nav-mobile"}>
                <div></div>
                <img className={"nav-mobile-bar"} src={homeImg} alt={"홈"} onClick={() => window.location.href = "/musicals"}/>
                <img className={"nav-mobile-profile"} src={memberImg}
                     alt={"내 정보"} onClick={() => token ? navigate("/orders") : navigate("/login")} />
            </div>
            <div className='nav-inner inner'>
                <ul className='nav-left'>
                    <img src={logoImg} alt="logo" className="logo" style={{cursor: "pointer"}}
                         onClick={() => window.location.href = "/musicals"}/>
                    <form className={"search-form"} onSubmit={() => navigate("/musicals")}>
                        <input id={"search-input"} type={"text"} name={"keyword"} value={searchValue}
                               onChange={(e) => setSearchValue(e.target.value)}/>
                        <button type={"submit"} className={"search-btn"}>
                            <img src={searchImg} alt={"검색 버튼"}/>
                        </button>
                    </form>
                </ul>
                <form className={"search-form-mobile"}>
                    <input className={"search-input-mobile"} type={"text"} placeholder={"작품명, 장소, 키워드로 찾아보세요."}
                           alt={"검색 버튼"} name={"keyword"} value={searchValue}
                           onChange={(e) => setSearchValue(e.target.value)}/>
                    <button type={"submit"} className={"search-btn"}>
                        <img src={searchImg} alt={"검색 버튼"}/>
                    </button>
                </form>
                <ul className='nav-right pc'>
                    {token ? <>
                            <li onClick={onClickLogout}>로그아웃</li>
                            |
                            <li onClick={() => navigate("/orders")}>MY티켓</li>
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