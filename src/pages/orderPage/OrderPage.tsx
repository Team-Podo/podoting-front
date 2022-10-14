import React, {useEffect, useState} from "react";
import {cancelOrder, getOrders} from "../../apis/order";
import {Order} from "../../models/order";
import {OrderPageStyle} from "./OrderPageStyle";

function OrderPage() {
    const [orders, setOrders] = useState<Order[]>([])

    useEffect(() => {
        getOrders().then((res) => setOrders(res.data.orders))
    }, [])

    function onClickCancelOrder(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        const orderID = e.currentTarget.value
        cancelOrder({orderID})
    }

    return <OrderPageStyle className={"container"}>
        <h2 className={"title"}>주문확인</h2>
        {
            orders && orders.map((o) => <div key={o.id} className={"single-order"}>
                <div className={"performance-info"}>
                    <p>주문번호: {o.key}</p>
                    <img src={o.performance.thumbnail}/>
                </div>
                <div className={"performance-info"}>
                    <p>주문일시: {o.createdAt}</p>
                    <p>{o.performance.title}</p>
                    <p>예매일자: {`${o.schedule.date} ${o.schedule.time ?? ""}`}</p>
                    <p>총 구매 좌석: {o.details.length}매</p>
                    {o.details.map((d, idx) => <p key={d.id}>{d.seat.name} (₩{d.payPrice})</p>)}
                </div>
                <div className={"actions"}>
                    { o.canceled ?
                        <button className={"button btn-canceled"} value={o.id}>취소완료</button>
                        :
                        <button className={"button"} onClick={onClickCancelOrder} value={o.id}>예매취소</button>
                    }
                </div>
            </div>)
        }
    </OrderPageStyle>
}

export default OrderPage