import sampleSeatSrc from "../assets/images/sampleseat.gif"

export function getSeats() {
    return {
        "backgroundImage": {
            "url": sampleSeatSrc
        },
        "seats": [
            {
                "uuid": "a6c6a191-7ef9-4695-b89b-d76bf2e31d08",
                "point": {
                    "x": 99.5,
                    "y": 209,
                },
                "name": "3 열 1번 좌석",
                "grade": {
                    "id": 102,
                    "name": "VIP"
                }
            },
            {
                "uuid": "f5682e38-6213-42d6-ae9f-a26091ec32ba",
                "point": {
                    "x": 100,
                    "y": 221,
                },
                "name": "3 열 2번 좌석",
                "grade": {
                    "id": 102,
                    "name": "VIP"
                }
            },
        ]
    }
}