import axios from "axios";
import {Seat} from "../models/seat";
import {Schedule} from "../models/schedule";
import {getToken} from "../utils/token";

interface seatResponse extends Seat {
    backgroundImage: string,
    seats: Seat[]
    schedules: Schedule[]
}

async function addAuth() {
    const token = await getToken()

    return { headers: {"Authorization": `Bearer ${token}`} }
}

export async function getSeats({performanceID, scheduleUUID}: {
    performanceID: string
    scheduleUUID: string
}) {
    const res = await axios.get<seatResponse>(`https://api.podoting.com/musical/${Number(performanceID)}/schedules/${scheduleUUID}/seats`)

    return res.data
}


export async function bookSeats({scheduleUUID, seatUUIDs}: {
    scheduleUUID: string
    seatUUIDs: string[]
}) {
    const res = await axios.post<seatResponse>(`https://api.podoting.com/book/${scheduleUUID}`, { seat_uuids: seatUUIDs}, await addAuth())

    return res.data
}

