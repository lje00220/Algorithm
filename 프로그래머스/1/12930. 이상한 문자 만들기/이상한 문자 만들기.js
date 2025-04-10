function solution(s) {
    let answer = [];
    const splitStr = s.split(" ");
    for (let elem of splitStr) {
        let str = '';
        for (let i = 0; i < elem.length; i++) {
            if (i % 2 === 0) {
                str += elem[i].toUpperCase();
            } else {
                str += elem[i].toLowerCase();
            }
        }
        answer.push(str);
    }
    return answer.join(" ");
}