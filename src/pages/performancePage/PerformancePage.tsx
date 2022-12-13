import {useEffect, useState} from "react";
import {getPerformances} from "../../apis/performance";
import {PerformancePageStyle} from "./PerformancePageStyle";
import {useNavigate} from "react-router-dom";

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
    useEffect(() => {
        getPerformances().then((res) => {
            setPerformances(res)
        })
    }, [])

    return <div className={"container"}>
            <PerformancePageStyle>
                {performances && performances.map((pf) =>
                    <div key={pf.id} className={"single-performance"}>
                        <img src={pf.thumbUrl}/>
                        <div>
                            <p className={"performance-title"}>{pf.title}</p>
                            <p>{pf.startDate} ~ {pf.endDate}</p>
                            <p>{pf.runningTime}</p>
                            <button onClick={() => navigate(`/musical/${pf.id}`)} >예매하기</button>
                        </div>
                    </div>)}
            </PerformancePageStyle>
        </div>
}

export default PerformancePage