function solution(phone_book) {
    phone_book.sort();
    for (let i = 0; i < phone_book.length -1; i++) {
        const first = phone_book[i];
        const second = phone_book[i + 1];
        if (second.startsWith(first)) {
            return false;
        }
    }
    
    
    return true;
    
}