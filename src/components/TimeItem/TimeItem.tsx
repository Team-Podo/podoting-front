interface TimeItemProps {
    onClick: (uuid:string) => void
    isActive: boolean,
    uuid: string,
    time: string,
    cast: { id: number, name: string }[] | null
}

function TimeItem (props :TimeItemProps) {
    let castText = ""
    if(props.cast) {
        castText = props.cast.map((item) => { return item.name }).join(", ")
    }
    const onClickTime = () => {
        props.onClick(props.uuid)
    }

    return <>
        <div className={`time ${props.isActive ? "active" : " "}`} onClick={onClickTime}>
            <div>{props.time}</div>
            <p>{castText}</p>
        </div>
    </>
}

export default TimeItem

