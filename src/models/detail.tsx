import {Schedule} from "./schedule";
import {Cast} from "./cast";

export interface Content {
    uuid: string
    title: string
    content: string
}

export interface Detail {
    id: number;
    title: string;
    thumbUrl: string;
    place: {
        id:number,
        name: string,
        image: string
    }
    rating: string
    runningTime: string;
    startDate: string;
    endDate: string
    schedules: Schedule[],
    cast: Cast[]
    contents: Content[]
}
