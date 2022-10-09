import { FooterStyle } from "./Footer.style"

function Footer () {
    if (window.location.pathname === ("/res") || window.location.pathname === ("/")) return null

    return <FooterStyle>
        <div className="footer-inner">
            <p>copyright @podoting-front</p>
        </div>
    </FooterStyle>
}

export default Footer