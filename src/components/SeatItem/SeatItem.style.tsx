import styled from "styled-components";

export const SeatItemWrapper = styled.div<{x:number, y:number, color:string}>`{
  
  div {
    width: 8px;
    height: 8px;
    background-color: ${props => props.color};
    position: absolute;
    cursor: pointer;
    top: ${props => props.y}px;
    left: ${props => props.x}px;
  }
  
  div.selected {
    box-shadow: inset 0 0 2px 1.3px #fcdb88;
  }
}`