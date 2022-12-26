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
    position: relative;
  }
  
  .search-form {
    display: -webkit-flex;
    -webkit-align-items: center;
    -webkit-justify-content: center;
  }
  
  .search-form > input, .search-input-mobile {
    padding: 5px 10px;
    border-radius: 10px;
    border: 1px solid #D5D5D5;
  }

  .search-form > input {
    margin-left: 10px;
  }

  .search-form > input:focus-visible {
    outline: none;
  }

  .search-form-mobile {
    width: 100%;
    display: none;
  }
  
  .search-btn {
    width: fit-content;
    border: none;
    background-color: #ffffff;
  }
  
  .search-btn > image {
    width: 27px;
    cursor: pointer;
    margin-left: 3px;
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
    
    .search-form {
      display: none;
    }

    .search-form-mobile {
      display: -webkit-flex;
    }
    
    .search-input-mobile {
      width: 100%;
    }
    
    .pc {
      display: none;
    }
  }

`