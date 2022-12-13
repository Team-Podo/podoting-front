import styled from "styled-components";

export const NavWrapper = styled.nav`
  @media(max-width: 84rem) {
    width: fit-content;
  }
  
  border-bottom: 1px solid #d1cfd1;

  .logo {
    height: 2.5rem;
    margin: 0.5rem;
  }
  
  .nav-inner{
    display: -webkit-flex;
    -webkit-flex-direction: row;
    -webkit-align-items: center;
    -webkit-justify-content: space-between;
    padding: 5px 1rem;
    width: 84rem;
    margin: 0 auto;
  }

  .nav-left {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .search-input {
    padding: 5px 10px;
    border-radius: 10px;
    border: 1px solid grey;
  }

  .search-input:focus-visible {
    outline: none;
  }
  
  .nav-right{
    min-width: 150px;
    display: flex;
    justify-content: space-between;
  }

  .nav-right li {
    margin: 0 10px;
  }

`