export interface Seat {
    uuid: string,
    point: {
        x: number,
        y: number
    },
    name: string,
    grade: {
        id: number,
        name: string
    },
    price: number,
    color: string
}