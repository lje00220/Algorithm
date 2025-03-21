function solution(s){
    const cntP = s.toLowerCase().split("").filter((x) => x === "p").length;
    const cntY = s.toLowerCase().split("").filter((x) => x === "y").length;
    
    return cntP === cntY;
}