import {Schedule} from "./schedule";

export interface Order {
    id: string
    key: string
    performance: Performance
    paymentMethod: string
    canceled: boolean
    details: OrderDetail[]
    schedule: Schedule
    createdAt: string
}

interface Performance {
    id: string
    title: string
    thumbnail: string
}

interface OrderDetail {
    id: string
    key: string
    originalPrice: number
    discountPrice: number
    payPrice: number
    seat: Seat
}

interface Seat {
    uuid: string
    name: string
    grade: string
}