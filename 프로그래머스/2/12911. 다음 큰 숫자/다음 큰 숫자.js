function solution(n) {
    const cnt1 = n.toString(2).replaceAll('0', '').length;
    while (true) {
        n++;
        if (n.toString(2).replaceAll('0', '').length === cnt1) return n;
    }
}