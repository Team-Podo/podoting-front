import axios from "axios";

export async function getPerformances() {
    const res = await axios.get(`https://api.podoting.com/admin/performances/`)
    return res.data.performances
}