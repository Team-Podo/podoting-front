import {useEffect, useState} from "react";
import {getPerformances} from "../../apis/performance";
import {PerformancePageStyle} from "./PerformancePageStyle";
import {useNavigate} from "react-router-dom";

interface Performance {
    id: string
    title: string
    thumbUrl: string
    startDate: string
}

function PerformancePage() {
    const navigate = useNavigate()
    const [performances, setPerformances] = useState<Performance[]>([])
    useEffect(() => {
        getPerformances().then((res) => {
            setPerformances(res)
        })
    }, [])

    return <div>
        <div className={"container"}>
            <PerformancePageStyle>
                {performances && performances.map((pf) =>
                    <div key={pf.id} className={"single-performance"} onClick={() => navigate(`/musical/${pf.id}`)}>
                    <img src={pf.thumbUrl}/>
                    <p>{pf.title}</p>
                </div>)}
            </PerformancePageStyle>
        </div>
    </div>
}

export default PerformancePage