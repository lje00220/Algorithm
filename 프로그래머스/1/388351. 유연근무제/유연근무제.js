function solution(schedules, timelogs, startday) {
    let answer = 0;
    for (let i = 0; i < timelogs.length; i++) {
        let isSatisfied = true;
        let workTime = schedules[i] + 10;
        if ((workTime % 100) / 60 >= 1) {
            workTime = Math.floor(workTime / 100 + 1) * 100 + (workTime % 100) % 60;
        }

        for (let j = 0; j < timelogs[i].length; j++) {
            if ((j + startday) % 7 === 0 || (j + startday) % 7 === 6) continue;
            if (timelogs[i][j] > workTime) isSatisfied = false;
        }
        if (isSatisfied) answer++;
    }
    return answer;
}