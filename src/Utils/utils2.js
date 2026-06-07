import { DISEASES, DISTRICTS } from "../Utils/utils1";

function rand(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }


export function generateData() {
    const data = {};
    DISTRICTS.forEach(d => {
        data[d.id] = {};
        DISEASES.forEach(dis => {
            const cases = rand(5, 490);
            data[d.id][dis.id] = {
                cases,
                risk: cases > 350 ? "critical" : cases > 200 ? "high" : cases > 80 ? "medium" : "low",
                trend: Math.random() > 0.5 ? "up" : "down",
                change: rand(2, 35),
                newToday: rand(0, 40),
            };
        });
    });
    return data;
}
