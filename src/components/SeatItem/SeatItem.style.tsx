import styled from "styled-components";

export const SeatItemWrapper = styled.div<{x:number, y:number}>`{
  
  div {
    width: 9.3px;
    height: 9.3px;
    background-color: #764abc;
    position: absolute;
    cursor: pointer;
    top: ${props => props.x}px;
    left: ${props => props.y}px;
  }
  
  div.selected {
    box-shadow: inset 0 0 2px 1.3px #fcdb88;
  }
}`