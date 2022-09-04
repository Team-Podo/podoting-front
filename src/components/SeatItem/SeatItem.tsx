import {Seat} from "../../models/seat";
import {SeatItemWrapper} from "./SeatItem.style";
import {useState} from "react";

interface SeatProps extends Seat {
    selected: (uuid:string) => void
}

function SeatItem({uuid, point, selected} :SeatProps) {
    const x = point.x
    const y = point.y
    const [isSelected, setIsSelected] = useState(false)
    function onClickSeat() {
        setIsSelected((curr) => !curr)
        selected(uuid)
    }
    return <div onClick={onClickSeat}>
        <SeatItemWrapper x={x} y={y} >
            <div className={ isSelected ? "selected" : ""}> </div>
        </SeatItemWrapper>
    </div>
}

export default SeatItem