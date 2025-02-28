function solution(arr) {   
    const gcd = (a,b) => a % b === 0 ? b : gcd(b, a % b); 
    const lcm = (a,b) => a * b / gcd(a,b);
    
    let leastNum = 1;
    for (let i = 0; i < arr.length; i++) {
        leastNum = lcm(arr[i], leastNum);
    }
    
    return leastNum;
}