import {ReservationPageWrapper} from "./ReservationPage.style";
import React, {useEffect, useState} from "react";
import {Seat} from "../../models/seat";
import SeatItem from "../../components/SeatItem/SeatItem";
import {getSeats} from "../../apis/seat";
import {Detail} from "../../models/detail";
import {Schedule} from "../../models/schedule";
import moment from "moment";

function ReservationPage() {
    const [performanceID, setPerformanceID] = useState()
    const [scheduleUUID, setScheduleUUID] = useState<string>()
    const [seatImg, setSeatImg] = useState<string>("")
    const [details, setDetails] = useState<Detail>()
    const [seats, setSeats] = useState<Seat[]>([])
    const [selectedSeats, setSelectedSeats] = useState<Seat[]>([])
    const [total, setTotal] = useState(0)
    const reservationProps = JSON.parse(localStorage.getItem("reservationProps") || "")

    useEffect(function () {
        setPerformanceID(reservationProps.performanceId)
        setScheduleUUID(reservationProps.scheduleUUID)
        setDetails(reservationProps.details)
        refreshScheduleSeats()
    }, [scheduleUUID])

    function refreshScheduleSeats() {
        if(!performanceID || !scheduleUUID) return
        getSeats({
            performanceID: performanceID,
            scheduleUUID: scheduleUUID
        }).then((s) => {
            setSeatImg(s.backgroundImage)
            setSeats(s.seats)
        })
    }

    function addSelectedSeats(id: string) {
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

    function onClickPay(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        if (selectedSeats.length < 1) {
            alert("좌석을 선택해 주세요");
            return;
        }
        const selectedSeatsUUID:string[] = []
        selectedSeats.map((s) => {
            selectedSeatsUUID.push(s.uuid)
        })
        console.log(selectedSeatsUUID)
    }

    return <ReservationPageWrapper>
        <div className="seat-map-wrapper">
            <div className="seat-map-img-container">
                <img className="seat-map" src={seatImg} alt="seat"/>
                {seats && seats.map((i) => <SeatItem key={i.uuid} uuid={i.uuid} point={i.point} color={i.color}
                                                     selected={addSelectedSeats}/>)}
            </div>
        </div>
        <div className="reservation-data-wrapper">
            <div>
                <h3>{details && details.title}</h3>
                <p>장소: {details && details.place.name}</p>
                <p>관람시간: {details && details.runningTime}</p>
                <p>관람등급: {details && details.rating}</p>
                <p>가격: {details && details.seatGrades.map((g) => <span key={g.id}>{g.name}: {g.price}</span>)}</p>
            </div>

            <div className="change-reservation-date">
                <p>예매일자 변경</p>
                <select onChange={(e) => setScheduleUUID(e.currentTarget.value)}>
                    {details && details.schedules.map((sch) => <option value={sch.uuid} key={sch.uuid} selected={scheduleUUID===sch.uuid}>{moment(sch.date).format("YYYY년 MM월 DD일")} {sch.time}</option>)}
                </select>
            </div>
            <div className="selected-seat-data">
                <div className="selected-seat-list">
                    {selectedSeats.length > 0 ? selectedSeats.map((i) =>
                        <div key={i.uuid}>{i.name} {i.grade.name}</div>) : <div>선택된 좌석이 없습니다</div>}
                </div>
                <div className="total">
                    총 결제금액: {total}
                </div>
            </div>
            <button className="button" onClick={onClickPay}>결제</button>
        </div>
    </ReservationPageWrapper>
}

export default ReservationPage