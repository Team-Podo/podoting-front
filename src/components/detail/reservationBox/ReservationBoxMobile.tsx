import Calendar, {CalendarTileProperties} from "react-calendar";
import moment from "moment";
import TimeItem from "../../TimeItem/TimeItem";
import React, {useEffect, useState} from "react";
import {getToken} from "../../../utils/token";
import {Schedule} from "../../../models/schedule";
import {useNavigate} from "react-router-dom";
import {Detail} from "../../../models/detail";

interface ReservationBoxProps {
    performanceID: string,
    schedules: Schedule[]
    details: Detail
    onChange: (status: boolean) => void
}

function ReservationBoxMobile({performanceID, schedules, details, onChange}: ReservationBoxProps) {
    const [date, setDate] = useState(new Date())
    const [activeScheduleUUID, setActiveScheduleUUID] = useState("")
    const [times, setTimes] = useState<Schedule[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        if (!getToken()) {
            navigate("/login");
        }
        if (schedules) {
            const [year, month, date] = schedules[0].date.split("-")
            setDate(new Date(Number(year), Number(month) - 1, Number(date)))
        }
    }, [schedules])

    useEffect(function () {
        if (schedules) {
            const times = schedules.filter((i) => {
                return i.date === moment(date).format("YYYY-MM-DD")
            })
            setTimes(times)
            if (times.length > 0) {
                setActiveScheduleUUID(times[0].uuid)
            }
        }
    }, [schedules, date])

    function isTileDisabled(e: CalendarTileProperties) {
        if (schedules) {
            const scheduleDateList = schedules.map((i) => i.date)
            const date = moment(e.date).format("YYYY-MM-DD")
            return (scheduleDateList && scheduleDateList.indexOf(date) <= -1) ?? false
        } else {
            return true
        }
    }

    function onClickNavigateToRes(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        if (!getToken()) {
            navigate("/login");
            return false;
        }
        navigate(`/res`)
    }

    function onChangeStatus() {
        onChange(false)
    }

    return <>
            <div className="reservation-box-mobile">
                <button className={"close"} onClick={onChangeStatus}>X</button>
                <p><span>Step 1.</span> 날짜 선택</p>
                <Calendar
                    formatDay={(locale, date) => moment(date).format("DD")}
                    className="react-calendar"
                    tileDisabled={(e) => isTileDisabled(e)}
                    onChange={setDate} value={date}/>
                <div className="border"></div>
                <p><span>Step 2.</span> 회차 선택</p>
                <div className="reservation-details">
                    {times && times.map((i) => <TimeItem isActive={activeScheduleUUID === i.uuid}
                                                         onClick={setActiveScheduleUUID} key={i.uuid}
                                                         uuid={i.uuid}
                                                         time={i.time} cast={i.cast ?? null}/>)}
                </div>
                {
                    schedules ?
                        <button className="button" onClick={onClickNavigateToRes}>예매하기</button> :
                        <button className="button btn-disabled" disabled={true}>예매종료</button>
                }
            </div>
    </>
}

export default ReservationBoxMobile