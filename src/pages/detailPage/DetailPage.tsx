import Calendar, {CalendarTileProperties} from "react-calendar"
import React, {useEffect, useState} from "react";
import moment from "moment";
import {useNavigate, useParams} from "react-router-dom";
import {Content, Detail} from "../../models/detail";
import {Cast} from "../../models/cast";
import {Schedule} from "../../models/schedule";
import {getDetails} from "../../apis/detail";
import {getToken} from "../../utils/token";
import {ContentTitlesWrapper, DetailPageStyle} from "./DetailPageStyle";
import TimeItem from "../../components/TimeItem/TimeItem";
import CastItem from "../../components/CastItem/CastItem";
import {CastItemWrapper} from "../../components/CastItem/CastItem.style";
import {Viewer} from "@toast-ui/react-editor";
import Empty from "../../components/empty/Empty";
import ScheduleList from "../../components/detail/scheduleList/ScheduleList";

function DetailPage() {
    const {id} = useParams()
    const [date, setDate] = useState(new Date())
    const [contents, setContents] = useState<Content[]>([])
    const [details, setDetails] = useState<Detail>()
    const [casts, setCasts] = useState<Cast[]>([])
    const [schedules, setSchedules] = useState<Schedule[]>([])
    const [times, setTimes] = useState<Schedule[]>([])
    const [activeScheduleUUID, setActiveScheduleUUID] = useState("")
    const [activeTab, setActiveTab] = useState("content")
    const navigate = useNavigate()

    useEffect(function () {
        getDetails(Number(id)).then((res) => {
            console.log(res.schedules)
            setDetails(res)
            setCasts(res.cast)
            setSchedules(res.schedules)
            setContents(res.contents)
            console.log(res.contents)
            if (res.schedules) {
                const [year, month, date] = res.schedules[0].date.split("-")
                setDate(new Date(Number(year), Number(month) - 1, Number(date)))
            }
        }).catch((e) => console.log(e))
    }, [id])

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

    function onClickOpenResWindow(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        if (!getToken()) {
            navigate("/login");
            return false;
        }
        const reservationProps = {
            performanceId: id,
            scheduleUUID: activeScheduleUUID,
            details: details
        }
        localStorage.setItem("reservationProps", JSON.stringify(reservationProps))
        window.open("/res", "podoting - 예매", 'width=1028,height=618,location=no,status=no,scrollbars=yes')
    }

    return <DetailPageStyle>
        <div className="info common-section">
            <div className="wrapper">
                <div className="info-left">
                    <div className="info-left-img-box">
                        <img src={details && (details.thumbUrl)} alt="poster_image"/>
                    </div>
                    <div className="info-left-detail-box">
                        <p id="title">{details && details.title}</p>
                        <div className="border"></div>
                        <div className="info-left-detail">
                            <span>기간</span>
                            <div>{details && details.startDate} ~ {details && details.endDate}</div>
                        </div>
                        <div className="info-left-detail">
                            <span>장소</span>
                            <div>{details && details.place.name}</div>
                        </div>
                        <div className="info-left-detail">
                            <span>관람시간</span>
                            <div>{details && details.runningTime}</div>
                        </div>
                        <div className="info-left-detail">
                            <span>관람등급</span>
                            <div>{details && details.rating}</div>
                        </div>
                        <div className="info-left-detail">
                            <span>가격</span>
                            <div>
                                {details && details.seatGrades.map((g) => <p key={g.id}>{g.name}: {g.price}</p>)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="reservation-box">
                    <p><span>Step 1.</span> 날짜 선택</p>
                    <Calendar
                        formatDay={(locale, date) => moment(date).format("DD")}
                        className="react-calendar"
                        tileDisabled={(e) => isTileDisabled(e)}
                        onChange={setDate} value={date}/>
                    <div className="border"></div>
                    <p><span>Step 2.</span> 회차 선택</p>
                    <p>{moment(date).format("YYYY년 MM월 DD일")}</p>
                    <div className="reservation-details">
                        {times && times.map((i) => <TimeItem isActive={activeScheduleUUID === i.uuid}
                                                             onClick={setActiveScheduleUUID} key={i.uuid} uuid={i.uuid}
                                                             time={i.time} cast={i.cast ?? null}/>)}
                    </div>
                    {
                        schedules ?
                            <button className="button" onClick={onClickOpenResWindow}>예매하기</button> :
                            <button className="button btn-disabled" disabled={true}>예매종료</button>
                    }
                </div>
            </div>
        </div>
        <div className="common-section">
            <div className="content">
                <ContentTitlesWrapper>
                    <ul>
                        <li className={activeTab === "content" ? "active" : ""}
                            onClick={() => setActiveTab("content")}>공연정보
                        </li>
                        <li className={activeTab === "casts" ? "active" : ""}
                            onClick={() => setActiveTab("casts")}>캐스팅
                        </li>
                        <li className={activeTab === "schedules" ? "active" : ""}
                            onClick={() => setActiveTab("schedules")}>스케줄
                        </li>
                        <li className={activeTab === "reviews" ? "active" : ""} onClick={() => setActiveTab("reviews")}>리뷰
                        </li>
                    </ul>
                </ContentTitlesWrapper>
                {activeTab === "content" ?
                        <div className="content">
                            {contents && contents.map((i, idx) =>
                                <div style={{whiteSpace: "pre-line"}} className="content-inner" key={idx}>
                                    <h3>{i.title}</h3>
                                    <Viewer initialValue={i.content}/>
                                </div>)}
                        </div>
                    : activeTab === "casts" ? ( casts ?
                            <CastItemWrapper className="content-inner">
                                {casts && casts.map((i) => <CastItem name={i.name} profile={i.profile} role={i.role}
                                                                     key={i.id}/>)}
                            </CastItemWrapper> : <Empty text={"추가된 캐스트 정보가 없습니다."}/> )
                        : activeTab === "schedules" ? ( schedules ? <ScheduleList schedules={schedules}/> : <Empty text={"스케줄이 없습니다."}/> )
                            : activeTab === "reviews" ? <Empty text={"작성된 리뷰가 없습니다."}/> : null
                }
            </div>
        </div>
    </DetailPageStyle>
}

export default DetailPage