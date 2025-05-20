function solution(phone_book) {
    const numArr = phone_book.sort();
    const len = numArr.length;
    for (let i = 0; i < len - 1; i++) {
        const num = numArr[i];
        if (numArr[i + 1].startsWith(num)) {
            return false
        }
    }
    
    return true;
}