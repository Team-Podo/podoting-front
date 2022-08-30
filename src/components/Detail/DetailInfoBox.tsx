import contentImageSrc1 from "../../assets/images/contentsample1.jpg"
import contentImageSrc2 from "../../assets/images/contentsample2.jpg"
import contentImageSrc3 from "../../assets/images/contentsample3.jpg"
import {ContentTitlesWrapper, DetailWrapper} from "./DetailInfoBox.style"
import Calendar, {CalendarTileProperties} from "react-calendar"
import React, {useEffect, useState} from "react";
import moment from "moment";
import {getDetails} from "../../apis/detail";
import {Detail} from "../../models/detail";
import CastItem from "../CastItem/CastItem";
import {Cast} from "../../models/cast";
import {CastItemWrapper} from "../CastItem/CastItem.style";
import {Schedule} from "../../models/schedule";
import TimeItem from "../TimeItem/TimeItem";
import {isSet} from "util/types";

function DetailInfoBox() {
    const [date, setDate] = useState(new Date())
    const [contents, setContents] = useState(<div>컨텐츠 추후 수정 예정.. 무시바랍니다</div>)
    const [details, setDetails] = useState<Detail>()
    const [casts, setCasts] = useState<Cast[]>([])
    const [schedules, setSchedules] = useState<Schedule[]>([])
    const [times, setTimes] = useState<Schedule[]>([])

    useEffect(function () {
        getDetails(11).then((res) => {
            setDetails(res)
            setCasts(res.cast)
            setSchedules(res.schedules)
        } ).catch((e) => console.log(e))

        function getContents() {
            const texts = <div className="content-inner">
                <h3>소제목</h3>
                [인터파크] 뮤지컬 팬레터 3/16(수) 4시 공연 취소 및 환불 안내<br/>

                안녕하세요. 뮤지컬 팬레터입니다.<br/><br/>

                    금일 출연진의 자가키트 양성 확인으로 인해<br/>
                    3/16(수) 4시 공연을 취소 하였습니다.<br/>
                    소중한 시간 내주시어 발걸음 해주신 모든 관객 여러분들께<br/>
                    불편을 드려 진심으로 죄송합니다.<br/><br/>

                    예매 건은 모두 일괄적으로 취소 및 전액 환불 예정입니다.<br/>
            </div>
            const imgs = [contentImageSrc1, contentImageSrc2, contentImageSrc3].map((item, idx)=> {
                return <div className="content-inner" key={idx}>
                    <h3>소제목</h3>
                    <img src={item} alt="컨텐츠 이미지"/>
                </div>
            })

            return <div>
                {texts}
                {imgs}
            </div>

        }
        setContents(getContents())
    }, [])


    useEffect(function () {
        console.log("schedules", schedules)
        if (schedules.length) {
            const [year, month, date] = schedules[0].date.split("-")
            setDate(new Date(Number(year), Number(month)-1, Number(date)))
        }
    }, [schedules])

    useEffect(function () {
        const times = schedules.filter((i) => {
            return i.date === moment(date).format("YYYY-MM-DD")
        })
        setTimes(times)
    }, [date])

    function isTileDisabled(e:CalendarTileProperties) {
        if (schedules) {
            const scheduleDateList = schedules.map((i) => i.date)
            const date = moment(e.date).format("YYYY-MM-DD")
            return (scheduleDateList && scheduleDateList.indexOf(date) <= -1) ?? false
        } else {
            return true
        }
    }

    return <DetailWrapper>
        <div className="info common-section">
            <div className="wrapper">
                <div className="info-left">
                <div className="info-left-img-box">
                    <img src={ details && (details.thumbUrl) } alt="poster_image"/>
                </div>
                <div className="info-left-detail-box">
                    <p id="title">{ details && details.title }</p>
                    <div className="border"></div>
                    <div className="info-left-detail">
                        <span>기간</span>
                        <div>{ details && details.startDate } ~ { details && details.endDate }</div>
                    </div>
                    <div className="info-left-detail">
                        <span>장소</span>
                        <div>장소추가바람~</div>
                    </div>
                    <div className="info-left-detail">
                        <span>관람시간</span>
                        <div>관람시간안넘어와요</div>
                    </div>
                    <div className="info-left-detail">
                        <span>관람등급</span>
                        <div>관람등급을넣어주세요</div>
                    </div>
                    <div className="info-left-detail">
                        <span>가격</span>
                        <div>
                            <p>VIP: 150000</p>
                            <p>R: 130000</p>
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
                        { times && times.map((i) => <TimeItem key={i.uuid} id={i.uuid} time={i.time} cast={i.cast}/>) }
                    </div>
                    <button className="reservation-button">예매하기</button>
                </div>
            </div>
        </div>
        <div className="common-section">
            <div className="content">
                <ContentTitlesWrapper>
                    <ul>
                        <li className="active">공연정보</li>
                        <li>캐스팅</li>
                        <li>스케줄</li>
                        <li>여기디자인어려움</li>
                    </ul>
                </ContentTitlesWrapper>
                <CastItemWrapper>
                    { casts && casts.map((i) => <CastItem name={i.name} profile={i.profile} role={i.role} key={i.id} />) }
                </CastItemWrapper>
                {contents}
            </div>
        </div>
    </DetailWrapper>
}

export default DetailInfoBox