function solution(my_string, n) {
    return Array.from(my_string).map((x) => x.repeat(n)).join("");
}