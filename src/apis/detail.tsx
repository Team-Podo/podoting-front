import {Detail} from "../models/detail";
import axios from "axios";

export async function getDetails(productId: number){
    try {
        const res = await axios.get<Detail>(`/musical/${productId}`)
        return res.data
    } catch (e) {
        throw Error('getDetails error')
    }
}