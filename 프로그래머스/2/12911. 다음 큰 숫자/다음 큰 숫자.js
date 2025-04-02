function solution(n) {
    const numOne = n.toString(2).split("").filter((x) => x === "1").length;
    while(true) {
        n++;
        const cnt0 = n.toString(2).split("").filter((x) => x === "1").length;
        if (cnt0 === numOne) return n;
    }
}