function solution(cacheSize, inputCities) {
    const cities = inputCities.map((city) => city.toLowerCase());
    let answer = 0;
    let arr = [];

    for (let city of cities) {
        if (cacheSize === 0) {
            answer += 5;
            continue;
        }

        if (arr.includes(city)) {
            answer += 1;
            arr = arr.filter((elem) => elem !== city);
            arr.push(city);
        } else {
            answer += 5;
            if (arr.length >= cacheSize) {
                arr.shift();
            }
            arr.push(city);
        }
    }

    return answer;
}