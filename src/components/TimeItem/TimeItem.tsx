interface TimeItemProps {
    id: string,
    time: string,
    cast: { id: number, name: string }[]
}


function TimeItem ({ id, time, cast} :TimeItemProps) {
    const castText = cast.map((item) => { return item.name }).join(", ")
    return <>
        <div className="time">
            <div>{time}</div>
            <p>{castText}</p>
        </div>
    </>
}

export default TimeItem