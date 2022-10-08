import {SeatItemWrapper} from "./SeatItem.style";
import {useState} from "react";

interface SeatProps {
    uuid: string,
    point: {
        x: number,
        y: number
    },
    color: string
    selected: (uuid:string) => void
}

function SeatItem({uuid, point, color, selected} :SeatProps) {
    const x = point.x
    const y = point.y
    const [isSelected, setIsSelected] = useState(false)
    function onClickSeat() {
        setIsSelected((curr) => !curr)
        selected(uuid)
    }
    return <SeatItemWrapper x={x} y={y} color={color} onClick={onClickSeat}>
            <div className={ isSelected ? "selected" : ""}> </div>
        </SeatItemWrapper>
}

export default SeatItem