import {Schedule} from "../../../models/schedule";
import moment from "moment";
import {ScheduleListStyle} from "./ScheduleListStyle";
import Empty from "../../empty/Empty";

function ScheduleList({schedules}: { schedules: Schedule[] }) {
    return schedules ? <ScheduleListStyle>
        <thead>
        <tr>
            <th style={{width:"20%"}}>일자</th>
            <th style={{width:"10%"}}>시간</th>
            <th>캐스트</th>
        </tr>
        </thead>
        <tbody>
        {schedules.map((s) => <tr key={s.uuid}>
                <td>{`${moment(s.date).format("YYYY년 MM월 DD일")}`}</td>
                <td>{s.time ?? "미정"}</td>
                <td>{ s.cast?.map((c) => c.name.concat(" "))}</td>
            </tr>)}
        </tbody>
    </ScheduleListStyle> : <Empty text={"예매 가능한 스케줄이 없습니다."}/>
}

export default ScheduleList