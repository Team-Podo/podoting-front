import {useEffect, useState} from "react";
import {getOrders} from "../../apis/order";

function OrderPage() {
    const [orders, setOrders] = useState()
    useEffect(() => {
        getOrders()
    })
    return <>
        <div>order..</div>
    </>
}

export default OrderPage