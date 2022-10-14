import styled from "styled-components";

export const OrderPageStyle = styled.div`{
  
  .single-order {
    padding: 1rem 3rem;
    border-bottom: 1px solid #e5e5e5;
    display: -webkit-flex;
    -webkit-flex-direction: row;
    -webkit-align-items: center;
    -webkit-justify-content: space-between;
    
    & img {
      width: 150px;
    }
    
  }
  
  .btn-canceled {
    background-color: grey;
  }
}`