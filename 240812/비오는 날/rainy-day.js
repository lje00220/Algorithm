class Weather {
    constructor(date, day, weather) {
        this.date = date;
        this.day = day;
        this.weather = weather;
    }
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let weathers = [];

for (let i = 1; i <= n; i++) {
    let [date, day, weather] = input[i].trim().split(" ");
    weathers.push(new Weather(date, day, weather));
}

let rainyWeathers = [];
for (let i = 0 ; i < n; i++) {
    if (weathers[i].weather === "Rain") {
        rainyWeathers.push(weathers[i]);
    }
}

let idx = 0;
let [year, month, dayy] = rainyWeathers[0].date.split("-").map(Number);
for (let i = 0; i < rainyWeathers.length; i++) {
    let [curYear, curMonth, curDay] = rainyWeathers[i].date.split("-").map(Number);
    if (year > curYear) {
        idx = i;
        [year, month, dayy] = [curYear, curMonth, curDay];
    } else if (year === curYear) {
        if (month > curMonth) {
            idx = i;
            [year, month, dayy] = [curYear, curMonth, curDay];
        } else if (month == curMonth) {
            if (dayy > curDay) {
                idx = i;
                [year, month, dayy] = [curYear, curMonth, curDay];
            }
        }
    }
}

console.log(rainyWeathers[idx].date, rainyWeathers[idx].day, rainyWeathers[idx].weather);