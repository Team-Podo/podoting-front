import logoImg from "../assets/images/podoting_logo.jpg";
import styled from "styled-components";
import {Link} from "react-router-dom";

export const MainPageStyle = styled.div`{
  text-align: center;
  margin-top: 10rem;
  display: -webkit-flex;
  flex-direction: column;
  align-items: center;
  
  .logo {
    cursor: pointer;
    width: 20rem;
    margin-bottom: 5rem;
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
    return <MainPageStyle>
        <img src={logoImg} alt="logo" className="logo"/>
        <Link to="/musical/11">
            <button>ENTER PODOTING</button>
        </Link>
    </MainPageStyle>
}

export default MainPage