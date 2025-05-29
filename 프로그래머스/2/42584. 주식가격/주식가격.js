function solution(prices) {
    const answer = [];
    for (let i = 0; i < prices.length; i++) {
        let price = 0;
        for (let j = i + 1; j < prices.length; j++) {
            price++;
            if (prices[i] > prices[j]) break;
        }
        answer.push(price);
    }
    return answer;
}