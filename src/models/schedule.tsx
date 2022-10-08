export interface Schedule {
    uuid: string,
    date: string,
    time: string,
    cast?: { id: number, name: string }[] | null
}