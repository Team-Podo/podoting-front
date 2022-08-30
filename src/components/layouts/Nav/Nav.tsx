import { NavWrapper, NavContentWrapper } from "./Nav.style";
import {useEffect, useState} from "react";


function Nav() {

    const [timer, setTimer] = useState("시간 가져오는 중...")
    useEffect(function () {
        function getClock():void {
            const date = new Date()
            const hour = date.getHours().toString().padStart(2, "0")
            const minute = date.getMinutes().toString().padStart(2, "0")
            const second = date.getSeconds().toString().padStart(2, "0")
            const time = `${hour}:${minute}:${second}`
            setTimer(time)
        }

        setInterval(getClock, 1000)
    }, [timer])

    return <>
        <NavWrapper>
            <div className='nav-inner'>
                <span>{timer}</span>
                <ul className='nav-right'>
                    <li>로그인</li>
                    <li>회원가입</li>
                </ul>
            </div>
            <NavContentWrapper>
                <div className='nav-inner'>
                    <span>로고</span>
                </div>
            </NavContentWrapper>
        </NavWrapper>
    </>
}

export default Nav