import {ReservationPageWrapper} from "./ReservationPage.style";
import {useEffect, useState} from "react";
import {Seat} from "../../models/seat";
import SeatItem from "../../components/SeatItem/SeatItem";
import {getSeats} from "../../apis/seat";


function ReservationPage() {
    const [id, setId] = useState()
    const [seatImg, setSeatImg] = useState<string>("")
    const [seats, setSeats] = useState<Seat[]>([])
    const [selectedSeats, setSelectedSeats] = useState<Seat[]>([])
    const [total, setTotal] = useState(0)
    const reservationProps = JSON.parse(localStorage.getItem("reservationProps") || "")

    useEffect(function () {
        getSeats().then((s) => {
            setSeatImg(s.backgroundImage)
            setSeats(s.seats)
        })
        setId(reservationProps.performanceId)
    }, [reservationProps.performanceId])

    function addSelectedSeats (id:string) {
        console.log(selectedSeats)
        const seatIsAlreadyAdded = selectedSeats.filter((item) => item.uuid === id)
        if (seatIsAlreadyAdded.length > 0) {
            setSelectedSeats([...selectedSeats.filter((i) => i.uuid !== id)])
            setTotal((curr) => curr -= seatIsAlreadyAdded[0].price)
        } else {
            const findSeatData = seats.filter((i) => i.uuid === id)[0]
            setSelectedSeats([...selectedSeats, findSeatData])
            setTotal((curr) => curr += findSeatData.price)
        }
    }

    return <ReservationPageWrapper>
        <div className="seat-map-wrapper">
            <div className="seat-map-img-container">
                <img className="seat-map" src={seatImg} alt="seat"/>
                {seats && seats.map((i) =>  <SeatItem key={i.uuid} uuid={i.uuid} point={i.point} color={i.color} selected={addSelectedSeats}/>)}
            </div>
        </div>
        <div className="reservation-data-wrapper">
            {/*<h3>performanceId: {id}</h3>
            <div>timeUuid: {reservationProps.timeUuid}</div>
            */}
            <div>
                <h3>뮤지컬 팬레터 - 고양</h3>
                <p>장소: 고양어울림누리 어울림극장</p>
                <p>관람시간: 160분</p>
                <p>관람등급: 전체이용가</p>
                <p>가격: VIP: 150000</p>
                <p>R: 150000</p>
            </div>

            <div className="change-reservation-date">
                <p>예매일자 변경</p>
                <select>
                    <option>2022년 08월 13일(토) 14:00</option>
                    <option>2022년 08월 13일(토) 18:30</option>
                    <option>2022년 08월 14일(일) 14:00</option>
                </select>
            </div>
            <div className="selected-seat-data">
                <div className="selected-seat-list">
                { selectedSeats.length > 0 ? selectedSeats.map((i) =>
                    <div key={i.uuid}>{i.name} {i.grade.name}</div>) : <div>선택된 좌석이 없습니다</div>}
                </div>
                <div className="total">
                    총 결제금액: {total}
                </div>
            </div>
            <button className="button">결제</button>
        </div>
    </ReservationPageWrapper>
}

export default ReservationPage