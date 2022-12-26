import axios from "axios";

export const search = async (value:string) => {
    const res = await axios.get(`https://api.podoting.com/mainpage/?keyword=${value}`)

    return res.data.performances
}