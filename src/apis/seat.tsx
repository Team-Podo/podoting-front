import axios from "axios";
import {Seat} from "../models/seat";

interface seatResponse extends Seat {
    backgroundImage: string,
    seats: Seat[]
}

export async function getSeats() {
    const res = await axios.get<seatResponse>("https://api.podoting.com/musical/11/schedules/2/seats")
    return res.data

}