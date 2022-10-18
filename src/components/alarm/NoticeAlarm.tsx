import {AlarmStyle} from "./AlarmStyle";

function NoticeAlarm({msg, display, onClick}: { msg: string, display: boolean, onClick: (state:boolean)=>void }) {

    return display ? <AlarmStyle>
        <div className={"modal alert"}>
            <p>{msg}</p>
            <button className={"alert-confirm"} onClick={() => onClick(false)}>확인</button>
        </div>
    </AlarmStyle> : null
}

export default NoticeAlarm