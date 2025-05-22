function solution(s, skip, index) {
    let answer = '';
    for (let i = 0; i < s.length; i++) {
        let str = s[i]
        for (let j = 0; j < index; j++) {
            str = String.fromCharCode(str.charCodeAt() + 1);
            if (str > "z") str = "a";
            while (skip.split("").includes(str)) {
                str = String.fromCharCode(str.charCodeAt() + 1);
                if (str > "z") str = "a";
            }
        }
        answer += str;
    }
    return answer;
}