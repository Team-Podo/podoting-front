import ModalPortal from "../modal/ModalPortal";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../modules";
import NoticeAlarm from "./NoticeAlarm";
import {show} from "../../modules/alarm";
import ConfirmAlarm from "./ConfirmAlarm";

function AlarmContainer() {
    const alarmMsg = useSelector((state: RootState) => state.alarm.content)
    const alarmDisplay = useSelector((state: RootState) => state.alarm.display)
    const confirmMsg = useSelector((state: RootState) => state.confirm.content)
    const confirmDisplay = useSelector((state: RootState) => state.confirm.display)
    const next = useSelector((state: RootState) => state.confirm.next)
    const dispatch = useDispatch()

    function closeModal() {
        dispatch(show("", false))
    }

    return alarmDisplay ? <ModalPortal><NoticeAlarm msg={alarmMsg} display={alarmDisplay} onClick={closeModal}/></ModalPortal> :
        confirmDisplay ? <ModalPortal><ConfirmAlarm msg={confirmMsg} display={confirmDisplay} onClick={closeModal} next={next}/></ModalPortal> : null

}

export default AlarmContainer