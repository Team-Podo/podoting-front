import {Schedule} from "./schedule";
import {Cast} from "./cast";

export interface Detail {
    id: number;
    title: string;
    thumbUrl: string;
    runningTime?: string;
    startDate: string;
    endDate: string
    schedules: Schedule[],
    cast: Cast[]
}
