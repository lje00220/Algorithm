function solution(dartResult) {
    const scores = [];
    const regex = /\d{1,2}[SDT][*#]?/g;
    const darts = dartResult.match(regex);

    darts.forEach((dart, i) => {
        const num = parseInt(dart); 
        const bonus = dart.match(/[SDT]/)[0]; 
        const option = dart.match(/[*#]/)?.[0]; 

        let score = 0;
        if (bonus === 'S') score = num;
        else if (bonus === 'D') score = num ** 2;
        else if (bonus === 'T') score = num ** 3;

        if (option === '*') {
            score *= 2;
            if (i > 0) scores[i - 1] *= 2; 
        } else if (option === '#') {
            score *= -1;
        }

        scores.push(score);
    });

    return scores.reduce((acc, cur) => acc + cur, 0);
}