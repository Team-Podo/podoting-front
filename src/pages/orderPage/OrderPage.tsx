import {useEffect, useState} from "react";
import {getOrders} from "../../apis/order";
import {Order} from "../../models/order";

function OrderPage() {
    const [orders, setOrders] = useState<Order[]>()

    useEffect(() => {
        getOrders().then((res) => setOrders(res.data.orders))
        console.log(orders)
    }, [])
    return <>
        <div>order..</div>
    </>
}

export default OrderPage