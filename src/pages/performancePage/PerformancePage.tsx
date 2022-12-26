import {useEffect, useState} from "react";
import {getPerformances} from "../../apis/performance";
import {PerformancePageStyle} from "./PerformancePageStyle";
import {useLocation, useNavigate} from "react-router-dom";
import * as querystring from "querystring";
import {search} from "../../apis/search";
import Empty from "../../components/empty/Empty";

interface Performance {
    id: string
    title: string
    thumbUrl: string
    startDate: string
    endDate: string
    runningTime: string
}

function PerformancePage() {
    const navigate = useNavigate()
    const [performances, setPerformances] = useState<Performance[]>([])
    const searchParam = new URLSearchParams(useLocation().search).get("keyword")

    useEffect(() => {
        if (searchParam && searchParam.length > 0) {
            search(searchParam).then((res) => {
                setPerformances(res)
            })
        } else {
            navigate("/musicals")
            getPerformances().then((res) => {
                setPerformances(res)
            })
        }
    }, [])

    return <div className={"container"}>
        <PerformancePageStyle>
            {performances.length > 0 ? performances.map((pf) =>
                <div key={pf.id} className={"single-performance"}>
                    <img src={pf.thumbUrl}/>
                    <div>
                        <p className={"performance-title"}>{pf.title}</p>
                        <p>{pf.startDate} ~ {pf.endDate}</p>
                        <p>{pf.runningTime}</p>
                        <button onClick={() => navigate(`/musical/${pf.id}`)}>예매하기</button>
                    </div>
                </div>) : <Empty text={"검색 결과가 존재하지 않습니다."}/>}
        </PerformancePageStyle>
    </div>
}

export default PerformancePage