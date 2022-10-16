import logoImg from "../assets/images/podoting_logo.jpg";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

export const MainPageStyle = styled.div`{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;

  .logo {
    cursor: pointer;
    width: 15rem;
    margin-bottom: 3rem;
  }

  button {
    cursor: pointer;
    width: 10rem;
    padding: 1rem;
    border: 2px solid #fff;
    background-color: #764abc;
    border-radius: 10px;
    color: #fff;
    font-weight: bold;
  }

  button:hover {
    border: 2px solid #764abc;
    background-color: #fff;
    color: #764abc;
  }

}`


function MainPage() {
    const navigate = useNavigate()
    return <MainPageStyle>
        <img src={logoImg} alt="logo" className="logo"/>
        <button onClick={() => navigate("/musicals")}>ENTER PODOTING</button>
        <button onClick={() => window.location.href = "https://partner.podoting.com/"}>ENTER ADMIN</button>
    </MainPageStyle>
}

export default MainPage