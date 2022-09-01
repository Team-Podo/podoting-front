import {ReservationPageWrapper} from "./ReservationPage.style";


function ReservationPage() {
    const reservationProps = JSON.parse(localStorage.getItem("reservationProps") || "")

    return <ReservationPageWrapper>
        <div>performanceId: {reservationProps.performanceId}</div>
        <div>timeUuid: {reservationProps.timeUuid}</div>
    </ReservationPageWrapper>
}

export default ReservationPage