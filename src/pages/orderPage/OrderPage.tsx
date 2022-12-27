import React, {useEffect, useState} from "react";
import {cancelOrder, getOrders} from "../../apis/order";
import {Order} from "../../models/order";
import {OrderPageStyle} from "./OrderPageStyle";
import {useAlarm, useConfirm} from "../../hooks/useAlarm";
import locationIcon from "../../assets/images/location.png"
import Empty from "../../components/empty/Empty";

function OrderPage() {
    const [orders, setOrders] = useState<Order[]>([])
    const setConfirm = useConfirm()
    const setAlarm = useAlarm()

    useEffect(() => {
        refreshOrders()
    }, [])

    function refreshOrders() {
        getOrders().then((res) => setOrders(res.data.orders))
    }

    function onClickCancelOrder(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        const orderID = e.currentTarget.value
        setConfirm("주문을 취소하시겠습니까?", () => {
            cancelOrder({orderID}).then((res) => {
                if (res.status === 200) {
                    setAlarm("주문이 취소되었습니다.")
                    refreshOrders()
                }
            })
        })
    }

    return <OrderPageStyle className={"container"}>
        <h2 className={"title pc"}>MY 티켓</h2>
        {
            orders.length > 0 ? orders.map((o) => <div key={o.id} className={"single-order"}>
                <p className={"order-perf-title"}>{o.performance.title}</p>
                <div className={"order-status"}>결제 완료</div>
                <div className={"order-info"}>
                    <img src={o.performance.thumbnail} className={"order-thumbnail"}/>
                    <div className={"performance-info"}>
                        <p className={"flex-row"}>
                            <img src={locationIcon} className={"location-icon"}/>
                            <span>{o.performance.place}</span>
                        </p>
                        <p>예매 번호: {o.key}</p>
                        <p>예매 일자: {`${o.schedule.date} ${o.schedule.time ?? ""}`}</p>
                        <p>{o.details.length}매</p>
                    </div>
                </div>

                <p className={"title-sm"}>좌석</p>
                <div className={"flex-row"}>
                    {o.details.map((d, idx) => <div key={d.id} style={{borderColor: d.seat.color}} className={"seat-badge flex-row"}><div style={{backgroundColor: d.seat.color}}>{d.seat.grade}</div><div>{d.seat.name}</div></div>)}
                </div>


                <div className={"order-price-info"}>
                <p className={"title-sm"}>결제 금액</p>
                    {o.canceled ?
                        <button className={"btn-canceled btn-disabled"} value={o.id}>취소완료</button>
                        :
                        <button className={"btn-request-cancel"} onClick={onClickCancelOrder} value={o.id}>예매 취소</button>
                    }
                    {o.details.map((d, idx) => <div key={d.id} className={"flex-row single-order-price"}><span>{d.seat.grade}석 {d.seat.name}</span><p>{Intl.NumberFormat('en-US').format(d.payPrice)}원</p></div>)}

                </div>{ /*

                */}
            </div>) : <Empty text={"주문 내역이 없습니다."}/>
        }
    </OrderPageStyle>
}

export default OrderPage