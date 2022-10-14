import axios from "axios";
import {getAuth} from "firebase/auth";
import {getToken} from "../utils/token";


async function addAuth() {
    const token = await getToken()

    return { headers: {"Authorization": `Bearer ${token}`} }
}

export async function getOrders() {
    const res = await axios.get(`https://api.podoting.com/mypage/order-history?reversed=true`, await addAuth())

    return res
}

export async function cancelOrder({orderID}: { orderID: string }) {
    const res = await axios.patch(`https://api.podoting.com/order/cancel/${orderID}`, {}, await addAuth())

    return res
}
