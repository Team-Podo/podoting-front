import styled from "styled-components";

export const ReservationPageWrapper = styled.div`{
  width: 1028px;
  height: 618px;
  position: relative;
  display: -webkit-inline-flex;

  .seat-map-wrapper {
    width: 658px;
    height: 618px;
    background-color: lightgray;
    object-fit: cover;
  }
  
  .seat-map-img-container {
    position: relative;
  }
  
  .seat-map {
    min-width: 100%;
    min-height: 100%;
    -webkit-user-drag: none;
  }
  
  .reservation-data-wrapper {
    width: 30%;
    height: 100%;
    padding: 20px;
    position: relative;
    display: flex;
    -webkit-flex-direction: column;
    -webkit-justify-content: space-between;
  }

  .reservation-data-wrapper h3{
    margin-bottom: 1rem;
  }
  
  .reservation-data-wrapper p{
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }
  
  .change-reservation-date {
    margin-top: 2rem;
    padding-bottom: 1rem;
  }
  
  .selected-seat-data {
    border: 1px solid #000;
    border-radius: 10px;
    height: 200px;
    display: -webkit-flex;
    flex-direction: column;
    overflow: hidden;
    margin-bottom: 1rem;
  }

  .selected-seat-data>.selected-seat-list {
    padding: 10px;
    flex: 5;
    overflow: scroll;
  }
  .selected-seat-data>.total {
    padding: 10px;
    flex: 1;
    height: 50px;
    background-color: #e6d7e9;
  }
}`