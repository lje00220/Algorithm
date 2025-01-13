function solution(s) {
    var answer = '';
    s = s.split(" ");
    for (let i = 0; i < s.length; i++) {
        if (s[i][0] >= "a" && s[i][0] <= "z" || s[i][0] >= "A" && s[i][0] <= "Z") {
            s[i] = s[i].toLowerCase();
            let temp = s[i].split("");
            temp[0] = temp[0].toUpperCase();
            answer += temp.join("")
            
        } else {
            s[i] = s[i].toLowerCase();
            answer += s[i];
        }
        answer += (i === s.length - 1) ? "" : " "
    
    }
    return answer;
}