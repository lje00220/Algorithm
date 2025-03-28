function solution(phone_number) {
    const front = '*'.repeat(phone_number.length - 4);
    const back =  phone_number.slice(phone_number.length - 4);
    return front + back;
}