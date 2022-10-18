import {useDispatch} from "react-redux";
import {show} from "../modules/alarm";
import {ask} from "../modules/confirm";

export function useAlarm() {
    const dispatch = useDispatch()

    return (content:string) => {
        dispatch(show(content, true))
        setTimeout(() => dispatch(show(content, false)), 1000)
    }

}

export function useConfirm() {
    const dispatch = useDispatch()

    return (content:string, next:() => void) => {
        dispatch(ask(content, true, next))
    }
}