import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Content, Detail} from "../../models/detail";
import {Cast} from "../../models/cast";
import {Schedule} from "../../models/schedule";
import {getDetails} from "../../apis/detail";
import {ContentTitlesWrapper, DetailPageStyle} from "./DetailPageStyle";
import Empty from "../../components/empty/Empty";
import ScheduleList from "../../components/detail/scheduleList/ScheduleList";
import ReservationBox from "../../components/detail/reservationBox/ReservationBox";
import PerformanceContent from "../../components/detail/content/PerformanceContent";
import PerformanceCasts from "../../components/detail/performanceCasts/PerformanceCasts";
import ReservationBoxMobile from "../../components/detail/reservationBox/ReservationBoxMobile";


function DetailPage() {
    const {id} = useParams()
    const [loaded, setLoaded] = useState(false)
    const [contents, setContents] = useState<Content[]>([])
    const [details, setDetails] = useState<Detail>()
    const [casts, setCasts] = useState<Cast[]>([])
    const [schedules, setSchedules] = useState<Schedule[]>([])
    const [activeTab, setActiveTab] = useState<string>("content")
    const [opened, setOpened] = useState(false)

    useEffect(function () {
        getDetails(Number(id)).then((res) => {
            setDetails(res)
            setCasts(res.cast)
            setSchedules(res.schedules)
            setContents(res.contents)
            setLoaded(true)
        }).catch((e) => console.log(e))
    }, [id])

    const changeActiveTab = (activeTab: string) => {
        switch (activeTab) {
            case "content":
                return <PerformanceContent contents={contents}/>
            case "cast":
                return <PerformanceCasts casts={casts}/>
            case "schedule":
                return <ScheduleList schedules={schedules}/>
            default:
                return <Empty text={"정보를 불러올 수 없습니다."}/>
        }
    }

    return <DetailPageStyle>
        { loaded ? <>
            <div className="info common-section">
                <div className="wrapper">
                    <div className="info-left">
                        <div className="info-left-img-box">
                            <img src={details && (details.thumbUrl)} alt="poster_image"/>
                        </div>
                        <div className="info-left-detail-box">
                            <p id="title">{details && details.title}</p>
                            <div className="border pc"></div>
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
                                    {details && details.seatGrades?.map((g) => <p key={g.id}>{g.name}: {g.price}</p>)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <ReservationBox performanceID={id!} schedules={schedules} details={details!}/>
                </div>
            </div>
            <div className={"mobile-reservation-btn-container"}>
                {
                    schedules ?
                        <button className={"mobile-reservation-btn button"} onClick={() => setOpened(true)}>예매하기</button> :
                        <button className="mobile-reservation-btn button btn-disabled" disabled={true}>예매종료</button>
                }
            </div>
            { opened && <ReservationBoxMobile performanceID={id!} schedules={schedules} details={details!} onChange={setOpened}/> }
            <div className="common-section">
                <div className="content">
                    <ContentTitlesWrapper>
                        <ul>
                            <li className={activeTab === "content" ? "active" : ""}
                                onClick={() => setActiveTab("content")}>공연정보
                            </li>
                            <li className={activeTab === "cast" ? "active" : ""}
                                onClick={() => setActiveTab("cast")}>캐스팅
                            </li>
                            <li className={activeTab === "schedule" ? "active" : ""}
                                onClick={() => setActiveTab("schedule")}>스케줄
                            </li>
                            <li className={activeTab === "review" ? "active" : ""}
                                onClick={() => setActiveTab("review")}>리뷰
                            </li>
                        </ul>
                    </ContentTitlesWrapper>
                    { activeTab ? changeActiveTab(activeTab) : <Empty text={"공연 정보를 불러올 수 없습니다."}/> }
                </div>
            </div>
        </> : null
        }
    </DetailPageStyle>
}

export default DetailPage