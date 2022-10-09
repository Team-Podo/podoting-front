import axios from "axios";
import {getToken} from "../utils/token";

axios.defaults.headers.common["Authorization"] = getToken()

export async function getOrders() {
    const res = await axios.get(`https://api.podoting.com/mypage/order-history`)
    console.log(res.data.orders)
    return res
}