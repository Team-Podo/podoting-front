import styled from "styled-components";

export const LoginPageStyle = styled.div`{
  display: -webkit-flex;
  flex-direction: row;
  -webkit-justify-content: center;
  
  & > form {
    width: 20rem;
  }
  
  form div {
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    margin: 5px 0;
  }
  
  form label {
    flex: 1
  }
  
  form input {
    flex: 2;
  }
}`