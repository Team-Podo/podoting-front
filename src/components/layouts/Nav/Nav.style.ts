import styled from "styled-components";

export const NavWrapper = styled.nav`
  border-bottom: 1px solid #d1cfd1;

  .logo {
    height: 2rem;
    margin: 1rem;
  }
  
  .nav-inner{
    display: -webkit-flex;
    -webkit-flex-direction: row;
    -webkit-align-items: center;
    -webkit-justify-content: space-between;
    padding: 5px 1rem;
  }

  .nav-left {
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    -webkit-align-items: center;
  }
  
  .search-input, .search-input-mobile {
    padding: 5px 10px;
    border-radius: 10px;
    border: 1px solid #D5D5D5;
  }

  .search-input {
    margin-left: 10px;
  }

  .search-input:focus-visible {
    outline: none;
  }

  .search-input-mobile {
    display: none;
  }
  
  .nav-right{
    min-width: 150px;
    display: flex;
    -webkit-justify-content: space-between;
  }

  .nav-right li {
    margin: 0 10px;
  }

  @media(max-width: 84rem) {
    width: fit-content;
  }

  @media screen and (max-width:767px) {
    /* 모바일 */
    width: 100%;
    border: none;

    .nav-inner{
      -webkit-flex-direction: column;
    }
    
    .search-input {
      display: none;
    }

    .search-input-mobile {
      display: block;
      width: 100%;
    }
    
    .pc {
      display: none;
    }
  }

`