import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useAlarm} from "../../hooks/useAlarm";

function NotFound() {
    const navigate = useNavigate()
    const setAlarm = useAlarm()

    useEffect(() => {
        setAlarm("잘못된 페이지입니다.")
        navigate("/musicals")
    }, [])

    return <>

    </>
}

export default NotFound