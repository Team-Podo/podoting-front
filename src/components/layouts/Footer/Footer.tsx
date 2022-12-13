import { FooterStyle } from "./Footer.style"
import {useNavigate} from "react-router-dom";

function Footer () {
    const navigate = useNavigate()

    if (window.location.pathname === ("/res") || window.location.pathname === ("/")) return null

    return <FooterStyle>
        <div className="inner">
            <p>copyright @podoting-front</p>
        </div>
    </FooterStyle>
}

export default Footer