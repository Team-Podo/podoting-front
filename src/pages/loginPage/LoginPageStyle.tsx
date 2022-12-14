import styled from "styled-components";

export const LoginPageStyle = styled.div`{
  display: -webkit-flex;
  flex-direction: row;
  -webkit-justify-content: center;
  
  form {
    width: 20rem;
  }
  
  form div {
    display: -webkit-flex;  
    flex-direction: column;
    -webkit-justify-content: space-between;
    margin-bottom: 1.5rem;
  }
  
  form label {
    flex: 1;
    font-size: 0.9rem;
    margin-bottom: 10px;
  }
  
  form input {
    border: none;
    border-bottom: 1px solid lightgrey;
    padding: 10px;
    flex: 2;
  }
  
  form input:focus-visible {
    outline: none;
    border-bottom: 2px solid #764abc;
  }

  @media screen and (max-width:767px) {
    form {
      margin-top: 5rem;
    }
  }
}`