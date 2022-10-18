import {AlarmStyle} from "./AlarmStyle";

function ConfirmAlarm({msg, display, onClick, next}: { msg: string, display: boolean, onClick: (state:boolean)=>void, next:any}) {

    return display ? <AlarmStyle>
        <div className={"modal alert"}>
            <p>{msg}</p>
            <button className={"alert-confirm"} onClick={next}>확인</button>
            <button className={"alert-cancel"} onClick={() => onClick(false)}>취소</button>
        </div>
    </AlarmStyle> : null
}

export default ConfirmAlarm