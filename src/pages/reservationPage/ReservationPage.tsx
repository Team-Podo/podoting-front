import {ReservationPageWrapper} from "./ReservationPage.style";
import React, {useEffect, useState} from "react";
import {Seat} from "../../models/seat";
import SeatItem from "../../components/SeatItem/SeatItem";
import {bookSeats, getSeats} from "../../apis/seat";
import {Detail} from "../../models/detail";
import moment from "moment";
import {useAlarm} from "../../hooks/useAlarm";
import {useNavigate} from "react-router-dom";

function ReservationPage() {
    const [type, setType] = useState(window.innerWidth > 767 ? "pc" : "mobile")
    const [loaded, setLoaded] = useState(false)
    const [performanceID, setPerformanceID] = useState()
    const [scheduleUUID, setScheduleUUID] = useState<string>()
    const [seatImg, setSeatImg] = useState<string>("")
    const [details, setDetails] = useState<Detail>()
    const [seats, setSeats] = useState<Seat[]>([])
    const [selectedSeats, setSelectedSeats] = useState<Seat[]>([])
    const [total, setTotal] = useState(0)
    const reservationProps = JSON.parse(localStorage.getItem("reservationProps") || "")
    const setAlarm = useAlarm()
    const navigate = useNavigate()

    useEffect(function () {
        setPerformanceID(reservationProps.performanceId)
        setScheduleUUID(reservationProps.scheduleUUID)
        setDetails(reservationProps.details)
    }, [])

    useEffect(function () {
        setLoaded(false)
        refreshScheduleSeats()
    }, [scheduleUUID])

    function refreshScheduleSeats() {
        if (!performanceID || !scheduleUUID) return
        getSeats({
            performanceID: performanceID,
            scheduleUUID: scheduleUUID
        }).then((s) => {
            setSeatImg(s.backgroundImage)
            setSeats(s.seats)
            setSelectedSeats([])
            setTotal(0)
            setLoaded(true)
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
            setAlarm("????????? ????????? ?????????");
            return;
        }
        const selectedSeatsUUID: string[] = []
        selectedSeats.map((s) => {
            selectedSeatsUUID.push(s.uuid)
        })
        scheduleUUID && bookSeats({scheduleUUID, seatUUIDs: selectedSeatsUUID}).then(() => {
            if(type === "pc") {
                navigate("/orders")
                window.opener.location.replace("/orders")
                window.close()
            } else {
                navigate("/orders")
            }
        })
    }

    window.addEventListener("resize", () => {
        window.innerWidth > 767 ? setType("pc") : setType("mobile")
    })

    return <ReservationPageWrapper>
        {loaded ? <>
                <div className="seat-map-wrapper">
                    <div className="seat-map-img-container">
                        <img className="seat-map" src={seatImg} alt="seat"/>
                        {seats && seats.map((i) => <SeatItem key={i.uuid} uuid={i.uuid} point={i.point} color={i.color}
                                                             selected={addSelectedSeats}/>)}
                    </div>
                </div>
                {type === "pc" ?
                    <div className="reservation-data-wrapper">
                        <div>
                            <h3>{details && details.title}</h3>
                            <p>??????: {details && details.place.name}</p>
                            <p>????????????: {details && details.runningTime}</p>
                            <p>????????????: {details && details.rating}</p>
                            <p>??????: {details && details.seatGrades.map((g) => <span
                                key={g.id}>{g.name}: {g.price}</span>)}</p>
                        </div>

                        <div className="change-reservation-date">
                            <p>???????????? ??????</p>
                            <select onChange={(e) => setScheduleUUID(e.currentTarget.value)} defaultValue={scheduleUUID}>
                                {details && details.schedules.map((sch) => <option value={sch.uuid}
                                                                                   key={sch.uuid}>{moment(sch.date).format("YYYY??? MM??? DD???")} {sch.time}</option>)}
                            </select>
                        </div>
                        <div className="selected-seat-data">
                            <div className="selected-seat-list">
                                {selectedSeats.length > 0 ? selectedSeats.map((i) =>
                                    <div key={i.uuid}>{i.name} {i.grade.name}</div>) : <div>????????? ????????? ????????????</div>}
                            </div>
                            <div className="total">
                                ??? ????????????: {total}
                            </div>
                        </div>
                        <button className="button" onClick={onClickPay}>??????</button>
                    </div> :
                    <>
                        <div className={"mobile-res-top"}>
                            <div>
                                <button onClick={() => navigate(-1)}>??????</button>
                                <p>????????? ????????? ?????????</p>
                            </div>
                            <button onClick={onClickPay}>?????? ??????</button>
                        </div>
                        <div className="reservation-data-wrapper-mobile">
                            <div className="selected-seat-data-mobile">
                                <div className="selected-seat-list-mobile">
                                    {selectedSeats.length > 0 ? selectedSeats.map((i) =>
                                        <div key={i.uuid}>{i.name} {i.grade.name} - {Intl.NumberFormat('en-US').format(i.price)}??? </div>) : <div>????????? ????????? ????????????</div>}
                                </div>
                            </div>
                        </div>
                    </>}
            </>
            : <></>}
    </ReservationPageWrapper>
}

export default ReservationPage