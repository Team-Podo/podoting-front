import {CastItemWrapper} from "../../CastItem/CastItem.style";
import CastItem from "../../CastItem/CastItem";
import Empty from "../../empty/Empty";
import React from "react";
import {Cast} from "../../../models/cast";

function PerformanceCasts({casts}: { casts: Cast[] }) {
    return casts ? <CastItemWrapper className="content-inner">
        {casts && casts.map((i) => <CastItem name={i.name} profile={i.profile} role={i.role}
                                             key={i.id}/>)}
    </CastItemWrapper>
        : <Empty text={"추가된 캐스트 정보가 없습니다."}/>
}

export default PerformanceCasts